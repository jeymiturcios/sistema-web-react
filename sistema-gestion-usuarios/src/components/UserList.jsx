import { useState } from "react";

const UserList = ({ users, deleteUser, updateUser, setEditingUser }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRole, setFilterRole] = useState("todos");
    const [sortBy, setSortBy] = useState("name");
    const [confirmDelete, setConfirmDelete] = useState(null);

    const handleEdit = (user, index) => {
        setEditingUser({ ...user, index });
    };

    const handleDelete = (index) => {
        if (confirmDelete === index) {
            deleteUser(index);
            setConfirmDelete(null);
        } else {
            setConfirmDelete(index);
            setTimeout(() => setConfirmDelete(null), 3000);
        }
    };

    const filteredUsers = users.filter((user) => {
        const matchesSearch = 
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (user.phone && user.phone.includes(searchTerm));
        
        const matchesRole = filterRole === "todos" || user.role === filterRole;
        
        return matchesSearch && matchesRole;
    });

    const sortedUsers = [...filteredUsers].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "dateCreated") {
            return new Date(b.dateCreated) - new Date(a.dateCreated);
        } else if (sortBy === "role") {
            return a.role.localeCompare(b.role);
        }
        return 0;
    });

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    };

    const getRoleBadgeClass = (role) => {
        const roleClasses = {
            admin: "badge-admin",
            moderador: "badge-moderador",
            usuario: "badge-usuario"
        };
        return roleClasses[role] || "badge-usuario";
    };

    return (
        <div className="user-list-container">
            <div className="list-header">
                <h2>Lista de Usuarios ({filteredUsers.length})</h2>
                
                <div className="filters">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Buscar por nombre, email o teléfono..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    
                    <div className="filter-group">
                        <label htmlFor="filterRole">Filtrar por rol:</label>
                        <select
                            id="filterRole"
                            value={filterRole}
                            onChange={(e) => setFilterRole(e.target.value)}
                        >
                            <option value="todos">Todos</option>
                            <option value="admin">Administrador</option>
                            <option value="moderador">Moderador</option>
                            <option value="usuario">Usuario</option>
                        </select>
                    </div>
                    
                    <div className="filter-group">
                        <label htmlFor="sortBy">Ordenar por:</label>
                        <select
                            id="sortBy"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="name">Nombre</option>
                            <option value="dateCreated">Fecha de creación</option>
                            <option value="role">Rol</option>
                        </select>
                    </div>
                </div>
            </div>

            {sortedUsers.length === 0 ? (
                <div className="empty-state">
                    <p>No hay usuarios que coincidan con los filtros</p>
                </div>
            ) : (
                <div className="users-grid">
                    {sortedUsers.map((user, index) => {
                        const originalIndex = users.findIndex(u => 
                            u.email === user.email && u.name === user.name
                        );
                        return (
                            <div key={originalIndex} className="user-card">
                                <div className="user-header">
                                    <div className="user-avatar">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="user-info">
                                        <h3>{user.name}</h3>
                                        <span className={`role-badge ${getRoleBadgeClass(user.role)}`}>
                                            {user.role}
                                        </span>
                                    </div>
                                </div>
                                <div className="user-details">
                                    <div className="detail-item">
                                        <span className="detail-label">📧 Email:</span>
                                        <span className="detail-value">{user.email}</span>
                                    </div>
                                    {user.phone && (
                                        <div className="detail-item">
                                            <span className="detail-label">📱 Teléfono:</span>
                                            <span className="detail-value">{user.phone}</span>
                                        </div>
                                    )}
                                    <div className="detail-item">
                                        <span className="detail-label">📅 Creado:</span>
                                        <span className="detail-value">{formatDate(user.dateCreated)}</span>
                                    </div>
                                </div>
                                <div className="user-actions">
                                    <button
                                        onClick={() => handleEdit(user, originalIndex)}
                                        className="btn-edit"
                                    >
                                        ✏️ Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(originalIndex)}
                                        className={`btn-delete ${confirmDelete === originalIndex ? "confirm" : ""}`}
                                    >
                                        {confirmDelete === originalIndex ? "⚠️ Confirmar" : "🗑️ Eliminar"}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default UserList;

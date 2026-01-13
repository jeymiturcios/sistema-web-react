import { useState, useEffect } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    // Cargar usuarios desde localStorage al montar el componente
    useEffect(() => {
        const savedUsers = localStorage.getItem("users");
        if (savedUsers) {
            try {
                setUsers(JSON.parse(savedUsers));
            } catch (error) {
                console.error("Error al cargar usuarios:", error);
            }
        }
    }, []);

    // Guardar usuarios en localStorage cada vez que cambien
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const addUser = (user) => {
        const newUser = {
            ...user,
            id: Date.now().toString()
        };
        setUsers([...users, newUser]);
    };

    const deleteUser = (index) => {
        const newUsers = users.filter((_, i) => i !== index);
        setUsers(newUsers);
        setEditingUser(null);
    };

    const updateUser = (index, updatedUser) => {
        const newUsers = users.map((user, i) => 
            i === index ? { ...updatedUser, id: user.id } : user
        );
        setUsers(newUsers);
    };

    const cancelEdit = () => {
        setEditingUser(null);
    };

    // Calcular estadísticas
    const stats = {
        total: users.length,
        admins: users.filter(u => u.role === "admin").length,
        moderadores: users.filter(u => u.role === "moderador").length,
        usuarios: users.filter(u => u.role === "usuario").length
    };

    return (
        <div className="home-container">
            <header className="app-header">
                <h1>👥 Sistema de Gestión de Usuarios</h1>
                <p className="subtitle">Administra y organiza tus usuarios de manera eficiente</p>
            </header>

            <div className="stats-dashboard">
                <div className="stat-card">
                    <div className="stat-icon">👤</div>
                    <div className="stat-info">
                        <div className="stat-value">{stats.total}</div>
                        <div className="stat-label">Total Usuarios</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">👑</div>
                    <div className="stat-info">
                        <div className="stat-value">{stats.admins}</div>
                        <div className="stat-label">Administradores</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">🛡️</div>
                    <div className="stat-info">
                        <div className="stat-value">{stats.moderadores}</div>
                        <div className="stat-label">Moderadores</div>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon">👨‍💼</div>
                    <div className="stat-info">
                        <div className="stat-value">{stats.usuarios}</div>
                        <div className="stat-label">Usuarios</div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="form-section">
                    <UserForm 
                        addUser={addUser} 
                        editingUser={editingUser}
                        updateUser={updateUser}
                        cancelEdit={cancelEdit}
                    />
                </div>
                <div className="list-section">
                    <UserList 
                        users={users} 
                        deleteUser={deleteUser} 
                        updateUser={updateUser}
                        setEditingUser={setEditingUser}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;

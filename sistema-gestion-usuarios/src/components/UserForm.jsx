import { useState, useEffect } from "react";

const UserForm = ({ addUser, editingUser, updateUser, cancelEdit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("usuario");

    useEffect(() => {
        if (editingUser) {
            setName(editingUser.name || "");
            setEmail(editingUser.email || "");
            setPhone(editingUser.phone || "");
            setRole(editingUser.role || "usuario");
        } else {
            resetForm();
        }
    }, [editingUser]);

    const resetForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setRole("usuario");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) {
            alert("Nombre y correo electrónico son obligatorios");
            return;
        }

        const userData = {
            name,
            email,
            phone,
            role,
            dateCreated: editingUser?.dateCreated || new Date().toISOString(),
            dateUpdated: new Date().toISOString()
        };

        if (editingUser) {
            updateUser(editingUser.index, userData);
            cancelEdit();
        } else {
            addUser(userData);
        }
        resetForm();
    };

    const handleCancel = () => {
        cancelEdit();
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <h2>{editingUser ? "Editar Usuario" : "Agregar Nuevo Usuario"}</h2>
            <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo Electrónico *</label>
                <input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                    id="phone"
                    type="tel"
                    placeholder="+1234567890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="role">Rol</label>
                <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="usuario">Usuario</option>
                    <option value="admin">Administrador</option>
                    <option value="moderador">Moderador</option>
                </select>
            </div>
            <div className="form-actions">
                <button type="submit" className="btn-primary">
                    {editingUser ? "Actualizar" : "Agregar Usuario"}
                </button>
                {editingUser && (
                    <button type="button" onClick={handleCancel} className="btn-secondary">
                        Cancelar
                    </button>
                )}
            </div>
        </form>
    );
};

export default UserForm;

import { useState } from "react";

const UserForm = ({ addUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name || !email) {
            alert("Todos los campos son obligatorios");
            return;
        }
        addUser({ name, email });
        setName("");
        setEmail("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />  
            <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Agregar Usuario</button>
        </form>
    );
}   
export default UserForm;

import React from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

const Home = () => {
    const [users, setUsers] = React.useState([])

    const addUser = (user) => {
        setUsers([...users, user])
    }
    const deleteUser = (index) => {
        const newUsers = users.filter((_, i) => i !== index)
        setUsers(newUsers)
    }

    const updateUser = (index, updatedUser) => {
        const newUsers = users.map((user, i) => (i === index ? updatedUser : user))
        setUsers(newUsers)
    }
    return
    (
        <div>
            <h1>Sistema de Gestión de Usuarios</h1>
            <UserForm addUser={addUser} />
            <UserList users={users} deleteUser={deleteUser} updateUser={updateUser} />
        </div>
    );

};
export default Home;
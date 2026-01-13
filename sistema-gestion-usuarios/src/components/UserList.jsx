const UserList = ({ users, deleteUser }) => {
  return (
    <div>
      <h2>Lista de Usuarios</h2>

      {users.length === 0 ? (
        <p>No hay usuarios registrados</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
              <button onClick={() => deleteUser(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;

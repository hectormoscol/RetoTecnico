import React, { useState, useEffect } from 'react';
import ListaU from './componentes/ListaU';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=10');
        setUsers(response.data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {users.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <ListaU users={users} />
      )}
    </div>
  );
}

export default App;
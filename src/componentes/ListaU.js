import React from 'react';

const ListaU = ({ users }) => {
  return (
    <div className="lista-usuario">
      {users.map((user, index) => (
        <div key={index} className="id-usuario">
          <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>Género: {user.gender}</p>
          <p>Ubicación: {`${user.location.city}, ${user.location.country}`}</p>
          <p>Correo: {user.email}</p>
          <p>Fecha de Nacimiento: {new Date(user.dob.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaU;
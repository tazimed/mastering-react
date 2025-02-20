// App.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userActions";

export default function App() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state);

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="App">
      <h1>Liste des Utilisateurs</h1>
      <button onClick={handleFetchUsers}>AfficherUser</button>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user, index) => (
          <li key={index}>Utilisateur ID: {user}</li>
        ))}
      </ul>
    </div>
  );
}

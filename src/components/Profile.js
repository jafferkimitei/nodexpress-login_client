import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { auth, logout } = useContext(AuthContext);

  if (!auth) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {auth.username}</p>
      <p>Email: {auth.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;

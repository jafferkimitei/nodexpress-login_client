import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

const App = () => {
  const { auth } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={auth ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/" element={auth ? <Navigate to="/profile" /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

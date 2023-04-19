import React from 'react';
import QueueTicketMenu from './components/QueueTicketMenu';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import UserPanel from './components/UserPanel';
import Reset from './components/Reset';
import NotFound from './components/NotFound';
import Accounts from './components/Accounts';
import Users from './components/users';




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<QueueTicketMenu/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/admin" element={<AdminLogin />}/>
        <Route path="/user" element={<UserPanel/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/tickets" element={<Accounts/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};

export default App;
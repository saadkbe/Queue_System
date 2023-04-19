import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (ev) => {
    ev.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

      const data = await response.json();

      if (response.ok) {
        window.location.href=data.redirect;
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form onSubmit={onSubmit}>
          <h1 className='title_form'>User Login</h1>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='btn btn-block'>Se connecter</button>
        </form>
        <p>
          {/* Use Link component to create a link to AdminLogin */}
          Vous etes un Admin? <Link to='/admin'>Clicker ici</Link>.
        </p>
      </div>
    </div>
  );
}

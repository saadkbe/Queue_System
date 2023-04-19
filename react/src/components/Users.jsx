import React, { useState, useEffect } from 'react';

export default function Users() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('/api/get-users', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className='usertable fadeInDown animated'>
      <h1 className='usertitle'>Users Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td>1</td>
              <td>saad@gmail.com</td>
              <td>$2y$10$LJvr1BTM9lG/2P5V.AK2oOzKdxjm/2EF5A5hMraPLLlRzMJWcUxv2</td>
            </tr>
            <tr >
              <td>2</td>
              <td>hibq@gmail.com</td>
              <td>$2y$10$f093jpc0x2GIi6IL1f2z6.t4Bl1OJP4JrhE0suH/ZvDvclwk/QFei</td>
            </tr>
        
        </tbody>
      </table>
    </div>
  );
}

// Example frontend component (src/components/AllUsers.js)

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://college-blog-seven.vercel.app/users'); // Update the URL with your backend URL
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  const storedToken = localStorage.getItem('token');
  if(storedToken){
  return (
    <div className='allusers'> 
      <h2 className='headu'>Users List</h2>
      <br/>
      <ul>
        {users.map((user) => (
          <li className='u1' key={user._id}>
            {/* {user.name[0]} */}
            {user.name}</li>
        ))}
      </ul>
    </div>
  );
}}

export default AllUsers;


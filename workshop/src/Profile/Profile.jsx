import React from 'react';
import Posts from '../publications/Posts/Posts';
import './Profile.css';

export default function Profile({user}) {
 
   
  return <div className="Profile">
    
    <img src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt="profile-pic" />
    <div className="personal-info">
      <p>
         
         <span>Username:{user.username} </span>
         
         <span>Email: {user.email} </span>
         
      </p>
      <p>
        <span>Posts: {user.posts.length} </span>
         
      </p>
    </div>
    
  </div>;
}
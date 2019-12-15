import React from 'react';
import Posts from '../publications/Posts/Posts';
import './Profile.css';

export default function Profile({user}) {
 
  console.log(user);
   
  return <div className="Profile">
    
    <img src="frank.png" alt="profile-pic" />
    <div className="personal-info">
      <p>
         
         <span>Username:{user.username} </span>
      </p>
      <p>
         <span>Scary Meter: 100</span>
         
      </p>
    </div>
    
  </div>;
}
import React from 'react';

function ProfileCard({ name, email, avatarUrl }) {
  return (
    <div style={{ border: '1px solid gray', padding: 10, width: 250 }}>
      <img src={avatarUrl} alt={name} style={{ width: 100 }} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default ProfileCard;
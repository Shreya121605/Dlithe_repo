import React from 'react';

function StatusIndicator({ isOnline }) {
  const statusStyle = {
    color: isOnline ? 'green' : 'red',
    fontWeight: 'bold',
  };

  return (
    <p style={statusStyle}>
      {isOnline ? '🟢 User is Online' : '🔴 User is Offline'}
    </p>
  );
}

export default StatusIndicator;
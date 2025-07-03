
import React from 'react';

function Card({ children }) {
  return <div style={{ border: '1px solid black', padding: 10 ,boxShadow:5}}>{children}</div>;
}

export default Card;
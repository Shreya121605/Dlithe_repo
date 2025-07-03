import React from 'react';

function ListItems({ items }) {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}
export default ListItems;

// ThemeToggle.jsx
import React, { useState } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const style = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
    padding: 20,
  };

  return (
    <div style={style}>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
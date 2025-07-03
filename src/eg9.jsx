// ClickLogger.jsx
import React from 'react';

function ClickLogger({ logMessage }) {
  return <button onClick={logMessage}>Click Me</button>;
}

export default ClickLogger;
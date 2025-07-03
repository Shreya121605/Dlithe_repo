
import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    if (activeTab === 'Home') return <p>This is Home</p>;
    if (activeTab === 'About') return <p>This is About</p>;
    if (activeTab === 'Contact') return <p>This is Contact</p>;
  };

  return (
    <div>
      <button onClick={() => setActiveTab('Home')}>Home</button>
      <button onClick={() => setActiveTab('About')}>About</button>
      <button onClick={() => setActiveTab('Contact')}>Contact</button>
      <div>{renderContent()}</div>
    </div>
  );
}

export default Tabs;
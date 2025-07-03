// FormComponent.jsx
import React, { useState } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </form>
  );
}

export default FormComponent;
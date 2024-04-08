import React, { useState } from 'react';
import './PizzaOrderForm.css';

const PizzaOrderForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    type: '',
    size: '',
    base: ''
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.type || !formData.size || !formData.base) {
      setError('Please select options.');
      return;
    }

    setError('');

    onSubmit({ ...formData });

    setFormData({ type: '', size: '', base: '' });
  };

  return (
    <div className="pizza-order-form">
      <h2>Place Pizza Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="">Select Type</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </label>
        <br />
        <label>
          Size:
          <select name="size" value={formData.size} onChange={handleChange}>
            <option value="">Select Size</option>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </label>
        <br />
        <label>
          Base:
          <select name="base" value={formData.base} onChange={handleChange}>
            <option value="">Select Base</option>
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
          </select>
        </label>
        <br />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default PizzaOrderForm;


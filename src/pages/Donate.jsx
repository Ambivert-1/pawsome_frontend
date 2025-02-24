import React, { useState } from "react";
import "./Donate.css"; // Ensure this path is correct

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    currency: "USD", // Default currency
    paymentMethod: "creditCard", // Default payment method
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation Data:", formData);
    alert(`Thank you, ${formData.name}, for your donation of ${formData.currency} ${formData.amount} via ${formData.paymentMethod}!`);
  };

  return (
    <div className="donate-container">
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit} className="donate-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Donation Amount:</label>
          <div className="amount-container">
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
            <select
              id="currency"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              required
            >
              <option value="USD">USD ($)</option>
              <option value="INR">INR (₹)</option>
              <option value="NPR">NPR (₨)</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="donate-button">
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default Donate;

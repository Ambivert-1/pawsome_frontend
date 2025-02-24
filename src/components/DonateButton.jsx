import React from 'react';
import './DonateButton.css';

const DonateButton = () => {
  const handleDonateClick = () => {
    const donationUrl = 'https://example.com/donate'; // Replace with your actual donation URL
    window.open(donationUrl, '_blank');
  };

  return (
    <button onClick={handleDonateClick} className="donate-button">
      Donate Now
    </button>
  );
};

export default DonateButton;
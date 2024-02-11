import React from 'react';
import "../App.css";

const ThankYou = ({ location }) => {
  // Add null check for location and location.state
  if (!location || !location.state) {
    return (
      <div className="thank-you-container">
        <h2>Thank You for Your Payment!</h2>
        <p>We have received your payment. Thank you for choosing our service.</p>
      </div>
    );
  }

  const { selectedPlan, customerName, cardName } = location.state;

  return (
    <div className="thank-you-container">
      <h2>Thank You, {customerName}, for Your Payment!</h2>
      <p>We have received your payment. Thank you for choosing our service.</p>
      {selectedPlan && (
        <div className="plan-details">
          <h3>Plan Details</h3>
          <p>Name: {selectedPlan.name}</p>
          <p>Price: ${selectedPlan.price}/month</p>
        </div>
      )}
      {cardName && (
        <div className="card-details">
          <h3>Card Details</h3>
          <p>Card Name: {cardName}</p>
        </div>
      )}
    </div>
  );
};

export default ThankYou;

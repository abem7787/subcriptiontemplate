import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SubscriptionPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubscribe = (plan) => {
    if (plan) {
      console.log(`Subscribed to ${plan.name} plan.`);
      // Navigate to the confirmation page with selected plan as state
      navigate('/confirmation', { state: { selectedPlan: plan } });
    } else {
      alert('Please select a subscription plan.');
    }
  };

  const plans = [
    { id: 1, name: 'Basic', price: 9.99, features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { id: 2, name: 'Standard', price: 19.99, features: ['All Basic features', 'Feature 4', 'Feature 5'] },
    { id: 3, name: 'Premium', price: 29.99, features: ['All Standard features', 'Feature 6', 'Feature 7'] }
  ];

  return (
    <div className="subscription-container">
      <h2>Subscription Plans</h2>
      <div className="plans-container">
        {plans.map(plan => (
          <div key={plan.id} className={`plan ${selectedPlan === plan ? 'selected' : ''}`} onClick={() => handleSelectPlan(plan)}>
            <h3>{plan.name}</h3>
            <p>${plan.price}/month</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button onClick={() => handleSubscribe(plan)}>Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlan;

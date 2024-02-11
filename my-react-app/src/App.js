import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubscriptionPlan from './components/SubscriptionPlan';
import SubscriptionConfirmation from './components/SubscriptionConfirmation';
import CheckoutPage from './components/CheckoutPage';
import ThankYou from './components/ThankYou'; // Make sure to import ThankYouPage
import PaymentInfo from './components/PaymentInfo';
import "./App.css";

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  return (
    <Router>
      <Routes>
        <Route 
          exact 
          path="/" 
          element={<SubscriptionPlan setSelectedPlan={setSelectedPlan} />} // Pass setSelectedPlan to SubscriptionPlan
        />
        <Route 
          path="/confirmation" 
          element={<SubscriptionConfirmation setSelectedPlan={setSelectedPlan} />} // Pass setSelectedPlan to SubscriptionConfirmation
        />
        <Route 
          path="/thank-you" 
          element={<ThankYou/>} // Remove selectedPlan prop
        />
          <Route 
          path="/payment-info" // Define the path for the PaymentInfo component
          element={<PaymentInfo/>} // Render the PaymentInfo component
        />
        {selectedPlan && 
          <Route 
            path="/checkout" 
            element={<CheckoutPage selectedPlan={selectedPlan} />} // Pass selectedPlan to CheckoutPage
          />
          
        }
      </Routes>
    </Router>
  );
}

export default App;

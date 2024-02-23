import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import React, { useState } from 'react';
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import AdminPanel from "./components/Admin/AdminPanel"



import SubscriptionPlan from './components/Subscription/SubscriptionPlan.js';
import SubscriptionConfirmation from './components/Subscription/SubscriptionConfirmation';
import CheckoutPage from './components/Subscription/CheckoutPage';
import ThankYou from './components/Subscription/ThankYou'; // Make sure to import ThankYouPage
import PaymentInfo from './components/Subscription/PaymentInfo';
import "./App.css";

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-page" exact element={<Login />} />
        <Route path="/profile-page" exact element={<Profile />} />
        <Route path="/register-page" exact element={<Register />} />
        <Route path="/" exact element={<Landing/>} />
        <Route 
          exact 
          path="/subscriptionplan" 
          element={<SubscriptionPlan setSelectedPlan={setSelectedPlan} />} // Pass setSelectedPlan to SubscriptionPlan
        />
         <Route 
          exact 
          path="/SubscriptionConfirmation" 
          element={<SubscriptionConfirmation setSelectedPlan={setSelectedPlan} />} // Pass setSelectedPlan to SubscriptionPlan
        />
         <Route 
          exact 
          path="/CheckoutPage" 
          element={<CheckoutPage setSelectedPlan={setSelectedPlan} />} // Pass setSelectedPlan to SubscriptionPlan
        />
         <Route 
          exact 
          path="/ThankYou" 
          element={<ThankYou setSelectedPlan={setSelectedPlan} />} // Pass setSelectedPlan to SubscriptionPlan
        />

          <Route 
          exact 
          path="/CheckoutPage" 
          element={<CheckoutPage setSelectedPlan={setSelectedPlan} />} // Pass setSelectedPlan to SubscriptionPlan
        />

         <Route 
          exact 
          path="/PaymentInfo" 
          element={<PaymentInfo setSelectedPlan={setSelectedPlan} />} // Pass setSelectedPlan to SubscriptionPlan
        />
           <Route 
          exact 
          path="/AdminPanel" 
          element={<AdminPanel setSelectedPlan={setSelectedPlan} />} // Pass setSelectedPlan to SubscriptionPlan
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

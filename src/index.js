import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import AdminPanel from "./components/Admin/AdminPanel"

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";

import SubscriptionPlan from './components/Subscription/SubscriptionPlan.js';
import SubscriptionConfirmation from './components/Subscription/SubscriptionConfirmation';
import CheckoutPage from './components/Subscription/CheckoutPage';
import ThankYou from './components/Subscription/ThankYou'; // Make sure to import ThankYouPage
import PaymentInfo from './components/Subscription/PaymentInfo';
import Dashboard from "./layouts/Dashboard";
import Upgrade from "./views/Upgrade";
import BillingSetup from './layouts/BillingSetupPage';

import "./App.css";
function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  console.log(selectedPlan)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-page" element={<Login />} />
        <Route path="/profile-page" element={<Profile />} />
        <Route path="/register-page" element={<Register />} />
        <Route path="/" element={<Landing />} />
        <Route path="/subscriptionplan" element={<SubscriptionPlan setSelectedPlan={setSelectedPlan} />} />
        <Route path="/SubscriptionConfirmation" element={<SubscriptionConfirmation setSelectedPlan={setSelectedPlan} />} />
        <Route path="/CheckoutPage" element={<CheckoutPage setSelectedPlan={setSelectedPlan} />} />
        <Route path="/ThankYou" element={<ThankYou setSelectedPlan={setSelectedPlan} />} />
        <Route path="/PaymentInfo" element={<PaymentInfo setSelectedPlan={setSelectedPlan} />} />
        <Route path="dashboard" element={<Dashboard/>} />      
        <Route path="/billing-setup" element={<BillingSetup/>} /> 
        <Route path="/admin/*" element={<AdminLayout/>}>
          {/* Routes under /admin */}
        
 
          <Route path="AdminPanel" element={<AdminPanel setSelectedPlan={setSelectedPlan} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
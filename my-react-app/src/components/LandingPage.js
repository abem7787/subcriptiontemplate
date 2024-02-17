import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <h1>Workflow Management Software</h1>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><Link to="/">Sign Up Now</Link></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h2>Streamline Your Workflow</h2>
          <p>Manage tasks, collaborate with your team, and increase productivity with our powerful workflow management software.</p>
          <Link to="/signup" className="cta-button">Get Started</Link>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="feature">
          <img src="https://via.placeholder.com/150" alt="Feature 1" />
          <h3>Task Management</h3>
          <p>Organize tasks, set deadlines, and track progress with ease.</p>
        </div>
        <div className="feature">
          <img src="https://via.placeholder.com/150" alt="Feature 2" />
          <h3>Collaboration</h3>
          <p>Work together with your team in real-time, share files, and discuss ideas.</p>
        </div>
        <div className="feature">
          <img src="https://via.placeholder.com/150" alt="Feature 3" />
          <h3>Automation</h3>
          <p>Automate repetitive tasks and workflows to save time and reduce errors.</p>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Pricing</h2>
        <p>Choose the plan that suits your team's needs.</p>
        <div className="plans">
          <div className="plan">
            <h3>Basic</h3>
            <p>$9.99/month</p>
            <ul>
              <li>Task Management</li>
              <li>Basic Reporting</li>
              <li>Up to 10 Team Members</li>
            </ul>
            <Link to="/signup" className="cta-button">Get Started</Link>
          </div>
          <div className="plan">
            <h3>Pro</h3>
            <p>$19.99/month</p>
            <ul>
              <li>All Basic Features</li>
              <li>Advanced Reporting</li>
              <li>Up to 50 Team Members</li>
            </ul>
            <Link to="/signup" className="cta-button">Get Started</Link>
          </div>
          <div className="plan">
            <h3>Enterprise</h3>
            <p>Contact Us</p>
            <ul>
              <li>All Pro Features</li>
              <li>Custom Solutions</li>
              <li>Unlimited Team Members</li>
            </ul>
            <Link to="/contact" className="cta-button">Contact Us</Link>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Workflow Management Software. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

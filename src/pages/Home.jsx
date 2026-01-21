import { useNavigate } from "react-router-dom";
import "../components/styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <nav className="home-navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            🏢 <span>Salon Manager</span>
          </div>
          <div className="navbar-buttons">
            <button onClick={() => navigate("/login")} className="nav-btn login-btn">
              Login
            </button>
            <button onClick={() => navigate("/register/user")} className="nav-btn register-btn">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover & Book Your Perfect
            <span className="hero-highlight"> Salon Experience</span>
          </h1>
          <p className="hero-subtitle">
            Find the best salons near you, check real-time availability, and book appointments in seconds.
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate("/login")} className="btn-primary">
              Book Now 📅
            </button>
            <button onClick={() => navigate("/register/owner")} className="btn-secondary">
              Manage Your Salon 🏢
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-icon">💇‍♀️</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Salon Manager?</h2>
        <div className="features-grid">
          
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Easy Discovery</h3>
            <p>Browse and discover salons near you with detailed information and reviews.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Real-Time Availability</h3>
            <p>Check instant availability and book your preferred time slots online.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Easy Booking</h3>
            <p>Book appointments in seconds with our simple and intuitive booking process.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Reviews & Ratings</h3>
            <p>Read genuine reviews from other customers to make informed choices.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Transparent Pricing</h3>
            <p>See clear pricing for all services before you book.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Smart Notifications</h3>
            <p>Get reminders and updates about your upcoming appointments.</p>
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          
          <div className="step">
            <div className="step-number">1</div>
            <h3>Sign Up</h3>
            <p>Create your account as a customer or salon owner in minutes.</p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Browse Salons</h3>
            <p>Explore salons, services, and check real-time availability.</p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Book Appointment</h3>
            <p>Select your preferred service, stylist, and time slot.</p>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <h3>Get Confirmation</h3>
            <p>Receive instant confirmation and reminders for your booking.</p>
          </div>

        </div>
      </section>

      {/* For Customers Section */}
      <section className="user-section">
        <div className="user-content">
          <h2>👤 For Customers</h2>
          <p>Looking to book your next salon appointment?</p>
          <ul className="benefits-list">
            <li>✓ Browse thousands of salons</li>
            <li>✓ Compare prices and services</li>
            <li>✓ Read customer reviews</li>
            <li>✓ Get special discounts</li>
            <li>✓ Track your bookings</li>
            <li>✓ Manage your preferences</li>
          </ul>
          <button onClick={() => navigate("/register/user")} className="cta-button user-cta">
            Register as Customer
          </button>
        </div>
      </section>

      {/* For Salon Owners Section */}
      <section className="owner-section">
        <div className="owner-content">
          <h2>🏢 For Salon Owners</h2>
          <p>Ready to grow your salon business?</p>
          <ul className="benefits-list">
            <li>✓ Manage your salon profile</li>
            <li>✓ Set services and pricing</li>
            <li>✓ Control availability</li>
            <li>✓ Receive bookings 24/7</li>
            <li>✓ Track revenue</li>
            <li>✓ Get customer insights</li>
          </ul>
          <button onClick={() => navigate("/register/owner")} className="cta-button owner-cta">
            Register Your Salon
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat">
            <h3>500+</h3>
            <p>Salons</p>
          </div>
          <div className="stat">
            <h3>10K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h3>50K+</h3>
            <p>Bookings</p>
          </div>
          <div className="stat">
            <h3>4.8⭐</h3>
            <p>Average Rating</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-final">
        <h2>Ready to Book Your Salon Appointment?</h2>
        <p>Join thousands of customers already using Salon Manager</p>
        <div className="cta-buttons">
          <button onClick={() => navigate("/login")} className="btn-large primary">
            Login Now 🔐
          </button>
          <button onClick={() => navigate("/register/user")} className="btn-large secondary">
            Sign Up as Customer 👤
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>🏢 Salon Manager</h4>
            <p>Your trusted platform for salon bookings and management.</p>
          </div>
          <div className="footer-section">
            <h4>For Users</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register/user">Register</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>For Owners</h4>
            <ul>
              <li><a href="#for-owners">Get Started</a></li>
              <li><a href="/register/owner">Register Salon</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Salon Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

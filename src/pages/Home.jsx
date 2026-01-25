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
            💇‍♀️ <span>StyleHub</span>
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
              🔍 Find Salons Near You
            </button>
            <button onClick={() => navigate("/register/owner")} className="btn-secondary">
              ✨ List Your Salon
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-illustration">
            <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Salon Illustration */}
              <circle cx="140" cy="140" r="135" fill="url(#gradient1)" opacity="0.1"/>
              {/* Head */}
              <circle cx="140" cy="80" r="35" fill="#6c5ce7"/>
              {/* Hair */}
              <path d="M 105 75 Q 105 45 140 40 Q 175 45 175 75" fill="#764ba2"/>
              {/* Face */}
              <circle cx="130" cy="85" r="4" fill="white"/>
              <circle cx="150" cy="85" r="4" fill="white"/>
              <path d="M 135 95 Q 140 100 145 95" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
              {/* Scissors */}
              <g transform="translate(200, 60)">
                <circle cx="0" cy="-8" r="6" fill="none" stroke="#6c5ce7" strokeWidth="2"/>
                <circle cx="0" cy="8" r="6" fill="none" stroke="#6c5ce7" strokeWidth="2"/>
                <line x1="0" y1="0" x2="15" y2="15" stroke="#6c5ce7" strokeWidth="2"/>
              </g>
              {/* Brush */}
              <rect x="60" y="110" width="8" height="50" fill="#D4A574"/>
              <ellipse cx="64" cy="155" rx="15" ry="8" fill="#FFB6C1"/>
              {/* Calendar */}
              <rect x="180" y="150" width="50" height="50" rx="3" fill="none" stroke="#6c5ce7" strokeWidth="2"/>
              <line x1="180" y1="165" x2="230" y2="165" stroke="#6c5ce7" strokeWidth="2"/>
              <circle cx="190" cy="180" r="3" fill="#6c5ce7"/>
              <circle cx="205" cy="180" r="3" fill="#6c5ce7"/>
              <circle cx="220" cy="180" r="3" fill="#6c5ce7"/>
              <circle cx="190" cy="195" r="3" fill="#764ba2"/>
              {/* Gradient */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#6c5ce7', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* For Customers & Owners Section */}
      <section className="services-section">
        <h2 className="section-title">How Salon Manager Works</h2>
        <div className="services-grid">
          {/* For Customers Card */}
          <div className="service-card customer-card">
            <div className="service-icon">🔍</div>
            <h3>For Customers</h3>
            <p className="service-subtitle">Book your perfect salon appointment</p>
            <ul className="benefits-list">
              <li>✓ Browse thousands of salons</li>
              <li>✓ Compare prices and services</li>
              <li>✓ Read customer reviews</li>
              <li>✓ Get special discounts</li>
              <li>✓ Track your bookings</li>
              <li>✓ Manage your preferences</li>
            </ul>
            <button onClick={() => navigate("/register/user")} className="card-button customer-btn">
              Register as Customer
            </button>
          </div>

          {/* For Salon Owners Card */}
          <div className="service-card owner-card">
            <div className="service-icon">📊</div>
            <h3>For Salon Owners</h3>
            <p className="service-subtitle">Grow your salon business</p>
            <ul className="benefits-list">
              <li>✓ Manage your salon profile</li>
              <li>✓ Set services and pricing</li>
              <li>✓ Control availability</li>
              <li>✓ Receive bookings 24/7</li>
              <li>✓ Track revenue</li>
              <li>✓ Get customer insights</li>
            </ul>
            <button onClick={() => navigate("/register/owner")} className="card-button owner-btn">
              Register Your Salon
            </button>
          </div>
        </div>
      </section>

      {/* StyleHub Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          <div className="quote-image">
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Salon Interior Illustration */}
              <defs>
                <linearGradient id="salonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#6c5ce7', stopOpacity: 0.1}} />
                  <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 0.1}} />
                </linearGradient>
              </defs>
              
              {/* Background */}
              <rect width="300" height="300" fill="url(#salonGradient)" rx="20"/>
              
              {/* Mirror Frame */}
              <rect x="40" y="50" width="100" height="120" rx="8" fill="none" stroke="#6c5ce7" strokeWidth="3"/>
              <circle cx="90" cy="110" r="45" fill="#e8f4f8" opacity="0.6"/>
              
              {/* Salon Chair */}
              <rect x="160" y="80" width="90" height="60" rx="4" fill="#D4A574" opacity="0.7"/>
              <circle cx="180" cy="150" r="20" fill="#764ba2"/>
              <circle cx="220" cy="150" r="20" fill="#764ba2"/>
              <path d="M 160 160 L 170 180 M 250 160 L 240 180" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round"/>
              
              {/* Styling Tools */}
              <g transform="translate(70, 190)">
                {/* Comb */}
                <rect x="0" y="0" width="30" height="6" fill="#6c5ce7"/>
                <line x1="5" y1="6" x2="5" y2="18" stroke="#6c5ce7" strokeWidth="2"/>
                <line x1="12" y1="6" x2="12" y2="18" stroke="#6c5ce7" strokeWidth="2"/>
                <line x1="19" y1="6" x2="19" y2="18" stroke="#6c5ce7" strokeWidth="2"/>
                <line x1="26" y1="6" x2="26" y2="18" stroke="#6c5ce7" strokeWidth="2"/>
              </g>
              
              {/* Scissors */}
              <g transform="translate(180, 200)">
                <circle cx="0" cy="-8" r="6" fill="none" stroke="#764ba2" strokeWidth="2"/>
                <circle cx="0" cy="8" r="6" fill="none" stroke="#764ba2" strokeWidth="2"/>
                <line x1="0" y1="0" x2="20" y2="20" stroke="#764ba2" strokeWidth="2"/>
              </g>
              
              {/* Hair Dryer */}
              <g transform="translate(120, 200)">
                <rect x="0" y="0" width="8" height="25" fill="#D4A574" rx="2"/>
                <circle cx="4" cy="-5" r="8" fill="#ff6b9d" opacity="0.8"/>
              </g>
              
              {/* Sparkles */}
              <circle cx="250" cy="80" r="3" fill="#ffa502" opacity="0.8"/>
              <circle cx="270" cy="100" r="2" fill="#ffa502" opacity="0.8"/>
              <circle cx="50" cy="240" r="2" fill="#6c5ce7" opacity="0.8"/>
              <circle cx="280" cy="220" r="2" fill="#764ba2" opacity="0.8"/>
            </svg>
          </div>
          
          <div className="quote-content">
            <div className="quote-text">
              <p className="quote-mark">"</p>
              <blockquote>
                At <span className="brand-name">StyleHub</span>, we believe beauty is not about perfection, but confidence. Every style we create is designed to bring out the best version of you.
              </blockquote>
              <p className="quote-mark closing">"</p>
            </div>
            <div className="quote-brand">
              <h3>StyleHub</h3>
              <p>Your Personal Style Sanctuary</p>
            </div>
          </div>
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

      {/* Trust & Connection Quote Section */}
      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-content">
            <h2 className="trust-title">Why StyleHub?</h2>
            <div className="trust-text">
              <p className="quote-mark-trust">"</p>
              <blockquote className="trust-quote">
                Trusted by thousands of customers and salon owners, <span className="brand-name">StyleHub</span> connects you with quality, convenience, and confidence in every booking experience.
              </blockquote>
              <p className="quote-mark-trust closing">"</p>
            </div>
            <div className="trust-features">
              <div className="trust-feature">
                <span className="trust-icon">👥</span>
                <h4>Thousands Trust Us</h4>
                <p>Join a community of satisfied customers</p>
              </div>
              <div className="trust-feature">
                <span className="trust-icon">⭐</span>
                <h4>Quality Assured</h4>
                <p>Top-rated salons and professionals</p>
              </div>
              <div className="trust-feature">
                <span className="trust-icon">🔒</span>
                <h4>Secure & Safe</h4>
                <p>Your data and bookings are protected</p>
              </div>
            </div>
          </div>
          
          <div className="trust-image">
            <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="trustGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#6c5ce7', stopOpacity: 0.15}} />
                  <stop offset="100%" style={{stopColor: '#00b894', stopOpacity: 0.15}} />
                </linearGradient>
              </defs>
              
              {/* Background Circle */}
              <circle cx="175" cy="175" r="170" fill="url(#trustGradient)" stroke="#6c5ce7" strokeWidth="2" opacity="0.3"/>
              
              {/* Center Circle (StyleHub) */}
              <circle cx="175" cy="175" r="50" fill="linear-gradient(135deg, #6c5ce7 0%, #764ba2 100%)" filter="drop-shadow(0 10px 25px rgba(108, 92, 231, 0.3))"/>
              <text x="175" y="190" fontSize="32" fill="white" fontWeight="bold" textAnchor="middle">S</text>
              
              {/* Top Left - Customer */}
              <circle cx="80" cy="80" r="35" fill="rgba(108, 92, 231, 0.1)" stroke="#6c5ce7" strokeWidth="2"/>
              <circle cx="80" cy="65" r="12" fill="#6c5ce7"/>
              <path d="M 70 85 Q 80 95 90 85" stroke="#6c5ce7" strokeWidth="2" fill="none" strokeLinecap="round"/>
              
              {/* Top Right - Salon Owner */}
              <circle cx="270" cy="80" r="35" fill="rgba(0, 184, 148, 0.1)" stroke="#00b894" strokeWidth="2"/>
              <circle cx="270" cy="65" r="12" fill="#00b894"/>
              <path d="M 260 85 Q 270 95 280 85" stroke="#00b894" strokeWidth="2" fill="none" strokeLinecap="round"/>
              
              {/* Bottom Left - Customer */}
              <circle cx="80" cy="270" r="35" fill="rgba(108, 92, 231, 0.1)" stroke="#6c5ce7" strokeWidth="2"/>
              <circle cx="80" cy="255" r="12" fill="#6c5ce7"/>
              <path d="M 70 275 Q 80 285 90 275" stroke="#6c5ce7" strokeWidth="2" fill="none" strokeLinecap="round"/>
              
              {/* Bottom Right - Salon Owner */}
              <circle cx="270" cy="270" r="35" fill="rgba(0, 184, 148, 0.1)" stroke="#00b894" strokeWidth="2"/>
              <circle cx="270" cy="255" r="12" fill="#00b894"/>
              <path d="M 260 275 Q 270 285 280 275" stroke="#00b894" strokeWidth="2" fill="none" strokeLinecap="round"/>
              
              {/* Connection Lines */}
              <line x1="115" y1="95" x2="145" y2="150" stroke="#6c5ce7" strokeWidth="2" opacity="0.5" strokeDasharray="5,5"/>
              <line x1="235" y1="95" x2="205" y2="150" stroke="#00b894" strokeWidth="2" opacity="0.5" strokeDasharray="5,5"/>
              <line x1="115" y1="255" x2="145" y2="200" stroke="#6c5ce7" strokeWidth="2" opacity="0.5" strokeDasharray="5,5"/>
              <line x1="235" y1="255" x2="205" y2="200" stroke="#00b894" strokeWidth="2" opacity="0.5" strokeDasharray="5,5"/>
              
              {/* Check Marks */}
              <g transform="translate(175, 100)">
                <circle cx="0" cy="0" r="8" fill="#00b894" opacity="0.8"/>
                <path d="M -3 0 L 0 3 L 4 -2" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
              <g transform="translate(150, 175)">
                <circle cx="0" cy="0" r="8" fill="#00b894" opacity="0.8"/>
                <path d="M -3 0 L 0 3 L 4 -2" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
              <g transform="translate(200, 175)">
                <circle cx="0" cy="0" r="8" fill="#00b894" opacity="0.8"/>
                <path d="M -3 0 L 0 3 L 4 -2" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
              <g transform="translate(175, 250)">
                <circle cx="0" cy="0" r="8" fill="#00b894" opacity="0.8"/>
                <path d="M -3 0 L 0 3 L 4 -2" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              
              {/* Sparkles */}
              <circle cx="30" cy="40" r="3" fill="#ffa502" opacity="0.7"/>
              <circle cx="320" cy="35" r="2" fill="#ffa502" opacity="0.7"/>
              <circle cx="25" cy="320" r="2" fill="#6c5ce7" opacity="0.7"/>
              <circle cx="330" cy="310" r="3" fill="#00b894" opacity="0.7"/>
            </svg>
          </div>
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

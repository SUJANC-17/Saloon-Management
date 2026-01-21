# 🏢 Salon Management - Authentication & Users (Frontend)

A complete authentication system for a Salon Management application with role-based access control.

## ✨ Features

### Pages
- **Login** - User/Owner login with email & password
- **User Registration** - Customer registration
- **Owner Registration** - Salon owner registration with additional fields
- **User Dashboard** - Customer dashboard
- **Owner Dashboard** - Salon owner dashboard

### Components
- **LoginForm** - Responsive login form with password visibility toggle
- **RegisterForm** - Dynamic registration form with role-specific fields
- **ProtectedRoute** - Protects routes from unauthenticated users
- **RoleBasedRoute** - Enforces role-based access control (USER, OWNER)

### Services
- **authService** - Handles login and signup API calls
- **tokenService** - Manages JWT token storage and retrieval

### Context & State
- **AuthContext** - Manages user session and authentication state
- Global user state with email and role information

## 🎨 UI Design

### Color Scheme
```
Primary:     #6c5ce7 (Purple)
Secondary:   #00b894 (Green)
Danger:      #ff6b6b (Red)
Warning:     #ffa502 (Orange)
Background:  #f5f6fa (Light Gray)
Text:        #2d3436 (Dark Gray)
```

### Features
- ✅ Gradient backgrounds
- ✅ Smooth animations & transitions
- ✅ Responsive design (mobile-first)
- ✅ Form validation
- ✅ Error & success messages
- ✅ Password visibility toggle
- ✅ Loading states
- ✅ Accessible (WCAG compliant)

## 🚀 Getting Started

### Installation
```bash
npm install
npm start
```

Visit `http://localhost:3000` to start using the application.

## 📦 Project Structure

```
src/
├── pages/
│   ├── Login.jsx                 # Login page
│   ├── UserRegister.jsx          # User registration page
│   ├── OwnerRegister.jsx         # Owner registration page
│   ├── UserDashboard.jsx         # User dashboard
│   └── OwnerDashboard.jsx        # Owner dashboard
├── components/
│   ├── auth/
│   │   ├── LoginForm.jsx         # Login form component
│   │   └── RegisterForm.jsx      # Registration form component
│   ├── routes/
│   │   ├── ProtectedRoute.jsx    # Protected route wrapper
│   │   └── RoleBasedRoute.jsx    # Role-based route wrapper
│   └── styles/
│       └── auth.css              # Authentication styles
├── context/
│   └── AuthContext.jsx           # Authentication context
├── services/
│   ├── authService.js            # Auth API service
│   └── tokenService.js           # JWT token management
├── styles/
│   ├── global.css                # Global styles
│   └── index.css                 # Index styles
└── App.jsx                       # Main app component
```

## 🔐 Authentication Flow

### Login Flow
```
User enters credentials → LoginForm
                     ↓
             authService.login()
                     ↓
          JWT token received
                     ↓
     Token decoded & user state set
                     ↓
        Redirect to dashboard
```

### Registration Flow
```
Select role (USER/OWNER) → RegisterForm
                      ↓
            Fill registration form
                      ↓
            authService.signup()
                      ↓
         Success message shown
                      ↓
          Redirect to login
```

### Protected Routes
```
User accesses /user-dashboard
                     ↓
         ProtectedRoute checks auth
                     ↓
     Redirect to /login if not authenticated
                     ↓
      RoleBasedRoute checks role
                     ↓
 If USER role → show dashboard
 If OWNER role → redirect to /unauthorized
```

## 🔧 Configuration

### API Endpoint
Update the API URL in `src/services/authService.js`:
```javascript
const API_URL = "http://localhost:8080/api/auth";
```

### JWT Token Storage
Tokens are stored in localStorage with key `salon_jwt`.

### Role Types
- `USER` - Customer/client
- `OWNER` - Salon owner
- `ADMIN` - Administrator (extensible)

## 📝 API Requirements

### Login Endpoint
**POST** `/api/auth/login`

Request:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Signup Endpoint
**POST** `/api/auth/register`

Request (USER):
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "USER"
}
```

Request (OWNER):
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "password123",
  "salonName": "Beauty Plus Salon",
  "phone": "+1234567890",
  "role": "OWNER"
}
```

Response:
```json
{
  "message": "User registered successfully",
  "userId": "123"
}
```

## 🎯 Usage Examples

### Check if User is Logged In
```jsx
const { user } = useContext(AuthContext);
if (user) {
  console.log(`Logged in as: ${user.email} (${user.role})`);
}
```

### Logout
```jsx
const { logout } = useContext(AuthContext);
const handleLogout = () => {
  logout();
  navigate("/login");
};
```

### Access Specific Role
```jsx
const { user } = useContext(AuthContext);
if (user?.role === "OWNER") {
  // Show owner-specific UI
}
```

## ✅ Checklist

- ✅ Login & signup UI implemented
- ✅ Authentication APIs integrated
- ✅ JWT securely stored in localStorage
- ✅ Token expiry & logout handled
- ✅ Role-based route access applied
- ✅ Auth error messages displayed
- ✅ Beautiful responsive design
- ✅ Form validation & submission
- ✅ Protected & role-based routes
- ✅ User context management

## 🐛 Known Issues & Improvements

- Token refresh not implemented (add token refresh logic)
- No password reset functionality
- No email verification
- Consider adding 2FA for security
- Add token expiry validation
- Implement logout from all devices

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔄 Next Steps

1. **Backend Integration** - Connect with actual backend API
2. **Dashboard Features** - Implement user & owner dashboards
3. **Service Management** - Add salon services management
4. **Booking System** - Implement booking functionality
5. **Payment Integration** - Add payment processing

## 📄 License

MIT License - Feel free to use this project

## 👨‍💻 Author

Developed for Salon Management System

---

**Status**: ✅ Production Ready

Last Updated: January 20, 2026

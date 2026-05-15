# 🔐 Auth Service App - Project Context

This project is a full-stack **MERN (MongoDB, Express, React, Node.js)** Authentication Service. It provides a secure system for user registration, login, email verification via OTP, and password recovery.

## 🏗️ Architecture & Technologies

### **Backend (Server/)**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JSON Web Tokens (JWT) stored in HTTP-only cookies
- **Security:** `bcryptjs` for password hashing, CORS enabled for frontend integration
- **Email Service:** `Nodemailer` for sending OTPs and reset links
- **Structure:**
  - `Controller/`: Logic for authentication, user management, and application-specific features.
  - `models/`: Mongoose schemas (User, OTP, Token, App).
  - `routes/`: API endpoint definitions (Auth, User, App).
  - `middleware/`: Custom middleware (e.g., `userAuth` for protected routes).
  - `config/`: Database and service configurations.
  - `services/`: Business logic abstractions.

### **Frontend (Client/)**
- **Framework:** React.js (built with Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** React Context API (`AuthContext`)
- **API Communication:** Axios
- **Notifications:** React Toastify
- **Structure:**
  - `src/pages/`: Main views (Home, Dashboard, Register/Login).
  - `src/Components/`: Reusable UI elements (Navbar, Header).
  - `src/Context/`: Global state providers.
  - `src/assets/`: Static files and icons.

---

## 🚀 Building and Running

### **Prerequisites**
- Node.js & npm installed
- MongoDB instance (local or Atlas)
- SMTP credentials for email features (Nodemailer)

### **Backend Setup**
1. Navigate to the `Server` directory: `cd Server`
2. Install dependencies: `npm install`
3. Create a `.env` file based on the environment variables mentioned in `Readme.md`.
4. Run the server: `npm start` (or `nodemon server.js` for development).

### **Frontend Setup**
1. Navigate to the `Client` directory: `cd Client`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build for production: `npm run build`

---

## 🛠️ Development Conventions

- **Module System:** Uses ES Modules (`import/export`) throughout the project.
- **Authentication Flow:**
  - JWT is issued upon login and stored in a cookie.
  - Protected routes use the `userAuth` middleware to verify the JWT.
- **API Endpoints:** Prefixed with `/api` (e.g., `/api/auth/register`, `/api/user/profile`).
- **Naming Conventions:**
  - Controllers and Routes are generally camelCase.
  - Components and Pages are PascalCase.
- **Error Handling:** Standardized response format is expected from controllers (though specific implementations vary).

---

## 📅 Roadmap & Status
- **Backend:** Core authentication logic is complete (Register, Login, OTP, Reset Password).
- **Frontend:** Basic structure is ready; some features like Email Verification and Password Reset views are currently being integrated (some routes are commented out in `App.jsx`).

---

## 🗝️ Key Files
- `Server/server.js`: Entry point for the backend.
- `Server/config/DB.js`: Database connection logic.
- `Client/src/App.jsx`: Frontend routing configuration.
- `Client/src/Context/AuthContext.jsx`: Global authentication state.
- `Server/Controller/authController.js`: Core auth logic.

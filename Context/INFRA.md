# 🏗️ Infrastructure & Architecture

## 💻 Tech Stack

### **Backend (Server)**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Security:**
  - `jsonwebtoken` for session management.
  - `bcryptjs` for hashing.
  - `cookie-parser` for handling HTTP-only cookies.
  - `cors` with specific origin validation.
- **Services:**
  - `Nodemailer` for transactional emails (OTP/Reset).

### **Frontend (Client)**
- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS 4 (using the new `@tailwindcss/vite` plugin).
- **State:** React Context API (`AuthContext`).
- **Networking:** Axios with `withCredentials: true`.
- **UI Components:** Radix UI / Shadcn (implied by `components.json`).

---

## 🔑 Environment Variables

### **Server (.env)**
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
SENDER_EMAIL=your_email@gmail.com
SENDER_PASSWORD=your_app_password
```

### **Client (.env)**
```env
VITE_BACKEND_URL=http://localhost:5000/api
```

---

## 📁 Key Architectural Patterns
- **Service Layer:** Logic is abstracted into `services/` (e.g., `authService.js`, `appService.js`) to keep controllers lean.
- **Cookie-Based Auth:** JWTs are not stored in LocalStorage, preventing XSS-based token theft.
- **Modular Routes:** Separated by concerns (`auth`, `user`, `app`).

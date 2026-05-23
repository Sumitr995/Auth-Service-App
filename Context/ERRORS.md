# 🚨 Common Errors & Troubleshooting

## 🔐 Authentication & Session Issues

### **1. Cookies Not Being Set**
- **Cause:** CORS mismatch or missing `credentials: true`.
- **Solution:** Ensure `Server/server.js` has the correct `FRONTEND_URL` in CORS config and `Client/src/main.jsx` (or axios config) has `axios.defaults.withCredentials = true`.

### **2. JWT Expiration**
- **Symptom:** User is randomly logged out.
- **Solution:** Check `JWT_SECRET` consistency and token expiry time in `utils/token.js`.

---

## 📧 Email Service Failures

### **1. OTP Not Sending**
- **Cause:** Incorrect SMTP credentials or Gmail "Less Secure Apps" setting.
- **Solution:** Use **App Passwords** for Gmail and verify `SENDER_EMAIL` and `SENDER_PASSWORD` in `.env`.

---

## 💾 Database Errors

### **1. MongoDB Connection Timeout**
- **Cause:** IP not whitelisted in MongoDB Atlas.
- **Solution:** Add `0.0.0.0/0` (for dev) or your specific IP to the Atlas Network Access list.

### **2. Mongoose Validation Error**
- **Cause:** Missing required fields in `userModel` or `appModel`.
- **Solution:** Check the request body in controllers against the schema definitions.

---

## 🎨 Frontend Styling (Tailwind 4)

### **1. Styles Not Applying**
- **Cause:** Tailwind 4 uses a different build process.
- **Solution:** Ensure `@import "tailwindcss";` is at the top of `index.css` and the Vite plugin is active.

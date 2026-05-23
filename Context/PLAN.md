# 🗺️ Project Roadmap & Plan

## 🎯 Current Status: **Phase 2 - Feature Expansion**
We have successfully implemented the core authentication system and are now expanding into a service-oriented architecture where users can manage their own "Apps" via API keys.

---

## 🚀 Execution Phases

### **Phase 1: Core Authentication (Completed ✅)**
- [x] User Registration & Login.
- [x] JWT Authentication via HTTP-Only Cookies.
- [x] OTP-based Email Verification.
- [x] Password Reset logic (Email-based).
- [x] Secure Password Hashing (bcrypt).

### **Phase 2: App Management & Developer Tools (In Progress 🚧)**
- [x] Backend App Model & Service.
- [x] API Key Generation Logic.
- [ ] Frontend Dashboard for App Management.
- [ ] API Key rotation/revocation.
- [ ] Usage Analytics for Apps.

### **Phase 3: Advanced Security & Integration (Planned 🔜)**
- [ ] **OAuth 2.0:** Integration with Google and GitHub.
- [ ] **2FA:** Two-Factor Authentication (TOTP/SMS).
- [ ] **Role-Based Access Control (RBAC):** Fine-grained permissions.
- [ ] **Public API:** Enabling third-party apps to authenticate users via our service.

---

## 🛠️ Upcoming Tasks
1. **Frontend Integration:** Build the `Dashboard` page to list and create "Apps".
2. **Middleware Enhancement:** Create a middleware to validate `apiKey` for public endpoints.
3. **UI/UX Polish:** Implement the "Vercel-inspired" design system fully across all pages.
4. **Docs:** Maintain the `Context/` directory as the source of truth.

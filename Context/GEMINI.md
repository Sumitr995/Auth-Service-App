# 🔐 Auth SaaS Platform - Project Context

This project is evolving from a basic MERN Authentication App into a production-ready **Authentication-as-a-Service (Auth SaaS) platform**, inspired by Clerk and Auth0.

## 🏗️ Architecture & Technologies

### **Backend (Server/)**
- **Runtime:** Node.js (Express.js)
- **Database:** MongoDB with Mongoose ODM
- **Multi-Tenancy:** Project-scoped users, sessions, and API keys.
- **Authentication:** 
  - Developers: JWT stored in HTTP-only cookies.
  - Client Apps: API Key-based authentication with project context injection.
- **Security:** `bcryptjs` for hashing, CORS enabled, secure API key generation.
- **Email Service:** `Nodemailer` for OTPs and verification.

### **Frontend (Client/)**
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS (Vercel-inspired design)
- **State Management:** React Context API (`AuthContext`)
- **Key Sections:**
  - **Dashboard:** Management portal for developers to create and manage projects/API keys.
  - **Documentation:** Integrated docs and API reference for developers.
  - **Landing:** Marketing and feature showcase.

---

## 🔄 Platform Workflow
1. **Developer Registration:** Sign up for the platform.
2. **Project Creation:** Create one or more projects in the Dashboard.
3. **API Key Generation:** Generate unique API keys for each project.
4. **Integration:** Use the API keys to interact with the Platform APIs from external client apps.
5. **Multi-Tenant Auth:** The platform handles authentication scoped to the specific project.

---

## 🛠️ Development Conventions
- **Module System:** ES Modules (`import/export`).
- **Middleware:** `userAuth` for developer sessions; `projectAuth` (planned/in-progress) for API key validation.
- **API Endpoints:**
  - `/api/auth`: Developer authentication.
  - `/api/app`: Project/App management.
  - `/api/user`: Project-scoped user management.
- **Naming:** CamelCase for logic, PascalCase for React components.

---

## 📅 Roadmap & Status
- **Phase 1 (Completed):** Core authentication foundation.
- **Phase 2 (Current):** Transformation into a multi-tenant API platform.
- **Phase 3 (Planned):** SDK and NPM package development.
- **Phase 4 (Planned):** UI Component Library.

---

## 🗝️ Key Files
- `Server/server.js`: Backend entry point.
- `Server/models/appModel.js`: Project/App schema.
- `Server/models/userModel.js`: Multi-tenant user schema.
- `Client/src/components/Dashboard/`: Developer management interface.
- `Client/src/components/Docs/`: Platform documentation.

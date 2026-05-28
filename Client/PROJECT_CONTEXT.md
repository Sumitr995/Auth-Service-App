# 🔐 Project Context — Auth SaaS Platform

## Project Overview

This project started as a standard MERN Authentication application and is now evolving into a developer-focused Authentication-as-a-Service (Auth SaaS) platform inspired by products like Clerk and Auth0.

Current goal is NOT to build a full Clerk clone immediately.

The current focus is:
- Developer dashboard
- API key based authentication platform
- Backend auth APIs
- Landing page + SaaS UI
- Multi-tenant-ready architecture (simplified V1)

SDKs, React component libraries, OAuth, organizations, RBAC, and advanced enterprise features will be added later.

---

# Current Product Vision (V1)

The platform allows developers to:

1. Create an account
2. Login to dashboard
3. Generate API key
4. Use authentication APIs in their own applications
5. View users/sessions inside dashboard

Flow:

Developer
   ↓
Dashboard
   ↓
Generate API Key
   ↓
Use Auth APIs
   ↓
End Users Authenticate
   ↓
Users Visible in Dashboard

---

# Important Product Decision

V1 DOES NOT support multiple projects/apps per developer.

Architecture for V1:

Developer
   ↓
Users

NOT:

Developer
   ↓
Projects
   ↓
Users

Project system will be added later in V2.

---

# Existing Phase 0 (Already Built)

The original MERN auth system already supports:

- Register
- Login
- Logout
- Email Verification (OTP)
- Reset Password
- JWT Authentication
- HTTP-only Cookies
- User Data Fetching
- Nodemailer Email Service

This existing system must remain functional because it is also used personally for other projects.

DO NOT break existing Phase 0 functionality while refactoring.

---

# V1 Backend Architecture

## Entities

### Developer
Represents SaaS customers using the platform.

Fields include:
- name
- email
- password
- verified
- apiKey
- createdAt

---

### User
Represents end users authenticating through developer applications.

Users belong to developers.

Fields include:
- developerId
- name
- email
- password
- verified
- createdAt

Same email can exist under different developers.

---

### Session
Stores user authentication sessions.

Fields include:
- developerId
- userId
- token
- expiresAt

---

# API Key Flow

Developer:
- Registers/Login
- Generates API key from dashboard

Client application:
- Sends auth requests with API key

Backend:
- Validates API key
- Identifies developer
- Processes authentication
- Stores users under developer scope

---

# Current Backend Refactor Strategy

DO NOT rewrite everything immediately.

Safe refactor order:

1. Keep existing auth system stable
2. Create Developer system
3. Create dashboard auth
4. Add API key generation
5. Add developerId to User model
6. Add middleware for API key validation
7. Refactor register/login gradually
8. Migrate remaining endpoints later

---

# Current Frontend Priority

Placement rounds are close.

Current priority is:
- Build impressive SaaS UI first
- Landing page
- Dashboard UI
- Docs UI
- API key UI
- Developer auth UI

Mock/fake data is acceptable temporarily for frontend demos.

---

# Landing Page Structure

Landing page sections:

1. Navbar
2. Hero
3. Problem Statement
4. Features
5. How It Works
6. Dashboard Preview
7. Integration Preview
8. Roadmap
9. Pricing
10. Final CTA
11. Footer

Theme:
- Dark mode
- Premium SaaS
- Developer-first aesthetic
- Futuristic/minimal UI
- Glassmorphism
- Dashboard visuals
- Modern typography

---

# Current Dashboard Pages

- Overview
- Users
- API Keys
- Sessions
- Docs
- Settings

---

# Current Tech Stack

Frontend:
- React
- Vite
- Tailwind CSS
- React Router
- Context API
- Axios
- React Toastify

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Nodemailer

---

# Future Roadmap (NOT NOW)

Future versions may include:
- Multi-project support
- SDK packages
- React component library
- OAuth
- Organizations
- RBAC
- Magic links
- Webhooks
- Analytics
- MFA

These are NOT part of current implementation scope.

---

# Design Philosophy

This project should feel like:
- A real SaaS product
- Developer-first platform
- Production-grade auth infrastructure
- Modern startup-quality UI/UX

Avoid:
- Portfolio-style design
- Generic CRUD appearance
- Overcomplicated enterprise features in V1
- Fake testimonials or fake user counts

Focus on:
- Clean developer experience
- API-first design
- Dashboard aesthetics
- Scalable architecture
- Incremental safe refactoring

# 📖 Documentation Context

Welcome to the **Auth Service App** internal documentation. This folder serves as the central hub for developers and the Gemini AI agent to understand the project's architecture, roadmap, and state.

## 📂 Folder Content

- **[PLAN.md](./PLAN.md)**: The roadmap, current milestones, and upcoming features.
- **[INFRA.md](./INFRA.md)**: Technical stack, environment configuration, and architectural patterns.
- **[ERRORS.md](./ERRORS.md)**: Troubleshooting guide and known pitfalls.
- **[GEMINI.md](./GEMINI.md)**: AI-specific context and instructions for the Gemini agent.
- **[CLIENT.md](./CLIENT.md)**: Frontend-specific details (moved from Client folder).
- **[DESIGN.md](./DESIGN.md)**: UI/UX principles and design system specifications.

---

## 🚀 Quick Start (Root)

To get started with the full project:

1. **Install all dependencies:**
   ```bash
   # Root
   npm install
   # Client
   cd Client && npm install
   # Server
   cd ../Server && npm install
   ```
2. **Configure Environment:**
   Fill in the `.env` files in both `Client/` and `Server/` folders (refer to `INFRA.md`).
3. **Run Development Mode:**
   ```bash
   # Server
   cd Server && npm run dev
   # Client
   cd Client && npm run dev
   ```

---

*This documentation is living and should be updated with every major feature change.*

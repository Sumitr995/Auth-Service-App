# 🔐 Auth Service App - Frontend (Client)

This is the frontend client for the **Auth Service App**, a secure MERN stack authentication system. It is built with **React 19** and **Vite**, featuring a modern UI styled with **Tailwind CSS 4**.

## 🏗️ Architecture & Technologies

- **Framework:** React 19 (Vite-powered)
- **Styling:** Tailwind CSS 4
- **State Management:** React Context API (`AuthContext.jsx`)
- **Routing:** React Router DOM v7
- **Form Handling:** React Hook Form
- **API Communication:** Axios (configured for cookie-based authentication)
- **Icons:** Lucide React
- **Notifications:** React Toastify

### **Key Directory Structure**
- `src/Context/`: Contains global state providers (e.g., `AuthContext`).
- `src/pages/`: Main application views (`Home`, `Register`, `Dashboard`).
- `src/Components/`: Reusable UI components (`Navbar`, `Header`, `DashNavbar`, `DashMain`).
- `src/assets/`: Static assets and centralized asset mapping in `assets.js`.

---

## 🚀 Building and Running

### **Prerequisites**
- Node.js & npm installed.
- A running instance of the [Auth Service Backend](../Server).

### **Setup & Execution**
1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Environment Configuration:**
   Create a `.env` file in the root directory:
   ```env
   VITE_BACKEND_URL=http://localhost:3000/api
   ```
3. **Run Development Server:**
   ```bash
   npm run dev
   ```
4. **Build for Production:**
   ```bash
   npm run build
   ```
5. **Linting:**
   ```bash
   npm run lint
   ```

---

## 🛠️ Development Conventions

### **Authentication Flow**
- **Cookie-Based Auth:** The client uses `axios.defaults.withCredentials = true` to ensure JWT cookies are automatically sent with API requests.
- **Global State:** The `AuthContext` provides `user` and `token` state across the application.
- **Protected Routes:** While currently minimal, the app logic in `Dashboard.jsx` fetches user data on mount to verify session validity.

### **Coding Standards**
- **Functional Components:** All UI elements are built as functional components using modern React hooks (`useState`, `useEffect`, `useContext`).
- **Form Management:** Prefer `react-hook-form` for registration and login to handle validation and submission efficiently.
- **Styling:** Adhere to Tailwind CSS utility classes. Version 4 is used, leveraging the `@tailwindcss/vite` plugin.
- **API Endpoints:** All backend calls should use the `VITE_BACKEND_URL` environment variable.

### **Key UI Features & Design System**
- **Vercel-Inspired Design:** Clean, stark, and technical aesthetic.
- **Typography:** Uses **Inter** (Geometric Sans) for display and body, and **JetBrains Mono** for technical labels.
  - *Headlines:* Sentence-case, weight 600, period-terminated, negative tracking (`tracking-tighter`).
  - *Mono:* Reserved for technical eyebrows, code, and small technical captions.
- **Colors (Stark Palette):**
  - *Ink (#171717):* Primary CTA and text color.
  - *Canvas (#FFFFFF):* Card and surface background.
  - *Canvas Soft (#FAFAFA):* Main page background.
- **Gradients:** Multi-stop mesh gradients (cyan, pink, violet) used only as atmospheric backdrops at hero scale.
- **Components:**
  - *Buttons:* `button-primary` (Ink pill, 100px radius) for marketing; `nav-cta-signup` (Ink, 6px radius) for nav.
  - *Cards:* `card-marketing` with 1px hairline borders and subtle stacked shadows (no heavy drop shadows).
  - *Forms:* `form-input` with 6px radius and clean hairline borders.
- **System Theming:** Automatic Dark/Light mode support via CSS variables and `prefers-color-scheme`.

### **Design Do's and Don'ts**
- **Do:** Use Ink (#171717) for primary CTAs.
- **Do:** Use sentence-case headlines with negative tracking.
- **Do:** Apply subtle stacked shadows with inset hairlines for depth.
- **Don't:** Introduce a sixth accent color; stick to the gray + brand gradient palette.
- **Don't:** Render headlines in all-caps.
- **Don't:** Set body paragraphs in the mono face.



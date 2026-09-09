# Paras Sahu - Modern Fullstack Developer Portfolio (Frontend-Only)

A responsive, high-performance personal portfolio website built with **React, Vite, and Tailwind CSS**. Designed with a dark-mode tech aesthetic, smooth scrolling, and instant client rendering.

## 🚀 Key Advantages of Frontend-Only Architecture

- **100% Free 1-Click Hosting**: Deploy directly to **Vercel**, **Netlify**, **GitHub Pages**, or **Cloudflare Pages** without maintaining or paying for backend servers.
- **Zero API Latency (0ms)**: Portfolio data loads instantaneously without waiting for server spin-up or network round-trips.
- **Serverless Direct Contact**: Visitors can submit inquiries directly to your email (`paraskumarsahu65@gmail.com`) or launch their prefilled email client with one click.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Bundler**: Vite
- **Styling**: Tailwind CSS (Dark Mode, Glassmorphism, Glowing Accents)
- **Icons**: Lucide React
- **Data**: Centralized structured module in `src/data/portfolioData.js`

---

## 📁 Directory Structure

```
paras-sahu-portfolio/
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx         # Sticky glassmorphism nav with active scroll-spy
    │   │   ├── Hero.jsx           # Tech-focused hero banner with CTA buttons & badges
    │   │   ├── About.jsx          # Profile summary, key metrics, Education & Thesis
    │   │   ├── Skills.jsx         # Categorized skills grid with Lucide icons & filter pills
    │   │   ├── Experience.jsx     # Career progression timeline (Capgemini & LeadAngel / AROSYS)
    │   │   ├── Projects.jsx       # Interactive showcase (Trip Booking, CRM Suite, E-Book App)
    │   │   ├── Contact.jsx        # Direct info cards + interactive direct submission form
    │   │   └── Footer.jsx         # Footer with scroll-to-top button
    │   ├── data/
    │   │   └── portfolioData.js   # Personal profile, skills, and project data
    │   ├── App.jsx                # Layout orchestrator & scroll listener
    │   └── index.css              # Custom utilities, glow effects, and dark background styling
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

---

## 🏃 Running Locally

```bash
cd frontend
npm install
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## 🚢 Free 1-Click Deployment Options

### Deploy on Vercel
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Set the Root Directory to `frontend`.
4. Click **Deploy**.

### Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) and connect your repository.
2. Set Base directory to `frontend` and Publish directory to `dist`.
3. Click **Deploy Site**.

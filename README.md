# IELTS Pro Institute — React Homepage

A modern, responsive homepage for a fictional IELTS Institute built with **React + Vite + Tailwind CSS**.

## 🚀 Quick Start

```bash
# 1) Install dependencies
npm install

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build
npm run preview
```

> Requires Node 18+ and npm 9+.

## 🧱 Tech Stack

- **React 18** + **Vite** for a fast DX
- **Tailwind CSS** for utility-first styling
- **Lucide React** for crisp icons

## 🧩 Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Features.jsx
    Testimonials.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
index.html
tailwind.config.js
postcss.config.js
```

## 🎨 Design Choices

- **Clean, modern aesthetic** with soft shadows, rounded cards, and a single brand color (blue).
- **Clear visual hierarchy**: big headline, concise subtext, primary CTA, supporting secondary CTA.
- **Mobile-first responsive layout**: stacked sections on small screens, grid on larger breakpoints.
- **Accessible contrast & focus**: legible gray palette, large touch targets.
- **Performance friendly**: Unsplash images with `object-cover`, minimal dependencies.
- **Scalable components**: each section is a focused component for readability and reuse.

## 📱 Responsiveness

- Sticky, translucent **Navbar** with mobile menu.
- **Hero** two-column layout collapses gracefully to a single column on mobile.
- **Features** auto-layout from 1 → 2 → 4 columns based on breakpoints.
- **Testimonials** in responsive grid.
- **Footer** with clear contact and CTA.

## 📸 Assets

Images are hotlinked from Unsplash for demo purposes. Replace with your own assets in `public/` and update the `src` in components for production use.

## 🔗 Deployment

- Push to a GitHub repo and connect to **Vercel**, **Netlify**, or GitHub Pages.
- Example build command: `npm run build`, publish `dist/`.

---

Made with ❤️ for the internship assignment.

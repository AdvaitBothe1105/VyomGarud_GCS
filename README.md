<div align="center">

<img src="public/drone-hero.png" alt="VyomGarud hero" width="320" />

# VyomGarud Landing Page

High-impact marketing site for VyomGarud’s UAV platform, highlighting mission-ready drones, feature showcases, and enterprise contact touchpoints.

</div>

---

## ✨ Features

- **Immersive hero experience** with animated CTAs, quick stats, and an overlayed background image.
- **Left-drawer navigation** powered by Framer Motion, complete with full-screen dimmer and smooth scroll-to-section behavior.
- **Mission-focused storytelling** in `About`, `Highlights`, and `Products` sections using animated cards, gradient glows, and responsive grids.
- **Product showcase grid** that highlights three flagship drones with specs, imagery, and motion-enhanced hover states.
- **Contact funnel** featuring animated contact info cards, a responsive form with submission state, and animated CTA.
- **Global styling** with Tailwind CSS, custom font stack, gradient overlays, and reusable color palette (`#0f0f0f` + VyomGarud accent `#ff7b00`).

## 🧱 Tech Stack

| Layer        | Details |
|--------------|---------|
| Framework    | [Next.js 14 (App Router)](https://nextjs.org/) |
| Language     | TypeScript / JSX |
| Styling      | [Tailwind CSS](https://tailwindcss.com/) configured in `app/globals.css` |
| Animation    | [Framer Motion](https://www.framer.com/motion/) for section reveals, sidebar transitions, and button interactions |
| Icons        | [React Icons](https://react-icons.github.io/react-icons/) (`Feather` subset) |
| Images       | Optimized with `next/image` using local assets in `public/` |

## 📂 Project Structure

```
app/
├─ components/
│  ├─ Hero.tsx          // hero, sidebar menu, CTA buttons, key stats
│  ├─ About.tsx         // mission overview cards with animated accents
│  ├─ Products.tsx      // performance feature list + product grid
│  ├─ Highlights.tsx    // key differentiators with hover glows
│  ├─ Contact.tsx       // contact info + animated form
│  └─ Footer.tsx        // minimal branded footer
├─ globals.css          // Tailwind base styles, font imports
├─ layout.tsx           // HTML shell with site-wide typography + colors
└─ page.tsx             // page composition ordering all sections
```

All sections are self-contained client components (`"use client";`) to enable Framer Motion animations and interactive behaviors (smooth scrolling, form state, menu toggle).

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start next dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 🧪 Development Notes

- Framer Motion `viewport={{ once: true }}` settings ensure reveal animations play the first time a section enters the viewport (from any direction). Reload to replay.
- Smooth scrolling is handled via `handleScroll` helper inside `Hero.tsx`, triggered by both the sidebar links and primary CTA buttons.
- Static assets live under `public/`, allowing `next/image` to optimize them automatically.
- Tailwind classes drive the majority of layout/styling. Adjust global tokens (colors, fonts) in `globals.css` for brand updates.

## 🖼️ Screenshots

<div align="center">
  <img src="public/Screenshot%201.png" alt="Hero section" width="800" />
  <br />
  <img src="public/Screenshot%202.png" alt="Side navigation" width="800" />
  <br />
  <img src="public/Screenshot%203.png" alt="About section" width="800" />
  <br />
  <img src="public/Screenshot%204.png" alt="Products section" width="800" />
  <br />
  <img src="public/Screenshot%205.png" alt="Highlights section" width="800" />
  <br />
  <img src="public/Screenshot%206.png" alt="Contact section" width="800" />
</div>

## 📦 Deployment

This is a static marketing page and deploys seamlessly to platforms that support Next.js (Vercel, Netlify, etc.). Build with:

```bash
npm run build
npm run start # preview production build locally
```

## 📄 License

This project is distributed for demonstration purposes. Adapt licensing info here to match your organization’s policy.

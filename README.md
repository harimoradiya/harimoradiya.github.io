# 🚀 Developer Portfolio & Open Source Hub — Hari Moradiya

Welcome! This is the repository for my personal developer portfolio and case-study site, built from scratch using **Astro.js** with a clean, minimalistic, "smooth" modern aesthetic. It showcases my professional background, key developer skills, and standalone deep-dives of my open-source applications.

👉 **Live Website:** [harimoradiya.github.io](https://harimoradiya.github.io)

---

## 📱 Featured Project Showcase: TV Remote for Android TV
A standalone case study for my primary open-source application is built directly into this portfolio at `/projects/android-tv-remote`.

- **Description:** A native, zero-latency, ad-free, and privacy-respecting Wi-Fi remote control for Android TV and Google TV devices.
- **Tech Stack:** Kotlin, Jetpack Compose, Coroutines & Flow, Android TV Input Framework (ATIF), socket-based local network communication.
- **Stats:** 4.7★ Play Store rating, 1K+ active downloads, 50+ GitHub Stars.
- **Google Play:** [Get it on Google Play](https://play.google.com/store/apps/details?id=com.hari.androidtvremote)
- **Source Code:** [GitHub Repository](https://github.com/harimoradiya/TV-Remote-for-Android-TV)

---

## 🛠️ Portfolio Tech Stack

The website is engineered for speed, clean aesthetics, and optimal SEO indexability:

- **Frontend Engine:** [Astro.js v6](https://astro.build/) (Static Site Generation / SSG)
- **Design Language:** Vanilla CSS (custom design system, responsive layouts, dark-mode first design)
- **Animations:** View Transitions API (Astro built-in) + CSS Keyframes + Intersection Observer (scroll-triggered reveals)
- **SEO & Metadata:**
  - Automated XML sitemaps via `@astrojs/sitemap`
  - Canonical link tags, Open Graph (OG) tags, and Twitter Cards
  - JSON-LD structured data (`Person` schema for homepage/about, `SoftwareApplication` schema for the Remote App showcase)
  - Image optimization via Astro's built-in `<Image />` component

---

## 📂 Codebase Structure

```
├── .github/workflows/   # CI/CD deployment pipeline to GitHub Pages
├── public/              # Static public assets (robots.txt, favicon, etc.)
└── src/
    ├── assets/          # Project screenshots & profile images
    ├── components/      # Reusable UI cards & components
    ├── layouts/         # Layout systems (Layout.astro & BlogLayout.astro)
    └── pages/           # Astro page routes
        ├── index.astro            # Redesigned Homepage
        ├── about.astro            # Redesigned About page
        ├── privacy-policy.astro   # App legal disclosure (noindex)
        ├── projects/
        │   └── android-tv-remote.astro  # New Android TV Remote case study
        └── blog/
            ├── index.astro        # Blog listing page
            └── *.astro            # 10 SEO-optimized blog posts about Android TV
```

---

## 📈 Search Engine Optimization (SEO) & Marketing

To drive organic search traffic directly to the portfolio and Play Store, this project includes a **dedicated Blog Section** with **10 high-value, SEO-optimized articles** focusing on high-intent search keywords:

1. **What Is an Android TV Remote App and How Does It Work?**
2. **How to Connect Android TV Remote via Wi-Fi — Step-by-Step Guide**
3. **Best Free Android TV Remote Apps in 2025 (Compared)**
4. **Chromecast Remote Control: The Complete Wi-Fi Guide**
5. **Android TV vs Google TV: What's the Difference? (2025)**
6. **How to Use D-Pad Navigation on Android TV Like a Pro**
7. **OLED Pure-Black Theme for Android TV Remote: Save Battery & Look Great**
8. **Why Open Source Android TV Remote Apps Are Better**
9. **Customizable Remote Layouts: Build Your Perfect Android TV Remote**
10. **Android TV Keyboard Input via Wi-Fi: Type on Your TV from Your Phone**

These posts establish organic domain authority around terms like *"Android TV remote app,"* *"Chromecast remote control,"* and *"open source Android TV remote."*

---

## ⚙️ Development Guide

### Prerequisites
Make sure you have **Node.js v20+** and **npm** installed.

### 1. Clone & Setup
```bash
git clone https://github.com/harimoradiya/harimoradiya.github.io.git
cd harimoradiya.github.io
npm install
```

### 2. Local Development
Start the local server at `http://localhost:4321`:
```bash
npm run dev
```

### 3. Production Build & Verification
Compile the site to static HTML & verify TypeScript compatibility:
```bash
npm run build
```
Build output is saved to the `/dist` directory.

### 4. Deploying to GitHub Pages
Deployment is fully automated using **GitHub Actions**. Any commit pushed to the `main` or `master` branch will trigger the workflow at `.github/workflows/deploy.yml` which builds the project and deploys it to the `gh-pages` branch.

If you ever need to manually deploy from your local machine, run:
```bash
npm run deploy
```

---

## 👤 About Hari Moradiya

I am a Software Engineer specializing in mobile engineering (Android, iOS) and full-stack API systems. I focus on creating high-performance, stable, and visually delightful software that respects user privacy.

- **GitHub:** [@harimoradiya](https://github.com/harimoradiya)
- **LinkedIn:** [Hari Moradiya](https://www.linkedin.com/in/hari-moradiya-0a7145179/)
- **Twitter:** [@hari_moradiya_](https://twitter.com/hari_moradiya_)
- **Contact Email:** [harimoradiya123@gmail.com](mailto:harimoradiya123@gmail.com)

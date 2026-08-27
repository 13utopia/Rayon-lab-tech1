# Rayon Lab Tech

> **Official Website & Digital Catalog for Rayon Lab Tech** — Premier Manufacturer of Modular Laboratory Furniture, Chemical Fume Hoods, Anti-Vibration Tables, and Exhaust Systems based in Ahmedabad, Gujarat, India.

[![Production Website](https://img.shields.io/badge/Website-rayonlabtech.in-blue?style=flat-square)](https://rayonlabtech.in)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![SEO / AEO / GEO](https://img.shields.io/badge/Search-SEO%20%7C%20AEO%20%7C%20GEO-success?style=flat-square)]()

---

## 🔬 About Rayon Lab Tech

Rayon Lab Tech provides turnkey design, engineering, precision fabrication, and on-site installation of high-grade laboratory infrastructure across India. Our products are engineered for pharmaceutical research, educational universities, chemical processing plants, cleanrooms, and clinical diagnostic laboratories.

### Core Product Offerings
- **Modular Laboratory Furniture & Working Tables**: Heavy-gauge Galvanized Iron (GI) with chemical-resistant epoxy powder coating and natural black granite / epoxy resin worktops.
- **Central Island Tables**: Dual-sided collaborative benches with integrated utility services, reagent racks, polypropylene (PP) sinks, and emergency eye showers.
- **Chemical Laboratory Fume Hoods**: SEFA & ISO compliant ducted fume containment enclosures with aerodynamic baffles and safety glass sash.
- **Precision Anti-Vibration Balance Tables**: Dual-frame decoupled isolation tables for high-precision analytical weighing.
- **Fume Spot Extractors & Exhaust Systems**: PP/FRP centrifugal blowers, wet scrubbers, and flexible extraction arms.
- **Stainless Steel (SS 304/316) Cleanroom Furniture**: Sterile workstations, pass boxes, and chemical storage cabinets.

---

## ⚡ Tech Stack & Architecture

- **Frontend**: React 18, React Router v7, Vanilla CSS (modular stylesheets)
- **Bundler & Build Tool**: Vite 5 (with dynamic asset optimization & local API middleware)
- **Backend / Serverless**: Node.js & Vercel Serverless Functions (`/api/*`)
- **Indexing & Automation**: SEO Freshness Engine, Vercel Cron, IndexNow protocol

---

## 🚀 Key Features

1. **Interactive Product Explorer**: Full product catalog with technical specifications, material selections, dimensional profiles, and high-resolution galleries.
2. **Instant Quote & Cost Estimate Modal**: Direct email submission pipeline powered by EmailJS and backend email service.
3. **Turnkey Portfolio & Gallery Showcase**: Case studies from major clients (Zydus Lifesciences, Tata Group, Accuprec, Cureza, etc.).
4. **Deterministic Updates Feed (`/updates`)**: Scheduled publication of facility dispatch notes, QC inspections, and technical articles on fixed weekdays (Tue & Fri).
5. **Mobile-First Responsive Design**: Optimized performance with high-fidelity WebP imagery and responsive navigation.

---

## 🌐 Advanced SEO, AEO & GEO Infrastructure

### 1. SEO (Search Engine Optimization)
- **Dynamic XML Sitemap**: Auto-generated sitemap at `/sitemap.xml` with `<lastmod>` timestamps for all static pages and dynamic update posts.
- **Canonical URLs**: Canonical link tags embedded across all routes to eliminate duplicate content issues.
- **Complete Meta Suite**: Title tags, meta descriptions, Open Graph, and Twitter Cards tailored per route.

### 2. AEO (Answer Engine Optimization for Perplexity, ChatGPT, Claude, Gemini)
- **LLM Knowledge Bases**:
  - [`/llms.txt`](https://rayonlabtech.in/llms.txt): Concise company summary and quick facts.
  - [`/llms-full.txt`](https://rayonlabtech.in/llms-full.txt): Deep technical specifications, material grades, ISO/SEFA standards, and structured Q&A.
- **AI Crawler Directives**: [public/robots.txt](public/robots.txt) configured to grant indexing permissions to `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot`, and other leading AI answer engines.
- **FAQPage Schema**: Structured FAQ JSON-LD embedded on the home page for direct citation in AI answers.

### 3. GEO (Generative Engine Optimization & Local SEO)
- **Geographic Meta Tags**: Direct coordinate embedding (`22.9934;72.7483`) and `IN-GJ` regional identifiers.
- **Master Schema Hierarchy**:
  - `LocalBusiness` & `Manufacturer` (NAP: Ahmedabad, Gujarat, Dev Aditya Industrial Park)
  - `Product` (on each product page with pricing/stock attributes)
  - `ItemList` & `BlogPosting` (on `/updates` and detail pages)
  - `AboutPage`, `ContactPage`, `CollectionPage`, and `ImageGallery`

---

## 📂 Project Structure

```
├── api/                     # Vercel Serverless Functions
│   ├── _lib/
│   │   ├── CONFIG.js        # Freshness kit client configuration
│   │   └── feed.js          # Deterministic weekly update feed generator
│   ├── email-service.js     # Contact & quote email handler
│   ├── publish.js           # IndexNow ping & cron publish trigger
│   ├── sitemap.js           # Dynamic XML sitemap generator
│   └── updates.js           # Updates JSON API endpoint
├── public/                  # Static assets & SEO files
│   ├── llms.txt             # AI engine markdown summary
│   ├── llms-full.txt        # Comprehensive technical knowledge base for LLMs
│   ├── robots.txt           # Crawler instructions & sitemap link
│   ├── seo_images/          # Optimized WebP/PNG image assets
│   └── {INDEXNOW_KEY}.txt   # IndexNow verification key file
├── src/                     # React application source code
│   ├── assets/              # WebP images, logos, and UI graphics
│   ├── client/              # Browser API helpers & JSON-LD schema generators
│   ├── data/                # Product details & static SEO articles
│   ├── AboutUs.jsx          # About page component
│   ├── App.jsx              # Main router & Home/Product layout
│   ├── ArticleDetailPage.jsx# Dynamic update detail component
│   ├── BlogPage.jsx         # Updates list page component
│   ├── ClientsPage.jsx      # Clients showcase component
│   ├── ContactUs.jsx        # Contact & estimate request form
│   ├── GalleryPage.jsx      # Image gallery component
│   ├── PortfolioPage.jsx    # Installation case studies
│   ├── SEO.jsx              # Head metadata & JSON-LD injector
│   └── ThankYouPage.jsx     # Form submission confirmation
├── vercel.json              # Vercel cron schedules & rewrite rules
└── vite.config.js           # Vite build config with local API middleware
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18.0 or later)
- npm (v9.0 or later)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/13utopia/Rayon-lab-tech1.git
   cd Rayon-lab-tech1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

5. Build for production:
   ```bash
   npm run build
   ```

---

## 🚢 Deployment

The project is pre-configured for seamless deployment on **Vercel**:
- Production domain: `https://rayonlabtech.in`
- Bi-weekly cron schedule configured in `vercel.json` (`30 1 * * 2,5` / Tue & Fri 07:00 IST)
- Serverless API routes under `/api/*` automatically deployed without additional configuration.

---

## 📞 Company Contact Details

- **Company**: Rayon Lab Tech
- **Address**: 74 - Dev Aditya Industrial Park, Bakrol - Dhamatvan Rd, Daskroi, Ahmedabad, Gujarat 382430, India
- **Phone**: +91 9909030607 / +91 9974089504
- **Email**: Rltsales@rayonlabtech.in
- **Website**: [rayonlabtech.in](https://rayonlabtech.in)
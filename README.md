# Nabil El Hilali - Cybersecurity Portfolio

A modern, responsive, and dynamic personal portfolio built to showcase my experience, skills, and projects in the field of Cybersecurity and IT Networks.

## Live Demo

[Visit my Portfolio](https://www.nabilelhilali.tech)

## Features

- **Cybersecurity Theme**: A sleek, terminal-inspired design with modern glassmorphism and glowing effects.
- **Dual Language Support**: Seamlessly switch between English and French.
- **Light & Dark Modes**: Fully adaptive styling to suit user preferences.
- **Interactive UI**: Fluid animations powered by Framer Motion.
- **Comprehensive Sections**:
  - Hero Profile
  - About (System Specs, Resume Download)
  - Technical Arsenal (Skills)
  - Certifications Marquee
  - Featured Operations (Projects)
  - Professional Timeline (Experience)
  - Academic Background
  - Community & Teaching Engagements

## Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/n48i1/cybersec-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd n48i1-cybersec-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000` (or the port specified in your terminal).

## Project Structure

- `src/` - Contains the React components, styles, and application logic.
  - `components/` - Reusable UI elements (Taskbar, TopBar, ParticleBackground, CertificationsBanner, etc.)
  - `context/` - React contexts (e.g., LanguageContext)
  - `constants.ts` - All content data (EN/FR) for the portfolio sections.
  - `types.ts` - TypeScript interfaces and types.
- `public/assets/` - Static assets including resumes, avatars, and certification logos.
- `index.html` - The main HTML template with global styles and Tailwind config.

## Configuration

The portfolio content is centralized in `src/constants.ts`. To update your information, skills, projects, or experience, simply modify the `DATA_EN` and `DATA_FR` objects in this file.

## Contact

- **Email**: nabil.elhilali.25@gmail.com
- **LinkedIn**: [Nabil El Hilali](https://www.linkedin.com/in/nabil-el-hilali-712224237/)
- **GitHub**: [n48i1](https://github.com/n48i1)

---
*Designed & Built by Nabil El Hilali.*

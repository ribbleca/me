# 🚀 Adna Fika Agestifanka - Portfolio Website

<div align="center">
  
[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.0-purple)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com/)

**A modern, interactive, and performance-optimized portfolio website built with cutting-edge technologies.**

[🌐 Live Demo](https://adnafika.dev) | [📱 Mobile Optimized](#responsive-design) | [⚡ PWA Ready](#pwa-features)

</div>

---

## ✨ Features

### 🎨 **Design & UX**
- **Modern Minimalist Design** - Clean, professional aesthetics with beautiful typography
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Responsive Design** - Perfect experience across all devices (mobile, tablet, desktop)
- **Smooth Animations** - Powered by Framer Motion for delightful micro-interactions
- **Interactive Elements** - Engaging hover effects, parallax scrolling, and dynamic content

### 🛠️ **Technical Excellence**
- **Next.js 14 App Router** - Latest React Server Components and streaming
- **TypeScript** - Full type safety and developer experience
- **Performance Optimized** - Lighthouse score >90/100
- **SEO Ready** - Complete meta tags, Open Graph, and Twitter Cards
- **PWA Features** - Installable, offline-capable, and app-like experience

### 📱 **Core Sections**

#### 🏠 **Hero Section**
- Animated typewriter effect with rotating professional titles
- Interactive floating elements and particle effects
- Call-to-action buttons with smooth scroll navigation
- Real-time availability status indicator

#### 👤 **About Section**
- Personal story with engaging visual timeline
- Language skills with proficiency levels
- Interactive interests showcase with custom icons
- Fun facts and personality highlights

#### 📊 **Stats Section**
- Animated counters showing professional achievements
- Real-time data visualization
- Interactive hover effects and micro-animations

#### 🚀 **Projects Showcase** *(Coming Soon)*
- Filterable project gallery by category
- Live demo links and GitHub repositories
- Technology stack badges and project details
- Case studies with challenges and solutions

#### 💼 **Experience Timeline** *(Coming Soon)*
- Interactive career journey visualization
- Company logos and achievement highlights
- Technology stacks used in each role

#### 🛠️ **Mini Tools Section** *(Coming Soon)*
- **JSON Formatter** - Format and validate JSON with syntax highlighting
- **Color Palette Generator** - Create beautiful color schemes
- **Base64 Encoder/Decoder** - Quick encoding/decoding utility
- **Password Generator** - Secure password creation tool
- **QR Code Generator** - Generate QR codes for various content
- **Text Case Converter** - Transform text between different cases

#### 📝 **Blog Section** *(Coming Soon)*
- Featured articles and tutorials
- Reading time estimates and engagement metrics
- Tag-based filtering and search functionality

#### 💬 **Contact Section** *(Coming Soon)*
- Interactive contact form with validation
- Social media integration
- Downloadable vCard for easy contact saving

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or later
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/adnafika/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev

# Build for production
npm run build
# or
yarn build
```

### Development Server
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 🌐 Deployment to Vercel

### Method 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/adnafika/portfolio)

### Method 2: Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Method 3: GitHub Integration

1. Import your GitHub repository on [Vercel Dashboard](https://vercel.com/dashboard)
2. Configure build settings (auto-detected for Next.js)
3. Deploy automatically on every push to main branch

### Environment Variables

Create a `.env.local` file for local development:

```env
# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_GTAG_ID=your_gtag_id

# Contact Form (Optional)
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
RESEND_API_KEY=your_resend_api_key

# Social Media
NEXT_PUBLIC_SITE_URL=https://adnafika.dev
```

---

## 📁 Project Structure

```
adna-portfolio/
├── 📂 public/                  # Static assets
│   ├── images/                 # Images and illustrations
│   │   └── icons/                  # Icons and favicons
│   └── files/                  # Downloadable files (CV, etc.)
├── 📂 src/
│   ├── 📂 app/                 # Next.js 14 App Router
│   │   ├── globals.css         # Global styles and CSS variables
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── page.tsx            # Homepage with all sections
│   ├── 📂 components/
│   │   ├── 📂 layout/          # Layout components
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   ├── Footer.tsx      # Website footer
│   │   │   └── ThemeProvider.tsx # Dark/light mode provider
│   │   ├── 📂 sections/        # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   └── ...
│   │   ├── 📂 ui/              # Reusable UI components
│   │   │   ├── BackgroundElements.tsx
│   │   │   └── ScrollProgress.tsx
│   │   └── 📂 mini-tools/      # Interactive tools
│   ├── 📂 data/               # Static data and content
│   │   └── portfolio.ts        # Portfolio data and configuration
│   ├── 📂 lib/                # Utility functions
│   │   └── utils.ts            # Helper functions and utilities
│   ├── 📂 types/              # TypeScript type definitions
│   │   └── index.ts            # Interface definitions
│   └── 📂 styles/             # Additional styles (if needed)
├── 📄 next.config.ts          # Next.js configuration
├── 📄 tailwind.config.ts      # TailwindCSS configuration
├── 📄 tsconfig.json          # TypeScript configuration
└── 📄 package.json           # Dependencies and scripts
```

---

## 🎨 Customization Guide

### 🎨 **Colors & Branding**

Update the brand colors in `tailwind.config.ts`:

```typescript
colors: {
  adna: {
    50: '#f0f4ff',
    500: '#6366f1',  // Primary brand color
    900: '#312e81',
  }
}
```

### 📝 **Content Management**

All content is managed in `src/data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  // ... update with your information
};
```

### 🎭 **Animations**

Customize animations in `src/app/globals.css`:

```css
@keyframes your-animation {
  0% { /* start state */ }
  100% { /* end state */ }
}
```

---

## 🛠️ Technology Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | Next.js | 15.3.5 | React framework with SSR/SSG |
| **Language** | TypeScript | 5.0+ | Type-safe JavaScript |
| **Styling** | TailwindCSS | 4.0 | Utility-first CSS framework |
| **Animation** | Framer Motion | 12.23.0 | Smooth animations and transitions |
| **Icons** | Lucide React | Latest | Beautiful icon library |
| **SEO** | next-seo | 6.8.0 | Search engine optimization |
| **Forms** | React Hook Form | 7.60.0 | Form validation and handling |
| **Deployment** | Vercel | - | Hosting and deployment platform |

---

## 📈 Performance Features

### ⚡ **Core Web Vitals**
- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms
- **CLS** (Cumulative Layout Shift) < 0.1

### 🔧 **Optimizations**
- **Image Optimization** - Next.js built-in optimization
- **Code Splitting** - Automatic route-based splitting
- **Lazy Loading** - Components load when needed
- **Tree Shaking** - Remove unused code
- **Minification** - Compressed CSS and JavaScript

---

## 🔒 Security Features

- **Content Security Policy** - Prevent XSS attacks
- **HTTPS Enforcement** - Secure data transmission
- **Input Validation** - Sanitize all user inputs
- **Rate Limiting** - Prevent spam and abuse
- **Security Headers** - Comprehensive security headers

---

## 🌍 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Safari | 14+ |
| Chrome Mobile | 90+ |

---

## 📊 Analytics & Monitoring

### 📈 **Performance Monitoring**
- **Vercel Analytics** - Real-time performance insights
- **Google Lighthouse** - Automated performance auditing
- **Core Web Vitals** - User experience metrics

### 📊 **User Analytics** *(Optional)*
- **Google Analytics 4** - User behavior tracking
- **Hotjar** - User session recordings
- **Vercel Speed Insights** - Performance monitoring

---

## 🤝 Contributing

While this is a personal portfolio, contributions for improvements are welcome!

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Style

- Use **TypeScript** for all new files
- Follow **ESLint** and **Prettier** configurations
- Write **meaningful commit messages**
- Add **JSDoc comments** for complex functions

---

## 📞 Support & Contact

For questions, suggestions, or collaboration opportunities:

- **Email**: [hello@adnafika.dev](mailto:hello@adnafika.dev)
- **LinkedIn**: [linkedin.com/in/adnafika](https://linkedin.com/in/adnafika)
- **GitHub**: [github.com/adnafika](https://github.com/adnafika)
- **Website**: [adnafika.dev](https://adnafika.dev)

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Design Inspiration** - Modern portfolio designs and UI/UX best practices
- **Icons** - [Lucide React](https://lucide.dev/) for beautiful icons
- **Fonts** - [Google Fonts](https://fonts.google.com/) for typography
- **Animations** - [Framer Motion](https://www.framer.com/motion/) for smooth interactions
- **Deployment** - [Vercel](https://vercel.com/) for seamless hosting

---

<div align="center">

**Made with ❤️ by [Adna Fika Agestifanka](https://adnafika.dev)**

*If you found this helpful, please consider giving it a ⭐!*

[![GitHub stars](https://img.shields.io/github/stars/adnafika/portfolio?style=social)](https://github.com/adnafika/portfolio/stargazers)

</div>

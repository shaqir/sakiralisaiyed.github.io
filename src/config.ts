// src/config.ts
// DevPortfolio (Astro) configuration for Sakir Ali Saiyed
// All sections are optional: remove any array/field to hide its section.

export default {
  // ===== Basic Info =====
  name: "Sakir Ali Saiyed",
  title: "Senior Mobile Developer — iOS • Flutter",
  description:
    "10+ years building high-performance mobile apps with Swift, SwiftUI/Combine, Clean Architecture, and real-time data. Based in Calgary, AB.",

  // Change the accent to any HEX you like (affects buttons, highlights)
  accentColor: "#14b8a6", // teal-500

  // ===== Social Links (all optional) =====
  social: {
    email: "sakirsaiyed29@gmail.com",
    github: "https://github.com/shaqir",
    linkedin: "", // add your LinkedIn profile URL when ready
    twitter: "",  // optional
  },

  // ===== About =====
  aboutMe:
    "I’m a Senior Mobile Developer with 10+ years of experience shipping polished, high-performance apps for iOS and Flutter. I specialize in Swift, SwiftUI, Combine, Clean Architecture, and real-time data (WebSockets). I care about clean, testable code and delightful UX. I’m currently in Calgary, Alberta, studying AI and project management while building product-quality demo apps and helping teams modernize their mobile stacks.",

  // ===== Skills =====
  skills: [
    "Swift (Swift 6 ready)",
    "SwiftUI / UIKit",
    "Combine / async-await",
    "MVVM / Clean Architecture",
    "REST / GraphQL",
    "WebSockets / Realtime",
    "SwiftData / Core Data",
    "XCTest / ViewInspector",
    "Git / GitHub / Code Review",
    "CI/CD (GitHub Actions, Codemagic)",
    "Flutter / Dart",
    "Python (notebooks)",
    "Project Management basics",
  ],

  // ===== Projects =====
  projects: [
    {
      name: "iStocks — Zerodha-inspired Watchlist",
      description:
        "SwiftUI + Combine + Clean Architecture + SwiftData. Live quotes (WebSocket) with reconnection/backoff, smooth animated updates, and strong separation of concerns.",
      link: "", // GitHub repo or live demo link
      skills: ["Swift", "SwiftUI", "Combine", "SwiftData", "Clean Architecture"],
    },
    {
      name: "PhotoEditorApp — Clean Architecture iOS",
      description:
        "Production-grade DI and repository/use-case layers. Offline-first image pipeline, testable core logic, and modular design for maintainability.",
      link: "", // GitHub repo link
      skills: ["Swift", "UIKit", "Swift Concurrency", "DI", "Unit Tests"],
    },
    {
      name: "Flutter Commerce Kit",
      description:
        "Reference app for scalable Flutter architecture: feature modules, BLoC/Provider, Golden tests, and Codemagic CI/CD.",
      link: "", // GitHub repo or demo
      skills: ["Flutter", "Dart", "BLoC", "Codemagic"],
    },
  ],

  // ===== Experience =====
  experience: [
    {
      company: "Tech Mahindra",
      title: "Senior Flutter Engineer",
      dateRange: "2022 — 2024",
      bullets: [
        "Built cross-platform features with strong performance SLAs.",
        "Led refactors toward modular architecture and CI/CD gates.",
      ],
    },
    {
      company: "Volansys",
      title: "Principal iOS Engineer",
      dateRange: "2017 — 2022",
      bullets: [
        "Owned end-to-end delivery for enterprise iOS features.",
        "Mentored teams on SwiftUI/Combine and code quality practices.",
        "Improved crash-free rate to >99.5% using Instruments and profiling.",
      ],
    },
    {
      company: "OpenXcell",
      title: "iOS Engineer",
      dateRange: "2013 — 2017",
      bullets: [
        "Shipped multiple App Store apps with 100k+ users.",
        "Optimized performance and elevated user experience across releases.",
      ],
    },
  ],

  // ===== Education =====
  education: [
    {
      school: "SAIT (School for Advanced Digital Technology)",
      degree: "Integrated Artificial Intelligence Post-Diploma Certificate",
      dateRange: "2025 — 2026 (in progress)",
      achievements: [
        "Courses: AI Governance & Ethics, Applied Statistics, Human-Centred AI, Predictive Analytics, Web & Cloud.",
      ],
    },
    {
      school: "MacEwan University",
      degree: "Project Management Certificate",
      dateRange: "2025",
      achievements: ["Capstone and coursework focused on practical PM frameworks."],
    },
  ],
};

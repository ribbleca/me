import { 
  PersonalInfo, 
  Project, 
  Skill, 
  Experience, 
  Education,
  Testimonial,
  BlogPost,
  MiniTool,
  Achievement,
  Stats,
  Technology,
  SocialLinks,
  SEOConfig
} from '@/types';

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Adna Fika Agestifanka",
  firstName: "Adna",
  lastName: "Agestifanka",
  title: "Full-Stack Developer & Digital Innovator",
  tagline: "Crafting Digital Experiences That Matter",
  bio: "I'm a passionate full-stack developer who loves turning complex problems into elegant solutions. I specialize in modern web technologies and creating user-centric applications.",
  longBio: "As a dedicated full-stack developer with a passion for innovation, I combine technical expertise with creative problem-solving to build digital experiences that not only look stunning but also deliver real value. My journey in technology started with curiosity and has evolved into a commitment to creating solutions that make a difference. I thrive in collaborative environments and believe that the best software is built when diverse perspectives come together.",
  avatar: "/images/adna-avatar.jpg",
  location: "Jakarta, Indonesia",
  email: "hello@adnafika.dev",
  phone: "+62 812-3456-7890",
  birthday: "1998-03-15",
  nationality: "Indonesian",
  languages: [
    { name: "Indonesian", level: "native", flag: "🇮🇩" },
    { name: "English", level: "fluent", flag: "🇺🇸" },
    { name: "Japanese", level: "conversational", flag: "🇯🇵" }
  ],
  interests: [
    "Artificial Intelligence",
    "User Experience Design",
    "Photography",
    "Travel",
    "Music Production",
    "Gaming",
    "Cooking",
    "Sustainable Technology"
  ],
  funFacts: [
    "Can solve a Rubik's cube in under 2 minutes",
    "Once built a weather app that predicted rain with 95% accuracy using ML",
    "Loves collecting vintage keyboards",
    "Can code for 8 hours straight with just coffee and lo-fi music",
    "Has visited 12 countries and coded in each one",
    "Builds mechanical keyboards as a hobby"
  ],
  availability: "available",
  social: {
    github: "https://github.com/adnafika",
    linkedin: "https://linkedin.com/in/adnafika",
    twitter: "https://twitter.com/adnafika",
    instagram: "https://instagram.com/adnafika",
    email: "hello@adnafika.dev",
    website: "https://adnafika.dev",
    medium: "https://medium.com/@adnafika",
    dev: "https://dev.to/adnafika"
  },
  resume: "/files/adna-fika-agestifanka-resume.pdf"
};

// Social Links
export const socialLinks: SocialLinks = personalInfo.social;

// Technologies
export const technologies: Technology[] = [
  // Frontend
  { name: "React", icon: "⚛️", color: "#61DAFB", category: "frontend", proficiency: 95 },
  { name: "Next.js", icon: "▲", color: "#000000", category: "frontend", proficiency: 90 },
  { name: "TypeScript", icon: "🔷", color: "#3178C6", category: "frontend", proficiency: 88 },
  { name: "Vue.js", icon: "💚", color: "#4FC08D", category: "frontend", proficiency: 80 },
  { name: "Svelte", icon: "🧡", color: "#FF3E00", category: "frontend", proficiency: 75 },
  { name: "TailwindCSS", icon: "🎨", color: "#06B6D4", category: "frontend", proficiency: 92 },
  
  // Backend
  { name: "Node.js", icon: "🟢", color: "#339933", category: "backend", proficiency: 87 },
  { name: "Python", icon: "🐍", color: "#3776AB", category: "backend", proficiency: 85 },
  { name: "Express.js", icon: "🚀", color: "#000000", category: "backend", proficiency: 88 },
  { name: "NestJS", icon: "🏰", color: "#E0234E", category: "backend", proficiency: 78 },
  { name: "Go", icon: "🔵", color: "#00ADD8", category: "backend", proficiency: 70 },
  
  // Database
  { name: "PostgreSQL", icon: "🐘", color: "#336791", category: "database", proficiency: 85 },
  { name: "MongoDB", icon: "🍃", color: "#47A248", category: "database", proficiency: 82 },
  { name: "Redis", icon: "🔴", color: "#DC382D", category: "database", proficiency: 78 },
  { name: "Supabase", icon: "⚡", color: "#3ECF8E", category: "database", proficiency: 80 },
  
  // DevOps & Tools
  { name: "Docker", icon: "🐳", color: "#2496ED", category: "devops", proficiency: 83 },
  { name: "AWS", icon: "☁️", color: "#FF9900", category: "devops", proficiency: 75 },
  { name: "Vercel", icon: "▲", color: "#000000", category: "devops", proficiency: 90 },
  { name: "Git", icon: "📦", color: "#F05032", category: "devops", proficiency: 93 },
  
  // Mobile
  { name: "React Native", icon: "📱", color: "#61DAFB", category: "mobile", proficiency: 80 },
  { name: "Flutter", icon: "🦋", color: "#02569B", category: "mobile", proficiency: 75 },
  
  // AI/ML
  { name: "TensorFlow", icon: "🧠", color: "#FF6F00", category: "ai-ml", proficiency: 72 },
  { name: "OpenAI API", icon: "🤖", color: "#412991", category: "ai-ml", proficiency: 85 },
  
  // Design
  { name: "Figma", icon: "🎨", color: "#F24E1E", category: "design", proficiency: 88 },
  { name: "Adobe XD", icon: "💜", color: "#FF61F6", category: "design", proficiency: 80 }
];

// Skills
export const skills: Skill[] = [
  // Programming Languages
  { name: "JavaScript", category: "programming", level: 95, icon: "🟨", yearsOfExperience: 5 },
  { name: "TypeScript", category: "programming", level: 88, icon: "🔷", yearsOfExperience: 3 },
  { name: "Python", category: "programming", level: 85, icon: "🐍", yearsOfExperience: 4 },
  { name: "Go", category: "programming", level: 70, icon: "🔵", yearsOfExperience: 1 },
  { name: "Rust", category: "programming", level: 60, icon: "🦀", yearsOfExperience: 1 },
  
  // Frameworks
  { name: "React", category: "framework", level: 95, icon: "⚛️", yearsOfExperience: 4 },
  { name: "Next.js", category: "framework", level: 90, icon: "▲", yearsOfExperience: 3 },
  { name: "Vue.js", category: "framework", level: 80, icon: "💚", yearsOfExperience: 2 },
  { name: "Express.js", category: "framework", level: 88, icon: "🚀", yearsOfExperience: 3 },
  { name: "NestJS", category: "framework", level: 78, icon: "🏰", yearsOfExperience: 2 },
  
  // Tools
  { name: "Git", category: "tool", level: 93, icon: "📦", yearsOfExperience: 5 },
  { name: "Docker", category: "tool", level: 83, icon: "🐳", yearsOfExperience: 2 },
  { name: "AWS", category: "tool", level: 75, icon: "☁️", yearsOfExperience: 2 },
  { name: "Figma", category: "tool", level: 88, icon: "🎨", yearsOfExperience: 3 },
  
  // Soft Skills
  { name: "Problem Solving", category: "soft-skill", level: 95, icon: "🧩" },
  { name: "Team Collaboration", category: "soft-skill", level: 90, icon: "🤝" },
  { name: "Communication", category: "soft-skill", level: 88, icon: "💬" },
  { name: "Leadership", category: "soft-skill", level: 82, icon: "👑" },
  { name: "Project Management", category: "soft-skill", level: 85, icon: "📋" },
  
  // Design
  { name: "UI/UX Design", category: "design", level: 85, icon: "🎨", yearsOfExperience: 3 },
  { name: "Responsive Design", category: "design", level: 92, icon: "📱", yearsOfExperience: 4 },
  { name: "Design Systems", category: "design", level: 80, icon: "🧱", yearsOfExperience: 2 }
];

// Experience
export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "TechFlow Solutions",
    position: "Senior Full-Stack Developer",
    duration: "2023 - Present",
    startDate: "2023-01-15",
    description: "Leading the development of enterprise web applications using React, Next.js, and Node.js. Mentoring junior developers and contributing to architectural decisions.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led migration from legacy PHP system to modern React/Node.js stack",
      "Mentored 3 junior developers",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    location: "Jakarta, Indonesia",
    type: "full-time",
    logo: "/images/companies/techflow.png"
  },
  {
    id: "exp-2",
    company: "Digital Innovations Co.",
    position: "Full-Stack Developer",
    duration: "2021 - 2022",
    startDate: "2021-06-01",
    endDate: "2022-12-31",
    description: "Developed and maintained multiple client projects ranging from e-commerce platforms to SaaS applications.",
    achievements: [
      "Built 8 client projects from scratch",
      "Increased team productivity by 25% through code standardization",
      "Led technical workshops for team skill development",
      "Received 'Developer of the Year' award"
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "MongoDB", "Firebase"],
    location: "Remote",
    type: "full-time",
    logo: "/images/companies/digital-innovations.png"
  },
  {
    id: "exp-3",
    company: "StartupHub",
    position: "Frontend Developer",
    duration: "2020 - 2021",
    startDate: "2020-03-01",
    endDate: "2021-05-31",
    description: "Focused on creating responsive and interactive user interfaces for various startup projects.",
    achievements: [
      "Reduced page load times by 50% through optimization",
      "Implemented design system used across 5 projects",
      "Contributed to open-source UI component library",
      "Trained team on modern CSS techniques"
    ],
    technologies: ["React", "TypeScript", "Styled Components", "Jest"],
    location: "Bandung, Indonesia",
    type: "full-time",
    logo: "/images/companies/startuphub.png"
  },
  {
    id: "exp-4",
    company: "Freelance",
    position: "Web Developer",
    duration: "2019 - 2020",
    startDate: "2019-01-01",
    endDate: "2020-02-29",
    description: "Provided web development services to small and medium businesses, helping them establish their online presence.",
    achievements: [
      "Completed 15+ freelance projects",
      "Maintained 98% client satisfaction rate",
      "Built responsive websites for various industries",
      "Established long-term relationships with 5 recurring clients"
    ],
    technologies: ["WordPress", "JavaScript", "PHP", "MySQL", "HTML/CSS"],
    location: "Remote",
    type: "freelance",
    logo: "/images/freelance-logo.png"
  }
];

// Education
export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Institut Teknologi Bandung",
    degree: "Bachelor of Science",
    field: "Computer Science",
    duration: "2016 - 2020",
    startDate: "2016-08-01",
    endDate: "2020-07-31",
    description: "Focused on software engineering, algorithms, and data structures. Active in programming competitions and tech communities.",
    achievements: [
      "Graduated Magna Cum Laude with GPA 3.8/4.0",
      "Winner of National Programming Competition 2019",
      "President of Computer Science Student Association",
      "Published research on machine learning optimization"
    ],
    gpa: "3.8",
    location: "Bandung, Indonesia",
    logo: "/images/education/itb.png"
  },
  {
    id: "edu-2",
    institution: "SMA Negeri 1 Jakarta",
    degree: "High School Diploma",
    field: "Science",
    duration: "2013 - 2016",
    startDate: "2013-07-01",
    endDate: "2016-06-30",
    description: "Focused on mathematics and science. Active in robotics and programming clubs.",
    achievements: [
      "Valedictorian with score 95.2/100",
      "1st place in National Robotics Competition",
      "Captain of School Programming Team",
      "National Science Olympiad Bronze Medal"
    ],
    location: "Jakarta, Indonesia",
    logo: "/images/education/sman1.png"
  }
];

// Projects
export const projects: Project[] = [
  {
    id: "project-1",
    title: "EcoTracker",
    description: "A comprehensive sustainability tracking app that helps users monitor their carbon footprint and environmental impact.",
    longDescription: "EcoTracker is a full-stack application that combines IoT sensors, machine learning, and modern web technologies to provide users with real-time insights into their environmental impact. The app features gamification elements, social sharing, and actionable recommendations to promote sustainable living.",
    image: "/images/projects/ecotracker.jpg",
    images: [
      "/images/projects/ecotracker-1.jpg",
      "/images/projects/ecotracker-2.jpg",
      "/images/projects/ecotracker-3.jpg"
    ],
    tags: ["Sustainability", "IoT", "Machine Learning", "Gamification"],
    category: "web-development",
    demoUrl: "https://ecotracker.adnafika.dev",
    githubUrl: "https://github.com/adnafika/ecotracker",
    featured: true,
    status: "completed",
    year: 2024,
    duration: "4 months",
    tech: [
      { name: "Next.js", icon: "▲", color: "#000000", category: "frontend", proficiency: 90 },
      { name: "TypeScript", icon: "🔷", color: "#3178C6", category: "frontend", proficiency: 88 },
      { name: "Node.js", icon: "🟢", color: "#339933", category: "backend", proficiency: 87 },
      { name: "PostgreSQL", icon: "🐘", color: "#336791", category: "database", proficiency: 85 },
      { name: "TensorFlow", icon: "🧠", color: "#FF6F00", category: "ai-ml", proficiency: 72 }
    ],
    challenges: [
      "Integrating IoT sensors with web application",
      "Implementing real-time data processing",
      "Creating accurate carbon footprint calculations",
      "Optimizing ML models for mobile devices"
    ],
    achievements: [
      "Reduced processing time by 60% through optimization",
      "Achieved 95% accuracy in carbon footprint predictions",
      "10,000+ active users within first month",
      "Featured in TechCrunch article"
    ]
  },
  {
    id: "project-2",
    title: "InvoiceFlow",
    description: "A modern invoicing and billing platform designed for freelancers and small businesses.",
    longDescription: "InvoiceFlow streamlines the invoicing process with automated billing, payment tracking, and client management. Built with modern technologies and a focus on user experience.",
    image: "/images/projects/invoiceflow.jpg",
    images: [
      "/images/projects/invoiceflow-1.jpg",
      "/images/projects/invoiceflow-2.jpg"
    ],
    tags: ["SaaS", "Fintech", "Automation", "Business"],
    category: "web-development",
    demoUrl: "https://invoiceflow.adnafika.dev",
    githubUrl: "https://github.com/adnafika/invoiceflow",
    featured: true,
    status: "completed",
    year: 2023,
    duration: "3 months",
    tech: [
      { name: "React", icon: "⚛️", color: "#61DAFB", category: "frontend", proficiency: 95 },
      { name: "Express.js", icon: "🚀", color: "#000000", category: "backend", proficiency: 88 },
      { name: "MongoDB", icon: "🍃", color: "#47A248", category: "database", proficiency: 82 },
      { name: "Stripe API", icon: "💳", color: "#635BFF", category: "other", proficiency: 80 }
    ],
    challenges: [
      "Payment processing integration",
      "Generating PDF invoices",
      "Multi-currency support",
      "Real-time notifications"
    ],
    achievements: [
      "500+ businesses using the platform",
      "99.9% uptime maintained",
      "Integrated with 5 payment gateways",
      "Generated $100K+ in invoices"
    ]
  },
  {
    id: "project-3",
    title: "StudyBuddy",
    description: "An AI-powered study companion that creates personalized learning paths and study schedules.",
    longDescription: "StudyBuddy uses machine learning to analyze study patterns and create optimized learning schedules. Features include flashcards, progress tracking, and collaborative study groups.",
    image: "/images/projects/studybuddy.jpg",
    tags: ["AI", "Education", "Machine Learning", "Productivity"],
    category: "ai-ml",
    demoUrl: "https://studybuddy.adnafika.dev",
    githubUrl: "https://github.com/adnafika/studybuddy",
    featured: true,
    status: "completed",
    year: 2023,
    duration: "5 months",
    tech: [
      { name: "Vue.js", icon: "💚", color: "#4FC08D", category: "frontend", proficiency: 80 },
      { name: "Python", icon: "🐍", color: "#3776AB", category: "backend", proficiency: 85 },
      { name: "TensorFlow", icon: "🧠", color: "#FF6F00", category: "ai-ml", proficiency: 72 },
      { name: "PostgreSQL", icon: "🐘", color: "#336791", category: "database", proficiency: 85 }
    ],
    challenges: [
      "Implementing adaptive learning algorithms",
      "Creating engaging user experience",
      "Handling large datasets efficiently",
      "Personalizing content recommendations"
    ],
    achievements: [
      "2,000+ students using the platform",
      "87% improvement in study efficiency",
      "Featured in EdTech magazine",
      "Partnership with 3 universities"
    ]
  },
  {
    id: "project-4",
    title: "TaskMaster Pro",
    description: "A comprehensive project management tool with team collaboration features and analytics.",
    image: "/images/projects/taskmaster.jpg",
    tags: ["Productivity", "Team Collaboration", "Analytics"],
    category: "web-development",
    demoUrl: "https://taskmaster.adnafika.dev",
    githubUrl: "https://github.com/adnafika/taskmaster",
    featured: false,
    status: "completed",
    year: 2022,
    duration: "6 months",
    tech: [
      { name: "React", icon: "⚛️", color: "#61DAFB", category: "frontend", proficiency: 95 },
      { name: "Node.js", icon: "🟢", color: "#339933", category: "backend", proficiency: 87 },
      { name: "Redis", icon: "🔴", color: "#DC382D", category: "database", proficiency: 78 },
      { name: "Socket.io", icon: "⚡", color: "#010101", category: "other", proficiency: 85 }
    ],
    challenges: [
      "Real-time collaboration features",
      "Complex data visualization",
      "Scalable architecture design",
      "Mobile responsiveness"
    ],
    achievements: [
      "1,000+ teams using the platform",
      "30% increase in team productivity",
      "Real-time collaboration for 100+ users",
      "Featured in Product Hunt"
    ]
  },
  {
    id: "project-5",
    title: "WeatherWise",
    description: "A beautiful weather app with AI-powered predictions and personalized recommendations.",
    image: "/images/projects/weatherwise.jpg",
    tags: ["Mobile", "AI", "Weather", "Design"],
    category: "mobile-app",
    demoUrl: "https://weatherwise.adnafika.dev",
    githubUrl: "https://github.com/adnafika/weatherwise",
    featured: false,
    status: "completed",
    year: 2022,
    duration: "2 months",
    tech: [
      { name: "React Native", icon: "📱", color: "#61DAFB", category: "mobile", proficiency: 80 },
      { name: "OpenAI API", icon: "🤖", color: "#412991", category: "ai-ml", proficiency: 85 },
      { name: "Firebase", icon: "🔥", color: "#FFCA28", category: "database", proficiency: 88 }
    ],
    challenges: [
      "Accurate weather predictions",
      "Beautiful animations",
      "Offline functionality",
      "Battery optimization"
    ],
    achievements: [
      "50,000+ downloads",
      "4.8/5 rating on app stores",
      "95% weather prediction accuracy",
      "Featured in Apple App Store"
    ]
  },
  {
    id: "project-6",
    title: "CodeSnippet Manager",
    description: "A developer tool for organizing, sharing, and discovering code snippets with syntax highlighting.",
    image: "/images/projects/codesnippet.jpg",
    tags: ["Developer Tools", "Code Management", "Productivity"],
    category: "tools",
    demoUrl: "https://codesnippet.adnafika.dev",
    githubUrl: "https://github.com/adnafika/codesnippet",
    featured: false,
    status: "completed",
    year: 2021,
    duration: "3 months",
    tech: [
      { name: "Svelte", icon: "🧡", color: "#FF3E00", category: "frontend", proficiency: 75 },
      { name: "Go", icon: "🔵", color: "#00ADD8", category: "backend", proficiency: 70 },
      { name: "PostgreSQL", icon: "🐘", color: "#336791", category: "database", proficiency: 85 }
    ],
    challenges: [
      "Syntax highlighting for multiple languages",
      "Fast search functionality",
      "Version control for snippets",
      "Public/private snippet management"
    ],
    achievements: [
      "5,000+ developers using the tool",
      "Support for 50+ programming languages",
      "1M+ code snippets stored",
      "API used by 100+ applications"
    ]
  }
];

// Featured Projects
export const featuredProjects = projects.filter(project => project.featured);

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "TechFlow Solutions",
    content: "Adna is an exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding. They've been instrumental in our team's success.",
    rating: 5,
    avatar: "/images/testimonials/sarah.jpg",
    project: "EcoTracker",
    date: "2024-01-15"
  },
  {
    id: "test-2",
    name: "Michael Chen",
    position: "CTO",
    company: "Digital Innovations Co.",
    content: "Working with Adna was a game-changer for our company. They not only delivered excellent code but also brought innovative ideas that improved our entire development process.",
    rating: 5,
    avatar: "/images/testimonials/michael.jpg",
    project: "InvoiceFlow",
    date: "2023-08-20"
  },
  {
    id: "test-3",
    name: "Emily Rodriguez",
    position: "UI/UX Designer",
    company: "StartupHub",
    content: "Adna has an incredible ability to translate design concepts into pixel-perfect implementations. Their collaboration skills and technical expertise make them a valuable team member.",
    rating: 5,
    avatar: "/images/testimonials/emily.jpg",
    project: "StudyBuddy",
    date: "2023-05-10"
  },
  {
    id: "test-4",
    name: "David Park",
    position: "Founder",
    company: "EduTech Startup",
    content: "Adna delivered our project ahead of schedule and exceeded all expectations. Their proactive communication and technical skills are impressive. Highly recommended!",
    rating: 5,
    avatar: "/images/testimonials/david.jpg",
    project: "Custom LMS",
    date: "2022-11-30"
  }
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Building Sustainable Web Applications",
    slug: "building-sustainable-web-applications",
    excerpt: "Learn how to create web applications that are not only efficient but also environmentally conscious.",
    content: "# Building Sustainable Web Applications\n\nIn today's world, developers have a responsibility to create applications that are not only functional but also sustainable...",
    image: "/images/blog/sustainable-web.jpg",
    tags: ["Sustainability", "Web Development", "Green Tech"],
    category: "technology",
    publishedAt: "2024-01-15",
    readTime: 8,
    featured: true,
    status: "published",
    author: {
      name: "Adna Fika Agestifanka",
      avatar: "/images/adna-avatar.jpg",
      bio: "Full-Stack Developer & Digital Innovator",
      social: personalInfo.social
    },
    views: 1250,
    likes: 89
  },
  {
    id: "blog-2",
    title: "The Future of AI in Web Development",
    slug: "future-of-ai-in-web-development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications.",
    content: "# The Future of AI in Web Development\n\nArtificial Intelligence is transforming every industry, and web development is no exception...",
    image: "/images/blog/ai-web-dev.jpg",
    tags: ["AI", "Machine Learning", "Web Development", "Future Tech"],
    category: "technology",
    publishedAt: "2023-12-20",
    readTime: 12,
    featured: true,
    status: "published",
    author: {
      name: "Adna Fika Agestifanka",
      avatar: "/images/adna-avatar.jpg",
      bio: "Full-Stack Developer & Digital Innovator",
      social: personalInfo.social
    },
    views: 2100,
    likes: 156
  },
  {
    id: "blog-3",
    title: "Mastering React Server Components",
    slug: "mastering-react-server-components",
    excerpt: "A comprehensive guide to understanding and implementing React Server Components in your Next.js applications.",
    content: "# Mastering React Server Components\n\nReact Server Components represent a paradigm shift in how we think about React applications...",
    image: "/images/blog/react-server-components.jpg",
    tags: ["React", "Next.js", "Server Components", "Tutorial"],
    category: "tutorial",
    publishedAt: "2023-11-10",
    readTime: 15,
    featured: false,
    status: "published",
    author: {
      name: "Adna Fika Agestifanka",
      avatar: "/images/adna-avatar.jpg",
      bio: "Full-Stack Developer & Digital Innovator",
      social: personalInfo.social
    },
    views: 1800,
    likes: 132
  }
];

// Mini Tools
export const miniTools: MiniTool[] = [
  {
    id: "tool-1",
    name: "JSON Formatter",
    description: "Format, validate, and beautify JSON data with syntax highlighting.",
    icon: "🔧",
    category: "utility",
    featured: true,
    component: "JsonFormatter",
    path: "/tools/json-formatter",
    tags: ["JSON", "Format", "Validate", "Developer"]
  },
  {
    id: "tool-2",
    name: "Color Palette Generator",
    description: "Generate beautiful color palettes for your design projects.",
    icon: "🎨",
    category: "generator",
    featured: true,
    component: "ColorPalette",
    path: "/tools/color-palette",
    tags: ["Colors", "Design", "Palette", "Generator"]
  },
  {
    id: "tool-3",
    name: "Base64 Encoder/Decoder",
    description: "Encode and decode Base64 strings quickly and easily.",
    icon: "🔐",
    category: "converter",
    featured: true,
    component: "Base64Converter",
    path: "/tools/base64",
    tags: ["Base64", "Encode", "Decode", "Converter"]
  },
  {
    id: "tool-4",
    name: "Text Case Converter",
    description: "Convert text between different cases: uppercase, lowercase, camelCase, and more.",
    icon: "📝",
    category: "text",
    featured: false,
    component: "TextCaseConverter",
    path: "/tools/text-case",
    tags: ["Text", "Case", "Convert", "Format"]
  },
  {
    id: "tool-5",
    name: "Password Generator",
    description: "Generate secure passwords with customizable options.",
    icon: "🔑",
    category: "generator",
    featured: true,
    component: "PasswordGenerator",
    path: "/tools/password-generator",
    tags: ["Password", "Security", "Generator", "Random"]
  },
  {
    id: "tool-6",
    name: "QR Code Generator",
    description: "Create QR codes for URLs, text, and contact information.",
    icon: "📱",
    category: "generator",
    featured: false,
    component: "QRGenerator",
    path: "/tools/qr-generator",
    tags: ["QR Code", "Generator", "URL", "Mobile"]
  }
];

// Achievements
export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "National Programming Competition Winner",
    description: "1st place in Indonesia National Programming Competition 2019",
    date: "2019-11-15",
    type: "award",
    organization: "Indonesian Computer Society",
    icon: "🏆",
    url: "https://competition.example.com/2019"
  },
  {
    id: "ach-2",
    title: "AWS Certified Solutions Architect",
    description: "Professional level certification in AWS cloud architecture",
    date: "2023-06-20",
    type: "certification",
    organization: "Amazon Web Services",
    icon: "☁️",
    url: "https://aws.amazon.com/certification/"
  },
  {
    id: "ach-3",
    title: "Google Developer Expert",
    description: "Recognized as Google Developer Expert in Web Technologies",
    date: "2023-09-10",
    type: "recognition",
    organization: "Google",
    icon: "🌟",
    url: "https://developers.google.com/community/experts"
  },
  {
    id: "ach-4",
    title: "100K+ Developer Tool Users",
    description: "CodeSnippet Manager reached over 100,000 active users",
    date: "2023-03-01",
    type: "milestone",
    organization: "Personal Project",
    icon: "🚀"
  }
];

// Statistics
export const stats: Stats = {
  projectsCompleted: 50,
  yearsOfExperience: 5,
  technologiesUsed: 25,
  happyClients: 30,
  coffeeCups: 1500,
  linesOfCode: 250000
};

// SEO Configuration
export const seoConfig: SEOConfig = {
  title: "Adna Fika Agestifanka - Full-Stack Developer & Digital Innovator",
  description: "Portfolio of Adna Fika Agestifanka, a passionate full-stack developer specializing in React, Next.js, and modern web technologies. Creating digital experiences that matter.",
  keywords: [
    "Adna Fika Agestifanka",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "JavaScript",
    "TypeScript",
    "Indonesia Developer",
    "Portfolio",
    "Software Engineer"
  ],
  author: "Adna Fika Agestifanka",
  url: "https://adnafika.dev",
  image: "/images/og-image.jpg",
  twitterHandle: "@adnafika",
  locale: "en_US"
};

const portfolioData = {
  personalInfo,
  socialLinks,
  technologies,
  skills,
  experiences,
  education,
  projects,
  featuredProjects,
  testimonials,
  blogPosts,
  miniTools,
  achievements,
  stats,
  seoConfig
};

export default portfolioData;
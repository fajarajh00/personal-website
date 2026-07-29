import { Bot, Code2, Database, Figma, Github, Linkedin, Mail, MonitorSmartphone, Palette, Server, Smartphone, Terminal } from "lucide-react";
import type { BlogPost, Certificate, NavItem, Project, SkillCategory, SocialLink, Testimonial, TimelineItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/fajarajh00", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/fajar-slamet-aghafianto-24b09b379", icon: Linkedin },
  { label: "Email", href: "mailto:hello@fajar.dev", icon: Mail }
];

export const skillCategories: SkillCategory[] = [
  { title: "Frontend", description: "React, Next.js, TypeScript, Tailwind CSS", icon: Code2, skills: [{ name: "React", level: 92 }, { name: "Next.js", level: 90 }, { name: "TypeScript", level: 88 }] },
  { title: "Backend", description: "API design, Node.js, auth, server logic", icon: Server, skills: [{ name: "Node.js", level: 78 }, { name: "REST API", level: 84 }, { name: "Auth", level: 75 }] },
  { title: "Mobile", description: "Responsive web dan React Native basics", icon: Smartphone, skills: [{ name: "Responsive UI", level: 94 }, { name: "React Native", level: 70 }, { name: "PWA", level: 78 }] },
  { title: "Database", description: "Relational dan document database", icon: Database, skills: [{ name: "PostgreSQL", level: 76 }, { name: "MongoDB", level: 72 }, { name: "Prisma", level: 80 }] },
  { title: "DevOps", description: "Deployment, CI, monitoring, Vercel", icon: Terminal, skills: [{ name: "Vercel", level: 88 }, { name: "GitHub Actions", level: 74 }, { name: "Docker", level: 68 }] },
  { title: "UI/UX", description: "Design system, prototyping, usability", icon: Figma, skills: [{ name: "Figma", level: 86 }, { name: "Design System", level: 84 }, { name: "Accessibility", level: 82 }] },
  { title: "AI Tools", description: "AI-assisted workflow dan automation", icon: Bot, skills: [{ name: "Prompting", level: 88 }, { name: "Code AI", level: 86 }, { name: "Automation", level: 80 }] }
];

export const projects: Project[] = [
  { title: "Nexa Commerce", description: "Dashboard commerce dengan analytics real-time, katalog produk, dan checkout flow yang ringan.", image: "/projects/nexa-commerce.svg", tech: ["Next.js", "TypeScript", "Stripe", "Tailwind"], github: "https://github.com/fajarajh00/nexa-commerce", live: "https://nexa-commerce.vercel.app" },
  { title: "Linear Task Hub", description: "Aplikasi task management dengan command palette, kanban board, dan motion-based interactions.", image: "/projects/linear-task-hub.svg", tech: ["React", "Framer Motion", "Zustand", "Supabase"], github: "https://github.com/fajarajh00/linear-task-hub", live: "https://linear-task-hub.vercel.app" },
  { title: "Aura Finance", description: "Landing page fintech premium dengan kalkulator investasi dan conversion-focused sections.", image: "/projects/aura-finance.svg", tech: ["Next.js", "Tailwind", "Recharts", "SEO"], github: "https://github.com/fajarajh00/aura-finance", live: "https://aura-finance.vercel.app" },
  { title: "Studio OS", description: "Workspace untuk creative agency: pipeline project, invoices, dan client portal.", image: "/projects/studio-os.svg", tech: ["TypeScript", "Prisma", "PostgreSQL", "NextAuth"], github: "https://github.com/fajarajh00/studio-os", live: "https://studio-os.vercel.app" },
  { title: "Pulse Health", description: "UI health monitoring responsif dengan chart interaktif dan desain accessibility-first.", image: "/projects/pulse-health.svg", tech: ["React", "Charts", "PWA", "A11y"], github: "https://github.com/fajarajh00/pulse-health", live: "https://pulse-health.vercel.app" },
  { title: "EduFlow AI", description: "Platform belajar adaptif dengan rekomendasi materi, quiz builder, dan AI study assistant.", image: "/projects/eduflow-ai.svg", tech: ["Next.js", "AI SDK", "PostgreSQL", "Tailwind"], github: "https://github.com/fajarajh00/eduflow-ai", live: "https://eduflow-ai.vercel.app" }
];

export const experiences: TimelineItem[] = [
  { role: "Frontend Engineer", company: "Independent Projects", period: "2025 - Sekarang", description: ["Membangun aplikasi web modern berbasis Next.js dan TypeScript.", "Mengoptimalkan Core Web Vitals, SEO, dan aksesibilitas untuk produk digital."] },
  { role: "UI Developer", company: "Freelance", period: "2024 - 2025", description: ["Mendesain dan mengimplementasikan landing page responsif untuk UMKM dan personal brand.", "Membuat komponen reusable dengan Tailwind CSS dan design token konsisten."] },
  { role: "Web Development Learner", company: "Self Directed", period: "2023 - 2024", description: ["Mempelajari HTML, CSS, JavaScript, React, Git, dan deployment workflow.", "Mengerjakan project kecil untuk memperkuat fundamental frontend."] }
];

export const certificates: Certificate[] = [
  { title: "React Frontend Architecture", issuer: "Frontend Masters Path", date: "2026", image: "/certificates/react-architecture.svg" },
  { title: "Next.js Performance", issuer: "Vercel Learning", date: "2026", image: "/certificates/next-performance.svg" },
  { title: "UI/UX Design System", issuer: "Design Academy", date: "2025", image: "/certificates/design-system.svg" },
  { title: "Web Accessibility", issuer: "A11y Institute", date: "2025", image: "/certificates/accessibility.svg" }
];

export const testimonials: Testimonial[] = [
  { name: "Raka Pratama", role: "Product Manager", quote: "Fajar mampu mengubah brief yang abstrak menjadi antarmuka yang rapi, cepat, dan mudah digunakan.", avatar: "/avatars/raka.svg" },
  { name: "Dina Maharani", role: "Founder Startup", quote: "Kolaborasinya jelas, detail visualnya kuat, dan hasil akhirnya terasa premium tanpa mengorbankan performa.", avatar: "/avatars/dina.svg" },
  { name: "Ardi Saputra", role: "Backend Engineer", quote: "Kode frontendnya bersih, typed dengan baik, dan sangat mudah diintegrasikan dengan API.", avatar: "/avatars/ardi.svg" }
];

export const blogPosts: BlogPost[] = [
  { title: "Membangun Landing Page yang Cepat dan Terukur", excerpt: "Prinsip layout, asset loading, dan micro interaction untuk landing page modern.", date: "20 Juli 2026", readTime: "6 min", href: "#" },
  { title: "Design System Kecil untuk Project Personal", excerpt: "Cara menjaga konsistensi visual tanpa membuat sistem desain yang terlalu berat.", date: "12 Juli 2026", readTime: "5 min", href: "#" },
  { title: "Checklist SEO untuk Next.js App Router", excerpt: "Metadata, Open Graph, sitemap, robots, dan structured data dalam satu alur kerja.", date: "4 Juli 2026", readTime: "7 min", href: "#" }
];

export const values = [
  { title: "Clarity", text: "Setiap layar harus menjelaskan dirinya sendiri tanpa membuat pengguna berpikir terlalu keras.", icon: MonitorSmartphone },
  { title: "Craft", text: "Detail kecil seperti spacing, motion, dan empty state menentukan kualitas pengalaman.", icon: Palette },
  { title: "Performance", text: "Desain terbaik tetap harus cepat, ringan, dan stabil di perangkat nyata.", icon: Terminal }
];

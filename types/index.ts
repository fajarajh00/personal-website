import type { LucideIcon } from "lucide-react";

export type NavItem = { label: string; href: string };
export type SocialLink = { label: string; href: string; icon: LucideIcon };
export type SkillCategory = { title: string; description: string; skills: { name: string; level: number }[]; icon: LucideIcon };
export type Project = { title: string; description: string; image: string; tech: string[]; github: string; live: string };
export type TimelineItem = { role: string; company: string; period: string; description: string[] };
export type Certificate = { title: string; issuer: string; date: string; image: string };
export type Testimonial = { name: string; role: string; quote: string; avatar: string };
export type BlogPost = { title: string; excerpt: string; date: string; readTime: string; href: string };

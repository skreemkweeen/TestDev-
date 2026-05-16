import type { Project, TimelineItem, ProcessStep } from "@/types";

export const projects: Project[] = [
  {
    id: "01",
    title: "Orbital Interface",
    category: "Immersive Experience",
    year: "2024",
    description: "A spatial computing interface for next-generation AR navigation. Designed to dissolve the boundary between digital and physical space.",
    tags: ["WebGL", "Three.js", "Spatial UX"],
    color: "#4A9EFF",
    featured: true,
  },
  {
    id: "02",
    title: "Phantom OS",
    category: "Product Design",
    year: "2024",
    description: "Operating system UI for autonomous vehicle dashboards. Zero-distraction design language built for high-velocity environments.",
    tags: ["Motion Design", "Systems", "HMI"],
    color: "#60B4FF",
    featured: true,
  },
  {
    id: "03",
    title: "Cipher Protocol",
    category: "Brand Identity",
    year: "2023",
    description: "Cryptographic identity system for a Web3 security firm. Dark intelligence meets editorial precision.",
    tags: ["Identity", "Motion", "Web3"],
    color: "#8CC8FF",
    featured: true,
  },
  {
    id: "04",
    title: "Neon Architecture",
    category: "Digital Installation",
    year: "2023",
    description: "Generative architecture visualization for a luxury real estate developer. Where data becomes atmosphere.",
    tags: ["Generative", "WebGL", "Data Viz"],
    color: "#A8D8FF",
    featured: false,
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "New Frontier",
    description: "Pioneering spatial computing and AI-integrated design systems",
    detail: "Leading immersive experiences for Fortune 100 companies",
  },
  {
    year: "2022",
    title: "Studio Expansion",
    description: "Scaled to a multi-disciplinary creative technology studio",
    detail: "20+ projects delivered across entertainment, fintech, and luxury",
  },
  {
    year: "2020",
    title: "Element UX Founded",
    description: "Born at the intersection of art, engineering, and strategy",
    detail: "First client: an award-winning immersive retail experience",
  },
  {
    year: "2018",
    title: "The Origin",
    description: "Research into human-centered computing and WebGL storytelling",
    detail: "Published frameworks for cinematic web experiences",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Deep research into your brand, audience, and competitive landscape.",
    detail: "We map the emotional terrain before a single pixel is placed.",
  },
  {
    number: "02",
    title: "Conceive",
    description: "Translating insight into a singular creative vision.",
    detail: "Concepts are stress-tested against experience goals and technical constraints.",
  },
  {
    number: "03",
    title: "Craft",
    description: "Precision-engineered experiences built for lasting impact.",
    detail: "Every frame, every transition, every interaction is intentional.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Rigorous QA, performance optimization, and seamless deployment.",
    detail: "We measure success in seconds of awe, not just page views.",
  },
];

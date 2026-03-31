import {
  lk,
  mech,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tata,
  blender,
  java,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/cogniqravi",
  },
  {
    name: "LinkedIn",
    icon: backend, // Placeholder for LinkedIn icon
    link: "https://linkedin.com/",
  },
];

export const resumeLink = "/Ravi_Resume.pdf";


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: reactjs,
  },
  {
    title: "AI Solutions",
    icon: backend,
  },
  {
    title: "Cloud & DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Founder",
    company_name: "Cogniq AI",
    icon: meta,
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Founding and leading an AI-focused startup dedicated to innovative tool and product development.",
      "Overseeing the end-to-end lifecycle of AI products, from initial concept and research to full-scale deployment.",
      "Driving business growth by implementing cutting-edge AI solutions that solve complex real-world challenges.",
    ],
  },
  {
    title: "Software Developer & DevOps",
    company_name: "LK Machinery India PVT LTD",
    icon: lk,
    iconBg: "white",
    date: "Aug 2023 - Present",
    points: [
      "Architecting and developing full-fledged CRM and HRMS systems to automate core business processes.",
      "Managing enterprise-grade server infrastructure on Windows Server 2022 and cloud-based VPS environments.",
      "Driving DevOps strategy by hosting and scaling mission-critical applications on AWS and custom VPS solutions.",
      "Bridging the gap between software development and stable infrastructure operations for high-availability systems.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Sakav Technology",
    icon: mech,
    iconBg: "black",
    date: "Jan 2023 - July 2023",
    points: [
      "Engineered high-performance web applications using the MERN stack and Next.js for various client projects.",
      "Delivered SEO-optimized, pixel-perfect frontend designs with high Lighthouse scores and organic reach.",
      "Collaborated on the end-to-end design and development of multiple production-ready websites and platforms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Portfolio Ravi",
    description:
      "A premium 3D portfolio website built with React, Three.js, and Framer Motion, showcasing my journey as a Founder and Full Stack Developer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/cogniqravi/3D_PORTFOLIO_RAVI",
  },
  {
    name: "Full Fledge CRM",
    description:
      "A comprehensive CRM system designed for LK Machinery, featuring HRMS integration, automated workflows, and robust data management for enterprise-scale operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/cogniqravi/",
  },
  {
    name: "Next.js SEO Platform",
    description:
      "An SEO-focused web platform built during my tenure at Sakav Tech, utilizing Next.js server-side rendering and performance optimization techniques.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/cogniqravi/",
  },
];

export { services, technologies, experiences, testimonials, projects };
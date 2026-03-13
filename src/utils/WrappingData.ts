import { Figma, Github, Instagram, Linkedin } from "lucide-react";
import { BsBootstrap } from "react-icons/bs";
import { FaVuejs } from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSass,
  SiNextdotjs,
  SiReactquery,
  SiGit,
  SiRedux,
  SiPostman,
  SiTailwindcss,
  SiCss,
  SiTypescript,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiMui,
  SiShadcnui,
  SiPhp,
} from "react-icons/si";
export const dataProject = [
  {
    namaWeb: "Prisma Saestu Wisesa",
    TechStack:
      "React Js, Framer Motion, Tailwind Css, Swiper, Flowbite, Mail Js",
    linkWeb: "https://www.prismasaestuwisesa.com/",
    linkGithub: "https://github.com/BangOns/PT.PRISMA-SAESTU-WISESA",
    imageWeb: "/img/project-1.webp",
    description:
      "Successfully developed the Prisma Saestu Wisesa company profile website, providing a modern and responsive platform to showcase the company’s profile, services, and values, helping improve the company's digital presence.",
  },
  {
    namaWeb: "Plantopia",
    TechStack: "Next Js, Tailwind Css, Framer Motion, Shadcn UI, Use Debounce",
    linkWeb: "https://plantopia2.vercel.app/",
    linkGithub: "https://github.com/BangOns/plantopia2.git",
    imageWeb: "/img/project-2.webp",
    description:
      "Built Plantopia, an interactive plant introduction website that utilizes smooth animations and parallax effects to deliver an engaging and immersive user experience.",
  },
  {
    namaWeb: "Attendance",
    TechStack:
      "Next Js, Tailwind Css, Framer Motion, Shadcn UI, Firebase, sweetalert2, Generative AI",
    linkWeb: "https://attendance-mini-project.vercel.app/",
    linkGithub: "https://github.com/BangOns/mini-project-syahroni",
    imageWeb: "/img/project-3.webp",
    description:
      "Developed an attendance management system using Next.js, Firebase, and Shadcn UI, providing a user-friendly interface for tracking and managing attendance records.",
  },
  {
    namaWeb: "Text Random",
    TechStack: "Next Js, Tailwind Css, JSONPlaceholder ",
    linkWeb: "https://text-random.vercel.app/",
    linkGithub: "https://github.com/BangOns/TextRandom.git",
    imageWeb: "/img/project-4.webp",
    description:
      "Created a text random generator website using Next.js and Tailwind CSS, providing a user-friendly interface for generating random text.",
  },
];

export const dataTekno = [
  { name: "HTML5", icon: SiHtml5, hex: "#E34F26" },
  { name: "CSS", icon: SiCss, hex: "#264DE4" },
  { name: "JavaScript", icon: SiJavascript, hex: "#F7DF1E" },
  { name: "Typescript", icon: SiTypescript, hex: "#0000EE" },
  { name: "PHP", icon: SiPhp, hex: "#0000EE" },
];
export const frameworkFrontend = [
  { name: "React", icon: SiReact, hex: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, hex: null },
  { name: "Vue.js", icon: FaVuejs, hex: "#42B883" },
  { name: "Tailwind CSS", icon: SiTailwindcss, hex: "#06B6D4" },
  { name: "Bootstrap", icon: BsBootstrap, hex: "#0000EE" },
  { name: "Material UI", icon: SiMui, hex: "#06B6D4" },
  { name: "Shadcn UI", icon: SiShadcnui, hex: null },
  { name: "Sass", icon: SiSass, hex: "#CC6699" },
  { name: "Redux", icon: SiRedux, hex: "#764ABC" },
  { name: "React Query", icon: SiReactquery, hex: "#FF4154" },
];
export const frameworkBackend = [
  { name: "Express", icon: SiExpress, hex: null },
  { name: "Laravel", icon: SiLaravel, hex: "#FF4154" },
];
export const Database = [
  { name: "MySql", icon: SiMysql, hex: null },
  { name: "PostgreSQL", icon: SiPostgresql, hex: "#61DAFB" },
  { name: "MongoDb", icon: SiMongodb, hex: "#42B883" },
];

export const dataOther = [
  { name: "Git", icon: SiGit, hex: "#F05032" },
  { name: "Postman", icon: SiPostman, hex: "#FF6C37" },
  { name: "Figma", icon: Figma, hex: "#000000" },
];

export const Socmed = [
  {
    LinkWeb: "https://instagram.com/syahroni18_?igshid=ZGUzMzM3NWJiOQ==",
    ImageWeb: Instagram,
  },
  { LinkWeb: "https://github.com/BangOns", ImageWeb: Github },
  {
    LinkWeb: "https://www.linkedin.com/in/syahroni18/",
    ImageWeb: Linkedin,
  },
];

export const SocmedTop = [
  { LinkWeb: "https://github.com/BangOns", ImageWeb: Github },
  {
    LinkWeb: "https://www.linkedin.com/in/syahroni18/",
    ImageWeb: Linkedin,
  },
];

export const dataExperience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "PT Kreasindo Karya Abadi",
    duration: "August 2025 - Present",
    description:
      "Developing modern web applications using React, Next.js, and Tailwind CSS. Built a scalable folder structure using the Atomic Design methodology and created around 10 reusable components and custom hooks to improve development efficiency. Collaborated closely with the UI/UX and backend teams to solve implementation challenges and ensure a responsive, high-quality user interface.",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "PT Spero Mahakarya Nusantara",
    duration: "February - June 2025",
    description:
      "Contributed to the development of a web application by implementing several core booking features for venue reservations. Built user interfaces using Material UI and improved code quality by refactoring a large component from around 1000 lines into approximately 300 lines, making the code more maintainable and easier to understand.",
  },
  {
    id: 3,
    role: "Frontend Developer (Independent Study)",
    company: "Alterra Academy",
    duration: "February - June 2024",
    description:
      "Completed the Independent Study program at Alterra Academy with excellent results. Successfully finished all learning modules and was selected as the Lead Frontend Developer for the final project, responsible for implementing the user interface and ensuring responsive design.",
  },
];

export const dataCertificates = [
  {
    id: 1,
    title: "React Developer Certification",
    issuer: "Coursera",
    date: "August 2023",
    driveLink: "https://drive.google.com/file/d/placeholder1",
    image: "/img/project1.png",
  },
  {
    id: 2,
    title: "Frontend Web UI Frameworks",
    issuer: "Udemy",
    date: "May 2023",
    driveLink: "https://drive.google.com/file/d/placeholder2",
    image: "/img/project2.png",
  },
];

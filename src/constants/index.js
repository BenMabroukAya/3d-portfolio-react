import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web,
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

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Spring Boot Developer",
    icon: backend,
  },
  {
    title: "AI & Automation Enthusiast",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "HEC Electricity",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2025 – Jun 2025",
    points: [
      "Designed and developed a full-stack project and appointment management platform.",
      "Built using MERN stack (MongoDB, Express.js, React, Node.js) and Docker.",
      "Created REST APIs and ensured responsiveness and usability.",
    ],
  },
  {
    title: "Game Development Intern",
    company_name: "CGI Studio",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2024 – Sep 2024",
    points: [
      "Developed interactive 2D/3D scenes in Unity.",
      "Handled character animation, level design, and AI scripting.",
      "Used C# and Blender for game asset integration.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Leader Solution Tactile (AURES GROUP)",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2024",
    points: [
      "Created a full-stack internship management web app.",
      "Used Next.js, Node.js, Express, and PostgreSQL.",
      "Implemented user roles, CRUD, and responsive UI.",
    ],
  },
  {
    title: "IT Technician Intern",
    company_name: "Blanco Security",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2022 – Dec 2022",
    points: [
      "Maintained surveillance and IT infrastructure.",
      "Installed hardware/software and configured security systems.",
      "Resolved networking and device issues.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aya’s dedication and skill during her internship made a real difference in our workflow.",
    name: "Fictional Mentor",
    designation: "Project Manager",
    company: "HEC Electricity",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    testimonial:
      "She has a strong eye for detail and quickly adapted to new technologies in game development.",
    name: "Fictional Supervisor",
    designation: "Lead Developer",
    company: "CGI Studio",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

const projects = [
  {
    name: "Freelance Platform Deployment",
    description:
      "Deployed a Spring MVC-based freelance management platform using Docker and Kubernetes on Minikube with MySQL database integration.",
    tags: [
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "spring",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/", // Replace with your real repo
  },
  {
    name: "Employee Management App",
    description:
      "Built an ASP.NET Core MVC app with dependency injection, LINQ, and role-based data control.",
    tags: [
      {
        name: "aspnetcore",
        color: "blue-text-gradient",
      },
      {
        name: "mvc",
        color: "green-text-gradient",
      },
      {
        name: "sqlserver",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mobile Leave Manager",
    description:
      "Developed a cross-platform leave management mobile app using Flutter and Firebase with admin control.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };

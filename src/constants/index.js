import {
  aures,
  backend,
  blanco,
  cgi,
  creator,
  cryptolab,
  css,
  docker,
  employee,
  freelancer,
  git,
  hec,
  html,
  java,
  javascript,
  Kubernetes,
  microservices,
  mobile,
  mongodb,
  next,
  PostgreSQL,
  python,
  reactjs,
  selenium,
  soa,
  springboot,
  tailwind,
  web
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
  // Langages de programmation
  { name: "Java", icon: java },
  {
    name: "JavaScript",
    icon: javascript,
  },
    /*{ name: "TypeScript", icon: typescript },*/
  { name: "Python", icon: python },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },

  // Frameworks et bibliothèques
  { name: "React JS", icon: reactjs },
  { name: "Next.js", icon: next },
  { name: "Spring Boot", icon: springboot },
  { name: "Tailwind CSS", icon: tailwind },

  // Bases de données
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: PostgreSQL },

  // DevOps / Cloud / Conteneurs
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: Kubernetes },

  // Outils de développement
  { name: "Git", icon: git }
];


const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "HEC Electricity",
    icon: hec,
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
    icon: cgi,
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
    icon: aures,
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
    icon: blanco,
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
    name: "Imed HAMED",
    designation: "Project Manager",
    company: "HEC Electricity"  },
  {
    testimonial:
      "She has a strong eye for detail and quickly adapted to new technologies in game development.",
    name: "Amenallah BEN ACHOUR",
    designation: "Lead Developer",
    company: "CGI Studio"  },
];
const projects = [
  {
    name: "Freelance Platform Deployment",
    description:
      "Deployed a Spring MVC-based freelance management platform using Docker and Kubernetes on Minikube with MySQL database integration.",
    tags: [
      { name: "docker", color: "blue-text-gradient" },
      { name: "kubernetes", color: "green-text-gradient" },
      { name: "spring", color: "pink-text-gradient" },
    ],
    image: freelancer,
    source_code_link: "https://github.com/BenMabroukAya/freelanceApp",
  },
  {
    name: "Employee Management App",
    description:
      "Built an ASP.NET Core MVC app with dependency injection, LINQ, and role‑based data control.",
    tags: [
      { name: "aspnetcore", color: "blue-text-gradient" },
      { name: "mvc", color: "green-text-gradient" },
      { name: "sqlserver", color: "pink-text-gradient" },
    ],
    image: employee,
    source_code_link: "https://github.com/BenMabroukAya/EmployeeManagement_WebAPI",
  },
  /*{
    name: "Mobile Leave Manager",
    description:
      "Developed a cross‑platform mobile leave management app using Flutter and Firebase with an admin panel.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
    ],
    image: mobileapp,
    source_code_link: "https://github.com/BenMabroukAya/LeaveManagement",
  },*/


  {
    name: "PyCryptoLab",
    description:
      "A Python cryptography toolkit exploring hash functions (SHA256, RIPEMD160) and encryption algorithms (AES, DES, RSA, ElGamal), useful for experimenting with secure data transformation.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "cryptography", color: "green-text-gradient" },
    ],
    image: cryptolab, 
    source_code_link: "https://github.com/BenMabroukAya/PyCryptoLab",
  },
  {
    name: "SeleniumTest",
    description:
      "Automated browser testing with Selenium WebDriver—scripts cover form interactions, navigation checks, and test suite organization to ensure web UI stability.",
    tags: [
      { name: "selenium", color: "blue-text-gradient" },
      { name: "testing", color: "green-text-gradient" },
    ],
    image: selenium,
    source_code_link: "https://github.com/BenMabroukAya/SeleniumTest",
  },
  {
    name: "SOAP Projects",
    description:
      "Collection of Java SOAP services and clients—demonstrates WSDL creation, endpoint handling, and XML‑based SOAP communication.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "soap", color: "green-text-gradient" },
    ],
    image: soa,
    source_code_link: "https://github.com/BenMabroukAya/SoapProjects",
  },
  /*{
    name: "RMI Projects",
    description:
      "Java RMI-based distributed applications showcasing remote object invocation, server–client communication, and threading via stubs and skeletons.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "rmi", color: "green-text-gradient" },
    ],
    image: rmi,
    source_code_link: "https://github.com/BenMabroukAya/RMI",
  },*/
  {
    name: "Microservices Architecture",
    description:
      "Microservices suite built with Spring Boot—each service (e.g., catalog, orders) communicates via REST/RabbitMQ. Adopted DDD, CQRS, and PostgreSQL integration.",
    tags: [
      { name: "spring boot", color: "blue-text-gradient" },
      { name: "microservices", color: "green-text-gradient" },
      { name: "docker", color: "pink-text-gradient" },
    ],
    image: microservices,
    source_code_link: "https://github.com/BenMabroukAya/Microservices",
  },
  /*{
    name: "Spring JPA App",
    description:
      "Spring Boot app using Spring Data JPA for persistence—includes custom repositories, entity relationships, CRUD operations, and MySQL integration.",
    tags: [
      { name: "spring jpa", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/BenMabroukAya/SpringJpa",
  },
  {
    name: "Immo Tax Manager",
    description:
      "Real estate tax management tool (ImmoTaxManager) built with Java/Swing—handles property info, tax calculations and report generation for client portfolios.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "desktop", color: "green-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/BenMabroukAya/ImmoTaxManager-",
  },*/
];


export { experiences, projects, services, technologies, testimonials };

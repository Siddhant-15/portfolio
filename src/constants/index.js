import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  cpp,
  python,
  django,
  nextjs,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  cubastion,
  nxtwave,
  doodleai,
  comfy,
  sortvis,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "NextJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Django Developer",
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
    name: "Next JS",
    icon: nextjs,
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
    name: "Django",
    icon: django,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Cubastion Consulting",
    icon: cubastion,
    iconBg: "#383E56",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "DSA Content Writer Intern",
    company_name: "Nxtwave",
    icon: nxtwave,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Present",
    points: [
      "Created 50+ high-quality Data Structures and Algorithms (DSA) questions using C++, Python, and Java, improving learner engagement",
      "Collaborated with content teams to review and refine educational materials, ensuring accuracy and clarity.",
      "Designed well-structured questions to cater to students and professionals learning DSA, enhancing the learning experience.",
      "Contributed to the continuous improvement of existing content based on feedback, ensuring its relevance and effectiveness.",
    ],
  },
];

const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

const projects = [
  {
    name: "Doodle AI",
    description:
      "An innovative platform featuring advanced image processing tools like restoration, recoloring, object removal, and background removal. Includes secure authentication, credit-based transformations, and a responsive, user-friendly interface. Perfect for showcasing expertise in scalable and modern application development.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: doodleai,
    live_link: "https://doodleai-two.vercel.app",
    source_code_link: "https://github.com/Siddhant-15/doodleai",
  },
  {
    name: "Comfy Store",
    description:
      "This project is an E-Commerce platform built using React.js for the frontend . It offers a user-friendly interface for customers to browse through a variety of products, view detailed product information, and make purchases. The platform also provides features like user authentication, product filtering, and cart management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: comfy,
    live_link: "https://e-commerce-platform-sooty.vercel.app",
    source_code_link: "https://github.com/Siddhant-15/E-Commerce-Platform",
  },
  {
    name: "Sorting Visualizer",
    description:
      "Developed a Sorting Visualizer web application using ReactJS to demonstrate algorithms like Bubble Sort, Quick Sort, and Merge Sort. Implemented efficient state management for smooth visualizations and interactive user experiences. Designed an intuitive interface to enhance understanding of sorting processes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sortvis,
    live_link: "https://sorting-visualizer-delta-five.vercel.app/",
    source_code_link: "https://github.com/Siddhant-15/Sorting-Visualizer",
  },
];

export { services, technologies, experiences, calculateSizes, projects };

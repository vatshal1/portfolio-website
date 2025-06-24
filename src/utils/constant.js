//-> Educational logo
import college from "../assets/education_logo/akido_college.jpeg";
import school from "../assets/education_logo/school.webp";

//-> Skills logo
import c from "../assets/skills_logo/c.webp";
import cpp from "../assets/skills_logo/cpp.webp";
import js from "../assets/skills_logo/javascript.webp";

import html from "../assets/skills_logo/HTML.png";
import css from "../assets/skills_logo/css.png";
import react from "../assets/skills_logo/react.jpeg";
import redux from "../assets/skills_logo/redux.webp";
import tailwind from "../assets/skills_logo/tailwindcss.webp";
import bootstrap from "../assets/skills_logo/Bootstrap.png";

import nodejs from "../assets/skills_logo/nodejs.jpg";
import express from "../assets/skills_logo/express.webp";
import mongodb from "../assets/skills_logo/mongodb.webp";
import mySql from "../assets/skills_logo/mysql.webp";

import git from "../assets/skills_logo/git.webp";
import github from "../assets/skills_logo/github.webp";
import netlify from "../assets/skills_logo/netlify.webp";
import postman from "../assets/skills_logo/postman.webp";
import vercel from "../assets/skills_logo/vercel.webp";
import vscode from "../assets/skills_logo/vscode.webp";

//-> projects logo
import blogWebsite from "../assets/projects_logo/blogWebsite.webp";
import chatApp from "../assets/projects_logo/chat_app.webp";
import EcommerceCart from "../assets/projects_logo/e-commerceCart.webp";
import jokeGenerator from "../assets/projects_logo/joke_generator.webp";
import todoApp from "../assets/projects_logo/To-do_app.webp";

//->
export const skillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "React", logo: react },
      { name: "Redux", logo: redux },
      { name: "Tailwind", logo: tailwind },
      { name: "bootstrap", logo: bootstrap },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Nodejs", logo: nodejs },
      { name: "Express", logo: express },
      { name: "Mongodb", logo: mongodb },
      { name: "MySql", logo: mySql },
    ],
  },

  {
    title: "Languages",
    skills: [
      { name: "C", logo: c },
      { name: "C++", logo: cpp },
      { name: "Javascript", logo: js },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "VsCode", logo: vscode },
      { name: "Git", logo: git },
      { name: "Github", logo: github },
      { name: "Vercel", logo: vercel },
      { name: "Netlify", logo: netlify },
      { name: "Postman", logo: postman },
    ],
  },
];

//->
export const educationInfo = [
  {
    id: 0,
    img: college,
    school: "Akido college of Engineering",
    date: "Nov 2021 - July 2024",
    grade: "66%",

    desc: "I completed my Bachelor's degree in Computer Application from Akido College of Engineering, Bahadurgarh. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at college allowed me to work on projects that applied theoretical concepts to real-world problems.",

    degree: "Bachelor of Computer Applications - BCA",
  },

  {
    id: 1,
    img: school,
    school: "RP Public School",
    date: "April 2020 - June 2021",
    grade: "84%",
    desc: "I completed my class 12 education from RP Public School, kotdwara, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },

  {
    id: 2,
    img: school,
    school: "RP Public School",
    date: "April 2018 - March 2019",
    grade: "86.5%",
    desc: "I completed my class 10 education from RP Public School, Kotdwara, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

//->
export const projects = [
  {
    id: 0,
    title: "Blog Website",
    description:
      "A full-stack blogging platform with authentication, content management, and responsive design. Features include creating, editing, and deleting posts, and comment system. Built with modern web technologies for optimal performance and user experience.",
    image: blogWebsite,
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/vatshal1/Blog_website",
    webapp: "https://blog-website-frontend-sigma.vercel.app/",
  },
  {
    id: 1,
    title: "Chat applicaion",
    description:
      "Real-time messaging application with instant chat functionality, user presence indicators. Implements WebSocket technology for seamless communication and includes features like online/offline status. ",
    image: chatApp,
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/vatshal1/Mern_chat-app",
    webapp: "https://mern-chat-app-blue.vercel.app/",
  },
  {
    id: 2,
    title: "ECommerce Cart",
    description:
      "Dynamic shopping cart application with product browsing, cart management, and state persistence. Features include add/remove items, quantity updates, price calculations, and responsive design. Demonstrates modern React patterns and state management. ",
    image: EcommerceCart,
    tags: ["React JS", "Redux Toolkit", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/vatshal1/E-commerce-cart",
    webapp: "https://e-commerce-cart-react.netlify.app/",
  },
  {
    id: 3,
    title: "ToDo list",
    description:
      "Full-stack task management application with CRUD operations, and data persistence. Features include task creation, completion tracking. Perfect for productivity and organization ",
    image: todoApp,
    tags: [
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/vatshal1/todo-list",
    webapp: "https://todo-list-vlu0.onrender.com",
  },
  {
    id: 4,
    title: "Joke Generator",
    description:
      "Interactive web application that fetches and displays random jokes using external APIs. Features include category filtering. Demonstrates API integration and dynamic content rendering with a clean, humorous interface.",
    image: jokeGenerator,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/vatshal1/todo-list",
    webapp: "https://joke-generator-two-livid.vercel.app/",
  },
];

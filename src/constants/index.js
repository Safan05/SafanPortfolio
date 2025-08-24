import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I’m a computer engineer who enjoys building modern software and hardware projects. I work with technologies like React, Node.js, and MongoDB on the software side, and have experience in FPGA, Verilog, and logic design on the hardware side. I’m always curious to learn new things and find smart solutions to technical challenges.`;

export const ABOUT_TEXT = `My journey as a computer engineer has always been about exploring both software and hardware. I’ve worked on different projects ranging from web development with React and Node.js to hardware design with FPGA and Verilog. I enjoy problem-solving and learning new technologies along the way. Outside of coding, I like staying active, discovering new ideas, and sometimes contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Junior Full Stack Developer",
    company: "Freelancer",
    description: `Developed personal projects including a portfolio and SIVO Space Agency website. Enhanced skills in full-stack development, focusing on creating interactive and scalable applications.`,
    technologies: ["JavaScript", "React.js", "Node.js", "MongoDB"],
  },
  {
    year: "2023 - present",
    role: "Competitive Programmer",
    company: "Codeforces",
    description: `rated as pupil in codeforces , sharing in contests and gaining experience from using different algorithms and data structres`,
    technologies: ["C++", "Algorithms", "Data Structure"],
  },
  {
    year: "2020 - 2021",
    role: "Intel Isef Competitor",
    company: "Intel Isef",
    description: `Shared in intel isef competition with a space exploration robot using arduino programming alongside with various used sensors like UV sensors`,
    technologies: ["Arduino", "electronics", "Scientific Research"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link:"https://github.com/Safan05/ShoppingCart-React"
  },
  {
    title: "Search Engine",
    image: project2,
    description:
      "Search engine application that allows users to search for information across various sources.",
    technologies: ["Java", "React", "Springboot"],
    link:"https://github.com/Safan05/SearchEngine"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, contact information and having users and dashboard for projects.",
    technologies: ["HTML", "CSS", "Node.js", "JavaScript"],
    link:"https://github.com/Safan05/Portfolio"
  },
  {
    title: "PaintForKid",
    image: project4,
    description:
      "Painting application using oop , written in c++",
    technologies: ["C++", "OOP", "Algorithms", "DataStructure"],
    link:"https://github.com/Safan05/Paint_4_kids"
  },
  {
    title: "AES encryption system",
    image: project5,
    description:
      "Using verilog and fgpa to desgin a sequential logic design system for AES encryption",
    technologies: ["Verilog", "FPGA", "Logic design"],
    link:"https://github.com/Safan05/AES"
  },
];

export const CONTACT = {
  address: "Cairo, Egypt",
  phoneNo: "+201289090397 ",
  email: "AbdallahSafan05@gmail.com",
};
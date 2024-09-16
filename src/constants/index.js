import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate computer engineer with expertise in crafting innovative software and hardware solutions. With strong problem-solving skills, I have experience in front-end technologies like React, back-end technologies like Node.js and MongoDB, and hardware design, including FPGA, Verilog, and logic design. My goal is to leverage my technical expertise and problem-solving abilities to create efficient, scalable solutions that deliver exceptional user experiences and drive innovation.`;

export const ABOUT_TEXT = `I am a versatile computer engineer with a passion for software and hardware development. In addition to my experience in web development, I have a solid background in logic design, FPGA, and Verilog. My expertise in algorithms and problem-solving enables me to tackle complex technical challenges and deliver high-quality solutions. Throughout my journey, I have worked on a variety of projects, constantly seeking to expand my skills and adapt to new challenges. I thrive in collaborative environments, where I can solve problems efficiently and contribute to innovative projects. Outside of work, I enjoy exploring new technologies, staying active, and contributing to open-source communities.`;

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
    title: "SIVO Space Agency",
    image: project2,
    description:
      "Webpage for SIVO space agency , with features like animations",
    technologies: ["HTML", "CSS", "JS"],
    link:"https://github.com/Safan05/Template-3-Front"
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
import {
    mobile,
    backend,
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
    github,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    blocktheif,
    Lightly,
    Chatsphere,
    threejs,
    feedback1,
    feedback2,
    feedback3,
    
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
      title: "UI/UX Designer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "Working on our class project, Himasha's skills in software development were evident. His ability to troubleshoot complex issues and provide efficient solutions was impressive.",
      name: "Thakshana",
      designation: "Director",
      company: "Web Genesis",
      image: feedback1,
    },
    {
      testimonial: "Himasha has a knack for understanding client needs. His contributions to our university tech club's website were thoughtful and well-executed, reflecting his keen attention to detail.",
      name: "Kavindu",
      designation: "Event coordinator",
      company: "Games Guild",
      image:feedback3,
    },
    {
      testimonial: "In our group assignments, Himasha's coding skills were a standout. His approach to problem-solving and his commitment to quality were truly beneficial to our projects.",
      name: "Hasini",
      designation: "CTO",
      company: "456 Enterprises",
      image: feedback2,
    },
  ];
  
  const projects = [
    {
      name: "BlockThief",
      description:
        "Web-based fake product identification platform using blockchain. Utilizing hardhat, react , mongoDB and python  ",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Hardhat",
          color: "orange-text-gradient",
        },
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: blocktheif,
      source_code_link: "https://github.com/leptonworks/blocktheif-system",
      logo: github, // Add the logo property for the first project
    },
    {
      name: "Lightly",
      description:
        "A mobile application UI designed to solve the electricity wastage, Providing essential functionalities to track and manage electricity wastage .",
      tags: [
        {
          name: "Figma",
          color: "pink-text-gradient",
        },
      ],
      image: Lightly,
      source_code_link: "https://www.figma.com/file/pP1yv1jUynzY9Pvv1Fxlnu/Final?node-id=41%3A14943&t=DVzWMDbV7H6PvYB9-1",
      logo: figma, // Add the logo property for the second project
    },
    {
      name: "ChatSphere",
      description:
        "A full-stack chat app built with Node JS, React JS, and ChatEngine.io. Features include real-time messaging, authentication, file attachments, group chats, DMs, and read receipts.",
      tags: [
        {
          name: "Node Js",
          color: "blue-text-gradient",
        },
        {
          name: "ChatEngine.io",
          color: "green-text-gradient",
        },
        {
          name: "React JS",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "orange-text-gradient",
        },
      ],
      image: Chatsphere,
      source_code_link: "https://github.com/HimashaHerath/ChatSphere",
      logo: github, // Add the logo property for the third project
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
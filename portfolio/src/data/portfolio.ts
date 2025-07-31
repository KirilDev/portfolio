import certCLI from '../lib/certCLI.png';
import certPreAccelerator from '../lib/certPreaccelerator.png';
import niktobofia from '../lib/image.png';
import certHTMLCSS from '../lib/certHTMLCSS.png'

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education' | 'project';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  issuer: string;
  issueDate: string;
  imageUrl: string;
  certificateUrl: string;
  category: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const personalInfo = {
  name: "Kirill",
  title: "Student & Technology Enthusiast",
  email: "kirilluschin@gmail.com",
  phone: "+371 26006893",
  location: "Latvia",
  bio: "Passionate student exploring the intersection of technology and creativity. I love building innovative solutions and learning new technologies that push the boundaries of what's possible.",
  calendlyUrl: "https://calendar.app.google/fAqqYLJBLPk38QjM8",
  resumeUrl: "https://drive.google.com/drive/folders/1w5liy6PzNjjsrH8V2RMBfzHCkVnOjTfi?usp=sharing"
};

export const experiences: Experience[] = [
  {
    id: "3",
    company: "Cozy 秋田 Studio",
    position: "Founder",
    duration: "July 2025 - Present",
    location: "On-site, Riga, Latvia",
    description: [
      "my little cozy space where i create content, IT projects, etc."
    ],
    technologies: ["Content Creation", "Project Management", "Pet-Projects"],
    type: "work"
  },
  {
    id: "0",
    company: "Riga State Technical School (RVT)",
    position: "Student",
    duration: "September 2024 - Present",
    location: "Onsite, Riga, Latvia",
    description: [
      "Currently pursuing a Secondary professional degree in Computer Science at the Riga State Technical School."
    ],
    technologies: ["Python", "Git", "HTML", "CSS", "Software Development Basics", "Figma", "Office Environment"],
    type: "education"
  },
  {
    id: "1",
    company: "Karumu Sala",
    position: "Barista",
    duration: "June 2025 - August 2025",
    location: "Onsite, Riga, Latvia",
    description: [
      "Summer part-time job as a barista at Karumu Sala, café in Riga"
    ],
    technologies: ["Team Work", "Coffee Making", "Time management", "Communications"],
    type: "work"
  },
  {
    id: "2",
    company: "DevOps Wizards",
    position: "Intern Developer",
    duration: "March 2025 - June 2025",
    location: "Remote, Riga, Latvia",
    description: [
      "Intern at DevOps Wizards, a software development company",
    ],
    technologies: ["Python", "Git/GitHub", "Linux", "Ansible", "Attlasian Products (Trello, Confluence)", "Google Meet", "n8n"],
    type: "work"
  },
    {
    id: "2",
    company: "Young Folks Studios",
    position: "Junior Game Developer",
    duration: "January 2023 - August 2023",
    location: "Hybrid, Riga, Latvia",
    description: [
      "Indi Game Dev company where I work as a Junior Game Developer and in the team built game called 'Niktofobia (https://yfstudios.itch.io/niktofobija)'",
    ],
    technologies: ["Unity", "C#", "Git/GitHub", "Discord", "Trello", "Documentation"],
    type: "work"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Glappy: AI Mental Health Assistant",
    description: "Hackathon project for Hack4AI 2025",
    longDescription: "Hackathon project for Hack4AI 2025.",
    technologies: ["Python", "OpenAI API", "Native HTML&CSS&JS"],
    imageUrl: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/387/126/datas/original.jpg",
    demoUrl: "https://devpost.com/software/glappy",
    githubUrl: "https://github.com/kirill/ai-creative-assistant",
    featured: true,
    category: "Hackathon"
  },
  {
    id: "2",
    title: "Personal Portfolio",
    description: "My personal portfolio website created with modern framework like React and Vite and using Vercel for deployment and modern AI tools to learn new technologies. This portfolio created as a project for Summer of Code 2025 organized by Hack Club.",
    longDescription: "My personal portfolio website created with modern framework like React and Vite.",
    technologies: ["React", "Vite", "TypeScript", "Vercel"],
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D3DAQHNMwIE5hYE0w/image-scale_191_1128/B4DZfP11wCGsAc-/0/1751538687580/cozy_akita_studio_cover?e=2147483647&v=beta&t=CvGLRAVYsz4pkpEB6k9SeVZ_GMb50gZyelzvrU8v2ok",
    demoUrl: "https://itskirill.vercel.app",
    githubUrl: "https://github.com/KirilDev/portfolio",
    featured: false,
    category: "Development"
  },
  {
    id: "3",
    title: "HR Assistant",
    description: "Hackathon project for Hack4AI 2024",
    longDescription: "HR Assistant - AI-powered solution for HR's to automate tasks and improve efficiency.",
    technologies: ["Python", "Flask", "HTML/CSS"],
    imageUrl: "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/813/895/datas/medium.png",
    demoUrl: "https://devpost.com/software/project12",
    githubUrl: "https://github.com/KirilDev",
    featured: false,
    category: "Hackathon"
  },
   {
    id: "4",
    title: "Digital Escape",
    description: "GameJam Project for Gun Game Studio",
    longDescription: "GameJam project for Gun Game Studio, created in 72 hours with my brother (BrothersTeam)",
    technologies: ["Unity", "C#", "GitHub", "3D Voxel"],
    imageUrl: "https://img.itch.zone/aW1hZ2UvMjExMzMwMC8xMjQ0Mjk2Ni5wbmc=/original/0vWXYm.png",
    demoUrl: "https://brothersteam.itch.io/digital-escape",
    githubUrl: "https://github.com/KirilDev/The-Game-Jam-Project",
    featured: false,
    category: "Hackathon"
  },
   {
    id: "5",
    title: "Niktofobia",
    description: "Young Fols Studios Project",
    longDescription: "3D horror from the first person. Play as the girl Eva, with a hazy past and fear of the dark.",
    technologies: ["Unity", "C#"],
    imageUrl: niktobofia,
    demoUrl: "https://yfstudios.itch.io/niktofobija",
    githubUrl: "https://tomasvotruba.com/assets/images/posts/2020/kodiak/kodiak_focus.png",
    featured: true,
    category: "Hackathon"
  },
];

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Command line Basics",
    description: "A comprehensive introduction to Python programming, covering data structures, web scraping, and databases.",
    issuer: "Scrimba",
    issueDate: "July 21 2025",
    imageUrl: certCLI,
    certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/ABC123456789",
    category: ""
  },
    {
    id: "2",
    title: "Pre-accelerator Program Part 1 ",
    description: "A comprehensive introduction to Python programming, covering data structures, web scraping, and databases.",
    issuer: "Startup House Riga",
    issueDate: "June 14 2025",
    imageUrl: certPreAccelerator,
    certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/ABC123456789",
    category: ""
  },
  {
    id: "3",
    title: "Learn HTML and CSS",
    description: "A comprehensive introduction to Python programming, covering data structures, web scraping, and databases.",
    issuer: "Scrimba",
    issueDate: "July 24 2025",
    imageUrl: certHTMLCSS,
    certificateUrl: "https://scrimba.com/certificate-cert2uNjfKA1yk1diHJ1q7vJU5YCmtxiFjziNPz",
    category: ""
  },
];

export const skills: Skill[] = [
  {
    category: "Skills",
    items: ["Python", "Git", "GitHub", "React Basics", "Frontend Development"]
  },
];

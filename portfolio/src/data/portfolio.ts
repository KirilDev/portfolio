
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
  calendlyUrl: "https://calendar.app.google/fAqqYLJBLPk38QjM8"
};

export const experiences: Experience[] = [
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
    position: "Staff Developer Intern",
    duration: "March 2025 - Present",
    location: "Remote, Riga, Latvia",
    description: [
      "Intern at DevOps Wizards, a software development company",
    ],
    technologies: ["Python", "Git/GitHub", "Linux", "Ansible", "Attlasian Products (Trello, Confluence)", "Google Meet", "n8n"],
    type: "work"
  },
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
];

export const skills: Skill[] = [
  {
    category: "Skills",
    items: ["Python", "Git", "GitHub"]
  },
];

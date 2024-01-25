import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Keshav Kumar",
  initials: "Keshav",
  location: "Bengaluru, India",
  locationLink: "https://g.co/kgs/hsvbyBs",
  about: "Full Stack Engineer, Trying to learn new things everyday.",
  summary:
    "Hello! I am currently an SDE Intern at Jupiter.money, equipped with holistic knowledge in software development, IT support, and UX design. Additionally, I have experience in DevOps, Android, and Web Development. My objective is to pursue a growth-oriented and challenging career where I can contribute my knowledge and skills to the organization, while enhancing my experience through continuous learning and teamwork.",
  avatarUrl: "https://media.licdn.com/dms/image/D5603AQF1KWn8KdQyvA/profile-displayphoto-shrink_200_200/0/1703613522662?e=1711584000&v=beta&t=yGyPCJPBifWYMBWqbyWPPIqw59rCtGtw5ZGeg6j6Y2I",
  personalWebsiteUrl: "https://keshavop.vercel.app/",
  contact: {
    email: "keshavkumar8122@gmail.com",
    tel: "+917857982609",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/keshavop",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/keshavop",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "keshavkrop",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Lovely Professional University",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2020",
      end: "2024",
    },
    {
      school: "Hope Hall Foundation School",
      degree: "High School",
      start: "2018",
      end: "2020",
    },
    {
      school: "D.A.V Public School",
      degree: "Secondary School",
      start: "2007",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Jupiter.money",
      link: "https://jupiter.money/",
      badges: ["In Office"],
      title: "SDE Intern - Jupiter",
      start: "2023",
      end: "Present",
      description:
        "Designed and implemented an internal dashboard feature for managing recruiter job details, assignments, and other relevant information. Leveraged React JavaScript, Axios, Chakra UI.,,,Recently developed a new app using React Native, Expo, and Paper, facilitating employee management tasks such as login, logout, and leave management, while also functioning as a timely reminder system.,,,Contributed significantly to the TTT Academy website by building the complete user onboarding flow and user edit page using Next.js, Axios, and Styled Components.",
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Java/Kotlin",
    "Spring Boot",
    "Docker",
    "SQL/NoSQL",
  ],
  projects: [
    {
      title: "Codesync IDE",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js","Socket.io", "Rapid API"],
      description:
        "Codesync IDE is a collaborative code editor that allows you to code in real-time with other developers. It's a platform designed to make coding collaboration seamless and efficient.",
      link: {
        label: "Live Demo",
        href: "https://codesyncide.vercel.app",
      },
    },
    {
      title: "Streamy YT Clone",
      techStack: ["React.js", "Redux", "Tailwind CSS", "Youtube API"],
      description:
        "Youtube Clone built with React for the front end and powered by Youtube API. It's a platform designed to make coding collaboration seamless and efficient.",
      link: {
        label: "Live Demo",
        href: "https://streamyytclone.vercel.app",
      },
    },
  ],
} as const;

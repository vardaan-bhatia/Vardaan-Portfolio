import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Vardaan Bhatia",
  initials: "VB",
  url: "https://www.vardaanbhatia.com/",
  location: "India",
  description:
    "Frontend Developer who loves learning new tech and building clean, responsive, user-friendly web applications.",
  project: "Latest projects! 🚀",
  avatarUrl: "/me.jpg",
  skills: [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "JWT",
    "OAuth",
    "Redux Toolkit",
    "Zustand",
    "Tailwind CSS",
    "ShadCN",
    "Material UI",
    "Aceternity UI",
    "Git",
    "GitHub",
    "Vercel",
    "Docker",
    "Postman",
    "Socket.IO",
    "WebRTC",
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vardaan-bhatia-028446203/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/vardaanbhatia__",
        icon: Icons.x,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vardaan-bhatia",
        icon: Icons.github,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@vardaanbhatia55",
        icon: Icons.medium,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:vardaanbhatia55@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Wipro Technologies",
      href: "https://www.wipro.com/",
      badges: [],
      location: "Greater Noida",
      title: "Associate - Developer & QA Engineer",
      logoUrl: "/wipro.png",
      start: "March 2022",
      end: "July 2023",
      description:
        "Worked as a QA Tester (Manual) for multiple clients including Colgate and Johnson & Johnson. Contributed to the development of 'WiLearn,' Wipro's in-house Learning Management System (LMS) platform. Implemented key features such as a customizable dashboard, an interactive course catalog with advanced search and filtering capabilities, allowing users to easily find courses based on topics or certifications, and a dynamic quiz and assessment module providing instant feedback to learners.",
    },
  ],
  education: [
    {
      school: "Chandigarh University",
      href: "https://www.cuchd.in/",
      degree: "Master's in Computer Applications (MCA)",
      logoUrl: "/cuchd.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Chhatrapati Shahu Ji Maharaj University",
      href: "https://csjmu.ac.in/",
      degree: "Bachelor's in Computer Applications (BCA)",
      logoUrl: "/csjmu.png",
      start: "2018",
      end: "2021",
    },
  ],
  certificates: [
    {
      title: "Programming with JavaScript",
      issuer: "Meta-Coursera",
      url: "https://drive.google.com/file/d/1Vt0wpAz2XM74PmK0a1N3_2w5O1ZfzDi-/view?usp=drive_link",
      date: "Sep 2023",
      logoUrl: "/meta.png",
    },
    {
      title: "Software Development Trainee",
      issuer: "AMCAT",
      url: "https://www.myamcat.com/certificate/14096721/software-development-trainee/166",
      date: "Oct 2023",
      logoUrl: "/amcat.jpg", // Add company logo image here
    },
    {
      title: "ReactJS: The Complete Guide",
      issuer: "Infosys Springboard",
      url: "https://drive.google.com/file/d/1vXEJ8hyhzdx_EDVN1DQ9FcvQ-3wWoZP_/view?usp=drive_link",
      date: "Nov 2023",
      logoUrl: "/infosys.jpg", // Add AWS logo image here
    },

    {
      title: "Python 3 Programming",
      issuer: "University of Michigan-Coursera",
      url: "https://drive.google.com/file/d/18Dno_itGnGo8sFwImUUOYcs0Qw5hkTPM/view?usp=sharing",
      date: "Jan 2024",
      logoUrl: "/coursera.jpg", // Add AWS logo image here
    },
    {
      title: "Prodigy Case Competition",
      issuer: "IIM Bangalore's Vista",
      url: "https://drive.google.com/file/d/1cwXBYUc_0a8urMpjcnRRHjDjFmQd1BAA/view?usp=sharing",
      date: "Mar 2020",
      logoUrl: "/iim.jpg", // Add AWS logo image here
    },
  ],
  projects: [
    {
      title: "LinkLytics",
      href: "https://linklytics.online/",
      dates: "Sep 2024 - Present",
      active: true,
      description:
        "Linklytics is a URL shortener with built-in analytics and Google authentication. Shorten links effortlessly while gaining insights on click data, user locations, and device types all in one streamlined platform.",
      technologies: [
        "React.js",
        "Context API",
        "Javascript",
        "TailwindCSS",
        "Supabase",
        "Shadcn UI",
        "Recharts",
      ],
      links: [
        {
          type: "Live",
          href: "https://linklytics.online/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vardaan-bhatia/LinkLytics",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/linklytics.jpg",
    },
    {
      title: "CU-Meet",
      href: "https://cu-meet-webrtc.vercel.app/",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "CU-Meet is a seamless video conferencing platform designed for effortless connection and collaboration. It delivers a user-friendly experience tailored to all your video conferencing needs.",
      technologies: [
        "Next.js",
        "Javascript",
        "Socket.io",
        "Peer.js",
        "WebRTC",
        "TailwindCSS",
        "Aceternity UI",
      ],
      links: [
        {
          type: "Live",
          href: "https://cu-meet-webrtc.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vardaan-bhatia/CU-MEET",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cumeet.jpg",
    },
    {
      title: "MealMate",
      href: "https://mealmatebyvardaan.vercel.app/",
      dates: "July 2024 - Present",
      active: true,
      description:
        "MealMate is a smart food delivery app featuring real-time restaurant listings, customizable menus, and secure payments, enhanced with an AI help bot for personalized support. With location-based services and efficient cart management.",
      technologies: [
        "React.js",
        "Javascript",
        "Redux Toolkit",
        "Auth0",
        "SCSS",
        "OpenAI",
        "Razrorpay",
      ],
      links: [
        {
          type: "Live",
          href: "https://mealmatebyvardaan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vardaan-bhatia/MealMate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mealmate.jpg",
    },
    {
      title: "Primetube",
      href: "https://primetube.netlify.app/",
      dates: "May 2024 - Present",
      active: true,
      description:
        "PrimeTube is an intuitive video streaming platform offering smooth playback, voice search, and secure payments for premium content. With AI assistance, responsive design, and organized channel browsing.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
        "Material UI",
        "RapidAPI",
        "Razorpay",
      ],
      links: [
        {
          type: "Live",
          href: "https://primetube.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vardaan-bhatia/PrimeTube",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yt.jpg",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;

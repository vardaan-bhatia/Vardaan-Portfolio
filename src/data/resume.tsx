import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vardaan Bhatia",
  initials: "VB",
  url: "https://dillion.io",
  location: "India",
  description:
    "Frontend Developer passionate about learning and building impactful user experiences.",
  avatarUrl: "/me.jpg",
  skills: [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Next.js",
    "TypeScript",
    "Node.js",
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
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://medium.com/@vardaanbhatia55",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vardaan-bhatia",
        icon: Icons.github,

        navbar: true,
      },
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
      title: "Associate - QA Engineer & Developer",
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
      school: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
      href: "https://csjmu.ac.in/",
      degree: "Bachelor's in Computer Applications (BCA)",
      logoUrl: "/csjmu.png",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;

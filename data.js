const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },

  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.jpg",
    canOpen: true,
  },
  {
    id: "arc",
    name: "Articles", // was "arc"
    icon: "arc.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.jpg",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.jpg",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.jpg",
    canOpen: true,
  },
  {
    id: "Archive",
    name: "Archive", // was "Trash"
    icon: "trash.jpg",
    canOpen: false,
  },
];

const achievements = [
  {
    id: 1,
    title: "Supernova Hackathon Semifinalist",
    date: "2025",
    description:
      "Built an AI-powered web solution under 24 hours during Supernova.",
    image: "/images/leetcode.png", // placeholder
    link: "https://certificate-link.com/supernova",
  },
  {
    id: 2,
    title: "HackCBS Semifinalist",
    date: "2024",
    description:
      "Participated in one of the largest student-run hackathons at Delhi University.",
    image: "/images/leetcode.png", // placeholder
    link: "https://certificate-link.com/hackcbs",
  },
  {
    id: 3,
    title: "LeetCode Competitive Programming",
    date: "2004 — Present",
    username: "blueonion",
    image: "/images/leetcode.png", // placeholder
    link: "https://leetcode.com/u/Blue_onion/",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "GO"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TailwindCSS", "GSAP"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST API", "JWT"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    category: "Deployment",
    items: ["Docker", "CI/CD", "Vercel"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Linux"],
  },
  {
    category: "Integrations",
    items: ["Clerk", "Resend", "Gemini AI"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Blue-Onion",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/insta.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/adityasinghrawat54/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/Blue_Onion_3480",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/aditya-singh-rawat-0a7416326",
  },
];

const LIBRARY_LOCATION = {
  id: 1,
  type: "library",
  name: "Library",
  icon: "/icons/gicon1.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Sunset Beach",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/gal1.png",
    },
    {
      id: 2,
      name: "Mountain Vista",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 right-20",
      imageUrl: "/images/gal2.png",
    },
    {
      id: 3,
      name: "City Lights",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-40",
      imageUrl: "/images/gal3.png",
    },
    {
      id: 4,
      name: "Forest Path",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-80",
      imageUrl: "/images/gal4.png",
    },
  ],
};

const MEMORIES_LOCATION = {
  id: 2,
  type: "memories",
  name: "Memories",
  icon: "/icons/gicon2.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Summer 2024",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-5 left-10",
      imageUrl: "/images/gal1.png",
    },
    {
      id: 2,
      name: "Birthday Party",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gal2.png",
    },
    {
      id: 3,
      name: "Graduation Day",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gal3.png",
    },
  ],
};

const PLACES_LOCATION = {
  id: 3,
  type: "places",
  name: "Places",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Paris",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/gal1.png",
    },
    {
      id: 2,
      name: "Tokyo",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-20 left-80",
      imageUrl: "/images/gal2.png",
    },
    {
      id: 3,
      name: "New York",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-20",
      imageUrl: "/images/gal3.png",
    },
    {
      id: 4,
      name: "Barcelona",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-60 left-40",
      imageUrl: "/images/gal4.png",
    },
  ],
};

const PEOPLE_LOCATION = {
  id: 4,
  type: "people",
  name: "People",
  icon: "/icons/gicon4.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Family",
      icon: "/images/mankriti2.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/man1.jpeg",
    },
    {
      id: 2,
      name: "Friends",
      icon: "/images/mankriti1.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/man2.jpeg",
    },
  ],
};

const FAVORITES_LOCATION = {
  id: 5,
  type: "favorites",
  name: "Favorites",
  icon: "/icons/gicon5.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Best Shot 1",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-5 left-5",
      imageUrl: "/images/gal1.png",
    },
    {
      id: 2,
      name: "Best Shot 2",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-20",
      imageUrl: "/images/gal2.png",
    },
    {
      id: 3,
      name: "Best Shot 3",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-60",
      imageUrl: "/images/gal3.png",
    },
  ],
};

const photosLinks = {
  library: LIBRARY_LOCATION,
  memories: MEMORIES_LOCATION,
  places: PLACES_LOCATION,
  people: PEOPLE_LOCATION,
  favorites: FAVORITES_LOCATION,
};

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  achievements,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nike Ecommerce Website Application",
      icon: "/images/folder.jpg",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "nike.com",
          icon: "/images/arc.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nike.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
    
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: "/images/folder.jpg",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          icon: "/images/arc.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
       
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery App",
      icon: "/images/folder.jpg",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
            "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
            "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
            "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/arc.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/me2.jpeg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/con.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.jpeg",
      description: [
        "Hey! I’m Blue Onion 👋",
        "A web developer who loves building sleek, interactive websites that actually work brilliantly.",
        "I specialize in JavaScript, React, and Next.js, and I’m all about smooth performance, clean UI, great UX, and writing code that doesn’t require a rescue team to debug later.",
        "When I’m not deep in dev mode, you’ll probably find me tweaking layouts at 2AM, sipping overpriced coffee like it’s fuel for survival, or impulse-buying gadgets I absolutely claim are “for productivity” 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash.png",
    },
    
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 50;
const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  arc: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

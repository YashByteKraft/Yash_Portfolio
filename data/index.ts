
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize user empathy and data-driven decisions",
    description: "Every product decision starts with understanding user needs",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Agile delivery expert with 53% faster timelines",
    description: "Structured processes that actually work",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "PM toolkit",
    description: "To deliver products successfully",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Health-tech & IoT product experience",
    description: "Real-world product management in action",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building my product studio",
    description: "10+ client websites delivered with 95% satisfaction",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/Build U.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to build your next product?",
    description: "Let's discuss how I can help your business grow",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Healthcare Physiotherapy App",
    des: "Led product management for health-tech app with IoT integration. Conducted 20+ user interviews, defined MVP, and delivered 50+ features using Agile/Scrum methodology.",
    img: "/Avicare App-left.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://avicaretech.com/",
    sourceCode: "",
  },
  {
    id: 2,
    title: "BuildU - Product Studio",
    des: "Founded and managed product studio delivering 10+ client websites with 95% satisfaction. Increased lead-gen metrics by 20% through UX improvements and user-first design.",
    img: "/Build U.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://buildu.co.in/",
    sourceCode: "",
  },
  {
    id: 3,
    title: "Zerodha's Gen-z engagement challenge",
    des: "73% of young investors want to start but don't know where to begin. So I analyzed Zerodha's user journey and designed a gamified solution that could transform how 18-25 year-olds learn investing",
    img: "/Zerodha.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://zerodha-case-study-hax6ruo.gamma.site/",
    sourceCode: "",
  },
  {
    id: 4,
    title: "Agile Delivery & Process Optimization",
    des: "Achieved 53% reduction in product delivery timelines using structured processes. Managed cross-functional projects and coordinated stakeholder demos that led to mid-project investment.",
    img: "/The-anatomy-of-perfect-software-delivery.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://yashparihar.netlify.app",
    sourceCode: "",
  },
] as const;

export const testimonials = [
  {
    quote: `Yash's user research approach was game-changing for our health-tech product. His 20+ user interviews provided insights that shaped our entire product strategy. The 53% faster delivery timeline he achieved was remarkable.`,
    name: "Dr. Sarah Chen",
    title: "CTO at Avicare Technologies",
  },
  {
    quote: `Working with Yash on our product studio was incredible. His agile methodology and user-first approach helped us deliver 10+ projects with 95% client satisfaction. His process optimization skills are exceptional.`,
    name: "David Rodriguez",
    title: "Co-founder at BuildU",
  },
  {
    quote: `Yash's Zerodha case study analysis was brilliant. His ability to identify user pain points and design gamified solutions shows deep product thinking. He transformed how we approach user engagement challenges.`,
    name: "Emily Watson",
    title: "Product Lead at FinTech Startup",
  },
  {
    quote: `Yash's cross-functional leadership and stakeholder management skills are outstanding. He coordinated complex projects and delivered results that led to mid-project investment. His data-driven approach is impressive.`,
    name: "James Thompson",
    title: "VP Engineering at HealthTech",
  },
  {
    quote: `Yash combines strategic thinking with hands-on execution perfectly. His IoT integration expertise and product management skills helped us launch a successful health-tech solution. Highly recommend working with him.`,
    name: "Lisa Park",
    title: "Head of Product at MedTech",
  },
] as const;

// Commented out for now - will add relevant companies later
// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   // ... other companies
// ] as const;

export const companies = [] as const;

export const workExperience = [
  {
    id: 1,
    title: "Product Devlopment Intern @ AvicareTech",
    desc: "Led sprint planning and roadmap execution for health-tech app with IoT integration. Conducted 20+ user interviews and delivered 50+ features.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Founder & PM @ BuildU",
    desc: "Built and managed product studio delivering 10+ client websites with 95% satisfaction. Owned full delivery pipeline from discovery to post-launch.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Product Consultant",
    desc: "Built wireframes, prototypes & personas for early-stage founders. Validated feature ideas using surveys, interviews, and small pilots.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Product Strategy & UX Research",
    desc: "Specialized in user research, product roadmapping, and cross-functional team coordination. Increased lead-gen metrics by 20% through UX improvements.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/YashByteKraft",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://x.com/UncnventionalPM",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/yash-parihar",
  },
  {
    name: "Instagram",
    img: "/insta.svg",
    link: "https://www.instagram.com/unconventional.pm",
  },
] as const;

export const techStack = {
  stack1: ["Product Roadmapping", "Stakeholder Collaboration", "Jira", "User Research"],
  stack2: ["Agile","Miro", "MVP Scoping", "Figma"],
} as const;

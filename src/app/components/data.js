export const projects = [
  {
    title: "InstaClon",
    description: "Frontend: Html, Css, Javascript. Backend: Railway, Mysql, Spring, Java",
    imageUrl: "/instaClon.png",
  },
  {
    title: "KFC orders",
    description: "A KFC ordering system in Java",
    imageUrl: "/kfcClon.png",
  },
  {
    title: "Amazon Race",
    description: "A racing game in Java using threads",
    imageUrl: "/raceProject.png",
  },
  {
    title: "Cats DataBase",
    description: "A database system for cats using Java and MySQL",
    imageUrl: "/catProject.png",
  },
];

export const navSections = [
  { href: "hero", label: "About Me" },
  { href: "skills", label: "Skills" },
  { href: "certificates", label: "Certificates" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" }
  
];

export const contactInfo = [
   {
    url: "https://github.com/luiszlopezs",
    alt: "GitHub Logo",
    src: "./github.svg",
  },
   {
    url: "https://linkedin.com/in/luiszlopezs",
    alt: "LinkedIn Logo",
    src: "./linkedin.svg",
  },
   {
    url: "https://instagram.com/luiszlopezs",
    alt: "Instagram Logo",
    src: "./instagram.svg",
  },
];

export const skills = [
  { name: "Java", level: "Intermediate", imgSrc: "/Java-Light.svg", alt: "JAVA", shadow: "rgba(245, 130, 25, 0.5)", color: "rgb(245,130,25)" },
  { name: "HTML", level: "Beginner", imgSrc: "/html.svg", alt: "HTML", shadow: "rgba(225, 78, 29, 0.5)", color: "rgb(225,78,29)" },
  { name: "CSS", level: "Beginner", imgSrc: "/css.svg", alt: "CSS", shadow: "rgba(2, 119, 189, 0.5)", color: "rgb(2,119,189)" },
  { name: "Git", level: "Beginner", imgSrc: "/git.svg", alt: "Git", shadow: "rgba(240, 60, 46, 0.5)", color: "rgb(240,60,46)" },
]




export const birthDate = new Date(2007, 9, 1);
export const today = new Date();
export const age = today.getFullYear() - birthDate.getFullYear();
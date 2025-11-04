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
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
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


export const birthDate = new Date(2007, 9, 1);
export const today = new Date();
export const age = today.getFullYear() - birthDate.getFullYear();
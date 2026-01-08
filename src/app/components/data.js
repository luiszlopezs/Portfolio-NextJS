export const projects = [
  {
    title: "InstaClon",
    description: "Frontend: Html, Css, Javascript. Backend: Railway, Mysql, Spring, Java",
    imageUrl: "/projects/instaClon.png",
    href: "https://github.com/luiszlopezs/pruebaRailway.git",
  },
  {
    title: "KFC orders",
    description: "A KFC ordering system in Java",
    imageUrl: "/projects/kfcClon.png",
    href: "https://github.com/luiszlopezs/kfcorders.git",
  },
  {
    title: "Amazon Race",
    description: "A racing game in Java using threads",
    imageUrl: "/projects/raceProject.png",
    href: "https://github.com/luiszlopezs/AvanzadaTaller3---Carrera.git",
  },
  {
    title: "Cats DataBase",
    description: "A database system for cats using Java and MySQL",
    imageUrl: "/projects/catProject.png",
    href: "https://github.com/luiszlopezs/Parcial1Gatos.git",
  },
];

export const navSections = [
  { href: "hero", label: "About Me", logoMobile: "./navbar/aboutme.png"  },
  { href: "certificates", label: "Certificates", logoMobile: "./navbar/certificates.png"  },
  { href: "skills", label: "Skills", logoMobile: "./navbar/skills.png"  },
  { href: "projects", label: "Projects", logoMobile: "./navbar/projects.png"  },
  { href: "contact", label: "Contact", logoMobile: "./navbar/contact.png"  }
  
];



export const contactInfo = [
   {
    url: "https://github.com/luiszlopezs",
    alt: "GitHub Logo",
    src: "./contact/github.svg",
  },
   {
    url: "https://linkedin.com/in/luiszlopezs",
    alt: "LinkedIn Logo",
    src: "./contact/linkedin.svg",
  },
   {
    url: "https://instagram.com/justhailen",
    alt: "Instagram Logo",
    src: "./contact/instagram.svg",
  },
];

export const skills = [
  { name: "Java", level: "Intermediate", imgSrc: "/skills/Java-Dark.svg", alt: "JAVA", shadow: "rgba(245, 130, 25, 1)", color: "rgb(245,130,25)" },
  { name: "Python", level: "Beginner", imgSrc: "/skills/Python-Dark.svg", alt: "Python", shadow: "rgba(54, 110, 156, 1)", color: "rgb(54, 110, 156)" },
  { name: "HTML", level: "Beginner", imgSrc: "/skills/html.svg", alt: "HTML", shadow: "rgba(225, 78, 29, 1)", color: "rgb(225,78,29)" },
  { name: "CSS", level: "Beginner", imgSrc: "/skills/css.svg", alt: "CSS", shadow: "rgba(2, 119, 189, 1)", color: "rgb(2,119,189)" },
  { name: "Git", level: "Beginner", imgSrc: "/skills/git.svg", alt: "Git", shadow: "rgba(240, 60, 46, 1)", color: "rgb(240,60,46)" },
]


export const certificates = [
  {
    title: "Python Essentials 1  CISCO",
    href: "https://www.credly.com/badges/6ca06f7b-61bd-4f91-8611-64012e05bc34/public_url",
    src: "./certificates/pythonE1Certificate.jpg",
    alt: "Python Essentials 1 CISCO Certificate", },
    {
    title: "Python de 0 a 100 ACMUD" ,
    href: "https://thoth.acmud.org/certificates/cc5e9408-ca33-474c-8686-f9f1b12ddd11",
    src: "./certificates/certificadoACMpython.jpeg" ,
    alt: "Python de 0 a 100 ACMUD Certificate", },
    {
    title: "Web Development Frontend ACMUD" ,
    href: "https://thoth.acmud.org/certificates/04b29ba2-0162-4e72-8199-263d820f6e28",
    src: "./certificates/certificadoACMWebDevFrontend.png" ,
    alt: "Web Development Frontend ACMUD Certificate", },
];





export const birthDate = new Date(2007, 9, 1);
export const today = new Date();
export const age = today.getFullYear() - birthDate.getFullYear();
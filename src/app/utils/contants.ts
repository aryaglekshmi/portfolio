import { ISkill } from "./interfaces";

export const cardVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const iconUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

export const techStacks: ISkill[] = [
  {
    name: "JavaScript",
    id: "javascript",
    icon: `${iconUrl}javascript/javascript-plain.svg`,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    name: "Angular",
    id: "angular",
    icon: `${iconUrl}angularjs/angularjs-original.svg`,
    href: "https://angular.io/"
  },
  {
    name: "Vue.js",
    id: "vue.js",
    icon: `${iconUrl}vuejs/vuejs-original-wordmark.svg`,
    href: "https://vuejs.org/"
  },
  {
    name: "React",
    id: "react",
    icon: `${iconUrl}react/react-original-wordmark.svg`,
    href: "https://reactjs.org/"
  },
  {
    name: "TypeScript",
    id: "typescript",
    icon: `${iconUrl}typescript/typescript-plain.svg`,
    href: "https://www.typescriptlang.org/"
  },
  {
    name: "HTML",
    id: "html",
    icon: `${iconUrl}html5/html5-plain-wordmark.svg`,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS",
    id: "css",
    icon: `${iconUrl}css3/css3-plain-wordmark.svg`,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "Tailwind CSS",
    id: "tailwind css",
    icon: `${iconUrl}tailwindcss/tailwindcss-original-wordmark.svg`,
    href: "https://tailwindcss.com/"
  },
  {
    name: "Bootstrap",
    id: "bootstrap",
    icon: `${iconUrl}bootstrap/bootstrap-original-wordmark.svg`,
    href: "https://getbootstrap.com/"
  },
  {
    name: "Node.js",
    id: "node.js",
    icon: `${iconUrl}nodejs/nodejs-plain-wordmark.svg`,
    href: "https://nodejs.org/"
  },
  {
    name: "MongoDB",
    id: "mongodb",
    icon: `${iconUrl}mongodb/mongodb-plain-wordmark.svg`,
    href: "https://www.mongodb.com/"
  },
  {
    name: "PostgreSQL",
    id: "postgresql",
    icon: `${iconUrl}postgresql/postgresql-plain-wordmark.svg`,
    href: "https://www.postgresql.org/"
  },
  {
    name: "MSSQL",
    id: "mssql",
    icon: `${iconUrl}microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg`,
    href: "https://www.microsoft.com/en-us/sql-server"
  },
  {
    name: "Java",
    id: "java",
    icon: `${iconUrl}java/java-plain-wordmark.svg`,
    href: "https://www.java.com/"
  },
  {
    name: "Git",
    id: "git",
    icon: `${iconUrl}git/git-plain-wordmark.svg`,
    href: "https://git-scm.com/"
  },
  {
    name: "Jira",
    id: "jira",
    icon: `${iconUrl}jira/jira-original-wordmark.svg`,
    href: "https://www.atlassian.com/software/jira"
  },
  {
    name: "Webpack",
    id: "webpack",
    icon: `${iconUrl}webpack/webpack-plain-wordmark.svg`,
    href: "https://webpack.js.org/"
  },
  {
    name: "Vite",
    id: "vite",
    icon: `${iconUrl}vitejs/vitejs-original.svg`,
    href: "https://vitejs.dev/"
  },
  {
    name: "Docker",
    id: "docker",
    icon: `${iconUrl}docker/docker-plain-wordmark.svg`,
    href: "https://www.docker.com/"
  }
];


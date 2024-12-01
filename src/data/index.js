import {GithubLogoIcon, LinkedinLogoIcon} from "@radix-icons/vue";

const experience = new Date().getFullYear() - 2016;

export default {
  name: "Özcan Yarımdünya",
  location: "İstanbul / Türkiye",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about: "Passionate Python Developer focused on creating efficient, scalable applications.",
  summary: `As a Full Stack Engineer with over ${experience} years of experience, I specialize in building scalable, user-friendly tools and applications. My expertise spans software engineering, web development, and DevOps, with a strong focus on Python, Django, FastAPI, Vue.js, and Kubernetes. Currently, I work on enhancing Big Data platforms and automating processes, and I thrive in cross-functional team environments. I’m passionate about tackling new challenges, improving performance, and staying up-to-date with emerging technologies.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/12237463?v=4",
  personalWebsiteUrl: "https://yarimdunya.com",
  contact: {
    email: "ozcanyd@gmail.com",
    tel: "+905310821028",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ozcanyarimdunya",
        icon: GithubLogoIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ozcanyarimdunya/",
        icon: LinkedinLogoIcon,
      },
    ],
  },
  work: [
    {
      company: "Sahibinden.com",
      link: "https://sahibinden.com",
      badges: ["Hybrid"],
      title: "Senior Python Developer",
      year: "2021 - Present",
      description: "Developing tools and automated processes for Big Data platforms. Technologies: Python, Django, FastAPI, VueJS, Hadoop, Vertica, ClickHouse and Kubernetes.",
    },
    {
      company: "Huawei Technologies",
      link: "https://www.huawei.com/",
      badges: ["Remote"],
      title: "Senior Software Developer",
      year: "2021",
      description: "Optimized search functionality for Huawei AppStore, leveraging web scraping and backend development. Technologies: Python, Django, Shell Scripting and Docker.",
    },
    {
      company: "GTech",
      link: "https://www.gtech.com.tr/",
      badges: ["Hybrid"],
      title: "Senior Software Developer",
      year: "2020 - 2021",
      description: "Developed platforms for enriching and analyzing customer data similar to Google Analytics. Technologies: Python, Flask, JavaScript, MongoDB, Elasticsearch, and Docker.",
    },
    {
      company: "Huawei Technologies",
      link: "https://www.huawei.com/",
      badges: [],
      title: "Software Developer",
      year: "2017-2020",
      description: "Developed full-stack applications and AI models for network prediction and analysis. Technologies: Python, Django, ReactJS, VueJS, Qt, React Native, PostgreSQL"
    },
  ],
  education: [
    {
      school: "Eskişehir Osmangazi University",
      degree: "Bachelor's Degree in Computer Engineering",
      year: "2011 - 2016",
    },
  ],
  skills: [
    "Python",
    "Django",
    "FastAPI",
    "Flask",
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "Node.js",
    "Shell",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "Redis",
  ],
  projects: [
    {
      title: "Site Switch",
      techStack: [
        "Full Stack Developer",
        "Python",
        "FastAPI",
        "Vue.js",
        "MongoDB",
        "Shell",
      ],
      description: "Developed a CLI and web-based site-switch application using Python, FastAPI, Vue.js, and MongoDB to automate multi-datacenter component switching. Features include database master switch (MySQL, MongoDB), site config updates (ZooKeeper), DNS record updates, alert silencing, and cross-datacenter configuration management.",
    },
    {
      title: "PasteBin",
      techStack: [
        "Full Stack Developer",
        "Python",
        "Django",
        "Vue.js",
        "PostgreSQL",
        "Kubernetes",
        "Helm",
        "LDAP",
      ],
      description: "Developed a web pastebin application using Python, Django, and Kubernetes. Features include paste sharing with expiration, custom URLs, login with LDAP, personal access tokens, paste history, search functionality, and built-in tools like a base64 converter, text diff, JSON formatter, and random password generator.",
    },
    {
      title: "Mini Project with Python",
      techStack: [
        "Side Project",
        "Python",
        "Python Libraries",
        "Python Frameworks",
        "Python Concepts",
        "Python GUI",
        "Python Web Scraping",
        "Python Game Development",
        "Python Database Automation",
      ],
      description: "Created a diverse collection of Python projects, including tools for encryption, web scraping, file handling, game development, MongoDB automation, GUI applications with Qt and Tkinter, and more. Each project demonstrates proficiency in various Python libraries, frameworks, and concepts like object-oriented programming, web scraping, and data manipulation.",
      link: {
        label: "github.com/ozcanyarimdunya/python_mini_projeler",
        href: "https://github.com/ozcanyarimdunya/python_mini_projeler",
      },
    },
    {
      title: "argparge",
      techStack: [
        "Side Project",
        "Python",
        "argparse",
        "CLI",
      ],
      description: "A very simple Python library that simplifies creating class-based command-line tools using the built-in argparse module. It offers an easy way to build structured CLI applications with features like customizable commands, argument parsing, and versioning. The tool is lightweight, dependency-free, and works with Python 3+.",
      link: {
        label: "github.com/ozcanyarimdunya/argparge",
        href: "https://github.com/ozcanyarimdunya/argparge/",
      },
    },
  ],
};

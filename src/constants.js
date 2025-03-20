import selogo from "./images/logo/selogo.png";
import ipserlab from "./images/logo/ipserlab.png";
import ascii from "./images/logo/ascii.png";
import mu from "./images/logo/mu.png";
import uhcl from "./images/logo/uhcl.png";
import movie from "./images/project-icon/movie.png";
import schoolaid from "./images/project-icon/schoolaid.png";
import railway from "./images/project-icon/railway.png";
import ceramic from "./images/project-icon/ceramic.png";
import fakeNews from "./images/project-icon/fake-news.png";
import calca from "./images/project-icon/calca.png";

export const DATA = {
  LINKEDIN: "https://www.linkedin.com/in/hanisha-patel/",
  GITHUB: "https://github.com/hanishapatel",
  EMAIL: "hanishapatel2899@gmail.com",
};

export const headingArray = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Education",
  "Projects",
];
// export const headingArray = ['Home', 'About', 'Skills', 'Education', 'Projects'];

export const SKILLS = {
  programmingLanguages: {
    title: "Programming Languages",
    icon: "bi-code-slash",
    content: [
      "HTML & CSS / React.js",
      "Java / C#",
      "JavaScript",
      "C / C++",
      "Python",
    ],
  },
  databases: {
    title: "Databases",
    icon: "bi-database",
    content: ["MySQL", "SQL", "Firebase", "MongoDB", "Oracle"],
  },
  applicationDevlopment: {
    title: "Application Development",
    icon: "bi-braces",
    content: [
      "Android Development ( Java / Spring Boot )",
      "Web Development ( Node.js / ASP.NET )",
      "API Development ( PHP )",
      "Website Building ( WordPress / Bootstrap)",
    ],
  },
};

export const EXPERIENCE = {
  ta: {
    title: "Full Stack Developer",
    duration: "August 2024 - Present",
    location: "Houston, TX, USA",
    employer: "Support Enigma LLC",
    link: "https://supportenigma.com/",
    logo: selogo,
  },
  ra: {
    title: "Software Engineer",
    duration: "August 2023 - July 2024",
    location: "Houston, TX, USA",
    employer: "Ipserlab",
    link: "https://www.ipserlab.com/",
    logo: ipserlab,
  },
  fullStackDev: {
    title: "Web Developer",
    duration: "July 2019 - June 2021",
    location: "Mumbai, MH, India",
    employer: "Advanced School of Computer Information India",
    link: "http://www.ascii-india.com/",
    logo: ascii,
  },
};

export const EDUCATION = {
  ms: {
    degree: "Masters in Computer Science",
    university: "University of Houston - Clear Lake",
    duration: "Aug 2021 - May 2023",
    gpa: "GPA: 3.64",
    link: "https://www.uhcl.edu/",
    logo: uhcl,
  },
  be: {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    university: "Mumbai University",
    duration: "Aug 2017 - July 2021",
    gpa: "CGPI: 8.37",
    link: "https://www.sakec.ac.in/cs/",
    logo: mu,
  },
};

export const PROJECTS = {
  web: [
    {
      title: "React Calculator",
      description:
        "This project is a simple React Calculator that performs basic arithmetic operations like addition, subtraction, multiplication, and division. It features a clean and interactive user interface, updating calculations in real time. Built using React components and the useState hook for state management, it provides a smooth and responsive user experience.",
      icon: calca,
      link: "https://hanishapatel-react-calculator.netlify.app/",
    },
    {
      title: "Movie Review Application",
      description:
        "This project is a movie review platform developed with Java Spring Boot for the backend, featuring REST API integration and MongoDB for scalable storage. The front end is built with React and Bootstrap, ensuring a responsive user experience. It allows users to add and retrieve reviews through an intuitive interface, leveraging state management with hooks and seamless HTTP communication.",
      icon: movie,
      link: "https://github.com/hanishapatel/Movie-Review-App",
    },
    {
      title: "SchoolAid",
      description:
        "This project is a web and mobile application for a school community, built with HTML, CSS, JavaScript, and WordPress. It ensures seamless user role integration and a smooth experience. Using Elementor and WordPress plugins, it enhances accessibility, SEO, and communication while optimizing performance. Key features include attendance tracking, real-time updates, and instant notices.",
      icon: schoolaid,
      link: "https://schoolaid.in/wp/",
    },
    {
      title: "Fake New Detection on Tweets",
      description:
        "This project harnesses Python to sift through tweets using a sophisticated machine learning model. By integrating with the Twitter API, it evaluates the authenticity of news, distinguishing real from fake, and presents the analysis through an intuitive web interface.",
      icon: fakeNews,
      link: "https://github.com/hanishapatel/Fake-Tweet-Detection-using-Machine-Learning",
    },
  ],
  mobile: [
    {
      title: "Amtrak Railway Management System",
      description:
        "Developed an intuitive web interface for ticket purchasing, streamlining the process for passengers. Integrated PHP, JavaScript, and MySQL to connect the front end and back end, enhancing operational efficiency and delivering a modern, user-friendly experience.",
      icon: railway,
      link: "https://github.com/hanishapatel/Amtrak-Railway-Management-System",
    },
    {
      title: "E-Ceramic Store",
      description:
        "Designed and developed a Ceramic Store Management System using ASP.NET, integrating secure authentication, product categorization, event management, and order tracking. Built an interactive UI with HTML, CSS, JavaScript, and Ajax, ensuring a seamless user experience. Utilized SQL Server for efficient data handling and system performance.",
      icon: ceramic,
      link: "https://github.com/hanishapatel/E-Ceramic-Store",
    },
    // {
    //     title: "Weather App",
    //     description: "The Weather App is an Android application that displays the current weather and 5-day forecast for various cities. It utilizes the Weather API for retrieving weather data. The app features city selection, an easy-to-read UI, and uses OkHttp for API calls and JSON parsing. Additionally, it incorporates the Picasso library for loading weather icons dynamically.",
    //     icon: weather,
    //     link: "https://github.com/deepfuriya/weather-app"
    // },
    // {
    //     title: "Trivia Game Application",
    //     description: "The Trivia Game Application is an Android app that allows users to play a trivia game. The JSON-formatted trivia questions are retrieved using HTTP connections and API queries. Using OkHttp, the app can parse JSON input and make API calls. In order to dynamically load graphics during gameplay, it also incorporates the Picasso library.",
    //     icon: trivia,
    //     link: "https://github.com/deepfuriya/trivia-application"
    // }
  ],
};

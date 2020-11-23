import {
  blackjackImg,
  covidImg,
  discretionImg,
  fantasyAdventureImg,
  ghibliImg,
  gymImg,
  hotelTechnikaImg,
  recipeBookImg,
  shopImg,
  spendItImg,
  ticTacToeImg,
} from "../../assets/projects/Img";

import {
  // html,
  // sass,
  // javascript,
  vue,
  react,
  angular,
  typescript,
  ruby,
  javaCircle,
  // node,
  mongodb,
  firebase,
  // postgresql,
  // python,
  ionic,
  // cSharp,
  // net,
  // xd,
  // inDesign,
  // illustrator,
  // lightroom,
  // photoshop,
  leaflet,
  bootstrap,
  googleDeveloper,
  heroku,
  netlify,
  intelliJ,
  reactRouter,
  jwt,
  stripe,
  semanticUi,
  spring,
  flask,
  vuetify,
  c,
  redux,
  chartjs,
} from "../../assets/badges/SVG";

import { sinatra, materialUi } from "../../assets/badges/PNG";

const projectList = [
  {
    title: "Gym Master 3000",
    description:
      "My first full stack Ruby app 4 weeks into Codeclan during our first week long project. Built with a SQL database with Sinatra framework in the front end following MVC design.My brief was to build a app to be used in a gym.",
    img: {
      src: gymImg,
      alt: "Gym Master 3000",
    },
    urls: {
      github: "http://github.com/samshum90/Solo_Ruby_Project_Gym",
      live: "https://gym-master-3000.herokuapp.com/",
      dev: null,
    },
    tech: [
      {
        src: ruby,
        alt: "ruby",
      },
      {
        src: sinatra,
        alt: "sinatra",
      },
      {
        src: heroku,
        alt: "Heroku",
      },
    ],
  },
  {
    title: "Ghibli API",
    description:
      "Weekend homework two weeks into learning JavaScript with the Vue.js framework and an API at CodeClan.",
    img: {
      src: ghibliImg,
      alt: "Ghibli API",
    },
    urls: {
      github: "https://github.com/samshum90/Wk7_Wkend_Hw_Ghilbli_Vue_API",
      live: null,
      dev: null,
    },
    tech: [
      {
        src: vue,
        alt: "Vue",
      },
    ],
  },
  {
    title: "COVID-19 Angela App",
    description:
      "This is my week long group project where we built a full stack web app that allow user in self isolation to make requests for help.",
    img: {
      src: covidImg,
      alt: "Covid-19 Angela App",
    },
    urls: {
      github: "https://github.com/samshum90/Javasctipt_project",
      live: "https://boring-wozniak-c62dd8.netlify.app#/",
      dev: null,
    },
    tech: [
      {
        src: vue,
        alt: "Vue",
      },
      {
        src: leaflet,
        alt: "Leaflet",
      },
      {
        src: mongodb,
        alt: "Mongo Db",
      },
      {
        src: bootstrap,
        alt: "Bootstrap",
      },
      {
        src: googleDeveloper,
        alt: "Google Charts",
      },
      {
        src: netlify,
        alt: "Netlify",
      },
    ],
  },
  {
    title: "Blackjack Game",
    description:
      "This is my weekend homework after my first week of learning Java at CodeClan.",
    img: {
      src: blackjackImg,
      alt: "Blackjack",
    },
    urls: {
      github: "https://github.com/samshum90/Wk11_Wkend_HW_Java_Blackjack",
      live: null,
      dev: null,
    },
    tech: [
      {
        src: javaCircle,
        alt: "Java",
      },
      {
        src: intelliJ,
        alt: "IntelliJ Idea",
      },
    ],
  },
  {
    title: "Fantasy Adventure Game",
    description:
      "Weekend homework in Java where the task is to model a fantasy adventure to consolidate our learning of the four principles of object orientated programming Abstraction, Encapsulation, Inheritance and Polymorphism.",
    img: {
      src: fantasyAdventureImg,
      alt: "Fantasy Adventure",
    },
    urls: {
      github: "https://github.com/samshum90/Wk12_Wkend_Hw_Fantasy_Adventure",
      live: null,
    },
    tech: [
      {
        src: javaCircle,
        alt: "Java",
      },
      {
        src: intelliJ,
        alt: "IntelliJ Idea",
      },
    ],
  },
  {
    title: "Our Shop Best Shop",
    description:
      "Full-stack e commerce store built in React as the frontend and Spring Boot with a MongoDB database in the backend Codeclan merchandise was used as a prototype.",
    img: {
      src: shopImg,
      alt: "Our Shop best Shop",
    },
    urls: {
      github: "https://github.com/samshum90/Final_Group_Project_Store",
      live: "https://codeclan-shop.web.app/",
      dev: null,
    },
    tech: [
      {
        src: react,
        alt: "React",
      },
      {
        src: reactRouter,
        alt: "React Router",
      },
      {
        src: spring,
        alt: "Spring Boot",
      },
      {
        src: jwt,
        alt: "JSON Web Token",
      },
      {
        src: stripe,
        alt: "Stripe Payment",
      },
      {
        src: semanticUi,
        alt: "Semantic Ui",
      },
    ],
  },
  {
    title: "Dis-creation",
    description:
      "My team's entry to the Automation Anywhere COVID-19 Botathon hackathon. We built a Hr app to empower staff to make informed decisions on employee requests.",
    img: {
      src: discretionImg,
      alt: "Dis-creation",
    },
    urls: {
      github: "https://github.com/samshum90/Dis-cretion",
      live: "https://dis-cretion.herokuapp.com/",
      dev: "https://devpost.com/software/dis-cretion-cnhlfw",
    },
    tech: [
      {
        src: vue,
        alt: "Vue",
      },
      {
        src: flask,
        alt: "Flask",
      },
      {
        src: vuetify,
        alt: "Vuetify",
      },
    ],
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "Game I made after completing C Programming For Beginners - Master the C Language Udemy Tim Buchalka’s Learn Programming Academy, Jason Fedin",
    img: {
      src: ticTacToeImg,
      alt: "Tic Tac Toe Game",
    },
    urls: {
      github: "https://github.com/samshum90/TicTakToe_C",
      live: null,
      dev: null,
    },
    tech: [
      {
        src: c,
        alt: "C Logo",
      },
    ],
  },
  {
    title: "Hotel Technika",
    description:
      "This Hotel management app was built to update and build familiarity with <b>React 16.8</b>. Designed to be used by hotel staff member to create rooms, register guests and to book guest into those rooms.",
    img: {
      src: hotelTechnikaImg,
      alt: "Hotal Tchnika App",
    },
    urls: {
      github:
        "https://github.com/samshum90/Hotel_Technika_React_Redux_Firebase",
      live: "https://hotel-technika.web.app/",
      dev: null,
    },
    tech: [
      {
        src: react,
        alt: "React",
      },
      {
        src: reactRouter,
        alt: "React Router",
      },
      {
        src: redux,
        alt: "Redux",
      },
      {
        src: firebase,
        alt: "Firebase",
      },
      {
        src: materialUi,
        alt: "Material UI",
      },
    ],
  },
  {
    title: "Recipe Book",
    description:
      "App built during Angular - The Complete Guide (2020 Edition) by Maximilian Schwarzmüller course. App used to save recipes and also build a shopping list.",
    img: {
      src: recipeBookImg,
      alt: "Recipe Book App",
    },
    urls: {
      github: "https://github.com/samshum90/Angular_Recipe_Project",
      live: "https://angularrecipe-5668c.web.app/",
      dev: null,
    },
    tech: [
      {
        src: angular,
        alt: "Angular",
      },
      {
        src: typescript,
        alt: "Typescript",
      },
      {
        src: firebase,
        alt: "Firebase",
      },
      {
        src: bootstrap,
        alt: "Bootstrap",
      },
    ],
  },
  {
    title: "Spend it.",
    description:
      "Progressive web app built in Angular using the Ionic Framework. Allow users to track their spending to have better control over their finances.",
    img: {
      src: spendItImg,
      alt: "Spend It. app",
    },
    urls: {
      github: "https://github.com/samshum90/spend_it_ionic_angular_firebase",
      live: "https://spend-it-172ed.web.app/",
      dev: null,
    },
    tech: [
      {
        src: angular,
        alt: "Angular",
      },
      {
        src: typescript,
        alt: "Typescript",
      },
      {
        src: firebase,
        alt: "Firebase",
      },
      {
        src: chartjs,
        alt: "Chart Js",
      },
      {
        src: ionic,
        alt: "Ionic",
      },
    ],
  },
];

export default projectList;

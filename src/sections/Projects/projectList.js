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
  blackjackGif,
  covidGif,
  discretionGif,
  fantasyAdventureGif,
  ghibliGif,
  gymGif,
  hotelTechnikaGif,
  recipeBookGif,
  shopGif,
  spendItGif,
  ticTacToeGif,
} from "../../assets/projects/Gif";

import {
  html,
  sass,
  javascript,
  vue,
  react,
  angular,
  typescript,
  ruby,
  javaCircle,
  node,
  mongodb,
  firebase,
  postgresql,
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
      "My first full stack Ruby app 4 weeks into Codeclan during our first week long project. Built with a SQL database with Sinatra framework in the front end following MVC design. My brief was to build a app to be used in a gym.",
    img: {
      src: gymImg,
      alt: "Gym Master 3000",
    },
    gif: {
      src: gymGif,
      alt: "Gym Master 3000",
    },
    urls: {
      github: "http://github.com/samshum90/Solo_Ruby_Project_Gym",
      live: "https://gym-master-3000.herokuapp.com/",
      dev: null,
    },
    tech: [
      {
        src: html,
        alt: "HTML",
      },
      {
        src: sass,
        alt: "CSS/SCSS",
      },
      {
        src: ruby,
        alt: "Ruby",
      },
      {
        src: sinatra,
        alt: "Sinatra",
      },
      {
        src: postgresql,
        alt: "Postgres SQL",
      },
      {
        src: heroku,
        alt: "Heroku",
      },
    ],
    features: [
      "CRUD functionality with members, classes and instructors",
      "Class bookings are filtered to accept active and the correct membership type and cannot be assigned twice",
      "Pictures can be uploaded to the member profiles",
      "Filter the classes to view the classes that have been scheduled for today",
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
    gif: {
      src: ghibliGif,
      alt: "Ghibli API",
    },
    urls: {
      github: "https://github.com/samshum90/Wk7_Wkend_Hw_Ghilbli_Vue_API",
      live: null,
      dev: null,
    },
    tech: [
      {
        src: html,
        alt: "HTML",
      },
      {
        src: sass,
        alt: "CSS/SCSS",
      },
      {
        src: javascript,
        alt: "Javascript",
      },
      {
        src: vue,
        alt: "Vue",
      },
    ],
    features: [
      "Display data from an JSON API request",
      "Clear separation of concerns (multiple components)",
      "Vue's fetch promises, lifecycle hooks, multiple components, props and event bus",
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
    gif: {
      src: covidGif,
      alt: "Covid-19 Angela App",
    },
    urls: {
      github: "https://github.com/samshum90/Javasctipt_project",
      live: "https://boring-wozniak-c62dd8.netlify.app#/",
      dev: null,
    },
    tech: [
      {
        src: html,
        alt: "HTML",
      },
      {
        src: sass,
        alt: "CSS/SCSS",
      },
      {
        src: javascript,
        alt: "Javascript",
      },
      {
        src: vue,
        alt: "Vue",
      },
      {
        src: node,
        alt: "Express",
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
        src: leaflet,
        alt: "Leaflet",
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
    features: [
      "Add and manage requests on a local JSON API",
      "Requests viewable in a list or map format by reusing components",
      "Geolocation API used to locate the current user",
      "Nominatim API used to obtain geo-coordinates",
      "Leaflet maps used to place markers for each request so that the user can locate the requests around them",
      "Google Charts to display the number of requests in each category",
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
    gif: {
      src: blackjackGif,
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
    features: [
      "Includes a runner to make a fully interactive text game",
      "Multiplayer support with name input",
      "Computer dealer opponent to play against",
      "Built using Test Driven Development with JUnit",
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
    gif: {
      src: fantasyAdventureGif,
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
    features: [
      "Includes a runner to make a fully interactive text game",
      "Multiplayer support with name input and choice of up to 7 characters",
      "Multiple actions to choose from such as casting spells and healing",
      "Randomly generated enemies with randomly generated stats and actions",
      "Increasing difficulty",
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
    gif: {
      src: shopGif,
      alt: "Our Shop best Shop",
    },
    urls: {
      github: "https://github.com/samshum90/Final_Group_Project_Store",
      live: "https://codeclan-shop.web.app/",
      dev: null,
    },
    tech: [
      {
        src: html,
        alt: "HTML",
      },
      {
        src: sass,
        alt: "CSS/SCSS",
      },
      {
        src: javascript,
        alt: "Javascript",
      },
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
    features: [
      "Store authentication using JSON Web Tokens",
      "Spring Security to secure Backend",
      "React Router secure routes",
      "Separated Owner panel and functions",
      "Full search and filter capabilities",
      "Basket saved on log in/out",
      "Customer services chat window",
      "Stripe was used to process payments",
      "Semantic UI used for styling",
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
    gif: {
      src: discretionGif,
      alt: "Dis-creation",
    },
    urls: {
      github: "https://github.com/samshum90/Dis-cretion",
      live: "https://dis-cretion.herokuapp.com/",
      dev: "https://devpost.com/software/dis-cretion-cnhlfw",
    },
    tech: [
      {
        src: html,
        alt: "HTML",
      },
      {
        src: sass,
        alt: "CSS/SCSS",
      },
      {
        src: javascript,
        alt: "Javascript",
      },
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
    features: [
      "Vue was used in the frontend and Python with Flask framework used on backend",
      "Machine Learning used to presents specific policy information that is relevant to the request",
      "Automation Anywhere Email bot is triggered to send a customised update on behalf of the manager to the individual.",
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
    gif: {
      src: ticTacToeGif,
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
    features: ["2-Player"],
  },
  {
    title: "Hotel Technika",
    description:
      "This Hotel management app was built to update and build familiarity with React 16.8. Designed to be used by hotel staff member to create rooms, register guests and to book guest into those rooms.",
    img: {
      src: hotelTechnikaImg,
      alt: "Hotal Tchnika App",
    },
    gif: {
      src: hotelTechnikaGif,
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
        src: html,
        alt: "HTML",
      },
      {
        src: sass,
        alt: "CSS/SCSS",
      },
      {
        src: javascript,
        alt: "Javascript",
      },
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
    features: [
      "Firebase Realtime Database used as a backend",
      "Features Firebase authentication",
      "Redux store for state management",
      "Fully built with modern React features such as hooks, useState, useEffects, useSelector and useDispatch",
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
    gif: {
      src: recipeBookGif,
      alt: "Recipe Book App",
    },
    urls: {
      github: "https://github.com/samshum90/Angular_Recipe_Project",
      live: "https://angularrecipe-5668c.web.app/",
      dev: null,
    },
    tech: [
      {
        src: html,
        alt: "HTML",
      },
      {
        src: sass,
        alt: "CSS/SCSS",
      },
      {
        src: javascript,
        alt: "Javascript",
      },
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
    features: [
      "Firebase Realtime Database used as a backend",
      "Features Firebase authentication",
      "RxJs internally to handle asynchronous operations",
      "NgRx for reactive state management",
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
    gif: {
      src: spendItGif,
      alt: "Spend It. app",
    },
    urls: {
      github: "https://github.com/samshum90/spend_it_ionic_angular_firebase",
      live: "https://spend-it-172ed.web.app/",
      dev: null,
    },
    tech: [
      {
        src: html,
        alt: "HTML",
      },
      {
        src: sass,
        alt: "CSS/SCSS",
      },
      {
        src: javascript,
        alt: "Javascript",
      },
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
    features: [
      "Features Firebase authentication",
      "Firebase Cloud Firestore used as a backend",
      "ChartJs used for a visual repersantaion of finances ",
    ],
  },
];

export default projectList;

import {
  blackjackImg,
  covidImg,
  discreationImg,
  fantasyAdventureImg,
  ghibliImg,
  gymImg,
  hotelTechnikaImg,
  recipeBookImg,
  shopImg,
  ticTacToeImg,
} from "../../assets/projects/Img";

import {
  html,
  sass,
  javascript,
  vue,
  react,
  angular,
  typescript,
  ruby,
  java,
  node,
  mongodb,
  firebase,
  postgresql,
  python,
  ionic,
  cSharp,
  net,
  xd,
  inDesign,
  illustrator,
  lightroom,
  photoshop,
  leaflet,
  bootstrap,
  googleDeveloper,
  heroku,
  netlify,
  intelliJ,
} from "../../assets/badges/SVG";

import { sinatra } from "../../assets/badges/PNG";

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
    },
    tech: [
      {
        src: java,
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
        src: java,
        alt: "Java",
      },
      {
        src: intelliJ,
        alt: "IntelliJ Idea",
      },
    ],
  },
];

export default projectList;

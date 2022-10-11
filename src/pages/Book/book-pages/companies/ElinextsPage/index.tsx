import { BasePage } from "common/templates/BasePage";
import { ProjectsPage } from "common/templates/ProjectsPage";
import { BookPageProps } from "pages/Book/book-pages";
import { Project } from "common/templates/ProjectsPage/types";
import {
  projectReviewDelimiter,
  projectReviewDuration,
} from "pages/Book/config";
import React from "react";

const projects: Project[] = [
  {
    title: "Grape",
    env: "HTML/CSS/JS, jQuery, Bootstrap, Angular.js, Gulp.js, Twitter-API, Google-Maps API",
    role: "Frontend Developer (Web)",
    desc: "Grape is a tool that allows you to create “hooks” that are integrated into the site. Further, using this hook, you can track the input traffic and monitor it through Grape",
    achvs: [
      "Created web pages",
      "Created reusable components",
      "Implemented business features",
      "Integrated client app with server side",
    ],
  },
  {
    title: "MVP Prototyping Project",
    env: "TypeScript, Angular 2, Gulp.js, Node.js, WebSocket",
    role: "Frontend Developer (Web)",
    desc: "This project was an MVP for an application that would monitor various indicators in a car, such as speed, tire pressure, engine temperature, etc.  Also it included such functionalities as a navigator, sound system control, etc.",
    achvs: [
      "Creating a client app from beginning",
      "Helped to design MVP",
      "Integrated client app with server via WebSocket",
      "Mocked a server app",
      "Communicated with customer to identify requirements",
      "Supported product",
    ],
  },
  {
    title: "FilmMakers",
    env: "PHP 7.1, Zend Framework, PHPUnit, ElasticSearch, Redis, MySQL, Vagrant, Linux Ubuntu",
    role: "Backend Developer",
    desc: "This project is a large database of actors in Germany.  The main functionality of this project is a search engine that allows film producers to efficiently find actors for their projects.",
    achvs: [
      "Implemented code generators",
      "Aggregating data from DB and storing in ElasticSearch",
      "Implementing and providing search mechanism via ElasticSearch",
      "Writing unit tests and testing the system",
      "Communicated with customer for planning tasks",
      "Supported product",
    ],
  },
  {
    title: "Elada",
    env: "TypeScript, Angular 4, Node.js, Express.js",
    role: "Full Stack Developer",
    desc: "This project is a survey taking module of a wider system in a private clinic. Questioned has an opportunity to view the presentation of the human body and to point out the parts of the body that he has problems with.",
    achvs: [
      "Experienced in breaking user-stories into tickets, estimating and assigning",
      "Implementing a MVP of a client application",
      "Mocked a server app",
      "Integrated a client app with server app via REST-api",
      "Testing and deploying a client app",
      "Setted up a delivery system for an app",
      "Implemented new features",
    ],
  },
  {
    title: "Bamboo",
    env: "PHP, Phalcon Framework, TypeScript, Angular 4, Ionic, AWS",
    role: "Full Stack Developer",
    desc: "Corporate platform designed for internal communication and workflow",
    achvs: [
      "Implemented and supported business features in client app",
      "Implemented and supported business features in server app",
      "Built a POC of mobile application",
      "Setted up a delivery system for an app",
    ],
  },
  {
    title: "E-Commerce Project",
    env: "Node.js, Express.js, TypeScript, Angular 4, Serverless, AWS",
    role: "Full Stack developer",
    desc: "This project is an online store for selling homemade masks. The client could get acquainted with the goods that are available, place an order. The store contained a constructor that allowed you to create a custom mask",
    achvs: [
      "Implemented and supported business features in client app",
      "Implemented and supported business features in server app",
      "Setted up a delivery system for an app",
    ],
  },
];

export const animationDuration =
  (projectReviewDuration + projectReviewDelimiter) * projects.length;

export const ElinextsPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isFocused, onAnimationFinished } = props;
    return (
      <BasePage ref={ref} number={4}>
        <ProjectsPage
          companyTitle="Elinext, June 2016 - August 2018"
          projects={projects}
          isReviewing={isFocused}
          onReviewFinished={onAnimationFinished}
        />
      </BasePage>
    );
  }
);

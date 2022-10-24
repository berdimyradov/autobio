import { BasePage } from "common/templates/BasePage";
import { ProjectsPage } from "common/templates/ProjectsPage";
import { Project } from "common/templates/ProjectsPage/types";
import { BookPageProps } from "pages/Book/book-pages";
import React from "react";

const project: Project = {
  title: "WeHands",
  env: "PHP, Symfony-PHP, Doctrine ORM, Angular.js, JavaScript, jQuery, Bootstrap, MySQL, Apache, Debian OS",
  role: "Full Stack Developer",
  desc: "WeHands is a platform designed to connect photographers with retouchers. Photographers can post their work and describe their requirements to retouchers. Further in the marketplace, retouchers have the opportunity to apply for photo processing.",
  achvs: [
    "Created web pages",
    "Implemented business logic",
    "Got experience of working in team",
  ],
};

export const ISolutionsPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isFocused, onAnimationFinished } = props;
    return (
      <BasePage ref={ref} number={3}>
        <ProjectsPage
          companyTitle="iSolutions, September 2015 - June 2016"
          projects={[project]}
          isReviewing={isFocused}
          onReviewFinished={onAnimationFinished}
        />
      </BasePage>
    );
  }
);

import { BasePage } from "shared/ui/templates/BasePage";
import { ProjectsPage } from "shared/ui/templates/ProjectsPage";
import { Project } from "shared/ui/templates/ProjectsPage/types";
import { BookPageProps } from "entities/book";
import React from "react";

const project: Project = {
  title: "Coople",
  env: "  TypeScript, Angular.js, Angular, Google Maps API, Vue.js, Nuxt.js, Jenkins, AWS, Terraform, Docker",
  role: "Frontend Developer (Web)",
  desc: " Coople is a “Jobs on-demand” platform, connecting companies with people looking for flexible work. Coople helps recruits with vetting process before getting into online marketplace Businesses have access to a huge pool of temporary, external workers, find staff and hire the right candidates as needed.",
  achvs: [
    "Implemented and supported business features in client app",
    "Participated in breaking down monolithic app into microservices",
    "Helped updating a delivery system",
    "Managed and lead a small team with a microservice",
  ],
};

export const CiklumsPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isFocused, onAnimationFinished } = props;
    return (
      <BasePage ref={ref} number={5}>
        <ProjectsPage
          companyTitle="Ciklum, September 2018 - February 2020"
          projects={[project]}
          isReviewing={isFocused}
          onReviewFinished={onAnimationFinished}
        />
      </BasePage>
    );
  }
);

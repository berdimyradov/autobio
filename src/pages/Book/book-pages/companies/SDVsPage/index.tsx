import { BasePage } from "common/templates/BasePage";
import { ProjectsPage } from "common/templates/ProjectsPage";
import { Project } from "common/templates/ProjectsPage/types";
import { BookPageProps } from "pages/Book/book-pages";
import React from "react";

const projects: Project[] = [
  {
    title: "Dating.com",
    env: "JavaScript, TypeScript, React, ReactNative, Jenkins",
    role: "Frontend Developer (Web + Mobile)",
    desc: "Dating.com is a dating platform designed for a wide range of users, regardless of gender, preferences and values",
    achvs: [
      "Implemented and supported business features in client apps",
      "Refactored project to be able launching multiple look-a-like apps",
    ],
  },
  {
    title: "BamBam: Live Video Chat",
    env: "JavaScript, TypeScript, ReactNative, Jenkins",
    role: "Frontend Developer (Mobile)",
    desc: "BamBam is a chatroulette that allows you to meet different types of users through video communication",
    achvs: [
      "Implemented and supported business features in client app",
      "Investigated and implemented video calls feature",
      "Helped to improved retention by engaging users via call notifications",
      "Investigated and implemented Voip-call features for iOS app",
      "Releasing new versions to app stores",
      "Debugged and fixed legacy code of core",
    ],
  },
  {
    title: "Magnet: Chat, Play & Flirt",
    env: "JavaScript, TypeScript, React, ReactNative, Jenkins, GitLab Pipelines",
    role: "Frontend Developer (Web + Mobile)",
    desc: "Magnet is a dating app. What distinguishes Magnet from other dating apps is that here all accounts are hidden from each other by the account holder's virtual avatar which is generated during registration. Users do not see each others’ photos until they are matched",
    achvs: [
      "Implemented and supported business features in client app",
      "Releasing new versions to app stores",
      "Collecting and analyzing user-experience metrics",
      "Refactored and enhanced the web app for administrators",
      "Releasing new version of administrators' app",
    ],
  },
];

export const SDVsPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  (props, ref) => {
    const { isFocused, onAnimationFinished } = props;
    return (
      <BasePage ref={ref} number={6}>
        <ProjectsPage
          companyTitle="SDV, March 2020 - July 2022"
          projects={projects}
          isReviewing={isFocused}
          onReviewFinished={onAnimationFinished}
        />
      </BasePage>
    );
  }
);

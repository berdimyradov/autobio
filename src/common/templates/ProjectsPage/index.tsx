import clsx from "clsx";
import { ProjectTable } from "common/components/ProjectTable";
import { Project } from "common/templates/ProjectsPage/types";
import {
  projectReviewDelimiter,
  projectReviewDuration
} from "pages/Book/config";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type Props = {
  companyTitle: string;
  projects: Project[];
  isReviewing: boolean;
  onReviewFinished?: () => void;
  mode?: "review" | "done";
};

const animationStyle = {
  animation: `${styles.slide} ${projectReviewDuration}ms linear, ${styles.slide} ${projectReviewDelimiter}s ease-out ${projectReviewDuration}ms alternate-reverse`,
};

export const ProjectsPage = (props: Props) => {
  const { companyTitle, projects, isReviewing, onReviewFinished } = props;
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    let timerId: NodeJS.Timer;
    let intervalId: NodeJS.Timer;
    if (isReviewing) {
      timerId = setTimeout(() => {
        console.log("ProjectsPage:flipTimer");
        onReviewFinished && onReviewFinished();
      }, (projectReviewDuration + projectReviewDelimiter) * projects.length);

      intervalId = setInterval(() => {
        setCurrentProject((currentProject) => {
          if (currentProject >= projects.length - 1) {
            clearInterval(intervalId);
            return currentProject;
          }
          return currentProject + 1;
        });
      }, projectReviewDuration + projectReviewDelimiter);
    }

    return () => {
      clearTimeout(timerId);
      clearInterval(intervalId);
    };
  }, [isReviewing]);

  return (
    <div className={styles.container}>
      <section>
        <h4>{companyTitle}</h4>
        <ProjectTable project={projects[currentProject]} />
      </section>
      {projects.length && (
        <div className={styles.indicators}>
          {projects.map((_, index) => (
            <button
              key={`project-${index}`}
              onClick={(e) => setCurrentProject(index)}
              className={clsx(
                styles.amazonLight,
                isReviewing && currentProject === index && styles.focused
              )}
              style={
                isReviewing && currentProject === index ? animationStyle : {}
              }
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

import clsx from "clsx";
import { ProjectTable } from "common/components/ProjectTable";
import { useObservable } from "common/hooks";
import { AnimationSpeedService } from "common/services";
import { Project } from "common/templates/ProjectsPage/types";
import { animationSpeedMode } from "pages/Book/config";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type Props = {
  companyTitle: string;
  projects: Project[];
  isReviewing: boolean;
  onReviewFinished?: () => void;
  mode?: "review" | "done";
};

const projectReviewDuration = 5750;
const projectReviewDelimiter = 750;

export const ProjectsPage = (props: Props) => {
  const { companyTitle, projects, isReviewing, onReviewFinished } = props;
  const [currentProject, setCurrentProject] = useState(0);
  const [modificator, setModificator] = useState(animationSpeedMode);

  useObservable(
    AnimationSpeedService.getInstance().modificator,
    setModificator
  );

  const review = modificator * projectReviewDuration;
  const delimiter = modificator * projectReviewDelimiter;
  const duration = review + delimiter;

  const animationStyle = {
    animation: `${styles.slide} ${review}ms linear, ${styles.slide} ${delimiter}s ease-out ${review}ms alternate-reverse`,
  };

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    if (isReviewing) {
      timerId = setTimeout(() => {
        onReviewFinished && onReviewFinished();
      }, duration * projects.length);

      intervalId = setInterval(() => {
        setCurrentProject((currentProject) => {
          if (currentProject >= projects.length - 1) {
            clearInterval(intervalId);
            return currentProject;
          }
          return currentProject + 1;
        });
      }, duration);
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
              onClick={() => setCurrentProject(index)}
              className={clsx(
                "btn-amazon--light",
                isReviewing && currentProject === index && "focused"
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

import clsx from "clsx";
import { ProjectTable } from "common/components/ProjectTable";
import { Project } from "common/templates/ProjectsPage/types";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type Props = {
  companyTitle: string;
  projects: Project[];
};

export const ProjectsPage = (props: Props) => {
  const { companyTitle, projects } = props;
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProject((currentProject) => {
        if (currentProject >= projects.length - 1) {
          clearInterval(intervalId);
          return currentProject;
        }
        return currentProject + 1;
      });
    }, 5750);

    return () => clearInterval(intervalId);
  }, []);

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
                currentProject === index && styles.animated
              )}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

import { ProjectTable } from "common/components/ProjectTable";
import { Project } from "common/templates/ProjectsPage/types";
import { useCallback, useState } from "react";
import styles from "./styles.module.css";

type Props = {
  companyTitle: string;
  projects: Project[];
};

export const ProjectsPage = (props: Props) => {
  const { companyTitle, projects } = props;
  const [currentProject, setCurrentProject] = useState(0);

  const onPrev = useCallback(() => {
    setCurrentProject(currentProject - 1);
  }, [currentProject]);

  const onNext = useCallback(() => {
    setCurrentProject(currentProject + 1);
  }, [currentProject]);

  return (
    <div className={styles.container}>
      <section>
        <h4>{companyTitle}</h4>
        <ProjectTable project={projects[currentProject]} />
      </section>
      {projects.length > 1 && (
        <div>
          <button disabled={currentProject === 0} onClick={onPrev}>
            Prev
          </button>
          <button
            disabled={currentProject === projects.length - 1}
            onClick={onNext}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

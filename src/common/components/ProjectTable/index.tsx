import { Project } from "common/templates/ProjectsPage/types";
import styles from "./styles.module.css";

type Props = {
  project: Project;
};

export const ProjectTable = (props: Props) => {
  const { project } = props;
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Project:</th>
          <th>{project.title}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Environment:</td>
          <td>{project.env}</td>
        </tr>
        <tr>
          <td>Role:</td>
          <td>{project.role}</td>
        </tr>
        <tr>
          <td>Project description:</td>
          <td>{project.desc}</td>
        </tr>
        <tr>
          <td>Achievements:</td>
          <td>
            <ul>
              {project.achvs.map((achv, index) => (
                <li key={index}>{achv}</li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

import { BasePage } from "common/templates/BasePage";
import { BookPageProps } from "pages/Book/book-pages";
import styles from "pages/Book/book-pages/companies/projectTable.module.css";
import React from "react";

export const CiklumsPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  (_, ref) => {
    return (
      <BasePage ref={ref} number={4}>
        <div className={styles.container}>
          <h4>Ciklum, September 2018 - February 2020</h4>
          <table className={styles.projectTable}>
            <thead>
              <tr>
                <th>Project:</th>
                <th>Coople</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Environment:</td>
                <td>
                  TypeScript, Angular.js, Angular, Google Maps API, Vue.js,
                  Nuxt.js, Jenkins, AWS, Terraform, Docker
                </td>
              </tr>
              <tr>
                <td>Role:</td>
                <td>Frontend Developer (Web)</td>
              </tr>
              <tr>
                <td>Project description:</td>
                <td>
                  Coople is a “Jobs on-demand” platform, connecting companies
                  with people looking for flexible work. Coople helps recruits
                  with vetting process before getting into online marketplace
                  Businesses have access to a huge pool of temporary, external
                  workers, find staff and hire the right candidates as needed.
                </td>
              </tr>
              <tr>
                <td>Achievements:</td>
                <td>
                  <ul>
                    <li>
                      Implemented and supported business features in client app
                    </li>
                    <li>
                      Participated in breaking down monolithic app into
                      microservices
                    </li>
                    <li>Helped updating a delivery system</li>
                    <li>Managed and lead a small team with a microservice</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </BasePage>
    );
  }
);

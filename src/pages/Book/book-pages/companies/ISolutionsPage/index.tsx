import { BasePage } from "common/templates/BasePage";
import { BookPageProps } from "pages/Book/book-pages";
import styles from "pages/Book/book-pages/companies/projectTable.module.css";
import React from "react";

export const ISolutionsPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  (_, ref) => {
    return (
      <BasePage ref={ref} number={3}>
        <div className={styles.container}>
          <h4>iSolutions, September 2015 - June 2016</h4>
          <table className={styles.projectTable}>
            <thead>
              <tr>
                <th>Project:</th>
                <th>Wehands</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Environment:</td>
                <td>
                  PHP, Symfony-PHP, Doctrine ORM, Angular.js, JavaScript,
                  jQuery, Bootstrap, MySQL, Apache, Debian OS
                </td>
              </tr>
              <tr>
                <td>Role:</td>
                <td>Full Stack Developer</td>
              </tr>
              <tr>
                <td>Project description:</td>
                <td>
                  WeHand is a platform designed to connect photographers with
                  retouchers. Photographers can post their work and describe
                  their requirements to retouchers. Further in the marketplace,
                  retouchers have the opportunity to apply for photo processing.
                </td>
              </tr>
              <tr>
                <td>Achievements:</td>
                <td>
                  <ul>
                    <li>Created web pages</li>
                    <li>Implemented business logic</li>
                    <li>Got experience of working in team</li>
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

import { BasePage } from "common/templates/BasePage";
import { BookPageProps } from "pages/Book/book-pages";
import styles from "pages/Book/book-pages/companies/projectTable.module.css";
import React from "react";

export const ElinextsPage = React.forwardRef<HTMLDivElement, BookPageProps>(
  (_, ref) => {
    return (
      <BasePage ref={ref} number={4}>
        <div className={styles.container}>
          <h4>Elinext, June 2016 - August 2018</h4>
          <table className={styles.projectTable}>
            <thead>
              <tr>
                <th>Project:</th>
                <th>Grape</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Environment:</td>
                <td>
                  HTML/CSS/JS, jQuery, Bootstrap, Angular.js, Gulp.js,
                  Twitter-API, Google-Maps API
                </td>
              </tr>
              <tr>
                <td>Role:</td>
                <td>Frontend Developer (Web)</td>
              </tr>
              <tr>
                <td>Project description:</td>
                <td>
                  Grape is a tool that allows you to create “hooks” that are
                  integrated into the site. Further, using this hook, you can
                  track the input traffic and monitor it through Grape
                </td>
              </tr>
              <tr>
                <td>Achievements:</td>
                <td>
                  <ul>
                    <li>Created web pages</li>
                    <li>Created reusable components</li>
                    <li>Implemented business features</li>
                    <li>Integrated client app with server side</li>
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

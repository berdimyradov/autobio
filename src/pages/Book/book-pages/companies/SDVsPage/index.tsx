import { BasePage } from "common/templates/BasePage";
import { BookPageProps } from "pages/Book/book-pages";
import styles from "pages/Book/book-pages/companies/projectTable.module.css";
import React from "react";

export const SocialDiscoveryVenturesPage = React.forwardRef<
  HTMLDivElement,
  BookPageProps
>((_, ref) => {
  return (
    <BasePage ref={ref} number={4}>
      <div className={styles.container}>
        <h4>Social Discovery Venture, March 2020 - July 2022</h4>
        <table className={styles.projectTable}>
          <thead>
            <tr>
              <th>Project:</th>
              <th>Dating.com</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Environment:</td>
              <td>JavaScript, TypeScript, React, ReactNative, Jenkins</td>
            </tr>
            <tr>
              <td>Role:</td>
              <td>Frontend Developer (Web + Mobile)</td>
            </tr>
            <tr>
              <td>Project description:</td>
              <td>
                Dating.com is a dating platform designed for a wide range of
                users, regardless of gender, preferences and values
              </td>
            </tr>
            <tr>
              <td>Achievements:</td>
              <td>
                <ul>
                  <li>
                    Implemented and supported business features in client apps
                  </li>
                  <li>
                    Refactored project to be able launching multiple look-a-like
                    apps
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BasePage>
  );
});

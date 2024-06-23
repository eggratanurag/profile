import React from "react";
import Project from "../project";
import pis1 from "../images/pis1.webp";
import pis2 from "../images/pis2.webp";
import pis3 from "../images/pis3.webp";
// import pis4 from "../images/pis4.webp";
import pis5 from "../images/pis5.webp";
import pisQr from "../images/pisQr.png";
import name from './../images/bookshelf1.webp';
export default function pis() {
  const techIcons = [
    { "Javascript": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { "React.js": "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { "CSS 3": "https://cdn-icons-png.flaticon.com/512/5968/5968242.png" },
    { "TailwindCSS": "https://img.icons8.com/color/48/null/tailwind_css.png" },
    { "Radix UI": "https://avatars.githubusercontent.com/u/75042455?s=200&v=4" },
    {
      "MongoDB":
        "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png",
    },
    { "Express.js": "https://img.icons8.com/ios/256/express-js.png" },
    { "Node.js": "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
  ];

const imageArray = [pis1, pis2, pis3, pis5]

  return (
    <Project
      name="TPIS"
      started="15/apr/2023"
      ended="29/apr/2023"
      about={
        <span>
          Its a full-stack School website. It has multiple pages with complex navigation bar. It displays academic, cultural information about the school.
          The whole data which is displayed is manipulateable by the owner of the site. It has a separate update page which has multple upload and update forms altogether.
          It has basic login functionality. website is visitable but the update page is not.
        </span>
      }
      idea={
        <span>
          I knew the school owner and while conversation striked why should I not make webpage for them. So I was the one who approached and they agreed as they also were looking for someone.

        </span>
      }
      journey={
        <span>
          <ul>
            <li>
              <p>
                CROSS-SITE - the first I tried was cross-site which is having a different apps for backend and frontend. The biggest issue came in was the cross-site cookie management.
                After literally throwing random things at it found out that its better to use samesite.
              </p>
            </li>
            <br />
            <li>
              <p>
                Setting up a navigation bar with dropdowns making it fully-responsive was a bit tough. I mostly user UI libraries for this project so I used dropdowns by Radix UI with in the navigation bar of the tailwind UI.

              </p>
            </li>
            <br />

          </ul>
        </span>
      }
      imageArray = {imageArray}
      qrImg={pisQr}
      link='https://creepy-bee-garment.cyclic.app/'
      techIcons={techIcons}
    />
  );
}

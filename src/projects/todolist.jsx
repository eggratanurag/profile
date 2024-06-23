import React from "react";
import Project from "../project";
import todolist1 from "../images/todolist1.webp";
import todolist2 from "../images/todolist2.webp";

import todolistQr from "../images/todoQr.png";

export default function todolist() {
  const techIcons = [
    { "Javascript": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { "React.js": "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { "CSS 3": "https://cdn-icons-png.flaticon.com/512/5968/5968242.png" },
    {"Tanstack Query or React Query": "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png"},
    {
      "MongoDB":
        "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png",
    },
    {"Passport.js": "https://seeklogo.com/images/P/passport-logo-16D89B2F37-seeklogo.com.png"},
    { "Express.js": "https://img.icons8.com/ios/256/express-js.png" },
    { "Node.js": "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
   
  ];

const imageArray = [todolist1, todolist2]

  return (
    <Project
      name="Todolist"
      started="5/feb/2023"
      ended="10/feb/2023"
      about={
        <span>
          Its a full-stack app or a "TO DO LIST" application. No it does not use localstorage it has its own database. The good thing is that you can actually use it in real 
          life because it has database and it also login user, so a long long time history can be retrieved. It uses Passport.js google authentication to sign in the user. It has 
          a feature to create new lists how many you want. It plays different animations on deletion of list items and lists
        </span>
      }
      idea={
        <span>
          At some time everyone needs a todolist which can yell at you to remember the tasks you have to do. So I created this list for personal use and I use it sometimes, pen and paper is best though.
        </span>
      }
      journey={
        <span>
          <ul>
            <li>
              <p>
                The first thing I needed to learn how to do user sign in using google Oauth authentication because I never did this before. Again tutorials came in handy
              </p>
            </li>
            <br />
            <li>
              <p>
                Using sessions was the first time. How do they work? what was it exactly? I had no idea. I looked through many tutorials but the one by anson the developer cleared all my doubts

              </p>
            </li>
            <br />

            <li>
              <p>
              Frontend was easy though 😀
              </p>
            </li>
          </ul>
        </span>
      }
      imageArray={imageArray}
      qrImg={todolistQr}
      link='https://todolist-brre.onrender.com/'
      techIcons={techIcons}
    />
  );
}


import React from "react";
import Project from "../project";
import hackathon1 from "../images/hackathon1.webp";
import hackathon2 from "../images/hackathon2.webp";
import hackathonQr from "../images/hackathonQr.png";

export default function Hackthon() {
  const techIcons = [
    { Javascript: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { "React.js": "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { "CSS 3": "https://cdn-icons-png.flaticon.com/512/5968/5968242.png" },
    { "TailwindCSS": "https://img.icons8.com/color/48/null/tailwind_css.png" },

  ];

const imageArray = [hackathon1, hackathon2]

  return (
    <Project
      name="hackathon Submission"
      started="2/apr/2023"
      ended="3/apr/2023"
      about={
        <span>
         Its a front-end React application. Its named as hackathon-submission as its accepts assignments by the user uploaded on the github.com.
         It has a form with user details and details about the hackathon like start-date, end-date, title, description, and an image. It has basic CRUD (CREATE, READ, UPDATE and DELETE) operations.
         It also has sorting, searching and liking functionality. It uses local storage to store the temporary data.
        </span>
      }
      idea={
        <span>
          It was an assignment given by a hiring company, hiring didnt go well but the assignment is here.
        </span>
      }
      journey={
        <span>
          <ul>
            <li>
              <p>
                There was no problem with the assignment. It was easy and was done in just a day. 😊
              </p>
            </li>
          
           
          </ul>
        </span>
      }
      imageArray = {imageArray}
      qrImg={hackathonQr}
      link='https://hackathon-submission.onrender.com/#/'
      techIcons={techIcons}
    />
  );
}

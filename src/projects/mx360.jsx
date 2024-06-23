import React from "react";
import Project from "../project";
import mx3601 from "../images/mx3601.webp";
import mx3602 from "../images/mx3602.webp";
import mx3603 from "../images/mx3603.webp";
import mx3604 from "../images/mx3604.webp";
import mx3605 from "../images/mx3605.webp";
import mx360Qr from "../images/mx360Qr.png";

export default function bookshelf() {
  const techIcons = [
    { "Javascript": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { "React.js": "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { "CSS 3": "https://cdn-icons-png.flaticon.com/512/5968/5968242.png" },
    { "Chakra UI": "https://img.icons8.com/color/48/null/chakra-ui.png"},
    { "Node.js": "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
  ];

const imageArray = [mx3601, mx3602, mx3603, mx3604, mx3605]

  return (
    <Project
      name="MX360"
      about={
        <span>
          MX 360 is a digital marketing agency specializing in performance marketing, analytics, and conversion funnels. With over 15 years of combined experience, they focus on helping businesses optimize their marketing strategies and achieve higher success through detailed media management and insightful reporting services. MX 360 offers a comprehensive platform that allows businesses to measure the impact of their marketing campaigns across multiple integrated channels, providing in-depth insights and data-driven recommendations to enhance marketing effectiveness
        </span>
      }
   
      imageArray = {imageArray}
      qrImg={mx360Qr}
      link='https://mx360.io'
      techIcons={techIcons}
    />
  );
}

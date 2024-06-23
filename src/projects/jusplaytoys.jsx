import React from "react";
import Project from "../project";
import jusplay1 from "../images/jusplay1.webp";
import jusplay2 from "../images/jusplay2.webp";
import jusplayQr from "../images/jusplayQr.png";

export default function bookshelf() {
  const techIcons = [
    { "Javascript": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { "React.js": "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { "CSS 3": "https://cdn-icons-png.flaticon.com/512/5968/5968242.png" },
    { "Chakra UI": "https://img.icons8.com/color/48/null/chakra-ui.png"},
    {
      "MongoDB":
        "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/256/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png",
    },
    { "Express.js": "https://img.icons8.com/ios/256/express-js.png" },
    { "Node.js": "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
  ];

const imageArray = [jusplay1, jusplay2 ]

  return (
    <Project
      name="Jusplaytoys"
      about={
        <span>
          JusPlay Toys is a toy rental service that offers a diverse range of high-quality toys for children of all ages. The company operates with a user-friendly online platform, allowing parents to easily select toys based on their child's age, interests, and developmental needs. JusPlay Toys follows a "Pay Per Use" model, enabling customers to rent toys for as short as a week, with the added convenience of free delivery and pickup services.
   
        </span>
      }
      imageArray = {imageArray}
      qrImg={jusplayQr}
      link='https://jusplaytoys.com'
      techIcons={techIcons}
    />
  );
}

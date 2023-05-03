import React from "react";
import Project from "../project";
import bookshelf1 from "../images/bookshelf1.jpg";
import bookshelf2 from "../images/bookshelf2.jpg";
import bookshelf3 from "../images/bookshelf3.jpg";
import bookshelf4 from "../images/bookshelf4.jpg";
import bookshelf5 from "../images/bookshelf5.jpg";
import bookshelfQr from "../images/bookshelfQr.png";

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

const imageArray = [bookshelf1, bookshelf2, bookshelf3, bookshelf4, bookshelf5]

  return (
    <Project
      name="Bookshelf"
      started='2/jan/2023'
      ended='30/jan/2023'
      about={
        <span>
          Its a full-stack ecommerce app where anyone can sell spare books and
          buy books. Anybody can login, create profile and add contact
          information and can upload books to sell. The is fully responsive and
          it works same as on desktop. adding books images makes it more easy to
          find books and also searching makes it more easy. The seller profile
          shows all the books they have uploaded. It uses JWT authentication to
          authenticate the user and uses local storage to store user data.
          password hashing makes it more secure. As its not a client requested
          application it has only few users
        </span>
      }
      idea={
        <span>
          It began when I had some books getting wrecked. I looked up some book
          selling sites but what about college specific books. So I decided to
          make an app only for my college students. As actually selling books
          wouldn't be possible so it was easy to sell books in college and
          finding books was easier.
        </span>
      }
      journey={
        <span>
          <ul>
            <li>
              <p>
                As this was my first big project I had no idea about user
                authentication, so I looked up some tutorials and turned out to
                be easy. For authentication the user data on the client side is
                stored on the local storage and I kept it that way because I
                didn't know how to use sessions and cookies.
              </p>
            </li>
            <br />
            <li>
              <p>
                Having more than 10 APIs and managing them was a big thing, so
                for that I created a separate file for user data fetching and
                provided the data to whole app using context API. Not knowing
                the React Query made my code messy and I still have thoughts to
                go back and implement it.
              </p>
            </li>
            <br />

            <li>
              <p>
              Hosting was something I never did before, so looked up so many
              videos. How to host an express app which sends build on request
              was something I didnt know about, though tutorials came in handy.
              </p>
            </li>
          </ul>
        </span>
      }
      imageArray = {imageArray}
      qrImg={bookshelfQr}
      link='https://kitabghar.onrender.com/'
      techIcons={techIcons}
    />
  );
}

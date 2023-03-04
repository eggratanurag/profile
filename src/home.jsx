import React, { useRef, useEffect, useState } from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import WorkHistoryTwoToneIcon from "@mui/icons-material/WorkHistoryTwoTone";
import LightbulbTwoToneIcon from "@mui/icons-material/LightbulbTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import BookTwoToneIcon from "@mui/icons-material/BookTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import LaunchIcon from "@mui/icons-material/Launch";
import emailjs from "@emailjs/browser";
export default function home() {
  const [text, setText] = useState("Send Message");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState();

  const liRef1 = useRef();
  const liRef2 = useRef();
  const liRef3 = useRef();
  const liRef4 = useRef();
  const liRef5 = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setText("Message has been sent");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setText("Send another message");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const appearOptions = {
    threshold: 0.65,
    rootMargin: "0px 0px -100px 0px",
  };
  // const appearOptions = {
  //   threshold: 0.65,
  //   rootMargin: "0px 0px -300px 0px",
  // };

  const navFunction = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList[0] === "section1"
          ? liRef1.current.classList.add("present")
          : liRef1.current.classList.remove("present");
        entry.target.classList[0] === "section2"
          ? liRef2.current.classList.add("present")
          : liRef2.current.classList.remove("present");
        entry.target.classList[0] === "section3"
          ? liRef3.current.classList.add("present")
          : liRef3.current.classList.remove("present");
        entry.target.classList[0] === "section4"
          ? liRef4.current.classList.add("present")
          : liRef4.current.classList.remove("present");
        entry.target.classList[0] === "section5"
          ? liRef5.current.classList.add("present")
          : liRef5.current.classList.remove("present");
      }
    });
  },
  appearOptions);

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        entry.target.classList.remove("appear");

        return;
      } else {
        entry.target.classList.add("appear");
        // appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  useEffect(() => {
    const faders = document.querySelectorAll(".fadeIn");

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    const sliders = document.querySelectorAll(".slideIn");
    sliders.forEach((slider) => {
      navFunction.observe(slider);
    });
  }, []);
  //
  return (
    <div className="profile">
      <div className="container" id="scrollbar">
        <section className="section1 slideIn" id="section1">
          <p className="curls">about</p>

          <div className="blur fadeIn">
            <h1>h</h1>
          </div>
          <div className="flex">
            <div className="page page1">
              <h1>Hi!</h1>
              <h2>
                My name is <span style={{ color: "#697C37" }}>Anurag</span> and
                I'm a Web Developer
              </h2>
              <p>
                I am passionate about Front-End Development. I also like to
                create Full-Stack Applications.
              </p>
              <p style={{ color: "#95956E" }}>
                My interest falls more on playing with CSS and bringing out
                something worthwhile. Most of my time is spent on creating
                responsive web apps. I like to use modern front-end libraries to
                fasten up the process while keeping in mind that the build stays
                authentic by giving slight tweaks. Interested in the entire
                front-end spectrum and working on ambitious projects with
                positive people.
              </p>
            </div>
          </div>
        </section>

        <section className="section2 slideIn" id="section2">
          <p className="curls">skills & experience</p>

          <div className="flex">
            <div className="page2 page ">
              <h1>I've</h1>
              <h2>
              
                been learning full-stack web development for more than year
              </h2>
              <p>
                Ive created apps using
                <span style={{ color: "#697C37" }}>
               
                  vanilla javascript, jquery, express
                </span>
                . At this time I'm making projects using React.js As I can
                develop full-stack apps I've also used
                <span style={{ color: "#697C37" }}>Mongodb, Node.js</span> in
                projects to create backend. .I also use modern CSS frameworks
                such as
                <span style={{ color: "#697C37" }}>
                  tailwind, bootstrap, chakraUI
                </span>
                . Previously, I've worked as a graphic designer in a company and
                also as a freelancer. .I have no experience of working in a
                company or in a team, I am a fresher but with skills
              </p>
            </div>
            <div className="blur2 fadeIn">
              <h1>h</h1>
            </div>
          </div>
        </section>

        <section className="section3  slideIn " id="section3">
          <p className="curls">work & projects</p>
          <div className="flex">
            <div className="page3 page">
              <p>
                I have created many apps with different functionalities and
                designs. Static to dynamic all in a year.
              </p>

              <h4>
                <a
                  className="links"
                  href="https://kitabghar.onrender.com/"
                >
                  <LaunchIcon style={{ fontSize: "10px" }} /> bookshelf
                </a>
              </h4>
              <p>
                Its a full-stack ecommerce app where anyone can sell spare books
                and buy books. Technologies I've used are react, express,
                mongodb, node basically a mern app.
              </p>
              <h4>
                <a
                  className="links"
                  href="https://alarm-clock.eggrat1.repl.co/"
                >
                  <LaunchIcon style={{ fontSize: "10px" }} /> timer
                </a>
              </h4>
              <p>Its a regular timer but with good looks</p>
              <h4>
                <a
                  className="links"
                  href="https://constest-api.eggrat1.repl.co/"
                >
                  <LaunchIcon style={{ fontSize: "10px" }} /> contests
                </a>
              </h4>
              <p>
                Its an app which shows all the programming contests in all the
                programming languages.
              </p>
              <h4>
                <a className="links" href="https://todolist-brre.onrender.com/">
                  <LaunchIcon style={{ fontSize: "10px" }} /> todo list
                </a>
              </h4>
              <p>a todo list with the functionality of creating different lists for different pages.</p>
              <h4>
                <a className="links" href="https://clone-4884f.web.app/">
                  <LaunchIcon style={{ fontSize: "10px" }} /> clone
                </a>
              </h4>
              <p>an amazon clone.</p>
            </div>
            <div className="blur2 fadeIn">
              <h1>h</h1>
            </div>
          </div>
        </section>

        <section className="section4  slideIn" id="section4">
          <p className="curls">contact</p>
          <div className="flex">
            <div className="page4 page">
              <div className="iconsDiv">
                <a href="" style={{ marginBottom: "3px" }}>
                  <h2 className="prolinks">CV</h2>
                </a>
                <a className="prolinks" href="https://github.com/eggratanurag">
                  <GitHubIcon />
                </a>
                <a
                  className="prolinks"
                  href="https://www.linkedin.com/in/eggrat/"
                >
                  <LinkedInIcon />
                </a>
                <a className="prolinks" href="https://twitter.com/eggrat__">
                  <TwitterIcon />
                </a>
                <a
                  className="prolinks"
                  href="https://www.behance.net/anuragojha"
                >
                  <FontAwesomeIcon
                    icon={faBehance}
                    style={{ fontSize: "25px" }}
                  />
                </a>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <h1 style={{ marginBottom: "0" }}>Contact me.</h1>
                <p style={{ marginTop: "0" }}>
                  I’m looking for job and also interested in freelance
                  opportunities especially ambitious or large projects. However,
                  if you have other request or question, don’t hesitate to use
                  the form.
                </p>
                <div className="emailDiv">
                  <div className="inputStyle">
                  <input
                    type="text"
                    placeholder="name"
                    name="user_name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  </div>
                  <div className="inputStyle">
                  <input
                    type="email"
                    placeholder="email"
                    name="user_email"
                    className="input_email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  </div>
                </div>
                <div className="inputStyle">
                <input type="text" placeholder="subject" name="subject" />
                </div>
                <div className="inputStyle">
                <textarea
                  type="text"
                  rows="4"
                  placeholder="type a message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
                </div>
                <button
                  type="submit"
                  value="send"
                  disabled={!name || !email || !message}
                >
                  <h3>{text}</h3>
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="section5  slideIn" id="section5">
          <p className="curls">blog</p>
          <div className="flex">
            <div className="page5 page">
              <p>the blog app is under development</p>
            </div>
            <div className="blur2 fadeIn">
              <h1>h</h1>
            </div>
          </div>
        </section>
      </div>

      <div className="navDiv">
        <div className="vl"></div>
        <ul>
    
            <a href="#section1" ref={liRef1} className="li1 li">
              <InfoTwoToneIcon />
            </a>
     
     
            <a href="#section2" ref={liRef2} className="li2 li">
              <LightbulbTwoToneIcon />
            </a>
   
       
            <a href="#section3" ref={liRef3} className="li3 li">
              <WorkHistoryTwoToneIcon />
            </a>
     
  
            <a href="#section4" ref={liRef4} className="li4 li">
              <EmailTwoToneIcon />
            </a>
     
      
            <a href="#section5" ref={liRef5} className="li5 li">
              <BookTwoToneIcon />
            </a>
      
        </ul>
      </div>
    </div>
  );
}

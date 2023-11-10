import React, { useRef, useEffect, useState } from "react";
import CustomLink from "./components/customLink";
import projectsLink from "./projects/projectsLink";
import "./home.css";
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
import emailjs from "@emailjs/browser";
import { HashLink } from "react-router-hash-link";
import SkillIcons from "./skillIcons.jsx";
import ProfileImg from "./images/profileImg.jpeg";
import EastIcon from "@mui/icons-material/East";
import Fade from "react-reveal/Fade";

export default function home() {
  const [text, setText] = useState("Send Message");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const liRef1 = useRef();
  const liRef2 = useRef();
  const liRef3 = useRef();
  const liRef4 = useRef();
  const liRef5 = useRef();
  const navCircle = useRef();
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

  function nav(page) {
    console.log(page);
  }
  const transform1 = `translateY(${100}px)`;
  const transform2 = `translateY(${200}px)`;
  const transform3 = `translateY(${300}px)`;
  const transform4 = `translateY(${400}px)`;
  const transform5 = `translateY(${500}px)`;

  const navFunction = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    console.log(
      navCircle.style?.transform,
      navCircle.current.style.transform,
      "navCircle.style.transform "
    );
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList[0] === "section1"
          ? ((navCircle.current.style.transform = transform1),
            liRef1.current.classList.add("hightlightIcon"))
          : liRef1.current.classList.remove("hightlightIcon");
        entry.target.classList[0] === "section2"
          ? ((navCircle.current.style.transform = transform2),
            liRef2.current.classList.add("hightlightIcon"))
          : liRef2.current.classList.remove("hightlightIcon");
        entry.target.classList[0] === "section3"
          ? ((navCircle.current.style.transform = transform3),
            liRef3.current.classList.add("hightlightIcon"))
          : liRef3.current.classList.remove("hightlightIcon");
        entry.target.classList[0] === "section4"
          ? ((navCircle.current.style.transform = transform4),
            liRef4.current.classList.add("hightlightIcon"))
          : liRef4.current.classList.remove("hightlightIcon");
        entry.target.classList[0] === "section5"
          ? ((navCircle.current.style.transform = transform5),
            liRef5.current.classList.add("hightlightIcon"))
          : liRef5.current.classList.remove("hightlightIcon");
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
    <div className="h-screen  flex text-[clamp(12px,1.5vw,15px)] text-[#efefef] font-poppins bg-background1">
      <div
        className="container bg-background1 overflow-y-scroll snap-y snap-mandatory"
        id="scrollbar"
      >
        {/* //! ------------------------------------------ section 1 ------------------------------------------------ */}

        <section
          style={{ height: "100dvh" }}
          className="section1 slideIn relative flex flex-col justify-between mx-auto h-screen snap-start snap-always w-[min(1100px,95%)]"
          id="section1"
        >
          <Fade top delay={400}>
            <p className=" m-4 text-curse font-Zeyada text-pageName text-2xl">
              about
            </p>
          </Fade>
          <div className="fadeIn absolute bottom-32  w-2/3 h-1/2 bg-highlight rounded-full mix-blend-normal filter blur-[8rem] mainBlob"></div>
          <div className="blobs " role="presentation">
            <div className="blob-rotate">
              <div className="blob-move">
                <div className="blob"></div>
              </div>
            </div>
            <div className="blob-rotate">
              <div className="blob-move">
                <div className="blob"></div>
              </div>
            </div>
            <div className="blob-rotate">
              <div className="blob-move">
                <div className="blob"></div>
              </div>
            </div>
          </div>

          <div className="pr-14 sm:pr-0 md:p-16 pb-1  flex justify-center items-end  h-full">
            <div className="z-10">
              <Fade bottom delay={400}>
                <p className="text-4xl pr-5 inline-block sm:text-8xl font-black font-Montserrat pb-5">
                  Me,{" "}
                </p>
              </Fade>
              <Fade bottom delay={450}>
                <p className="text-4xl pr-5 inline-block sm:text-8xl font-black font-Montserrat pb-5">
                  Myself{" "}
                </p>
              </Fade>
              <Fade bottom delay={500}>
                <p className="text-4xl pr-5 inline-block sm:text-8xl font-black font-Montserrat pb-5">
                  & I
                </p>
              </Fade>

              <Fade bottom delay={700}>
                <h2 className="pb-5">
                  am <span className="">Anurag </span> and I'm a MERN Stack
                  Developer currently based in Gurugram.
                </h2>
              </Fade>
              <Fade bottom delay={700}>
                <p className="pb-5">Passionate about Web Development.</p>
              </Fade>
              <Fade bottom delay={650}>
                <p className="text-highlight2   pb-5">
                  My interest falls more on playing with CSS and bringing out
                  something worthwhile. Most of my time is spent on creating
                  responsive web apps. I like to use modern front-end libraries
                  to fasten up the process while keeping in mind that the build
                  stays authentic by giving slight tweaks. Interested in the
                  entire front-end spectrum and working on ambitious projects
                  with positive people.
                </p>
              </Fade>
              <Fade bottom delay={900}>
                <div className="w-[min(98%,25rem)]  p-2 flex  items-center bg-background3 border border-1 border-background2 rounded-full ">
                  <img
                    className="w-16 h-16 square mr-2  object-cover rounded-full"
                    src={ProfileImg}
                    alt="pfp"
                  />
                  <p className="ml-auto">See Resume and Contacts</p>

                  <HashLink
                    className="w-14 h-14 ml-1 square flex items-center justify-center rounded-full text-white   hover:bg-background2"
                    to="/#section4"
                  >
                    <EastIcon />
                  </HashLink>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* //! ------- section 2   ---------------------------------------------------------------------------------------------------------------------------------- */}

        <section
          style={{ height: "100dvh" }}
          className="section2 slideIn flex flex-col justify-between mx-auto h-screen snap-start snap-always w-[min(1100px,95%)]"
          id="section2"
        >
          <Fade top delay={400}>
            <p className="m-4 font-Zeyada text-pageName text-2xl">
              skills & experience
            </p>
          </Fade>

          <div className="md:p-16 pr-14 sm:pr-0 pb-1  flex justify-center items-end relative h-full ">
            <div className="z-10 ">
              <Fade bottom delay={200}>
                <h1 className="text-4xl sm:text-8xl font-black  pb-5 font-Montserrat">
                  I've
                </h1>
              </Fade>
              <Fade bottom delay={500}>
                <h2>
                  got experience of more than 1 year of working professionally.
                </h2>
              </Fade>
              <br />
              <Fade bottom delay={200}>
                <p>
                  Ive created apps using
                  <span className="text-highlight">
                    {" "}
                    vanilla javascript, jquery, express
                  </span>
                  . At this time I'm making projects using React.js, as I can
                  develop full-stack apps I've also used
                  <span className="text-highlight"> Mongodb, Node.js</span> in
                  projects to create backend. I also use modern CSS frameworks
                  such as
                  <span className="text-highlight">
                    {" "}
                    tailwind, bootstrap, chakraUI.{" "}
                  </span>
                  In some of my projects I've used{" "}
                  <span className="text-highlight">
                    {" "}
                    GOOGLE Oauth authentication strategy{" "}
                  </span>{" "}
                  to authenticate the user using the{" "}
                  <span className="text-highlight"> Passport.js. </span>I am
                  also familiar with{" "}
                  <span className="text-highlight"> git, mongoose.</span>
                  <br />
                  <br />
                  Previously, I've worked as a graphic designer in a company and
                  I've also worked as a freelancer. I have no prior experience
                  of working in a company or in a team, I am a fresher but with
                  skills.
                </p>
              </Fade>
              <Fade bottom delay={400}>
                <div className="mt-2 sm:mt-8 flex gap-3 sm:gap-8 flex-wrap">
                  {SkillIcons.map((icon, index) => (
                    <div className="tooltip" key={index}>
                      <img
                        className="w-7 h-7 sm:w-10 sm:h-10 hover:after:content['hello']"
                        src={Object.values(icon)}
                        alt=""
                      />
                      <span className="tooltiptext">{Object.keys(icon)}</span>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
            <div className="fadeIn absolute -left-40 -bottom-40  w-2/3 h-1/2 bg-[#928daa] rounded-full mix-blend-normal filter blur-[7rem]"></div>
          </div>
        </section>

        {/* //!-------  section 3   ----------------------------------------------------------------------------------------------------------------------- */}

        <section
          style={{ height: "100dvh" }}
          className="section3 slideIn flex flex-col justify-between mx-auto h-screen snap-start snap-always w-[min(1100px,95%)]"
          id="section3"
        >
          <Fade top delay={400}>
            <p className="m-4 font-Zeyada text-2xl text-pageName">
              work & projects
            </p>
          </Fade>

          <div className="md:p-16 pr-14 sm:pr-0 pb-1 flex items-end relative h-full ">
            <div className="z-10 flex flex-col gap-2 sm:gap-5">
              <Fade bottom delay={200}>
                <h1 className="text-4xl sm:text-8xl font-black  pb-5 font-Montserrat">
                  Projects.
                </h1>
              </Fade>
              <Fade bottom delay={400}>
                <p className="faltu">
                  <span className="hidden sm:block">
                    I have created many apps with different functionalities and
                    designs, Static to dynamic all in a year.
                  </span>
                  Click on Links and headout to a dedicated page for the
                  project.
                </p>
              </Fade>
              {projectsLink.map((item, index) => (
                <React.Fragment key={index}>
                  <Fade bottom delay={400}>
                    <CustomLink
                      title={item.title}
                      link={item.link}
                      desc={item.desc}
                    />
                  </Fade>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* //! -------- section 4 ----------------------------------------------------------------------------------------------------------------------------------------- */}

        <section
          style={{ height: "100dvh" }}
          className="section4  slideIn relative flex-col justify-between mx-auto h-screen snap-start snap-always w-[min(1100px,95%)]"
          id="section4"
        >
          <Fade top delay={400}>
            <p className="m-4 font-Zeyada text-2xl text-pageName">contact</p>
          </Fade>
          <div className="md:p-16 pr-14 sm:pr-0 pb-10  flex justify-center items-end h-full ">
            <div className="z-10 ">
              <Fade bottom delay={400}>
                <a
                  href="https://drive.google.com/file/d/1BRVS8nDAZQe8YhyNdwr_yN17Th5mY7XJ/view?usp=sharing"
                  target="_blank"
                >
                  <h2 className="text-2xl font-semibold hover:text-highlight transition-all ease-in-out delay-50">
                    Resume
                  </h2>
                </a>
              </Fade>

              <Fade bottom delay={400}>
                <div className="h-12 flex items-center gap-4">
                  <a
                    className="hover:text-highlight transition-all ease-in-out delay-50"
                    target="_blank"
                    href="https://github.com/eggratanurag"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    className="hover:text-highlight transition-all ease-in-out delay-50"
                    href="https://www.linkedin.com/in/eggrat/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    className="hover:text-highlight transition-all ease-in-out delay-50"
                    target="_blank"
                    href="https://twitter.com/eggrat__"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    className="hover:text-highlight transition-all ease-in-out delay-50"
                    href="https://www.behance.net/anuragojha"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faBehance}
                      style={{ fontSize: "25px" }}
                    />
                  </a>
                </div>
              </Fade>

              <form ref={form} onSubmit={sendEmail} className="contactForm">
                <Fade bottom delay={300}>
                  <h1 className="text-4xl sm:text-8xl font-black  pb-5 font-Montserrat">
                    Contact me.
                  </h1>
                </Fade>
                <Fade bottom delay={400}>
                  <p className="pb-5">
                    I’m looking for job and also interested in freelance
                    opportunities especially ambitious or large projects.
                    However, if you have other request or question, don’t
                    hesitate to use the form.
                  </p>
                </Fade>
                <Fade bottom delay={400}>
                  <div className="flex gap-5">
                    <div className="inputStyle w-full">
                      <input
                        className="p-5 w-full bg-transparent border-none outline-none"
                        type="text"
                        placeholder="name"
                        name="user_name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="inputStyle w-full">
                      <input
                        type="email"
                        placeholder="email"
                        name="user_email"
                        className="w-full p-5  bg-transparent border-none outline-none"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </Fade>
                <Fade bottom delay={400}>
                  <div className="inputStyle w-full">
                    <input
                      className="p-5 w-full bg-transparent border-none outline-none"
                      type="text"
                      placeholder="subject"
                      name="subject"
                    />
                  </div>
                </Fade>
                <Fade bottom delay={400}>
                  <div className="inputStyle w-full">
                    <textarea
                      className="p-5 w-full bg-transparent resize-none border-none outline-none"
                      type="text"
                      rows="3"
                      placeholder="type a message"
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </Fade>
                <Fade bottom delay={400}>
                  <button
                    type="submit"
                    value="send"
                    disabled={!name || !email || !message}
                    className="rounded-sm h-12 border-none font-montserrat  w-full text-background1 bg-[#917fb3] hover:enabled:shadow-[0_0px_10px_#c1a9f4]  disabled:bg-[#908ba8] my-5"
                  >
                    <h3>{text}</h3>
                  </button>
                </Fade>
              </form>
            </div>
          </div>
          <div className="fadeIn absolute top-0 left-0  w-96 h-96 bg-[#928daa] rounded-full mix-blend-normal filter blur-[8rem]"></div>
        </section>

        {/* //! ----------- section 5 --------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <section
          style={{ height: "100dvh" }}
          className="section5 slideIn relative flex-col justify-between mx-auto h-screen snap-start snap-always w-[min(1100px,95%)]"
          id="section5"
        >
          <Fade top delay={400}>
            <p className="m-4 font-Zeyada text-2xl">blog</p>
          </Fade>
          <div className="md:p-16 pr-12 sm:pr-0 pb-1  flex  justify-center items-end">
            <div className="">
              <p>the blog app is under development</p>
            </div>
          </div>
          <div className="fadeIn absolute bottom-0 left-0  w-1/2 h-1/2 bg-[#928daa] rounded-full mix-blend-normal filter blur-[12rem]"></div>
        </section>
      </div>

      <div className=" p-1 pr-0 flex items-center justify-center bg-transparent absolute right-2 sm:pr-12 sm:relative">
        <div className="vl border border-1 border-lime h-screen absolute"></div>

        <ul className="flex relative flex-col p-0 items-center">
          <div
            ref={navCircle}
            className=" absolute border top-[-24px] border-1 border-highlight h-[52px] w-[52px]   rounded-full  transition-all ease-in-out delay-20  present block"
          ></div>

          <HashLink to="/#section1" ref={liRef1} className="li1 li">
            <div>
              <InfoTwoToneIcon />
            </div>
          </HashLink>

          <HashLink to="/#section2" ref={liRef2} className="li2 li">
            <div>
              <LightbulbTwoToneIcon />
            </div>
          </HashLink>

          <HashLink to="/#section3" ref={liRef3} className="li3 li">
            <div>
              <WorkHistoryTwoToneIcon />
            </div>
          </HashLink>

          <HashLink to="/#section4" ref={liRef4} className="li4 li">
            <div>
              <EmailTwoToneIcon />
            </div>
          </HashLink>

          <HashLink to="#section5" ref={liRef5} className="li5 li">
            <div>
              <BookTwoToneIcon />
            </div>
          </HashLink>
        </ul>
      </div>
    </div>
  );
}

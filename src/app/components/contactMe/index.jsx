"use client"
import React, { useRef, useEffect, useState } from "react";
// import "./home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import emailjs from "@emailjs/browser";
import { Fade, Slide } from "react-awesome-reveal";


export default function ContactMe() {
    const [text, setText] = useState("Send Message");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

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

    return (
        <section id="contactMe" className="section4 text-white relative flex-col justify-between  ">
            <Fade triggerOnce top delay={200}>
                <p className="m-4 font-Zeyada text-2xl text-pageName">contact</p>
            </Fade>
            <div className="md:py-16 md:px-8  sm:pr-0 pb-10  flex justify-center items-end h-full ">
                <div className="z-10 ">
                    <Fade triggerOnce bottom delay={200} distance="50px">
                        <a
                            href="https://drive.google.com/file/d/1Z1kiMc59qJIOuwLNsLhgA_pF26GWOSxA/view?usp=sharing"
                            target="_blank"
                        >
                            <h2 className="text-2xl w-[100px] font-semibold hover:text-highlight transition-all ease-in-out delay-50">
                                Resume
                            </h2>
                        </a>
                    </Fade>

                    {/* <Fade triggerOnce bottom delay={200} distance="50px">
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
                        
                        </div>
                    </Fade> */}

                    <form ref={form} onSubmit={sendEmail} className="contactForm">
                        <Fade triggerOnce bottom delay={200} distance="50px">
                            <h1 className="text-4xl md:text-6xl  font-black  pb-5 font-Montserrat">
                                Contact me.
                            </h1>
                        </Fade>
                        <Fade triggerOnce bottom delay={200} distance="50px">
                            <p className="pb-5">
                                Currently I’m Working as Full time and looking for some freelance
                                opportunities especially ambitious or large projects.
                                However, if you have other request or question, don’t
                                hesitate to use the form.
                            </p>
                        </Fade>
                        <Fade triggerOnce bottom delay={200} distance="50px">
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
                        <Fade triggerOnce bottom delay={200} distance="50px">
                            <div className="inputStyle w-full">
                                <input
                                    className="p-5 w-full bg-transparent border-none outline-none"
                                    type="text"
                                    placeholder="subject"
                                    name="subject"
                                />
                            </div>
                        </Fade>
                        <Fade triggerOnce bottom delay={200} distance="50px">
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
                        <Fade triggerOnce bottom delay={200} distance="50px">
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
    );
}

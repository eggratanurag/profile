import Image from "next/image";
import ProfileImg from "./../../../images/profileImg.webp";
import { FaChevronRight } from "react-icons/fa6";
import { Fade, Slide } from "react-awesome-reveal";
import { FlipWords } from './../../../components/ui/flip-words.jsx';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import "./index.css"
import { chakraui, css, express, framerMotion, github, graphql, html, javascript, next, nodejs, reactNative, redux, sanity, supabase, tailwind, typescript, } from './../../../icons/export.js';

export default function Home() {


    const techStack = [
        { name: "React.js", icon: reactNative, link: "https://react.dev/" },
        { name: "Next.js", icon: next, link: "https://nextjs.org/" },
        { name: "React Native", icon: reactNative, link: "https://reactnative.dev/" },
        { name: "JavaScript", icon: javascript, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", icon: typescript, link: "https://www.typescriptlang.org/" },
        { name: "Framer Motion", icon: framerMotion, link: "https://www.framer.com/motion/" },
        { name: "Tailwind CSS", icon: tailwind, link: "https://tailwindcss.com/" },
        { name: "Chakra UI", icon: chakraui, link: "https://chakra-ui.com/" },
        { name: "GraphQL", icon: graphql, link: "https://graphql.org/" },
        { name: "Supabase", icon: supabase, link: "https://supabase.com/" },
        { name: "Sanity", icon: sanity, link: "https://www.sanity.io/" },
        { name: "GitHub", icon: github, link: "https://github.com/" },
        { name: "Redux", icon: redux, link: "https://redux.js.org/" },
        // { name: "HTML", icon: html, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        // { name: "CSS", icon: css, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "Express.js", icon: express, link: "https://expressjs.com/" },
        { name: "Node.js", icon: nodejs, link: "https://nodejs.org/" },
    ];


    return (
        <section id="hero" className="relative flex flex-col  justify-between mx-auto min-h-screen pb-5 mb-16  w-[min(1100px,95%)]">
            <p className="m-4 font-Zeyada text-pageName text-2xl">about</p>
            <div className="fadeIn absolute bottom-32  w-2/3 h-1/2 bg-highlight rounded-full mix-blend-normal filter blur-[8rem] mainBlob"></div>
            <div className="blobs" role="presentation" >
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

            <div className=" text-white pt-[100px] sm:pt-0 pb-1 flex justify-center items-end ">
                <div >
                    <div className="big-text-div flex">
                        <Fade triggerOnce bottom delay={200}>
                            <FlipWords className="text-4xl pr-5 text-white inline-block md:text-6xl font-black font-Poppins pb-5" words={greetings} />
                        </Fade>
                    </div>
                    <Fade triggerOnce bottom delay={200} distance="50px">
                        <h2 className="pb-5">
                            am Anurag — a Frontend Engineer. I create sleek, high-performance web experiences that
                            are responsive, accessible, and visually engaging. <br className="hidden sm:block" /> I focus on delivering clean design
                            with solid functionality.
                        </h2>
                    </Fade>
                    <Fade triggerOnce bottom delay={300} distance="50px">
                        <p className="text-highlight2 pb-5">
                            I turn complex ideas into intuitive interfaces, optimize performance, and ensure
                            pixel-perfect execution. I also explore emerging tools and build personal projects to
                            refine my craft, always aiming to create products that feel effortless and memorable.
                        </p>
                    </Fade>

                    <Fade triggerOnce bottom delay={300} distance="50px">
                        <div className="flex flex-col text-highlight2 pb-5">
                            <div className="flex gap-1 items-center" ><IoLocationOutline fontSize="17px" /> Gurgaon, India.</div>
                            <div className="flex gap-2 items-center" ><MdOutlineAlternateEmail fontSize="15px" />anuragojha8435@gmail.com</div>
                        </div>
                    </Fade>


                    <Fade triggerOnce bottom delay={300} distance="50px">
                        <div className="flex flex-wrap gap-2 text-white pb-5">
                            {techStack.map((item, index) => (
                                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="group relative tag p-2 sm:p-3 flex items-center bg-background3 border border-1 border-background2 rounded-full ">
                                    <Image className="w-5 h-5 sm:w-8 sm:h-8" src={item.icon} />
                                    <span className="absolute whitespace-nowrap bottom-[-30px] scale-0 rounded bg-gray-800 px-2 py-1 text-xs text-white group-hover:scale-100 transition-all">
                                        {item.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </Fade>


                    <a href="#contactMe">
                        <Fade triggerOnce bottom delay={600} distance="50px">
                            <div className="btn p-2 flex items-center bg-background3 border border-1 border-background2 rounded-full ">
                                <Image
                                    className="w-16 h-16 square mr-2  object-cover rounded-full"
                                    src={ProfileImg}
                                    alt="pfp"
                                />
                                <p className="ml-2">See Resume & Contacts</p>
                                <i><FaChevronRight /></i>
                            </div>
                        </Fade>
                    </a>

                </div>
            </div>
        </section>
    );
}


const greetings = [
    "Hello & I",              // English
    "Hola & Yo",              // Spanish
    "Bonjour & Moi",          // French
    "Hallo & Ich",            // German
    "Ciao & Io",              // Italian
    "Olá & Eu",               // Portuguese
];

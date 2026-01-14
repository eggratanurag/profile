"use client"
import Image from "next/image";
import ProfileImg from "./../../../images/profileImgHighRes.webp";
import KumaBonney from "./../../../images/kumaBonney.webp";
import { FaChevronRight } from "react-icons/fa6";
import { Fade, Slide } from "react-awesome-reveal";
import { FlipWords } from './../../../components/ui/flip-words.jsx';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import "./index.css"
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { cn } from "@/lib/utils";
import { chakraui, css, express, framerMotion, github, graphql, html, javascript, next, nodejs, reactNative, redux, sanity, supabase, tailwind, typescript, jest, chatgpt, mongodb } from './../../../icons/export.js';
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaBehance } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { IoMdMale } from "react-icons/io";


export default function Home() {
    const [currentTime, setCurrentTime] = useState("");
    const [lastPlayed, setLastPlayed] = useState(null);
    const [loadingSong, setLoadingSong] = useState(true);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
            let hours = istTime.getHours();
            const minutes = istTime.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            const formattedHours = hours.toString().padStart(2, '0');
            setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
        };

        updateTime(); // Set initial time
        const interval = setInterval(updateTime, 60000); // Update every minute

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    useEffect(() => {
        async function fetchLastPlayed() {
            try {
                const res = await fetch('/api/spotify/liked-songs?limit=1');
                const data = await res.json();

                if (res.ok && data && Array.isArray(data) && data.length > 0 && data[0].track) {
                    // Use the first liked song as "last played"
                    setLastPlayed({
                        track: data[0].track,
                        played_at: new Date().toISOString()
                    });
                } else if (res.ok && Array.isArray(data) && data.length === 0) {
                    setLastPlayed(null);
                } else {
                    console.error('Error response:', data);
                }
            } catch (err) {
                console.error('Error fetching last played song:', err);
            } finally {
                setLoadingSong(false);
            }
        }

        fetchLastPlayed();
    }, []);

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
        { name: "Jest", icon: jest, link: "https://jestjs.io/" },
        { name: "ChatGPT", icon: chatgpt, link: "https://chatgpt.com/" },
        { name: "MongoDB", icon: mongodb, link: "https://www.mongodb.com/" },
    ];


    return (
        <section id="hero" className="relative min-h-screen pb-5 mb-16 w-[min(1100px,95%)] mx-auto">
            {/* <p className="m-4 font-Zeyada text-pageName text-2xl relative z-10">about</p> */}

            {/* Floating Blobs Background */}
            <div className="fadeIn absolute bottom-32 w-2/3 h-1/2 bg-highlight rounded-full mix-blend-normal filter blur-[8rem] mainBlob z-0"></div>
            <div className="blobs absolute inset-0 z-0" role="presentation">
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

            {/* Grid Layout */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-[100px] sm:pt-8 items-stretch">

                {/* Top Left - Main Heading */}
                <div className="lg:col-span-2 grid-card p-6 md:p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs uppercase tracking-wider text-gray-400">PORTFOLIO</span>
                        <span className="text-xs uppercase tracking-wider text-gray-400">EST. 2023</span>
                    </div>
                    <div>
                        <Fade triggerOnce bottom delay={200}>
                            <div className="big-text-div flex mb-4">
                                <FlipWords className="text-3xl md:text-5xl lg:text-6xl text-white inline-block font-black font-Poppins" words={greetings} />
                            </div>
                        </Fade>
                        <Fade triggerOnce bottom delay={300} distance="50px">
                            <h2 className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
                                am Anurag, a Frontend Engineer. I create sleek, high-performance web experiences that
                                are responsive, accessible, and visually engaging.
                            </h2>
                        </Fade>
                        <Fade triggerOnce bottom delay={400} distance="50px">
                            <p className="text-highlight2 text-base">
                               High fidelity interfaces and scalable frontend architecture
                            </p>
                        </Fade>
                    </div>
                </div>

                {/* Top Right - Action Cards */}
                <div className="space-y-4 h-full flex flex-col min-h-0">
                    <Fade triggerOnce bottom delay={400}>
                        <a href="#contactMe" className="grid-card flex flex-row justify-between items-start p-6 group hover:bg-background2 transition-all cursor-pointer">
                            <div className="flex flex-col justify-between items-start">
                                {/* <span className="text-2xl">{'/>'}</span> */}
                                <h3 className="text-xl font-bold text-white mb-1">Start Conversation</h3>
                                <p className="text-sm text-gray-400">Get in touch</p>
                            </div>
                            <FaChevronRight className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                        </a>
                    </Fade>

                    {/* Bottom Right - Additional Info */}
                    <div className="flex-1 flex min-h-0">
                        <Fade triggerOnce bottom delay={500} className="w-full h-full flex">
                            <div className="grid-card flex items-stretch flex-1 font-Poppins p-6 flex-col justify-between min-h-0 w-full">
                            <div className="flex w-full justify-between mb-4">
                                <div className="text-white flex items-center gap-2" ><IoMdMale /> <span className="text-gray-500" >|</span> <span>24</span></div>
                                <span className="text-xs uppercase tracking-wider text-gray-400">ABOUT</span>
                            </div>
                            <div className="space-y-4">
                                <Fade triggerOnce bottom delay={300} distance="50px">
                                    <div className="flex flex-col  h-full  text-highlight2 text-sm ">
                                        <div className="flex gap-2 items-center">
                                            <MdOutlineAlternateEmail fontSize="14px" />
                                            <a 
                                                href="https://mail.google.com/mail/?view=cm&to=anuragojha8435@gmail.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white transition-colors cursor-pointer"
                                            >
                                                anuragojha8435@gmail.com
                                            </a>
                                        </div>
                                        <div className="self-stretch overflow-hidden mt-3 mb-0 flex gap-3 ">
                                            <div className="flex flex-row gap-3 flex-1 pt-2">
                                                {/* GitHub */}
                                                <a
                                                    href="https://github.com/eggratanurag"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="grid-card w-10 h-10 aspect-square flex items-center justify-center group hover:bg-background2 transition-all cursor-pointer"
                                                >
                                                    <LuGithub className="text-gray-400 group-hover:text-white transition-colors text-xl" />
                                                </a>

                                                {/* LinkedIn */}
                                                <a
                                                    href="https://www.linkedin.com/in/eggrat/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="grid-card w-10 aspect-square flex items-center justify-center group hover:bg-background2 transition-all cursor-pointer"
                                                >
                                                    <FaLinkedinIn className="text-gray-400 group-hover:text-white transition-colors text-xl" />
                                                </a>

                                                {/* Twitter */}
                                                <a
                                                    href="https://x.com/eggrat__"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="grid-card w-10 aspect-square flex items-center justify-center group hover:bg-background2 transition-all cursor-pointer"
                                                >
                                                    <FaXTwitter className="text-gray-400 group-hover:text-white transition-colors text-xl" />
                                                </a>

                                                {/* LeetCode */}
                                                <a
                                                    href="https://leetcode.com/u/eggrat/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="grid-card w-10 aspect-square flex items-center justify-center group hover:bg-background2 transition-all cursor-pointer"
                                                >
                                                    <SiLeetcode className="text-gray-400 group-hover:text-white transition-colors text-xl" />
                                                </a>

                                                {/* Behance */}
                                                <a
                                                    href="https://www.behance.net/anuragojha"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="grid-card w-10 aspect-square flex items-center justify-center group hover:bg-background2 transition-all cursor-pointer"
                                                >
                                                    <FaBehance className="text-gray-400 group-hover:text-white transition-colors text-xl" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>

                {/* Middle - Image/Profile Section */}
                <Fade triggerOnce bottom delay={500}>
                    <div
                        className="lg:col-span-1 grid-card p-0 overflow-hidden items-stretch h-full relative group flex flex-col min-h-0"
                    >
                        <div className="flex-1 min-h-0 relative self-stretch h-full">
                            <Image
                                className="w-full h-full object-cover"
                                src={ProfileImg}
                                alt="Profile"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="text-xs uppercase tracking-wider text-gray-300 space-y-1">
                                <p>FRONTEND ENGINEER</p>
                                <p>Anurag Ojha</p>
                                <div className="flex gap-2 items-center">
                                    <IoLocationOutline fontSize="16px" />
                                    <span>Gurgaon, India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <BentoCard name="Frontend Developer" description="High Fidelity Interfaces & Pixel-Perfect Execution" background={<Image src={ProfileImg} className="w-full h-full object-cover" alt="Profile" />} /> */}
                </Fade>

                {/* Bottom Left - Tech Stack */}
                <div className="lg:col-span-2 space-y-4">


                    {/* Metrics */}
                    <Fade triggerOnce bottom delay={700}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a href="#experience" className="grid-card p-6 flex flex-col justify-between group hover:bg-background2 transition-all cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="text-xs uppercase tracking-wider text-gray-400">EXPERIENCE</p>
                                    <FaChevronRight className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                                <div>
                                    <p className="text-3xl md:text-4xl font-bold text-white mb-1">3+ Years</p>
                                    <p className="text-sm text-gray-400">Building digital experiences</p>
                                </div>
                            </a>
                            <a href="#projects" className="grid-card p-6 flex flex-col justify-between group hover:bg-background2 transition-all cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="text-xs uppercase tracking-wider text-gray-400">PROJECTS</p>
                                    <FaChevronRight className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                                <div>
                                    <p className="text-3xl md:text-4xl font-bold text-white mb-1">12+</p>
                                    <p className="text-sm text-gray-400">Successfully delivered</p>
                                    <div className="mt-3 h-1 bg-background2 rounded-full overflow-hidden">
                                        <div className="h-full bg-highlight rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Fade>

                    <Fade triggerOnce bottom delay={600}>
                        <div className="flex  h-full gap-2">
                            <div className="px-4 flex items-center justify-center bg-background2 border border-background4  uppercase  text-white">
                                <p className="text-center" >MY STACK</p>
                            </div>

                            <div className="grid grid-cols-6 sm:grid-cols-9  gap-[3px] w-full">
                                {techStack.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative p-2 flex items-center justify-center bg-background3 border border-background2 hover:bg-background2 transition-all w-[100%]"
                                    >
                                        <Image className="w-5 h-5 sm:w-6 sm:h-6 object-contain" src={item.icon} alt={item.name} />
                                        <span className="absolute whitespace-nowrap bottom-[-30px] scale-0 rounded bg-gray-800 px-2 py-1 text-xs text-white group-hover:scale-100 transition-all z-50">
                                            {item.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Fade>

                    <Fade triggerOnce bottom delay={600}>
                        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 items-stretch">

                            <div className="hidden sm:flex flex-row gap-3 w-full" >
                                <div className="grid-card w-full self-stretch overflow-hidden p-4 flex flex-col gap-3">
                                    <div className="flex flex-row gap-3 flex-1 items-center justify-center">
                                        <div className="flex flex-col items-center justify-center">
                                            <p className="text-2xl md:text-3xl font-bold text-white  font-Poppins">{currentTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                {lastPlayed ? (
                                    <a
                                        href={lastPlayed.track.external_urls.spotify}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="grid-card p-4 flex flex-row items-center gap-4 group hover:bg-background2 transition-all cursor-pointer"
                                    >
                                        <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                                            <Image
                                                src={lastPlayed.track.album.images[0]?.url || '/placeholder-album.jpg'}
                                                alt={lastPlayed.track.album.name}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-3 h-3 rounded-full bg-[#1ED760] flex-shrink-0"></div>
                                                <span className="text-xs uppercase tracking-wider text-gray-400">Last played</span>
                                            </div>
                                            <h3 className="text-base font-bold text-white truncate mb-1">
                                                {lastPlayed.track.name}
                                            </h3>
                                            <p className="text-sm text-gray-400 truncate">
                                                by {lastPlayed.track.artists.map(artist => artist.name).join(', ')}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 w-10 h-10 rounded bg-background3 border border-background4 flex items-center justify-center group-hover:bg-background4 transition-all">
                                            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="grid-card p-4 flex flex-row items-center gap-4 min-h-[80px]">
                                        {loadingSong ? (
                                            <div className="flex items-center justify-center w-full h-full">
                                                <p className="text-sm text-gray-400">Loading...</p>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center w-full h-full">
                                                <p className="text-sm text-gray-400">No recent plays</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="flex-row flex md:hidden lg:flex gap-3 items-end" >

                                <div className="flex sm:hidden flex-row gap-3" >
                                    <div className="grid-card self-stretch overflow-hidden p-4 flex flex-col gap-3">
                                        <div className="flex flex-row gap-3 flex-1 items-center justify-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <p className="text-2xl md:text-3xl font-bold text-white  font-Poppins">{currentTime}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="https://drive.google.com/file/d/1Z1kiMc59qJIOuwLNsLhgA_pF26GWOSxA/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="grid-card h-full aspect-square flex items-center justify-center group hover:bg-background2 transition-all cursor-pointer relative"
                                >
                                    <span className="text-white group-hover:text-white group-hover:opacity-0 transition-all text-2xl font-semibold absolute">CV</span>
                                    <FaDownload className="text-gray-400 group-hover:text-white transition-all opacity-0 group-hover:opacity-100 text-lg" />
                                </a>

                                <div className="flex flex-col text-2xl text-white font-bold font-Poppins" >
                                    <p>Do</p>
                                    <p>More.</p>
                                </div>
                            </div>

                        </div>
                    </Fade>
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

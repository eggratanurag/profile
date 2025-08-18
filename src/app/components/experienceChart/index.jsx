"use client"
import React, { useEffect, useState, useRef } from "react";
import "./index.css"
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Fade, Slide } from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';
import LightbulbTwoToneIcon from "@mui/icons-material/LightbulbTwoTone";
import HourglassFullTwoToneIcon from '@mui/icons-material/HourglassFullTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import { cn } from "@/lib/utils";
import { BsChevronExpand } from "react-icons/bs";
import { BiCollapseVertical } from "react-icons/bi";


export default function Project() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [hoverFirst, setHoverFirst] = useState(false);
  const [hoverSecond, setHoverSecond] = useState(false);
  const [hoverThird, setHoverThird] = useState(false);
  const [hoverFourth, setHoverFourth] = useState(false);
  const [hoverFifth, setHoverFifth] = useState(false);
  const [blobPosition, setBlobPosition] = useState({ left: 0, top: 0 })

  const blobRef1 = useRef(null);
  const blobRef2 = useRef(null);
  const blobRef3 = useRef(null);
  const blobRef4 = useRef(null);
  const blobRef5 = useRef(null);
  const guiRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {

    let selectedBlob;

    if (hoverFirst === true) {
      selectedBlob = blobRef1.current;

    } else if (hoverSecond === true) {
      selectedBlob = blobRef2.current;

    } else if (hoverThird === true) {
      selectedBlob = blobRef3.current;

    } else if (hoverFourth === true) {
      selectedBlob = blobRef4.current;

    } else if (hoverFifth === true) {
      selectedBlob = blobRef5.current;
    }

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;

      selectedBlob?.animate({ left: `${clientX}px`, top: `${clientY}px` }, {
        duration: 1000,
        fill: 'forwards'
      });
    };

    window.addEventListener('pointermove', handlePointerMove);



  }, [hoverFirst, hoverSecond, hoverThird, hoverFourth, hoverFifth]);


  const _handleBlogHover = ({ which, type }) => {

    switch (which) {
      case 1:
        setHoverFirst(type)
        setHoverSecond(false)
        setHoverThird(false)
        setHoverFourth(false)
        setHoverFifth(false)
        break;
      case 2:
        setHoverFirst(false)
        setHoverSecond(type)
        setHoverThird(false)
        setHoverFourth(false)
        setHoverFifth(false)
        break;
      case 3:
        setHoverFirst(false)
        setHoverSecond(false)
        setHoverThird(type)
        setHoverFourth(false)
        setHoverFifth(false)
        break;
      case 4:
        setHoverFirst(false)
        setHoverSecond(false)
        setHoverThird(false)
        setHoverFourth(type)
        setHoverFifth(false)
        break;
      default:
        setHoverFirst(false)
        setHoverSecond(false)
        setHoverThird(false)
        setHoverFourth(false)
        setHoverFifth(false)
    }
  }

  useEffect(() => {
    const handleMouseMove = (event) => {
      setBlobPosition({
        x: event.clientX + window.scrollX - 25, // Adjust by half the blob's width
        y: event.clientY + window.scrollY - 25  // Adjust by half the blob's height
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative flex flex-col bg-background1 justify-between mx-auto pb-20 ">
<div
  className={cn(
    "absolute top-8 left-0 right-0 bottom-8", // 8px inset from all sides
    "[background-size:22px_22px]",
    "[background-image:radial-gradient(#c5c5c5_1px,transparent_1px)]",
    "dark:[background-image:radial-gradient(#000000,transparent_1px)]",
  )}
/>
{/* Radial gradient for the container to give a faded look */}
{/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[hsla(0, 0%, 0%, 1)] [mask-image:radial-gradient(circle_at_bottom_right,black_80%,transparent_5%)] dark:bg-[hsla(0, 0%, 0%, 0.3)]"></div> */}
<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background1 [mask-image:radial-gradient(circle_at_bottom_left,transparent_1%,black)] dark:bg-black"></div>
<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background1 [mask-image:radial-gradient(circle_at_top_left,transparent_1%,black)] dark:bg-black"></div>

    <div className=' justify-center mx-auto items-center text-[#efefef] text-[clamp(12px,1.5vw,15px)] font-poppins relative w-[min(1200px,95%)]'>

      <div className={cn("flex flex-col py-2 md:py-12 xl:py-16 temprature", !isExpanded && "gap-2" )} >
      
        <div className='projectName flex flex-row gap-5 items-center p-3'>

          <div className="flex flex-col gap-2">
            <div className=" relative flex items-center gap-5">
              <p className="text-4xl inline-block md:text-5xl shadow-sm font-black font-Montserrat">
                Experience
              </p>
              <button onClick={() => setIsExpanded(prev => !prev)} className="rounded-full relative mt-2 w-12 h-12 bg-background1 hover:bg-background2 border border-transparent hover:border-background4 flex items-center justify-center transition-all duration-300 ease-in-out">
                {/* <div className="mic-shadow"></div> */}
                  {isExpanded ? <BsChevronExpand style={{fontSize: "30px"}}/> : <BiCollapseVertical style={{fontSize: "30px"}} />}
              </button>
            </div>
            <p className="text-1xl mt-[5px] inline-block font-normal font-Montserrat">
              let me walk you through my whole working experience.
            </p>
          </div>
        </div>

        {/* first rope */}

       {isExpanded && <div className="infoDiv">
          <div className="ropeWrapper">
            <div className="rope"></div>
            <div className="iconBox1" >
              <AccessTimeTwoToneIcon />
            </div>
          </div>
            <Fade  triggerOnce bottom delay={200}>
              <div className="flex flex-col">
              <p className="text-3xl pr-5 inline-block md:text-4xl font-black font-Montserrat ">
                Currently
              </p>
              <p className="text-1xl inline-block font-normal font-Montserrat">
                I am working in a startup (SAAS) based in Gurugram
              </p>
              </div>
            </Fade>
        </div>}

        <Tilt {...tiltProps} style={{ overflow: "hidden" }}>
          <div className={cn("transition-all duration-300", isExpanded && "ml-0 sm:ml-[70px]")} id="cardWrap" ref={cardRef} onMouseEnter={() => _handleBlogHover({ which: 1, type: true })} onMouseLeave={() => _handleBlogHover({ which: 1, type: false })}>
            <div className="experienceChartBlob" ref={blobRef1} style={{ left: `${blobPosition.x}px`, top: `${blobPosition.y}px`, display: hoverFirst ? "block" : "none" }}></div>
            <div className={cn("card min-h-[200px]", isExpanded && "min-h-[550px] md:min-h-[500px]")} ></div>
            <div className="cardContent">
              <div className="flex justify-between items-start" >
              <p className="text-lg" >Influcent Technologies</p>
              <div className="dateInfo">
                <p className='content'>Frontend developer</p>
                <p className='content'>May 2025 - Current</p>
              </div>
              </div>
              <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                {isExpanded && <section className="max-w-3xl  text-white">
                  <p className="text-lg font-semibold ">
                    My Role & Achievements
                  </p>

                  <ul className="mt-3 text-inherit w-full list-disc space-y-2 pl-6 content2">
                    <li>Built a service dashboard for creators to launch and manage consultations, webinars, courses, and lead widgets.</li>
                    <li>Developed scheduling logic for bookings, cancellations, and reschedules based on availability.</li>
                    <li>Enabled real-time CRUD sync between dashboard and multiple creator websites.</li>
                    <li>Integrated payment gateways: PhonePe, Cashfree, Razorpay, PayPal.</li>
                    <li>Added draft-saving for multi-step course creation.</li>
                  </ul>
                </section>}

                {isExpanded && <p className='content mt-2' >Influcent is a creator monetization platform that helps influencers and educators launch, manage, and sell services like consultations, webinars, and online courses, with integrated scheduling, payments, and marketing tools.</p>}
                <div >
                  <p className='content2'>Projects I've worked on</p>
                  <div className="flex flex-row gap-[10px] mt-[20px] flex-wrap">
                    <Link href="https://influcent.com" target="_blank" ><button className=" rounded-full min-h-[35px] px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">influcent.com</button></Link>
                    <Link href="https://dashboard.influcent.com" target="_blank"  ><button className="rounded-full min-h-[35px] px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">dashboard.influcent.com</button></Link>
                    {/* <Link href="https://nitikabhola.com" target="_blank" ><button className="rounded-full h-[35px] px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">nitikabhola.com</button></Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>

        {/* second rope */}

       {isExpanded && <div className="infoDiv">
          <div className="ropeWrapper">
            <div className="rope"></div>
            <div className="iconBox1" >
              <LightbulbTwoToneIcon />
            </div>
          </div>
            <Fade triggerOnce bottom delay={200}>
            <div className="flex flex-col">
              <p className="text-3xl pr-5 inline-block md:text-4xl font-black font-Montserrat ">
                Previously
              </p>
              <p className="text-1xl inline-block font-normal font-Montserrat">
                I was working in a startup (SAAS) based in Gurugram
              </p>
              </div>
            </Fade>
        </div>}

        {/* second cardContent */}

        <Tilt {...tiltProps} style={{ overflow: "hidden" }}>
          <div id="cardWrap" className="min-h-full" ref={cardRef} onMouseEnter={() => _handleBlogHover({ which: 2, type: true })} onMouseLeave={() => _handleBlogHover({ which: 2, type: false })}>
            <div className="experienceChartBlob" ref={blobRef2} style={{ left: `${blobPosition.x}px`, top: `${blobPosition.y}px`, display: hoverSecond ? "block" : "none" }}></div>
            <div className={cn("card min-h-[200px]", isExpanded && "min-h-[600px] md:min-h-[550px]")} ></div>
            <div className="cardContent min-h-full" >
              <div className="flex justify-between items-start">
              <div className="text-lg">Ottermap</div>
              <div className="dateInfo">
                <p className='content'>Frontend developer</p>
                <p className='content'>May 2024 - May 2025</p>
              </div>
              </div>
              <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                {isExpanded && <section className="max-w-3xl  text-white">
                  <p className="text-lg font-semibold ">
                    My Role & Achievements
                  </p>

                  <ul className="mt-3 text-inherit w-full list-disc space-y-2 pl-6 content2">
                    <li>Integrated <strong>micro-frontend architecture</strong> with module federation to unify legacy and modern packages.</li>
                    <li>Built a <strong>React Native Expo</strong> app for workforce task management with geo-fencing, geo-tagging, map rendering, and annotation tools.</li>
                    <li>Designed a <strong>responsive UI</strong> optimized for high-resolution and variable screen sizes.</li>
                    <li>Developed advanced <strong>mapping tools</strong> in OpenLayers for drawing, editing, and complex geometry manipulation.</li>
                    <li>Contributed to an <strong>interior planning tool</strong> with real-time 2D layout drawing.</li>
                    <li>Created a secure <strong>video counseling app</strong> using Agora, Supabase, and React.</li>
                  </ul>
                </section>}

                {isExpanded && <p className='content mt-2' >Ottermap is an automated property measurement platform for industries like landscaping, snow removal, and facilities maintenance, enabling users to generate precise property maps without manual measurement.</p>}
                <div>
                  <p className='content2'>Projects I've worked on</p>
                  <div className="flex flex-row gap-[10px] flex-wrap">
                    <h4 style={{ marginTop: "20px" }}><a href="https://ottermap.com" target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">ottermap.com</a></h4>
                    <h4 style={{ marginTop: "20px" }}><a href="https://uspeak.in" target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">uspeak.in</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>

        {/* third rope */}
        {isExpanded && <div className="infoDiv" >
          <div className="ropeWrapper">
            <div className="rope2"></div>
            <div className="iconBox1" >
              <HourglassFullTwoToneIcon />
            </div>
          </div>
            <Fade triggerOnce bottom delay={200}>
            <div className="flex flex-col">
              <p className="text-3xl pr-5 inline-block md:text-4xl font-black font-Montserrat ">
                Before this
              </p>
              <p className="text-1xl inline-block font-normal font-Montserrat">
                I was working in an IT service provider startup based in Gurugram.
              </p>
              </div>
            </Fade>
        </div>}

        {/* third cardContent */}
        <Tilt {...tiltProps} style={{ overflow: "hidden" }}>
          <div  className={cn("transition-all duration-300", isExpanded && "ml-0 sm:ml-[70px] ")} id="cardWrap" ref={cardRef} onMouseEnter={() => _handleBlogHover({ which: 3, type: true })} onMouseLeave={() => _handleBlogHover({ which: 3, type: false })}>
            <div className="experienceChartBlob" ref={blobRef3} style={{ left: `${blobPosition.x}px`, top: `${blobPosition.y}px`, display: hoverThird ? "block" : "none" }}></div>
            <div  className={cn("card min-h-[200px]", isExpanded && "min-h-[600px] md:min-h-[500px]")} ></div>
            <div className="cardContent">
            <div className="flex justify-between items-start">
              <p  className="text-lg">Rootandleaves</p>
              <div className="dateInfo">
                <p className='content'>Frontend developer</p>
                <p className='content'>May 2023 - May 2024</p>
              </div>
              </div>
              <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                {isExpanded && <section className="max-w-3xl  text-white">
                  <p className="text-lg font-semibold ">
                    My Role & Achievements
                  </p>

                  <ul className="mt-3 text-inherit w-full list-disc space-y-2 pl-6 content2">
                    <li>Optimized large-scale applications with code-splitting and lazy loading for faster load times.</li>
                    <li>Enhanced SEO through industry best practices, boosting search visibility and rankings.</li>
                    <li>Built an advanced date-range calendar inspired by Google Analytics for precise data filtering.</li>
                    <li>Developed reusable data visualization components including interactive charts and grids.</li>
                    <li>Integrated Google Ads, Facebook, and GA4 analytics via GraphQL APIs.</li>
                    <li>Implemented real-time SMPP data streams using GraphQL subscriptions for live updates.</li>
                  </ul>
                </section>}

                {isExpanded && <p className='content mt-2' >Rootandleaves in Gurugram, India delivers custom software, mobile apps, web development, and AI solutions, focusing on innovative and efficient technology to meet diverse client needs.</p>}
                <div>
                  <p className='content2'>Projects I've worked on</p>
                  <div className="flex flex-row gap-[10px] flex-wrap">
                    <h4 style={{ marginTop: "20px" }}><a href="https://mx360.io" target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">mx360.io</a></h4>
                    <h4 style={{ marginTop: "20px" }}><a href="https://jusplaytoys.com" target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">jusplaytoys.com</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>

        {/* fourth rope */}
        {isExpanded && <div className="infoDiv">
          <div className="ropeWrapper">
            <div className="rope"></div>
            <div className="iconBox1" >
              <CalendarTodayTwoToneIcon />
            </div>
          </div>
            <Fade triggerOnce bottom delay={200}>
            <div className="flex flex-col">
              <p className="text-3xl pr-5 inline-block md:text-4xl font-black font-Montserrat ">
                Before that
              </p>
              <p className="text-1xl inline-block font-normal font-Montserrat">
                I was working as a Freelance Full-stack (MERN) developer.
              </p>
              </div>
            </Fade>
        </div>}

        {/* fourth cardContent */}
        <Tilt {...tiltProps} style={{ overflow: "hidden" }}>
          <div id="cardWrap" ref={cardRef} onMouseEnter={() => _handleBlogHover({ which: 4, type: true })} onMouseLeave={() => _handleBlogHover({ which: 4, type: false })}>
            <div className="experienceChartBlob" ref={blobRef4} style={{ left: `${blobPosition.x}px`, top: `${blobPosition.y}px`, display: hoverFourth ? "block" : "none" }}></div>
            <div className={cn("card min-h-[200px]", isExpanded && "min-h-[400px]")} ></div>
            <div className="cardContent">
            <div className="flex justify-between items-start">
              <p className="text-lg">Freelancing</p>
              <div className="dateInfo">
                <p className='content'>Mern-stack Developer </p>
                <p className='content'>Aug 2022 - Apr 2023</p>
              </div>
              </div>
              <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                {isExpanded && <p className='content2'> Excelled in Full-stack development and worked on multiple projects</p>}
                {isExpanded && <p className='content' > Executed a freelance MERN stack project for a school, delivering a comprehensive portfolio website with multiple pages and an intuitive admin dashboard for seamless content management.</p>}
                <div>
                  <p className='content2'>Projects I've worked on</p>
                  <div className="flex flex-row gap-[10px] flex-wrap">
                    <h4 style={{ marginTop: "20px" }}><a href="https://mediotix.com" target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">mediotix.com</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>


      </div>

    </div>
    </div>
  );
}


const tiltProps = {
  // max: 2 → tiltMaxAngleX and tiltMaxAngleY
  tiltMaxAngleX: 2,
  tiltMaxAngleY: 2,

  // perspective: 1000 → perspective
  perspective: 1000,

  // scale: 1 → scale (keep as 1)
  scale: 1,

  // speed: 1000 → transitionSpeed (convert to milliseconds)
  transitionSpeed: 1000,

  // transition: true → always true in react-parallax-tilt
  // axis: null → tiltAxis (can be 'x', 'y', or null for both)
  tiltAxis: null,

  // reset: true → reset (default is true)
  reset: true,

  // easing: "cubic-bezier(.03,.98,.52,.99)" → not directly supported, but you can use CSS
  // reverse: false → tiltReverse (default is false)
  tiltReverse: false,

  // Additional props for better performance
  glareEnable: false, // Disable glare effect
  gyroscope: false,   // Disable gyroscope for better performance
}
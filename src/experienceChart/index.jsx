import React, { useEffect, useState, useRef} from "react";
import "./index.css"
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Fade, Slide} from "react-awesome-reveal";
import { GUI } from 'dat.gui';
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { Tilt } from 'react-tilt'
import LightbulbTwoToneIcon from "@mui/icons-material/LightbulbTwoTone";
import HourglassFullTwoToneIcon from '@mui/icons-material/HourglassFullTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import { Diversity2 } from "@mui/icons-material";

export default function Project({ name, started, ended, about, idea, journey, imageArray, qrImg, link, techIcons }) {
  
  const [hoverFirst, setHoverFirst] = useState(false);
  const [hoverSecond, setHoverSecond] = useState(false);
  const [hoverThird, setHoverThird] = useState(false);
  const [hoverFourth, setHoverFourth] = useState(false);
  const [hoverFifth, setHoverFifth] = useState(false);
  const [blobPosition, setBlobPosition] = useState({ left: 0, top: 0 })
  const Navigate = useNavigate();

  const blobRef1 = useRef(null);
  const blobRef2 = useRef(null);
  const blobRef3 = useRef(null);
  const blobRef4 = useRef(null);
  const blobRef5 = useRef(null);
  const guiRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {

    let selectedBlob;

    if(hoverFirst === true) {
        selectedBlob = blobRef1.current;
    
    }else if (hoverSecond === true) {
        selectedBlob = blobRef2.current;

    }else if (hoverThird === true) {
        selectedBlob = blobRef3.current;
    
    }else if (hoverFourth === true) {
        selectedBlob = blobRef4.current;
    
    }else if (hoverFifth === true) {
        selectedBlob = blobRef5.current;
    }

    const handlePointerMove = (event) => {
        const { clientX, clientY } = event;
        
        selectedBlob?.animate({ left: `${clientX}px`, top: `${clientY}px`}, { 
          duration: 1000,
          fill: 'forwards'
        });
    };

    window.addEventListener('pointermove', handlePointerMove);



  }, [hoverFirst, hoverSecond, hoverThird, hoverFourth, hoverFifth]);


  const _handleBlogHover = ({which, type}) => {

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
    <div className=' justify-center items-center text-[#efefef] text-[clamp(12px,1.5vw,15px)] bg-[#0d1116] font-poppins relative'>

       <div className="flex flex-col p-2 md:p-12 xl:p-16 temprature" >

       {/* navigation */}
       <div className='projectName flex flex-row gap-5 items-center p-3'>
          <div className="relative ">
          <div className="mic-shadow" onClick={() => Navigate('/')}></div>
          <button className= 'z-10 bg-background4 w-12 h-12 rounded-full border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50'
             onClick={() => Navigate('/')}>
              <ArrowBackIcon />
          </button>
          </div>
          
              <div className="flex flex-col gap-2">
                <p className="text-4xl inline-block md:text-5xl font-black font-Montserrat">
                  Experience
                </p>
                <p className="text-1xl mt-[5px] inline-block font-normal font-Montserrat">
                  let me walk you through my whole working experience.
                </p>
              </div>
       </div>

       {/* first rope */}
       
       <div className="infoDiv">
       <div className="ropeWrapper">
        <div className="rope"></div>
        <div className="iconBox1" >
          <LightbulbTwoToneIcon />
        </div>
       </div>
       <Slide triggerOnce direction="up" delay={10} distance="5px">
              <Fade triggerOnce bottom delay={500}>
                <p className="text-3xl pr-5 inline-block md:text-4xl font-black font-Montserrat ">
                  Currently
                </p>
                <p className="text-1xl inline-block font-normal font-Montserrat">
                  I am working in a startup (SAAS) based in Gurugram
                </p>
              </Fade>
        </Slide>
       </div>

       {/* first cardContent */}
       
       <Tilt options={defaultOptions} style={{overflow: "hidden"}}>
       <div  id="cardWrap" ref={cardRef} onMouseEnter={() => _handleBlogHover({which: 1, type: true})} onMouseLeave={() => _handleBlogHover({which: 1, type: false})}>
        <div className="experienceChartBlob" ref={blobRef1} style={{ left: `${blobPosition.x}px`, top: `${blobPosition.y}px`, display: hoverFirst ? "block": "none"}}></div>
        <div class="card"></div>
        <div class="cardContent">
          <div>Ottermap</div>
          <div className="dateInfo">
            <h1 class='content'>Frontend developer</h1>
            <h3 class='content'>May 2024 - present</h3>
          </div>
          <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px"}}>
            <h1 class='content2'>Currently working in Ottermap, where I learning map visualization and working on a automated map measurement tool</h1>
            <h1 class='content' >Ottermap is an automated property measurement platform designed to simplify and optimize the process of obtaining accurate property data for industries such as landscaping, snow removal, and facilities maintenance. By eliminating the need for manual measurements or third-party digitization tools, Ottermap allows users to quickly generate detailed property maps. Users simply search for an address, select the required features, and place their order. This service enhances productivity and efficiency for outdoor service companies by providing precise and reliable measurements in a timely manner​</h1>
          </div>
        </div>
        </div>
       </Tilt>

       {/* second rope */}
       <div className="infoDiv" >
       <div className="ropeWrapper">
        <div className="rope2"></div>
        <div className="iconBox1" >
          <HourglassFullTwoToneIcon />
        </div>
       </div>
       <Slide triggerOnce direction="up" delay={10} distance="5px">
              <Fade triggerOnce bottom delay={500}>
                <p className="text-3xl pr-5 inline-block md:text-4xl font-black font-Montserrat ">
                  Previously
                </p>
                <p className="text-1xl inline-block font-normal font-Montserrat">
                  I was working in an IT service provider startup based in Gurugram.
                </p>
              </Fade>
        </Slide>
       </div>

       {/* second cardContent */}
       <Tilt options={defaultOptions} style={{overflow: "hidden"}}>
       <div className="ml-0 sm:ml-[70px]" id="cardWrap" ref={cardRef} onMouseEnter={() => _handleBlogHover({which: 2, type: true})} onMouseLeave={() => _handleBlogHover({which: 2, type: false})}>
        <div className="experienceChartBlob" ref={blobRef2} style={{ left: `${blobPosition.x}px`, top: `${blobPosition.y}px`, display: hoverSecond ? "block": "none"}}></div>
        <div class="card"></div>
        <div class="cardContent">
          <h1 style={{marginBottom: "20px"}}>Rootandleaves</h1>
          <div className="dateInfo">
            <h1 class='content'>Frontend developer</h1>
            <h3 class='content'>May 2024 - May 2024</h3>
          </div>
          <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px"}}>
            <h1 class='content2'> Excelled in frontend development for the mx360 project. Showcased proficiency in client  interactions, consistently meet deadlines and earned the best performer tag for a month.</h1>
            <h1 class='content' >Rootandleaves is a custom software development based in Gurugram, India. Launched in 2022, the company specializes in custom software development, mobile app development, web development, and Artificial Intelligence solutions. Focusing on innovative and efficient technology solutions to meet clients' needs​ (Root and Leaves)​​ (The Manifest)​. For more information, you can visit their official website at rootandleaves.com​​</h1>
            <div>
               <h1 class='content2'>During my tenure, I've worked on several projects but two main projects are</h1>
              <div className="flex flex-row gap-[10px] my-[30px]">
                <h4 ><a href="https://mx360.io" target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">jusplaytoys.com</a></h4>
                <h4 ><a href="https://jusplaytoys.com" target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">mx360.io</a></h4>
              </div>
            </div>
          </div>
        </div>
        </div>
       </Tilt>

       {/* third rope */}
       <div className="infoDiv">
       <div className="ropeWrapper">
        <div className="rope"></div>
        <div className="iconBox1" >
          <CalendarTodayTwoToneIcon />
        </div>
       </div>
       <Slide triggerOnce direction="up" delay={10} distance="5px">
              <Fade triggerOnce bottom delay={500}>
                <p className="text-3xl pr-5 inline-block md:text-4xl font-black font-Montserrat ">
                  Before that
                </p>
                <p className="text-1xl inline-block font-normal font-Montserrat">
                  I was working as a Freelance Full-stack (MERN) developer.
                </p>
              </Fade>
        </Slide>
       </div>

       {/* third cardContent */}
       <Tilt options={defaultOptions} style={{overflow: "hidden"}}>
       <div  id="cardWrap" ref={cardRef} onMouseEnter={() => _handleBlogHover({which: 3, type: true})} onMouseLeave={() => _handleBlogHover({which: 3, type: false})}>
        <div className="experienceChartBlob" ref={blobRef3} style={{ left: `${blobPosition.x}px`, top: `${blobPosition.y}px`, display: hoverThird ? "block": "none"}}></div>
        <div class="card"></div>
        <div class="cardContent">
          <h1 style={{marginBottom: "20px"}}>Freelancing</h1>
          <div className="dateInfo">
            <h1 class='content'>Mern-stack Developer </h1>
            <h3 class='content'>Aug 2022 - Apr 2023</h3>
          </div>
            <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px"}}>
              <h1 class='content2'> Excelled in Full-stack development and worked on multiple projects</h1>
              <h1 class='content' > Executed a freelance MERN stack project for a school, delivering a comprehensive portfolio website with multiple pages and an intuitive admin dashboard for seamless content management.</h1>
            <div>
               <h1 class='content2'>Projects I've worked on</h1>
              <div className="flex flex-row gap-[10px] flex-wrap">
                <h4 style={{marginTop: "20px"}}><a href="https://creepy-bee-garment.cyclic.app" target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">schoolWebsite.com</a></h4>
                <h4 style={{marginTop: "20px"}}><a href="https://kitabghar.onrender.com" target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">bookshelf.com</a></h4>
                <h4 style={{marginTop: "20px"}}><a href="https://todolist-brre.onrender.com" target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">taksmanager.in</a></h4>
              </div>
            </div>
          </div>
        </div>
        </div>
       </Tilt>

       {/* fourth rope */}
       <div className="infoDiv">
       <div className="ropeWrapper">
        <div className="rope2"></div>
        <div className="iconBox1" >
          <AccessTimeTwoToneIcon />
        </div>
       </div>
       <Slide triggerOnce direction="up" delay={10} distance="5px">
              <Fade triggerOnce bottom delay={500}>
                <p className="text-3xl pr-5 inline-block md:text-4xl font-black font-Montserrat ">
                  Beginning
                </p>
                <p className="text-1xl inline-block font-normal font-Montserrat">
                  I started working as a freelance Graphics designer
                </p>
              </Fade>
        </Slide>
       </div>

       {/* fourth cardContent */}
       <Tilt options={defaultOptions} style={{overflow: "hidden"}}>
       <div className="ml-0 sm:ml-[70px]" id="cardWrap" ref={cardRef} onMouseEnter={() => _handleBlogHover({which: 4, type: true})} onMouseLeave={() => _handleBlogHover({which: 4, type: false})}>
        <div className="experienceChartBlob" ref={blobRef4} style={{ left: `${blobPosition.x}px`, top: `${blobPosition.y}px`, display: hoverFourth ? "block": "none"}}></div>
        <div class="card"></div>
        <div class="cardContent">
          <h1 style={{marginBottom: "20px"}}>Freelancing</h1>
          <div className="dateInfo">
            <h1 class='content'>GFX designer</h1>
            <h3 class='content'>Nov 2019 - Jan 2021</h3>
          </div>
            <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px"}}>
              <h1 class='content2'>Worked as a Freelance Graphics designer, video editor and worked for multiple clients continuously.</h1>
            <div>
               <h1 class='content2'>Behance Profile</h1>
              <div className="flex flex-row gap-[10px] my-[30px]">
                <h4 ><a href="https://www.behance.net/anuragojha" target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">Behance</a></h4>
              </div>
            </div>
          </div>
        </div>
        </div>
       </Tilt>

      </div>

    </div>
  );
}


const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            2,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
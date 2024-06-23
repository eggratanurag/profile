import {React, useEffect, useState} from "react";
import Carousel from "./components/carousel";
import "./project.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Fade, Slide} from "react-awesome-reveal";

export default function Project({ name, started, ended, about, idea, journey, imageArray, qrImg, link, techIcons }) {

  
   const Navigate = useNavigate();

  return (
    <div className='flex justify-center items-center text-[#efefef] text-[clamp(12px,1.5vw,15px)] font-poppins bg-background1 relative'>
      {/* <div className='absolute w-1/2 h-1/2 opacity-70 bg-highlight mix-blend-normal filter blur-[12rem] mainBlob'>Bloom</div> */}
      {/* <div class="blobs" style={{position: "absolute", top: "18rem"}} role="presentation">
            <div class="blob-rotate">
              <div class="blob-move">
                <div class="blob"></div>
              </div>
            </div>
            <div class="blob-rotate">
              <div class="blob-move">
                <div class="blob"></div>
              </div>
            </div>
            <div class="blob-rotate">
              <div class="blob-move">
                <div class="blob"></div>
              </div>
            </div>
      </div> */}
      <div className='projectDiv'>
        <div className='projectName flex gap-3 items-center p-3'>
          <div>
            <button className=' bg-background4 w-12 h-12 rounded-full border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50'
             onClick={() => Navigate('/')}>
              <ArrowBackIcon />
            </button>
          </div>
          <h1 className=" text-4xl  font-black font-Montserrat">{name}</h1>
        </div>

        
        <main className="main flex flex-col items-center justify-center relative">
        
        <Carousel imageArray={imageArray} />
          
        </main>
      

        <div className='qr flex flex-col items-left justify-evenly p-5'>
          <div >
          <img src={qrImg} className="w-32 h-32 object-contain rounded-md border border-1 border-background2" alt='qr' />
          <p >Scan QR to view it on phone.</p>
          </div>
         
         <div >
          <p>Why scroll through when you can view it LIVE</p>

          <div className="flex gap-2 pt-5">
          <h4><a href={link} target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">View Live</a></h4>
          <h4><a href={link} target="_blank" className="rounded-full p-2 px-5 text-highlight bg-background4 shadow-[o_1px_4px_background2] border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50">Code</a></h4>
          </div>
         
         </div>
        </div>

      
        <div className='dates  p-5 flex flex-col justify-evenly'>

         <div>
          <h2>Technologies used</h2>
          <div className=" mt-2 flex gap-2 flex-wrap">
          {techIcons.map(icon=> (
            <div className="tooltip">
            <img src={Object.values(icon)} className="w-12 hover:content['hello']" alt=""/>
            <span className="tooltiptext">{Object.keys(icon)}</span>
            </div>
          ))}
          </div>
         </div>
        </div>

        {about && <div className='info  p-5'>
          <h2 className="text-2xl sm:text-3xl font-extrabold  font-Montserrat">What is it about?</h2>
          <br />
          <p className="content2">{about}</p>
        </div>}

 
        {idea && <div className='idea p-5 '>
          <h2 className="text-2xl sm:text-3xl font-extrabold  font-Montserrat">Idea behind it</h2>
          <br />
          <p className="content2">{idea}</p>
        </div>}


       { journey && <div className='journey p-5 '>
          <h2 className="text-2xl sm:text-3xl font-extrabold  font-Montserrat">Problems and Tackling</h2>
          <br />
          <p className="content2">{journey}</p>
        </div>}

      </div>
    </div>
  );
}

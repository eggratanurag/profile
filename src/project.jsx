import {React, useEffect, useState} from "react";
import Carousel from "./components/carousel";
import "./project.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Project({
  name,
  started,
  ended,
  about,
  idea,
  journey,
  imageArray,
  qrImg,
  link,
  techIcons
}) {

  
   const Navigate = useNavigate();

   const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  useEffect(() => {
   
    const faders = document.getElementsByClassName("fader");
    const popins = document.getElementsByClassName("popin");
    const slider = document.getElementsByClassName("curveIn")[0];
    appearOnScroll.observe(slider);
    for(var fader of faders) {
      appearOnScroll.observe(fader);
    }
    for(var popin of popins) {
      appearOnScroll.observe(popin);
    }
  }, []);
//    

  return (
    <div className='flex justify-center items-center text-[#efefef] font-poppins bg-background1 relative'>
      {/* <div className='absolute w-1/2 h-1/2 opacity-70 bg-highlight mix-blend-normal filter blur-[12rem]'>Bloom</div> */}
      <div class="blobs" role="presentation">
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
          </div>
      <div className='projectDiv'>
        <div className='projectName flex gap-3 items-center p-3'>
          <div>
            <button className=' bg-background4 w-12 h-12 rounded-full border border-1 border-background4 hover:bg-background2  transition-all ease-in-out delay-50'
             onClick={() => Navigate('/')}>
              <ArrowBackIcon />
            </button>
          </div>
          <h1 className="curveIn text-4xl  font-bold font-Montserrat">{name}</h1>
          
        </div>
        <main className="fader flex flex-col items-center justify-center relative">
        
        <Carousel imageArray={imageArray} />
          
        </main>
        <div className='qr fader flex flex-col items-left justify-evenly p-5'>
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

        <div className='dates fader p-5 flex flex-col justify-evenly'>

          <div>
          {/* <h2 className="text-2xl sm:text-3xl font-bold pb-2  font-Montserrat">Dates</h2> */}
          <p><span className="text-lg font-semibold">Started - </span>{started}</p>
          <p><span className="text-lg font-semibold">ended - </span>{ended}</p>
          </div>
         <div>
          <h2>Technologies used</h2>
          <div className=" mt-2 flex gap-2 flex-wrap">
          {techIcons.map(icon=> (
            <div className="tooltip">
            <img src={Object.values(icon)} className="w-7 hover:content['hello']" alt=""/>
            <span className="tooltiptext">{Object.keys(icon)}</span>
            </div>
          ))}
          </div>
         </div>
        </div>
        <div className='info popin p-5'>
          <h2 className="text-2xl sm:text-3xl font-bold  font-Montserrat">What is it about?</h2>
          <br />
          <p>{about}</p>
        </div>
        <div className='idea p-5 popin'>
          <h2 className="text-2xl sm:text-3xl font-bold  font-Montserrat">Idea behind it</h2>
          <br />
          <p>{idea}</p>
        </div>
        <div className='journey p-5 fader'>
          <h2 className="text-2xl sm:text-3xl font-bold  font-Montserrat">Problems and Tackling</h2>
          <br />
          {journey}
        </div>
      </div>
    </div>
  );
}

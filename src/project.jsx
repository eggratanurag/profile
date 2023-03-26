import {React, useEffect, useState} from "react";
import "./project.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


export default function Project({
  name,
  dates,
  about,
  idea,
  journey,
  ldPageImg,
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
    <div className='mainDiv'>
      <div className='bigBloom'>Bloom</div>
      <div className='projectDiv'>
        <div className='projectName'>
          <div>
            <button className='backButton' onClick={() => Navigate('/')}>
              <ArrowBackIcon />
            </button>
          </div>
          <h1 className="curveIn">{name}</h1>
          {/* <div className="projectName">project name</div> */}
        </div>
        <main className="fader">
        
          
      <img src={ldPageImg} decoding="async" alt='' />
        </main>
        <div className='qr fader'>
          <div>
          <img src={qrImg} alt='' />
          <p>Scan QR to view it on phone.</p>
          </div>
         
         <div>
          <p>Why scroll through when you can view it LIVE</p>
          <h4 style={{marginTop: "20px"}}><a href={link} className="live">{name}</a></h4>
         
         </div>
        
       
        </div>

        <div className='dates fader'>
          <div>
          <h2>Dates</h2>
          <p>{dates}</p>
          </div>
         <div>
          <h2>Technologies</h2>
          <div className="iconsDiv">
          {techIcons.map(icon=> (
            <div className="tooltip">
            <img src={Object.values(icon)} alt=""/>
            <span className="tooltiptext">{Object.keys(icon)}</span>
            </div>
          ))}
          </div>
         </div>
        </div>
        <div className='info popin'>
          <h2>What is it about?</h2>
          <br />
          <p>{about}</p>
        </div>
        <div className='idea popin'>
          <h2>Idea behind it</h2>
          <br />
          <p>{idea}</p>
        </div>
        <div className='journey fader'>
          <h2>Problems and Tackling</h2>
          <br />
          {journey}
        </div>
      </div>
    </div>
  );
}

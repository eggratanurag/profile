import React, { useState, useEffect } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = ({imageArray}) => {

  const [imgIndex, setImgIndex] = useState(0);
  const count =  imageArray?.length -1;

  function next() {
    setImgIndex(
      count > imgIndex ? imgIndex + 1 : 0,
    );
  }

  function prev() {
    setImgIndex(
      imgIndex === 0 ? count : imgIndex - 1,
    );
  }
 useEffect(() => {
  const timer = setTimeout(() => {
    next()
  }, 3000);
  return () => {
    clearTimeout(timer);
  };

    
  }, [imgIndex]);

 
  return (
    <>
      {/* <!--Carousel items--> */}
      <div
       className="h-full rounded-2xl ">
        <div className='h-full '>
         { imageArray?
            <img

            loading="lazy"
            src={imageArray?.[imgIndex]}
            className=' object-cover w-full h-full rounded-2xl'
            alt='Wild Landscape'
          />: <Loader />}
          
        </div>
      </div>

      {/* <!--Carousel controls - prev item--> */}
      <button
        className='group absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:opacity-90 motion-reduce:transition-none'
        onClick={prev}
      >
        <span className='h-12 w-12 flex items-center justify-center rounded-full outline outline-slate-50 group-hover:bg-slate-800 group-hover:bg-opacity-40 group-hover:outline-2'>
          <ArrowBackIosNewIcon />
        </span>
      </button>
      {/* <!--Carousel controls - next item--> */}
      <button
        className='absolute group  bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:opacity-90  motion-reduce:transition-none'
        onClick={next}
      >
        <span className='h-12 w-12 flex items-center justify-center rounded-full outline outline-slate-50 group-hover:bg-slate-800 group-hover:bg-opacity-40 group-hover:outline-2'>
          <ArrowForwardIosIcon />
        </span>
      </button>
    </>
  );
};

export default Carousel;

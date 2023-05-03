import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";

const CustomLink = ({link, title, desc}) => {
  return (
    <>
      <h4 className="font-[501] ">
        <Link
          className='text-offGreen  hover:text-lime transition-all ease-in-out delay-50'
          to={link}
        >
          <LaunchIcon style={{ fontSize: "10px" }} /> {title}
        </Link>
      </h4>
      <p>{desc}</p>
    </>
  );
};

export default CustomLink;

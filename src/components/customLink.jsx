import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";

const CustomLink = ({link, title, desc}) => {
  return (
    <div>
      <h4 className="font-semibold">
        <Link
          className='text-offGreen  hover:text-highlight transition-all ease-in-out delay-50'
          to={link}
        >
          <LaunchIcon style={{ fontSize: "15px" }} /> {title}
        </Link>
      </h4>
      <p>{desc}</p>
    </div>
  );
};

export default CustomLink;

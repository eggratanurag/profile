"use client";

import React, { useState, useEffect, useRef } from "react";
import { WobbleCard } from '../../../components/ui/wobble-card.jsx';
import FlipLink from '../../../components/ui/text-effect-flipper.jsx';
import Image from "next/image"
import Link from "next/link"
import { SparklesIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import disolvedMan from './../../../images/disolvedMan.png';
import './index.css';
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import spotifyIcon from './../../../images/3d-casual-life-spotify.webp';
import { Facebook, Link2, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import ShareButton from './../../../components/ui/share-button.jsx';

const shareLinks = [
  {
    icon: Twitter,
    onClick: () => window.open("https://twitter.com/share"),
    label: "Share on Twitter",
  },
  {
    icon: Facebook,
    onClick: () => window.open("https://facebook.com/share"),
    label: "Share on Facebook",
  },
  {
    icon: Linkedin,
    onClick: () => window.open("https://linkedin.com/share"),
    label: "Share on LinkedIn",
  },
  {
    icon: Link2,
    onClick: () => navigator.clipboard.writeText(window.location.href),
    label: "Copy link",
  },
]

const Icons = {
  leetcode: (props) => (
    <svg
      width="50"
      height="50"
      viewBox="0 0 86 86"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Background rectangle with rounded corners and hover effect */}
      <rect
        width="86"
        height="86"
        rx="14"
        fill="#D9D9D9"
        className="fill-[#D9D9D9] transition-all duration-500 ease-in-out group-hover:fill-[#c1a9f4]"
      />

      {/* Main LeetCode symbol, scaled and centered */}
      <g transform="translate(10 10) scale(2.7)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696 0 1.26-.604 1.26-1.346zM3.482 18.187l4.313 4.361c.974.964 2.319 1.437 3.804 1.437 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636c-.649-.646-1.471-1.116-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038L3.482 10.476C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
          className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        />
      </g>
    </svg>
  ),
  twitter: (props) => (
    <svg
      width="50"
      height="50"
      viewBox="0 0 86 86"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="86"
        height="86"
        rx="14"
        fill="#D9D9D9"
        className="fill-[#D9D9D9] transition-all duration-500 ease-in-out group-hover:fill-[#c1a9f4]"
      />
      <path
        fillRule="evenodd"
        className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        clipRule="evenodd"
        d="M71 30.6586C69.105 31.493 67.095 32.086 65 32.438C67.14 31.102 68.805 29.022 69.61 26.538C67.595 27.774 65.39 28.662 63.05 29.15C61.175 27.074 58.49 25.75 55.5 25.75C49.85 25.75 45.275 30.326 45.275 35.974C45.275 36.774 45.365 37.55 45.54 38.294C38.54 37.934 32.225 34.782 27.75 29.878C26.875 31.398 26.375 33.102 26.375 34.902C26.375 38.326 28.115 41.334 30.8 42.998C29.075 42.966 27.45 42.502 26 41.718V41.846C26 46.774 29.125 50.902 33.375 51.822C32.525 52.054 31.625 52.166 30.7 52.166C30.05 52.166 29.425 52.118 28.8 51.998C30.075 56.062 33.85 59.022 38.275 59.102C34.725 61.846 30.325 63.502 25.55 63.502C24.725 63.502 23.925 63.454 23.125 63.358C27.6 66.262 32.975 68 38.75 68C55.5 68 64.625 52.326 64.625 38.182C64.625 37.718 64.625 37.27 64.6 36.806C66.6 35.366 68.35 33.574 69.8 31.574C68.075 32.374 66.225 32.966 64.3 33.302C66.275 32.086 67.9 30.374 69 28.374L71 30.6586Z"
      />
    </svg>
  ),
  linkedin: (props) => (
    <svg
      width="50"
      height="50"
      viewBox="0 0 86 86"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="86"
        height="86"
        rx="14"
        fill="#D9D9D9"
        className="fill-[#D9D9D9] transition-all duration-500 ease-in-out group-hover:fill-[#c1a9f4]"
      />
      <path
        fillRule="evenodd"
        className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        clipRule="evenodd"
        d="M27.7128 69.5277V33.4109H15.7096V69.5276H27.7128V69.5277ZM21.7125 28.4816C25.8969 28.4816 28.5035 25.7059 28.5035 22.2401C28.4244 18.6973 25.8969 16 21.7909 16C17.6843 16.0001 15 18.6974 15 22.2402C15 25.706 17.6052 28.4817 21.6334 28.4817L21.7125 28.4816ZM34.3561 69.5277C34.3561 69.5277 34.5136 36.7996 34.3561 33.411H46.3612V38.6487H46.2815C47.86 36.184 50.7038 32.5629 57.179 32.5629C65.0788 32.5629 71 37.7249 71 48.8186V69.5278H58.9969V50.2063C58.9969 45.3514 57.2601 42.0385 52.915 42.0385C49.5995 42.0385 47.6236 44.2719 46.7559 46.4309C46.4384 47.1993 46.3612 48.2786 46.3612 49.3581V69.5277H34.3561Z"
        fill="black"
      />
    </svg>
  ),
  github: (props) => (
    <svg
      width="50"
      height="50"
      viewBox="0 0 86 86"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="86"
        height="86"
        className="fill-[#D9D9D9] transition-all duration-500 ease-in-out group-hover:fill-[#c1a9f4]"
        rx="14"
      />
      <path
        fillRule="evenodd"
        className="fill-black transition-all duration-500 ease-in-out group-hover:fill-white"
        clipRule="evenodd"
        d="M43.2908 13C60.0205 13 73.5817 26.9033 73.5817 44.057C73.5817 57.7757 64.9124 69.4135 52.8839 73.524C51.3482 73.8299 50.803 72.86 50.803 72.0331C50.803 71.0093 50.8393 67.6653 50.8393 63.5094C50.8393 60.6136 49.87 58.7236 48.7826 57.7603C55.5283 56.9909 62.6164 54.3645 62.6164 42.4359C62.6164 39.0434 61.4411 36.2749 59.4964 34.1C59.8114 33.3155 60.8504 30.1566 59.1996 25.8795C59.1996 25.8795 56.6612 25.0473 50.8787 29.0639C48.4584 28.3763 45.8655 28.0303 43.2908 28.0182C40.7161 28.0303 38.1262 28.3763 35.709 29.0639C29.9205 25.0473 27.376 25.8795 27.376 25.8795C25.7312 30.1566 26.7702 33.3155 27.0822 34.1C25.1466 36.2749 23.9623 39.0434 23.9623 42.4359C23.9623 54.3342 31.0352 57.0009 37.7628 57.7855C36.8964 58.5609 36.1119 59.9289 35.8393 61.9371C34.1127 62.7308 29.7266 64.1043 27.0246 59.3577C27.0246 59.3577 25.4223 56.3736 22.3811 56.1556C22.3811 56.1556 19.4277 56.1163 22.1751 58.0428C22.1751 58.0428 24.1591 58.997 25.5374 62.5864C25.5374 62.5864 27.3155 68.1295 35.7424 66.2515C35.7575 68.8474 35.7848 71.294 35.7848 72.0331C35.7848 72.854 35.2274 73.8147 33.7159 73.5269C21.6783 69.4225 13 57.7787 13 44.057C13 26.9033 26.5642 13 43.2908 13Z"
      />
    </svg>
  ),
}


export default function WobbleCardDemo() {

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const listRef = useRef(null);

  useEffect(() => {
    fetch('/api/spotify/liked-songs')
      .then(res => res.json())
      .then(data => {
        setSongs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);


  return (
    <div className="flex flex-col">
      <div className="w-full flex items-end justify-between mb-5 ">
        <p className="text-4xl sm:pl-4  text-white inline-block md:text-5xl font-black font-Poppins ">
          Socials
        </p>
        <ShareButton links={shareLinks} className=" text-lg font-medium  ">
          <Link2 size={15} />
          Share
        </ShareButton>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-auto w-full">
        {/* <DotPattern
          className={cn(
            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
          )}
        /> */}
        <WobbleCard containerClassName=" lg:col-span-1 min-h-[300px] flex justify-center  items-center">
          <section className="h-full flex flex-col justify-center items-center p-5 w-full relative text-white ">

            <div className="group flex items-center justify-center ">
              <Icons.linkedin />
              <FlipLink href="https://www.linkedin.com/in/eggrat/">Linkedin</FlipLink>
            </div>
            <div className="group flex items-center justify-center">
              <FlipLink href="https://leetcode.com/u/eggrat/">Leetcode</FlipLink>
              <Icons.leetcode />
            </div>
            <div className="group flex items-center justify-center">
              <Icons.github fill="red" />
              <FlipLink href="https://github.com/eggratanurag">Github</FlipLink>
            </div>
            <div className="group flex items-center justify-center">
              <FlipLink href="https://x.com/eggrat__">Twitter</FlipLink>
              <Icons.twitter />
            </div>
          </section>
        </WobbleCard>

        <WobbleCard containerClassName="lg:col-span-2 min-h-[300px] w-full flex justify-center items-center">
          <div className="flex spotify bg-black h-full">
            <div className="bg-[linear-gradient(to_right,#0d1116_10%,#000000_60%)] h-full text-white w-[56%] p-5 overflow-y-auto max-h-[320px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" data-lenis-prevent>
              {/* <h1 className="text-4xl font-bold mb-8">Liked Songs</h1> */}
              <ul className="rotator" ref={listRef}>
                {loading ? (
                  <li><span>Loading songs...</span></li>
                ) : songs.length > 0 ? (
                  songs.map((song, index) => (
                    <li key={index}>
                      <Link href={song.external_urls?.spotify || song.track?.external_urls?.spotify} target="_blank" rel="noopener noreferrer">
                        <span>{song.name || song.track?.name || `Song ${index + 1}`}</span>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li><span>No songs found</span></li>
                )}
              </ul>
            </div>
            <div className="w-[44%] h-full relative">
              <Image src={disolvedMan} className="h-full w-full object-cover" alt="Profile" />
              <Link href="https://open.spotify.com/user/4h41ookhtw4mvek8zrplx1jb1" target="_blank" rel="noopener noreferrer">
                <div className="absolute w-[40px] h-[40px] bottom-5 right-5">
                  <Image src={spotifyIcon} className="object-cover" alt="spotify" />
                </div>
              </Link>
            </div>
          </div>
        </WobbleCard>

      </div>
    </div>
  );
}


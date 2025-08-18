"use client"
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import "./index.css"
import { Fade, Slide } from "react-awesome-reveal";
import { GiCrabClaw } from "react-icons/gi";
import { FaEarthAfrica } from "react-icons/fa6";
import { GiMoon } from "react-icons/gi";
import { IoMdPlanet } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import { GiStripedSun } from "react-icons/gi";



const FluidIconDock = () => {
  const [activeTab, setActiveTab] = useState(0);
  const controls = useAnimation();
  const tabsRef = useRef(null);

  // Tab data with icons
  const tabs = [
    { icon: <FaEarthAfrica size={20} />, label: "Home", target: "#hero" },
    { icon: <IoRocketOutline size={24} />, label: "Projects", target: "#projects" },
    { icon: <IoMdPlanet size={24} />, label: "Experience", target: "#experience" },
    { icon: <GiMoon size={24} />, label: "Socials", target: "#socials" },
    { icon: <GiStripedSun size={24} />, label: "Contacts", target: "#contacts" }
  ];

  // Blob shape states
  const blobStates = {
    attached: (position) => ({
      x: position,
      width: 60,
      height: 60,
      borderRadius: "50%",
      scale: 1,
      transition: {
        type: "spring",
        damping: 22,
        stiffness: 160,
        mass: 1
      }
    }),

    detached: (position) => ({
      x: position,
      width: 68,
      height: 55,
      // borderRadius: ["50%", "45% 55% 65% 35%"], // top heavy → looks drippy
      scale: 0.95,
      transition: {
        duration: 0.35,
        ease: "easeInOut"
      }
    }),

    flowing: (position) => ({
      x: position,
      width: [60, 95, 60],   // stretch far → gooey pull
      height: [60, 40, 60],  // squish down
      borderRadius: [
        "50%",
        "60% 40% 50% 40%", // leading edge bulges
        "45% 55% 55% 45%", // trailing edge bulges after
        "50%"              // reform
      ],
      scale: 1,
      transition: {
        x: { duration: 0.7, ease: "easeInOut" },
        width: { duration: 0.9, ease: "easeOut", delay: 0.05 },
        height: { duration: 0.9, ease: "easeOut", delay: 0.05 },
        borderRadius: { duration: 0.9, ease: "easeInOut", delay: 0.1 }
      }
    })
  };


  const calculatePosition = (index) => {
    // Calculate position based on index
    return index * 80; // 80px per tab (60px icon + 20px gap)
  };

  const handleTabClick = async (index) => {

    // if (index === activeTab) return;
    setActiveTab(index);
    const currentPos = calculatePosition(index);
    const targetPos = calculatePosition(index);

    // 1. Contract into droplet at current position
    await controls.start("detached", { custom: currentPos });

    // 2. Flow to new position with stretch effect
    await controls.start("flowing", { custom: targetPos });

    // 3. Update active tab and expand at new position
    await controls.start("attached", { custom: targetPos });
  };

  return (
    <div className="dock-container !hidden sm:!flex fixed item-center justify-end top-0 left-1/2 -translate-x-1/2 w-[min(1100px,95%)]">
      <div className="tabs-wrapper" ref={tabsRef}>

        {tabs.map((tab, index) => (
          <motion.a
            href={tab.target}
            key={index}
            initial={{  y: -65, scale: 0.9 }}
            animate={{  y: 0, scale: 1 }}
            transition={{
              delay: 0.10 * index, // Reduced delay for quicker succession
              y: { type: "spring", stiffness: 300, damping: 20, delay: 0.10 * index, mass: 0.3 }, // Spring physics for Y axis
              scale: { delay: 0.10 * index, duration: 0.2, ease: [0.25, 0.1, 0.25, 1]}
            }}
          >
            <motion.button
              className={`tab ${index === activeTab ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {tab.icon}
              <span className="tooltip">{tab.label}</span>
            </motion.button>
          </motion.a>
        ))}

        <motion.div
          className="dockBlob"
          initial="attached"
          animate={controls}
          variants={blobStates}
          custom={calculatePosition(activeTab)} // Set initial position
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-background1  to-background1 h-[80px] blur-[15px]  opacity-[0.6] rounded-full "></div>

        {/* <svg>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          </filter>
        </svg> */}


      </div>
    </div>
  );
};

export default FluidIconDock;
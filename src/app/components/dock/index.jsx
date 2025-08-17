"use client"
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { FiHome, FiBriefcase, FiUser, FiMail, FiSettings } from "react-icons/fi";
import "./index.css"

const FluidIconDock = () => {
  const [activeTab, setActiveTab] = useState(0);
  const controls = useAnimation();
  const tabsRef = useRef(null);
  
  // Tab data with icons
  const tabs = [
    { icon: <FiHome size={24} />, label: "Home" },
    { icon: <FiBriefcase size={24} />, label: "Work" },
    { icon: <FiUser size={24} />, label: "Profile" },
    { icon: <FiMail size={24} />, label: "Messages" },
    { icon: <FiSettings size={24} />, label: "Settings" }
  ];

  // Blob shape states
  const blobStates = {
    attached: (position) => ({
      scale: 1,
      borderRadius: "50%",
      width: 60,
      height: 60,
      x: position,
      transition: { 
        type: "spring", 
        damping: 15,
        stiffness: 200
      }
    }),
    detached: (position) => ({
      scale: 0.8,
      borderRadius: "50%",
      width: 60,
      height: 60,
      x: position,
      transition: { 
        type: "spring", 
        damping: 20,
        stiffness: 300 
      }
    }),
    flowing: (position) => ({
      scale: 1,
      borderRadius: ["50%", "30%", "50%"],
      width: [60, 80, 60],
      height: [60, 40, 60],
      x: position,
      transition: {
        duration: 0.8,
        times: [0, 0.5, 1],
        ease: "easeInOut"
      }
    })
  };

  const calculatePosition = (index) => {
    // Calculate position based on index
    return index * 80; // 80px per tab (60px icon + 20px gap)
  };

  const handleTabClick = async (index) => {
    console.log(index, activeTab, "hello")
    // if (index === activeTab) return;
    
    const currentPos = calculatePosition(index);
    const targetPos = calculatePosition(index);
    
    // 1. Contract into droplet at current position
    await controls.start("detached", { custom: currentPos });
    
    // 2. Flow to new position with stretch effect
    await controls.start("flowing", { custom: targetPos });
    
    // 3. Update active tab and expand at new position
    setActiveTab(index);
    await controls.start("attached", { custom: targetPos });
  };
  console.log(activeTab, "hello active tab")

  return (
    <div className="dock-container">
      <div className="tabs-wrapper" ref={tabsRef}>
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            className={`tab ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {tab.icon}
            <span className="tooltip">{tab.label}</span>
          </motion.button>
        ))}
        
        <motion.div
          className="dockBlob"
          initial="attached"
          animate={controls}
          variants={blobStates}
          custom={calculatePosition(activeTab)} // Set initial position
        />
      </div>
    </div>
  );
};

export default FluidIconDock;
import Image from "next/image";
import { HashLink } from "react-router-hash-link";
import ProfileImg from "./../images/profileImg.jpeg";
import ProjectsGrid from "./components/projectsGrid/index.jsx";
import ExperienceChart from "./components/experienceChart/index.jsx";
import ContactMe from "./components/contactMe/index.jsx";
import MeCard from "./components/meCard/index.jsx";
import { FaChevronRight } from "react-icons/fa6";
import {Fade, Slide} from "react-awesome-reveal";
import HeroSection from './components/hero/index.jsx'
import Dock from './components/dock/index.jsx'


export default function Home() {
  return (
    <div className="font-sans relative bg-background1">
     {/* <Dock /> */}
     <HeroSection />

      <section className="">
        <ProjectsGrid />
      </section>

      <section className="relative flex flex-col bg-background1  justify-between mx-auto pb-20  w-[min(1200px,95%)]">
        <ExperienceChart />
      </section>

      <section className="relative flex flex-col  justify-between mx-auto  pb-20  w-[min(1100px,95%)] ">
        <MeCard />
      </section>

      <section className="relative flex flex-col  justify-between mx-auto  pb-20  w-[min(1100px,95%)] ">
        <ContactMe />
      </section>
    </div>
  );
}

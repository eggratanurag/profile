import ProjectsGrid from "./components/projectsGrid/index.jsx";
import ExperienceChart from "./components/experienceChart/index.jsx";
import ContactMe from "./components/contactMe/index.jsx";
import MeCard from "./components/meCard/index.jsx";
import HeroSection from './components/hero/index.jsx'
import Dock from './components/dock/index.jsx'


export default function Home() {
  return (
    <div className="font-sans relative bg-background1">
      
     <Dock />

     <HeroSection />

      <section className="" id="projects">
        <ProjectsGrid />
      </section>

      <section id="experience" className="relative flex flex-col bg-background1  justify-between mx-auto pb-20  w-[min(1200px,95%)]">
        <ExperienceChart />
      </section>

      <section id="socials" className="relative flex flex-col  justify-between mx-auto  pb-20  w-[min(1100px,95%)] ">
        <MeCard />
      </section>

      <section id="contacts" className="relative flex flex-col  justify-between mx-auto  pb-20  w-[min(1100px,95%)] ">
        <ContactMe />
      </section>
    </div>
  );
}

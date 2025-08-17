import Image from "next/image";
import ProfileImg from "./../../../images/profileImg.jpeg";
import { FaChevronRight } from "react-icons/fa6";
import { Fade, Slide } from "react-awesome-reveal";


export default function Home() {
    return (
        <section className="relative flex flex-col  justify-between mx-auto min-h-screen pb-20  w-[min(1100px,95%)]">
            <p className="m-4 font-Zeyada text-pageName text-2xl">about</p>
            <div className="fadeIn absolute bottom-32  w-2/3 h-1/2 bg-highlight rounded-full mix-blend-normal filter blur-[8rem] mainBlob"></div>
            <div
                className="blobs"
                role="presentation"
            >
                <div className="blob-rotate">
                    <div className="blob-move">
                        <div className="blob"></div>
                    </div>
                </div>
                <div className="blob-rotate">
                    <div className="blob-move">
                        <div className="blob"></div>
                    </div>
                </div>
                <div className="blob-rotate">
                    <div className="blob-move">
                        <div className="blob"></div>
                    </div>
                </div>
            </div>

            <div className=" text-white pt-[100px] sm:pt-0 pb-1 flex justify-center items-end ">
                <div >
                    <div className="big-text-div flex">
                        {/* <Slide triggerOnce direction="up" delay={200} distance="30px"> */}
                            <Fade triggerOnce bottom delay={200}>
                                <p className="text-4xl pr-5 inline-block md:text-6xl font-black font-Poppins pb-5">
                                    Hello{" "}
                                </p>
                            </Fade>
                        {/* </Slide> */}
                        {/* <Slide triggerOnce direction="up" delay={200} distance="30px"> */}
                            <Fade triggerOnce bottom delay={250}>
                                <p className="text-4xl pr-5 inline-block md:text-6xl font-black font-Poppins pb-5">
                                    & I
                                </p>
                            </Fade>
                        {/* </Slide> */}
                    </div>
                    {/* <Slide triggerOnce direction="up" delay={200} distance="200px"> */}
                        <Fade triggerOnce bottom delay={200} distance="50px">
                            <h2 className="pb-5">
                                am Anurag — a Frontend Engineer passionate about crafting sleek, high-performance web
                                experiences. With 3+ years of experience in React.js, Next.js, and modern JavaScript,
                                I specialize in building responsive, accessible, and visually engaging applications
                                that balance clean design with robust functionality.
                            </h2>
                        </Fade>
                    {/* </Slide> */}
                        <Fade triggerOnce bottom delay={300} distance="50px">
                            <p className="text-highlight2   pb-5">
                                I thrive on turning complex ideas into intuitive user interfaces, often experimenting
                                with CSS, animations, and design patterns to make products both beautiful and
                                functional. Whether it's optimizing performance, fine-tuning user flows, or ensuring
                                pixel-perfect execution, I focus on delivering technology that feels effortless to
                                use.
                            </p>
                        </Fade>
                        <Fade triggerOnce bottom delay={400} distance="50px">
                            <p className="text-highlight2   pb-5">
                                Beyond client work, I enjoy exploring emerging tools, building personal projects, and
                                refining my craft through continuous learning. My goal is to create digital
                                experiences that not only solve problems but also leave a lasting impression.
                            </p>
                        </Fade>

                    <a href="#contactMe">
                    <Fade triggerOnce bottom delay={600} distance="50px">
                    <div className="btn p-2 flex items-center bg-background3 border border-1 border-background2 rounded-full ">
                        <Image
                            className="w-16 h-16 square mr-2  object-cover rounded-full"
                            src={ProfileImg}
                            alt="pfp"
                        />
                        <p className="ml-2">See Resume & Contacts</p>
                        <i><FaChevronRight /></i>
                    </div>
                    </Fade>
                    </a>

                </div>
            </div>
        </section>
    );
}

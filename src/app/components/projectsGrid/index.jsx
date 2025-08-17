"use client"
import { useState } from "react";
import Image from "next/image.js";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { cashKaro, diceAcademy, finolex, gsk, maxHealth, pvr, watcho, qubo } from './../../../images/clients/export.js';
import { ExpandedTabs } from './../../../components/ui/expanded-tabs.jsx';
import { CiGrid31 } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";


const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">Loading chart...</div>
});

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import('./../mapComponent/index.jsx'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">Loading map...</div>
});

// data
const files = [
    {
        title: "PVR",
        description: "Increase Ticket Bookings",
        percentage: "35%",
        image: pvr,
        borderColor: "#FF7D78",
        badgeColor: "#FFCB05",
        badgeTextClass: "text-black",
        href: "/case-studies/pvr",
    },
    {
        title: "Max Healthcare",
        description: "Increase in Doctor Consultancy",
        percentage: "150%",
        image: maxHealth,
        borderColor: "#004185",
        badgeColor: "#004185",
        badgeTextClass: "text-white",
    },
    {
        title: "GSK",
        description: "Return on Investment",
        percentage: "120%",
        image: gsk,
        borderColor: "#FA5306",
        badgeColor: "#FA5306",
        badgeTextClass: "text-white",
    },
    {
        title: "Watcho",
        description: "Increase in OTT Subcriptions",
        percentage: "48%",
        image: watcho,
        borderColor: "#E4235A",
        badgeColor: "#E4235A",
        badgeTextClass: "text-white",
    },
    {
        title: "Qubo Hero Electronix",
        description: "Increase in Transactions",
        percentage: "72%",
        image: qubo,
        borderColor: "#00AFCC",
        badgeColor: "#00AFCC",
        badgeTextClass: "text-white",
    },
];


const questions = [
    {
        type: "mcq",
        question:
            "What services are you currently offering? (Select all that apply)",
        options: [
            "1:1 Consultation",
            "Recorded Courses",
            "Q&A Services",
            "Digital Products (E-books, PDFs, etc.)",
            "Webinars & Live Events",
        ],
    },
];

const data = [
    {
        name: "Organic Traffic",
        data: [
            { x: 'Jan', y: 92 },
            { x: 'Feb', y: 91 },
            { x: 'Mar', y: 93 },
            { x: 'Apr', y: 92 },
            { x: 'May', y: 94 },
            { x: 'Jun', y: 91 },
            { x: 'Jul', y: 93 },
            { x: 'Aug', y: 92 },
            { x: 'Sep', y: 94 },
            { x: 'Oct', y: 91 },
            { x: 'Nov', y: 93 },
            { x: 'Dec', y: 92 }
        ],
        color: "#c1a9f4",
    },
    {
        name: "Conversion Rate",
        data: [
            { x: 'Jan', y: 88 },
            { x: 'Feb', y: 87 },
            { x: 'Mar', y: 89 },
            { x: 'Apr', y: 88 },
            { x: 'May', y: 90 },
            { x: 'Jun', y: 87 },
            { x: 'Jul', y: 89 },
            { x: 'Aug', y: 88 },
            { x: 'Sep', y: 91 },
            { x: 'Oct', y: 87 },
            { x: 'Nov', y: 89 },
            { x: 'Dec', y: 88 }
        ],
        color: "#addbdf",
    },
];

const lineChartDataOverallRevenue = {
    series: data,
    options: {
        chart: {
            type: "area",
            height: 350,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        colors: ["#c1a9f4", "#addbdf"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.2,
                stops: [0, 90, 100],
            },
        },
        grid: {
            show: false,
            borderColor: "#2d3748",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        xaxis: {
            categories: data[0].data.map(item => item.x),
            labels: {
                style: {
                    colors: "white",
                    fontSize: "12px",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "white",
                    fontSize: "12px",
                },
            },
        },
        legend: {
            labels: {
                colors: "white",
            },
        },
        tooltip: {
            theme: "dark",
            y: {
                formatter: function (val) {
                    return "$" + val + "K";
                },
            },
        },
    },
};

const features = [
    {

        name: "Influcent",
        description: "Empowering Creators to Turn Passion Into Profit",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="bg-none w-full text-white absolute right-0 top-2 origin-top scale-95 rounded-[10px]  transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90 ">
                <div className="bg-none h-[31px] w-full rounded-t-[7px] pl-4 flex items-center gap-2">
                    <div className="bg-[#F2A103] rounded-full w-[12px] h-[12px]"></div>
                    <div className="bg-[#0081DF] rounded-full w-[12px] h-[12px]"></div>
                    <div className="bg-[#3EB489] rounded-full w-[12px] h-[12px]"></div>
                </div>
                <div className="pl-4 pt-2">
                    <p className="text-[17.11px] font-bold text-center">
                        Services we provide!
                    </p>
                </div>
                <div className="p-4 bg-none w-full ">



                    <div className="w-full" >
                        <div className="flex flex-col gap-2 ">
                            {questions[0].options.map((option, idx) => (
                                <label key={idx} className="flex items-center gap-2">
                                    <input

                                        type="checkbox"
                                        className="w-4 h-4 cursor-pointer bg-transparent"
                                    />
                                    <span className="text-sm font-normal">{option}</span>
                                </label>
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-[#0081DF] mr-2 rounded-[3.5px] absolute bottom-0 right-0 p-2"
                        >
                            ➡
                        </button>
                    </div>



                </div>
            </div>

        ),
    },
    {

        name: "MX360",
        description: "A React-based reporting dashboard leveraging React-Charts, custom calendar UIs, and funnel visualizations for analytics insights.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div style={{ width: "100%", height: "100%" }} className="bg-none w-full text-white absolute right-0 top-2 origin-top scale-55 rounded-[10px]  transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-90" id="chart15">
                <Chart
                    options={lineChartDataOverallRevenue.options}
                    series={lineChartDataOverallRevenue.series}
                    type="area"
                    width="100%"
                    height="100%"
                />
            </div>

        ),
    },
    {
        name: "Ottermap",
        description: "A property mapping and takeoff tool built using Google Maps and OpenLayers for landscaping and site planning",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="bg-none w-full text-white absolute right-0  origin-bottom scale-55 rounded-[10px]  transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" >
                <MapComponent />
            </div>

        ),
    },
    {
        name: "Mediotix",
        description: "SEO-optimized. SSR-powered. AI-driven MarTech.",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Learn more",
        background: (
            // marquee
            <Marquee
                pauseOnHover
                className="absolute top-5 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]"
            >
                {files.map((f, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative w-60  cursor-pointer overflow-hidden rounded-xl border p-4",
                            "flex flex-col items-center justify-evenly text-center gap-2",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                            "min-h-[250px]"
                        )}
                        style={{ borderColor: "#c1a9f4" }}
                    >
                        <Image src={f.image} alt={f.title} className="w-16 h-16 object-contain grayscale" />

                        {/* big centered percentage */}
                        <p className="text-2xl text-[#addbdf] md:text-3xl font-black leading-none">{f.percentage}</p>

                        {/* optional title below percentage */}
                        <figcaption className="text-sm font-medium dark:text-white">{f.title}</figcaption>

                        {/* colored badge with description */}
                        <blockquote
                            className={cn("mt-1 text-xs px-2 py-1 rounded", f.badgeTextClass)}
                            style={{ backgroundColor: f.badgeColor }}
                        >
                            {f.description}
                        </blockquote>
                    </figure>
                ))}
            </Marquee>


        ),
    },
];

export default function BentoDemo() {
    const [selected, setSelected] = useState(0)


    return (
        <div className="dark relative flex flex-col  justify-between mx-auto  pb-20  w-[min(1100px,95%)] ">
            {/* <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                )}
            /> */}
            {/* <div className="fadeIn absolute top-2 right-0  w-7 h-4 bg-highlight rounded-full mix-blend-normal filter blur-[8rem] mainBlob"></div> */}
            <div className=" flex mx-auto items-end justify-between mb-5  w-full ">
                <p className="text-4xl  text-white inline-block md:text-5xl font-black font-Poppins ">
                    Projects
                </p>
                <div className="light">
                  <ExpandedTabs
                    setSelected={setSelected}
                    selected={selected}
                    activeColor="#F1F1F11A"
                    tabs={[{ title: "Grid", icon: CiGrid31 }, { title: "List", icon: CiCircleList },]} />
                </div>
            </div>
            <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
            </BentoGrid>
        </div>
    );
}


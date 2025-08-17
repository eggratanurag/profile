import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisScroll from "./components/lenisScroll";

import { Montserrat, Poppins, Saira_Extra_Condensed, Zeyada } from 'next/font/google';

const montserrat = Montserrat({ weight: ['400','500','600','700','800','900'], subsets: ['latin'] });
const poppins = Poppins({ weight: ['100','200','300','400','500','600','700','800','900'], style: ['normal','italic'], subsets: ['latin'] });
const saira = Saira_Extra_Condensed({ weight: ['100','200','300','400','500','600','700','800','900'], subsets: ['latin'] });
const zeyada = Zeyada({ subsets: ['latin'], weight: '400' });


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anurag Ojha",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.className} ${poppins.className} ${saira.className} ${zeyada.className}`} >
    
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}

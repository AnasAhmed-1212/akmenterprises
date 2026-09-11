import type { Metadata } from "next";
import { Header, Footer } from "./ui";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "AKM Enterprises | Sesame Seeds & Maize Exporter Pakistan", template: "%s | AKM Enterprises" },
  description: "Pakistan-origin Natural Sesame Seeds and Yellow Corn / Maize from AKM Enterprises, Karachi. Clear specifications, flexible packing and dependable export support.",
  openGraph: {title:"AKM Enterprises — From our soil to your world",description:"Natural Sesame Seeds and Yellow Corn / Maize. Pakistan origin. Global possibilities.",type:"website"},
  twitter:{card:"summary",title:"AKM Enterprises",description:"Pakistan-origin sesame seeds and maize for international buyers."},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>;}

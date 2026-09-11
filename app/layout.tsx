import type { Metadata } from "next";
import Image from "next/image";
import { Header, Footer } from "./ui";
import { contact } from "./site-data";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "AKM Enterprises | Sesame Seeds & Maize Exporter Pakistan", template: "%s | AKM Enterprises" },
  description: "Pakistan-origin Natural Sesame Seeds and Yellow Corn / Maize from AKM Enterprises, Karachi. Clear specifications, flexible packing and dependable export support.",
  openGraph: {title:"AKM Enterprises — From our soil to your world",description:"Natural Sesame Seeds and Yellow Corn / Maize. Pakistan origin. Global possibilities.",type:"website"},
  twitter:{card:"summary",title:"AKM Enterprises",description:"Pakistan-origin sesame seeds and maize for international buyers."},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>
    <Header/>{children}<Footer/>
    <a
      className="whatsapp-float"
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with AKM Enterprises on WhatsApp at ${contact.phone} (opens in a new tab)`}
    >
      <Image src="/whatsapp.svg" alt="" width={30} height={30}/>
      <span className="whatsapp-tooltip" aria-hidden="true">Chat with us on WhatsApp</span>
    </a>
  </body></html>;
}

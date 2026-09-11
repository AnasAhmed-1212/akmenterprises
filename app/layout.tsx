import type { Metadata } from "next";
import Image from "next/image";
import { Header, Footer } from "./ui";
import { contact, images, siteUrl } from "./site-data";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "AKM Enterprises | Sesame Seeds & Maize Exporter Pakistan", template: "%s | AKM Enterprises" },
  description: "Pakistan-origin Natural Sesame Seeds and Yellow Corn / Maize from AKM Enterprises, Karachi. Clear specifications, flexible packing and dependable export support.",
  applicationName: "AKM Enterprises",
  authors: [{ name: "AKM Enterprises", url: siteUrl }],
  creator: "AKM Enterprises",
  publisher: "AKM Enterprises",
  keywords: ["Pakistan sesame seeds exporter", "natural sesame seeds", "yellow maize exporter", "yellow corn exporter Pakistan", "agricultural commodities Pakistan", "AKM Enterprises"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "AKM Enterprises | Sesame Seeds & Maize Exporter Pakistan", description: "Pakistan-origin Natural Sesame Seeds and Yellow Corn / Maize with clear specifications and dependable export support.", url: "/", siteName: "AKM Enterprises", locale: "en_PK", type: "website", images: [{ url: images.cornfield, width: 1800, height: 1200, alt: "Green maize field representing Pakistan-origin agricultural products" }] },
  twitter: { card: "summary_large_image", title: "AKM Enterprises | Sesame Seeds & Maize Exporter Pakistan", description: "Pakistan-origin sesame seeds and maize for international buyers.", images: [images.cornfield] },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AKM Enterprises",
  url: siteUrl,
  email: contact.email,
  telephone: contact.phone,
  description: "Pakistan-origin Natural Sesame Seeds and Yellow Corn / Maize exporter based in Karachi.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop #1, Nargis Tower, Gulistan-e-Johar, Block #10, next to Hascol Petrol Pump",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>
    <Header/>{children}<Footer/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
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

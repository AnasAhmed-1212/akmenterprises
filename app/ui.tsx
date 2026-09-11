"use client";
import { useState, type ReactNode, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Sprout, ArrowUpRight, Menu, X, ChevronDown, MapPin, Phone, ArrowRight, Download, Check, Mail } from "lucide-react";
import { contact } from "./site-data";

export function Photo({src, alt, className = "", priority = false}: {src:string;alt:string;className?:string;priority?:boolean}) {
  const [failed,setFailed]=useState(false);
  return <div className={`photo ${className}`}>{failed ? <div className="photo-fallback"><Sprout size={40}/><span>{alt}</span></div> : <Image src={src} alt={alt} fill unoptimized sizes="(max-width: 760px) 100vw, 60vw" priority={priority} onError={()=>setFailed(true)}/>}</div>;
}
export function Reveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}) {
  const reduced=useReducedMotion();
  return <motion.div className={className} initial={{y:reduced?0:14}} whileInView={{y:0}} viewport={{once:true,amount:.12}} transition={{duration:reduced?0:.65,delay}}>{children}</motion.div>;
}
export function Brand(){return <Link className="brand" href="/" aria-label="AKM Enterprises home"><span className="brand-mark"><Sprout size={34} strokeWidth={1.3}/></span><span><strong>AKM<span className="brand-dot">.</span></strong><small>ENTERPRISES</small></span></Link>;}
export function ContactDetails(){
  return <address className="contact-details">
    <a href={`mailto:${contact.email}`}><Mail size={17}/><span>{contact.email}</span></a>
    <a href={contact.phoneHref}><Phone size={17}/><span>{contact.phone}</span></a>
    <div><MapPin size={18}/><span>{contact.address}</span></div>
  </address>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navLink = (href: string, label: string) => <Link href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>;
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="topbar"><div className="container">
      <a className="header-email" href={`mailto:${contact.email}`}><Mail size={13}/>{contact.email}</a>
      <span className="header-tagline">Rooted in quality. Growing through trust.</span>
      <a className="header-phone" href={contact.phoneHref}><Phone size={13}/>{contact.phone}</a>
    </div></div>
    <header className="site-header"><div className="container nav-row">
      <Brand/>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation" onClick={event => {
        const anchor = (event.target as HTMLElement).closest("a");
        if (anchor) {
          setOpen(false);
          event.currentTarget.querySelectorAll("details[open]").forEach(detail => detail.removeAttribute("open"));
        }
      }}>
        {navLink("/", "Home")}
        {navLink("/about", "About us")}
        <details className="nav-dropdown"><summary className={pathname.startsWith("/products") ? "active-menu" : ""}>Our products <ChevronDown size={13}/></summary><div>
          {navLink("/products", "All products")}
          {navLink("/products/sesame-seeds", "Natural Sesame Seeds")}
          {navLink("/products/yellow-maize", "Yellow Corn / Maize")}
        </div></details>
        {navLink("/origin", "Our origin")}
        {navLink("/quality", "Quality")}
        {navLink("/global-reach", "Global reach")}
        <details className="nav-dropdown"><summary className={["/export-documentation", "/faq"].includes(pathname) ? "active-menu" : ""}>Buyer resources <ChevronDown size={13}/></summary><div>
          {navLink("/export-documentation", "Export & documentation")}
          {navLink("/faq", "Frequently asked questions")}
          {navLink("/contact", "Contact our team")}
        </div></details>
      </nav>
      <Link href="/contact" className="button nav-cta">Get a quote <ArrowUpRight size={17}/></Link>
      <button className="menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div></header>
  </>;
}
export function Footer(){return <footer className="footer"><div className="container footer-grid"><div className="footer-about"><Brand/><p>Pakistan’s agricultural goodness,<br/>connected to your world.</p><ContactDetails/></div><div><h4>Explore AKM</h4><Link href="/about">About us</Link><Link href="/origin">Our origin</Link><Link href="/quality">Our approach to quality</Link><Link href="/global-reach">Global reach</Link></div><div><h4>Our products</h4><Link href="/products/sesame-seeds">Natural Sesame Seeds</Link><Link href="/products/yellow-maize">Yellow Corn / Maize</Link><Link href="/export-documentation">Packing & documentation</Link><Link href="/faq">Frequently asked questions</Link></div><div className="footer-inquiry"><h4>Let’s grow together</h4><p>Tell us your product, quantity and destination. Let’s start a conversation.</p><Link href="/contact" className="footer-quote">Make an inquiry <ArrowUpRight size={18}/></Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} AKM Enterprises. All rights reserved.</span><details className="photo-credits"><summary>Photography credits</summary><p>Representative imagery: <a href="https://unsplash.com/photos/gmsiVT5sfl0" target="_blank" rel="noreferrer">Lukasz Szmigiel / Unsplash</a>; <a href="https://unsplash.com/photos/tjX_sniNzgQ" target="_blank" rel="noreferrer">Frank McKenna / Unsplash</a>; <a href="https://unsplash.com/photos/0A7YwYhZhWw" target="_blank" rel="noreferrer">Bent Van Aeken / Unsplash</a>; <a href="https://unsplash.com/photos/fS6oRcdiIis" target="_blank" rel="noreferrer">Kelly Chiang / Unsplash</a>; <a href="https://unsplash.com/photos/5NPk8x7VyLQ" target="_blank" rel="noreferrer">Amanda Pettit / Unsplash</a>; <a href="https://unsplash.com/photos/sKpbVoNa9v8" target="_blank" rel="noreferrer">James Baltz / Unsplash</a>; <a href="https://unsplash.com/photos/KtD0STmOJIA" target="_blank" rel="noreferrer">engin akyurt / Unsplash</a>; <a href="https://commons.wikimedia.org/wiki/File:Sesame_Seeds_-_NIAID.jpg" target="_blank" rel="noreferrer">NIAID / Wikimedia Commons</a> (<a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noreferrer">CC BY 2.0</a>, cropped to fit). Images illustrate commodities and agriculture; they are not AKM shipment or facility photographs.</p></details><span>PAKISTAN ORIGIN · GLOBAL OUTLOOK</span></div></footer>;}
export function QuoteForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [inquiry, setInquiry] = useState("");

  function createInquiry(data: FormData) {
    const labels = ["Full name", "Company", "Email", "Phone", "Product", "Quantity (MT)", "Country", "Port", "Packing", "Incoterm", "Target shipment date", "Message"];
    return "AKM ENTERPRISES — COMMERCIAL INQUIRY\n\n" + labels
      .map(label => [label, String(data.get(label) ?? "").trim()] as const)
      .filter(([, value]) => value)
      .map(([label, value]) => label + ": " + value)
      .join("\n");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const preparedInquiry = createInquiry(data);
    setState("sending");
    setMessage("");
    setInquiry(preparedInquiry);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.error ?? "We could not send your inquiry. Please try again.");
      setState("sent");
      setMessage("Thank you. Your inquiry has been sent to AKM Enterprises. We will review it and respond with the relevant product and commercial information.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "We could not send your inquiry. Please call or email us directly.");
    }
  }

  function download() {
    const url = URL.createObjectURL(new Blob([inquiry], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "AKM-commercial-inquiry.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return <div className="quote-form-card">
    <div className="form-heading"><h3>Your buying requirements</h3><span>LET’S GET THE DETAILS RIGHT</span></div>
    <form onSubmit={submit}>
      <input className="honeypot" name="Website" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
      <div className="form-grid">
        <label>Full name *<input required name="Full name" autoComplete="name" placeholder="Your full name" maxLength={120}/></label>
        <label>Company name *<input required name="Company" autoComplete="organization" placeholder="Your company" maxLength={160}/></label>
        <label>Email address *<input required type="email" name="Email" autoComplete="email" placeholder="you@company.com" maxLength={200}/></label>
        <label>Phone / WhatsApp<input type="tel" name="Phone" autoComplete="tel" placeholder="Include country code" maxLength={50}/></label>
        <label>Product *<select required name="Product" defaultValue=""><option value="" disabled>Select a product</option><option>Natural Sesame Seeds</option><option>Yellow Corn / Maize</option><option>Both products</option></select></label>
        <label>Quantity (metric tonnes) *<input required type="number" min="0.01" step="0.01" name="Quantity (MT)" placeholder="e.g. 20"/></label>
        <label>Destination country *<input required name="Country" autoComplete="country-name" placeholder="Destination country" maxLength={100}/></label>
        <label>Destination port *<input required name="Port" placeholder="e.g. Jebel Ali" maxLength={120}/></label>
      </div>
      <details className="form-options"><summary>Packing, shipment & additional requirements <ChevronDown size={16}/></summary>
        <div className="form-grid">
          <label>Packing preference<select name="Packing"><option>Discuss with AKM</option><option>25 kg PP bags</option><option>50 kg PP bags</option><option>Bulk maize</option><option>Buyer-specific packing</option></select></label>
          <label>Preferred Incoterm<select name="Incoterm"><option>To be discussed</option><option>FOB</option><option>CFR</option><option>CIF</option></select></label>
          <label>Target shipment date<input type="date" name="Target shipment date"/></label>
        </div>
        <label>Specifications & additional message<textarea name="Message" rows={3} maxLength={3000} placeholder="Quality parameters, inspection requirements, packing details…"/></label>
      </details>
      <button type="submit" className="button form-submit" disabled={state === "sending"} aria-busy={state === "sending"}>
        {state === "sending" ? "Sending your inquiry…" : "Send inquiry"} <ArrowRight size={18}/>
      </button>
      <p className="form-note">Your request is sent securely to our export team. We use it only to respond to your inquiry.</p>
    </form>
    {state === "sent" && <div className="form-success" role="status"><Check size={19}/><p>{message}</p></div>}
    {state === "error" && <div className="form-error" role="alert"><p>{message}</p><div className="actions"><a href={"mailto:" + contact.email + "?subject=" + encodeURIComponent("AKM commercial inquiry") + "&body=" + encodeURIComponent(inquiry)} className="button small"><Mail size={16}/> Email your inquiry</a><button type="button" onClick={download} className="button small outline"><Download size={16}/> Download a copy</button></div></div>}
  </div>;
}

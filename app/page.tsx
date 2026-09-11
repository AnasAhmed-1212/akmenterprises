import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ArrowRight, Check, Sprout, ShieldCheck, PackageCheck, Ship, MapPin, Globe2, Wheat, MoveDown, Handshake } from "lucide-react";
import { Reveal, Photo } from "./ui";
import { HeroSlideshow } from "./hero-slideshow";
import { products, images } from "./site-data";

export const metadata: Metadata = {
  description: "AKM Enterprises exports Pakistan-origin Natural Sesame Seeds and Yellow Corn / Maize. Explore product specifications, packing options and export support from Karachi.",
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: "AKM Enterprises | Sesame Seeds & Maize Exporter Pakistan", description: "Pakistan-origin Natural Sesame Seeds and Yellow Corn / Maize with clear specifications and dependable export support." },
};

const strengths = [
  { icon: Sprout, title: "Rooted in Pakistan", text: "Carefully sourced sesame seeds and maize, with local supply knowledge and a clear focus on origin." },
  { icon: ShieldCheck, title: "Quality, made clear", text: "Agreed specifications, samples on request, and inspection coordination before your shipment." },
  { icon: Ship, title: "Prepared for the world", text: "Flexible packing and practical export support from our Karachi base to your destination port." },
];
const assurances=[{icon:Sprout,label:"Pakistan-origin products"},{icon:ShieldCheck,label:"Clear product specifications"},{icon:PackageCheck,label:"Flexible export packing"},{icon:Globe2,label:"International inquiries welcome"}];

export default function Home() {
  return <main id="main-content">
    <section className="hero">
      <HeroSlideshow />
      <div className="hero-shade" />
      <div className="container hero-inner">
        <div className="eyebrow light"><span className="tiny-line" /> PAKISTAN ORIGIN. GLOBAL POSSIBILITIES.</div>
        <h1>Goodness from our soil.<br /><em>Possibilities for<br className="desktop-break" /> your business.</em></h1>
        <p>Premium Natural Sesame Seeds and Yellow Corn.<br />Carefully sourced in Pakistan. Ready for your market.</p>
        <div className="actions"><Link className="button gold" href="/products">Explore our products <ArrowUpRight size={18} /></Link><Link className="button glass" href="/contact">Request a quote <ArrowRight size={18} /></Link></div>
        <div className="hero-origin"><Sprout size={31} strokeWidth={1.3} /><span>FROM PAKISTAN<br /><strong>With care, at every step.</strong></span></div>
        <div className="hero-bottom"><span><MapPin size={15} /> KARACHI, PAKISTAN</span><a href="#about" aria-label="Discover AKM Enterprises"><MoveDown size={20} /></a></div>
      </div>
    </section>
    <div className="assurance-bar"><div className="container assurances">{assurances.map(({icon:Icon,label})=><div key={label}><Icon size={23} strokeWidth={1.4}/><span>{label}</span></div>)}</div></div>
    <section className="section container about-grid" id="about">
      <Reveal className="about-visual"><Photo src={images.cornfield} alt="Green maize plants growing under a blue sky" className="about-main" /><Photo src={images.corn} alt="Golden yellow corn kernels" className="about-inset" /><div className="origin-seal"><Sprout size={28}/><strong>PAKISTAN</strong><span>GROWN WITH POSSIBILITY</span></div><div className="image-caption">NATURAL PRODUCTS. THOUGHTFUL SOURCING.</div></Reveal>
      <Reveal className="about-copy"><div className="eyebrow"><span className="tiny-line"/> WELCOME TO AKM ENTERPRISES</div><h2>Connecting our harvest<br />to <em>your next opportunity.</em></h2><p>Great trade begins with a reliable source. Based in Karachi, AKM Enterprises connects Pakistan’s agricultural supply with international importers, wholesalers and processors.</p><p>Our focus is simple: quality Natural Sesame Seeds and Yellow Corn / Maize, transparent specifications, and dependable support from your first inquiry through shipment.</p><div className="about-points"><span><Check/> Quality-focused sourcing</span><span><Check/> Buyer-specific packing</span><span><Check/> Clear communication</span><span><Check/> Export coordination</span></div><Link href="/about" className="text-link">Discover our company <ArrowUpRight size={18}/></Link></Reveal>
    </section>
    <section className="section products-section" id="products"><div className="container"><Reveal className="section-heading split-heading"><div><div className="eyebrow"><span className="tiny-line"/> OUR CORE PRODUCTS</div><h2>Two products.<br /><em>One commitment to quality.</em></h2></div><p>Focused expertise. Clear specifications.<br />Agricultural commodities prepared around<br className="desktop-break"/> your business requirements.</p></Reveal><div className="product-grid">{products.map((product,index)=><Reveal key={product.slug} className="product-card" delay={index*.1}><Link href={`/products/${product.slug}`} className="product-image-link"><Photo src={product.image} alt={product.imageAlt}/><span className="product-tag"><Sprout size={13}/> PAKISTAN ORIGIN</span><span className="round-arrow"><ArrowUpRight/></span></Link><div className="product-content"><span className="product-number">0{index+1} / OUR SELECTION</span><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3><p>{product.short}</p><div className="product-specs">{product.highlights.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><Link className="text-link" href={`/products/${product.slug}`}>Explore product & specifications <ArrowUpRight size={18}/></Link></div></Reveal>)}</div><p className="fineprint centered">Final specifications, crop availability and packing are confirmed before shipment. *Container quantities are indicative.</p></div></section>
    <section className="section container"><Reveal className="section-heading centered"><div className="eyebrow">THE AKM ADVANTAGE</div><h2>A dependable partner.<br /><em>From the ground up.</em></h2></Reveal><div className="strength-grid">{strengths.map(({icon:Icon,title,text},i)=><Reveal className="strength-card" key={title} delay={i*.08}><div className="feature-top"><span className="icon-box"><Icon size={29} strokeWidth={1.5}/></span><span className="muted-number">0{i+1}</span></div><h3>{title}</h3><p>{text}</p></Reveal>)}</div></section>
    <section className="origin-section" id="origin"><Photo src={images.ship} alt="A container ship carrying cargo across open water"/><div className="origin-overlay"/><div className="container origin-content"><Reveal><div className="eyebrow light"><span className="tiny-line"/> OUR ORIGIN</div><h2>Sourced in Pakistan.<br /><em>Connected to the world.</em></h2><p>Local supply knowledge meets international ambition. From sourcing through export preparation, we bring your requirements together in Karachi, Pakistan’s commercial gateway.</p><Link href="/global-reach" className="button gold">Explore our export support <ArrowUpRight size={18}/></Link></Reveal><div className="origin-note"><MapPin size={28} strokeWidth={1.4}/><div><span>OUR EXPORT BASE</span><h3>Karachi, Pakistan</h3><p>Local roots. International outlook.</p></div></div></div></section>
    <section className="section container"><div className="section-heading split-heading"><div><div className="eyebrow">EXPLORE AKM ENTERPRISES</div><h2>The details behind<br/><em>every shipment.</em></h2></div><p>Learn about our approach, our origin<br/>and the support available to your business.</p></div><div className="discovery-grid">{[
      {href:"/quality",image:images.inspection,alt:"A professional examining a sample in a laboratory",tag:"QUALITY & VERIFICATION",title:"Confidence in every detail",text:"Understand our specification and inspection approach."},
      {href:"/origin",image:images.cornfield,alt:"Lush green corn plants growing in rows",tag:"PAKISTAN ORIGIN",title:"Goodness begins at the source",text:"Explore our sourcing focus and Karachi export base."},
      {href:"/export-documentation",image:images.containers,alt:"Colourful shipping containers ready for freight transport",tag:"EXPORT SUPPORT",title:"Prepared for your market",text:"Learn about packing, loading and documentation."}
    ].map(item=><Link href={item.href} key={item.href} className="discovery-card"><Photo src={item.image} alt={item.alt}/><div><span className="eyebrow">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><span className="text-link">Discover more <ArrowUpRight size={17}/></span></div></Link>)}</div></section>
    <section className="cta-section"><div className="container"><div><div className="eyebrow light">LET’S GROW TOGETHER</div><h2>Your next opportunity<br />starts with <em>a conversation.</em></h2></div><Link href="/contact" className="button gold">Request a commercial quote <ArrowUpRight size={19}/></Link></div><Wheat className="cta-wheat" strokeWidth={.5} aria-hidden="true"/></section>
    <div className="closing-note container"><Handshake size={23}/><span>Good products. Clear communication. Lasting relationships.</span></div>
  </main>;
}

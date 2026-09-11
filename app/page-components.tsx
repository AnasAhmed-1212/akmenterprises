import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sprout, Wheat } from "lucide-react";
import { Photo, Reveal } from "./ui";
import { products } from "./site-data";

export function PageHero({ label, title, accent, description, image, alt, compact = false }: {
  label: string; title: string; accent: string; description: string;
  image: string; alt: string; compact?: boolean;
}) {
  return <section className={`inner-hero${compact ? " compact" : ""}`}>
    <Photo src={image} alt={alt} className="inner-hero-photo" priority />
    <div className="inner-hero-shade" />
    <div className="container inner-hero-content">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><ArrowRight size={12}/><span aria-current="page">{label}</span></nav>
      <div className="eyebrow light">AKM ENTERPRISES / {label.toUpperCase()}</div>
      <h1>{title}<br/><em>{accent}</em></h1>
      <p>{description}</p>
    </div>
  </section>;
}

export function PageCTA({ title = "Your next opportunity", accent = "starts with a conversation." }: {title?:string;accent?:string}) {
  return <section className="cta-section"><div className="container"><div><div className="eyebrow light">LET’S GROW TOGETHER</div><h2>{title}<br/><em>{accent}</em></h2></div><Link href="/contact" className="button gold">Request a commercial quote <ArrowUpRight size={18}/></Link></div><Wheat className="cta-wheat" strokeWidth={.5} aria-hidden="true"/></section>;
}

export function ProductCards() {
  return <div className="product-grid">{products.map((product,index)=><Reveal key={product.slug} className="product-card" delay={index*.08}>
    <Link href={`/products/${product.slug}`} className="product-image-link"><Photo src={product.image} alt={product.imageAlt}/><span className="product-tag"><Sprout size={13}/> PAKISTAN ORIGIN</span><span className="round-arrow"><ArrowUpRight/></span></Link>
    <div className="product-content"><span className="product-number">0{index+1} / OUR SELECTION</span><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3><p>{product.short}</p><div className="product-specs">{product.highlights.map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><Link className="text-link" href={`/products/${product.slug}`}>View specifications <ArrowUpRight size={18}/></Link></div>
  </Reveal>)}</div>;
}

export function PhotoStrip({ items }: {items:{src:string;alt:string;label:string}[]}) {
  return <div className="photo-strip">{items.map(item=><figure key={item.label}><Photo src={item.src} alt={item.alt}/><figcaption>{item.label}</figcaption></figure>)}</div>;
}

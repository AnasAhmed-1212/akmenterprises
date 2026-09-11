import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InformationPage, informationPages, type InformationSlug } from "../information-pages";

export function generateStaticParams() {
  return Object.keys(informationPages).map(page => ({page}));
}

function isInformationPage(page:string):page is InformationSlug {
  return Object.hasOwn(informationPages,page);
}

export async function generateMetadata({params}:{params:Promise<{page:string}>}):Promise<Metadata> {
  const {page}=await params;
  if(!isInformationPage(page))return {title:"Page not found"};
  const info=informationPages[page];
  return {title:info.label,description:info.description,openGraph:{title:`${info.label} | AKM Enterprises`,description:info.description}};
}

export default async function Page({params}:{params:Promise<{page:string}>}) {
  const {page}=await params;
  if(!isInformationPage(page))notFound();
  return <InformationPage slug={page}/>;
}

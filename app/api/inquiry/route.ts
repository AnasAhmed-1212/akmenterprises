import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const sender = "contact@akmenterprises.info";
const maxLengths = {
  "Full name": 120, Company: 160, Email: 200, Phone: 50, Product: 80,
  "Quantity (MT)": 40, Country: 100, Port: 120, Packing: 100,
  Incoterm: 20, "Target shipment date": 30, Message: 3000, Website: 0,
} as const;

type FieldName = keyof typeof maxLengths;
type Inquiry = Record<FieldName, string>;

function value(payload: Record<string, unknown>, name: FieldName) {
  const raw = typeof payload[name] === "string" ? payload[name].trim() : "";
  return raw.slice(0, maxLengths[name]);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function plainText(inquiry: Inquiry) {
  const labels: [FieldName, string][] = [
    ["Full name", "Full name"], ["Company", "Company"], ["Email", "Email address"],
    ["Phone", "Phone / WhatsApp"], ["Product", "Product"], ["Quantity (MT)", "Required quantity (MT)"],
    ["Country", "Destination country"], ["Port", "Destination port"], ["Packing", "Packing preference"],
    ["Incoterm", "Preferred Incoterm"], ["Target shipment date", "Target shipment date"],
    ["Message", "Specifications & additional message"],
  ];
  return [
    "AKM ENTERPRISES — WEBSITE COMMERCIAL INQUIRY",
    "",
    ...labels.map(([field, label]) => label + ": " + (inquiry[field] || "Not provided")),
  ].join("\n");
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit the form again." }, { status: 400 });
  }

  const inquiry = Object.fromEntries(
    Object.keys(maxLengths).map(key => [key, value(payload, key as FieldName)]),
  ) as Inquiry;

  if (inquiry.Website) return NextResponse.json({ sent: true });
  if (!inquiry["Full name"] || !inquiry.Company || !inquiry.Email || !inquiry.Product || !inquiry["Quantity (MT)"] || !inquiry.Country || !inquiry.Port) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }
  if (!isEmail(inquiry.Email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const password = process.env.SMTP_PASSWORD;
  const recipient = process.env.INQUIRY_TO_EMAIL?.trim() || sender;
  if (!password) {
    console.error("SMTP_PASSWORD is not configured.");
    return NextResponse.json({ error: "Email delivery is not configured yet. Please call or email us directly." }, { status: 503 });
  }
  if (!isEmail(recipient)) {
    console.error("INQUIRY_TO_EMAIL is not a valid email address.");
    return NextResponse.json({ error: "Email delivery is not configured correctly yet. Please call or email us directly." }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: { user: sender, pass: password },
  });

  try {
    const delivery = await transporter.sendMail({
      from: "AKM Enterprises Website <" + sender + ">",
      to: recipient,
      replyTo: inquiry.Email,
      subject: "Website inquiry: " + inquiry.Product + " — " + inquiry.Company,
      text: plainText(inquiry),
    });
    if (delivery.rejected.length || !delivery.accepted.includes(recipient)) {
      throw new Error(`SMTP did not accept the inquiry for delivery. Accepted: ${delivery.accepted.join(", ") || "none"}. Rejected: ${delivery.rejected.join(", ") || "none"}.`);
    }
    console.info("Website inquiry accepted by SMTP.", { messageId: delivery.messageId, response: delivery.response, recipient });
    return NextResponse.json({ sent: true });
  } catch (error) {
    console.error("Inquiry email could not be sent.", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "We could not send your inquiry. Please call or email us directly." }, { status: 502 });
  }
}

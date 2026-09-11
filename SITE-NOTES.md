# AKM Enterprises website

The existing Next.js project now contains a responsive homepage and two statically generated product detail pages:

- `/` — company introduction, products, origin, quality, export support, FAQ and inquiry preparation.
- `/products/sesame-seeds` — sesame specifications and applications.
- `/products/yellow-maize` — maize specifications and buyer categories.

Run the existing `npm run dev`, `npm run build` and `npm run lint` scripts as usual.

## Contact configuration

Company contact details are centralized in `app/site-data.ts`: contact@akmenterprises.info, +92 300 8375998, and Shop #1, Nargis Tower, Gulistan-e-Johar, Block #10, next to Hascol Petrol Pump, Karachi. The header shows a clickable phone number and email; the inquiry section and footer include the full address.

The inquiry form validates buyer details and offers Open email, Download and Copy actions. Open email uses the company email in `app/site-data.ts` and fills in the buyer's email client; the buyer still sends the message. No email is sent or submission stored automatically. Direct server submission would need an email/form delivery service.

## Content and visuals

- Main business copy and specifications come from AKM_Enterprises_Complete_Website_Content.docx.
- Product data and image URLs live in `app/site-data.ts`.
- Online photos use Unsplash and Wikimedia Commons, with source and license credits in the footer. Photographs are representative, not claims about AKM facilities or shipments.
- The AKM wordmark uses text and a Lucide Sprout icon until an official logo is supplied.
- Motion respects the browser's reduced-motion preference. FAQ sections use native accessible disclosure elements.
- The hero crossfades between the field, sesame and maize photographs every six seconds with a 1.5-second transition. Image selection and pause/play controls are provided. Autoplay skips unloaded slides, pauses in hidden tabs, and is disabled for reduced-motion preferences.
- No unsubstantiated certifications, testimonials, export destinations, or company statistics were added.

## Hosting

The existing Next.js architecture is preserved. This project builds with Next.js; it does not yet produce the Cloudflare Worker build required by Sites hosting. It is ready for a compatible Next.js host, or a separate Cloudflare adapter setup when hosting is chosen.

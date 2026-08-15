# Freshers Janata Party (#FJP) Website

This is a polished, production-grade marketing website for the **Freshers Janata Party (#FJP)** community. It is built using Next.js 14+ (App Router), Tailwind CSS, and TypeScript, configured as a fully static site.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Customize

### 1. WhatsApp Invite Link
Update the WhatsApp invite link in two places:
- `src/components/JoinCommunity.tsx` (Look for the `href` on the "Join Now" button)
- `src/components/ClosingCTA.tsx` (Look for the `href` on the "Join Now" button)
Replace `https://chat.whatsapp.com/PLACEHOLDER` with your actual group link.

### 2. QR Code Image
Replace the placeholder QR code image by placing your actual image at:
`public/qr-code.png`
Ensure the file is a square PNG or JPEG.

### 3. Event Data
Update the upcoming events displayed on the timeline by editing the `events` array at the top of:
`src/components/Timeline.tsx`

## Deployment (Static Export)

This project is configured for static export (`output: 'export'` in `next.config.ts`).
To generate the static files:

```bash
npm run build
```

This will output a fully static HTML/CSS/JS site into the `out` directory, which can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, AWS S3, etc.).

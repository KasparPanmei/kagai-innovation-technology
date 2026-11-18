# KAGAI Innovation Technology — MERN Website

Initial implementation of the KAGAI corporate website based on the supplied Stitch UI/UX reference package and `docs/Design.md`.

## Stack
- React + Vite
- React Router
- Tailwind CSS (with brand tokens and custom responsive CSS)
- Framer Motion for scroll reveal and route transitions
- Node.js + Express REST API
- MongoDB + Mongoose for enquiry persistence
- Zod validation and Lucide icons

## Requirements
- Node.js 20 LTS or newer
- npm 10+
- MongoDB local instance or MongoDB Atlas connection string (optional for frontend preview; required to persist enquiries)

## Setup

```bash
npm install
cp server/.env.example server/.env
```

Edit `server/.env` and set `MONGODB_URI` to your local MongoDB or Atlas URI. On Windows PowerShell:

```powershell
Copy-Item server/.env.example server/.env
```

Run both applications from the project root:

```bash
npm run dev
```

- Frontend: http://localhost:5173
- API health: http://localhost:5000/api/health

Run separately if needed:

```bash
npm run dev:client
npm run dev:server
```

## Implemented routes

| Route | Page |
|---|---|
| `/` | Corporate homepage |
| `/about` | About KAGAI |
| `/services` | Services and capabilities |
| `/solutions` | Solutions and case studies |
| `/academy` | Academy overview |
| `/insights` | Engineering insights |
| `/contact` | Enquiry form connected to API |
| `/portal/login` | Portal introduction / staged access page |
| `/legal/privacy-policy` | Privacy policy draft |
| `/legal/terms` | Terms draft |
| `/legal/refund-cancellation-delivery` | Refund and digital delivery draft |
| `/legal/disclaimer` | Legal disclaimer draft |

## Motion and responsive behaviour

- Scroll reveal is implemented with a reusable Framer Motion `Reveal` component.
- Reveals trigger when content enters the viewport and normally play once.
- Native smooth scrolling is used; scroll-jacking is not used.
- `prefers-reduced-motion` is respected.
- Responsive layouts are provided for small mobile, mobile, tablet and desktop widths.

## Important before production

1. Replace the sample contact email and location details with verified company information.
2. Legal pages are working drafts, not legal advice or approved policies. Confirm the actual business model, data practices, payment and delivery flows, legal entity and applicable law; obtain legal review before publication.
3. Add a verified email provider, CAPTCHA/abuse protection, privacy/cookie consent controls where applicable, and transactional email handling.
4. Implement authentication, student/instructor/admin roles, Academy course management, payment integration and protected video delivery as separate milestones. The portal is not yet an authentication system.
5. Replace any illustrative project descriptions with verified case studies before presenting them as completed client work.
6. Update the MongoDB URI, CORS origin, HTTPS, rate limits and deployment secrets for production.

## Design references

The original Stitch screens and design reference files are retained under `docs/stitch-reference/`. `docs/Design.md` is the project specification.

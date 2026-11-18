# KAGAI Innovation Technology — Design & Development Specification

**Document:** `Design.md`  
**Version:** 2.0  
**Project:** KAGAI Corporate Website and Learning Platform  
**Design source:** `stitch_website_ui_ux_design_system.zip`  
**Architecture:** MERN (MongoDB, Express.js, React, Node.js)  
**Status:** Approved direction for implementation planning

---

## 1. Project direction

Build the KAGAI Innovation Technology website from the supplied Stitch UI/UX screens. The supplied designs are the visual source of truth: preserve their page intent, information hierarchy, content framing, and visual character. Do not replace them with a generic technology-company template. Where a screen does not define a responsive state or interaction, implement it consistently with the design system in this document.

The website represents KAGAI's work across software technology, IoT and embedded systems, cybersecurity, intelligent systems, engineering solutions, research, and technical education through KAGAI Academy.

### Product goals

- Present KAGAI as a credible engineering and technology company.
- Explain services and engineered solutions clearly.
- Publish engineering insights, research, and case studies.
- Support enquiries and consultation requests.
- Provide an extensible Academy experience for courses and lectures.
- Provide secure client, student, instructor, and administrator access as those modules are implemented.
- Publish clear legal, privacy, delivery, and refund information.

---

## 2. Source design inventory

The uploaded design package contains these initial page designs. Treat each supplied `screen.png` as the visual reference and its corresponding `code.html` as a layout/content reference.

| Page | Source folder | Implementation route |
|---|---|---|
| Corporate homepage | `kagai_innovation_technology_corporate_homepage` | `/` |
| Enterprise services & capabilities | `kagai_enterprise_services_capabilities` | `/services` |
| Academy – advanced technical education | `kagai_academy_advanced_technical_education` | `/academy` |
| Engineering insights & research | `kagai_engineering_insights_research` | `/insights` |
| About – engineering & leadership | `kagai_about_engineering_leadership` | `/about` |
| Engineered solutions & case studies | `kagai_engineered_solutions_case_studies` | `/solutions` |
| Contact – engineering consultation | `kagai_contact_engineering_consultation` | `/contact` |
| Client/student authentication portal | `kagai_portal_client_student_authentication` | `/portal/login` |
| Privacy policy & DPDP compliance | `kagai_privacy_policy_dpdp_compliance` | `/legal/privacy-policy` |
| Refund, cancellation & digital delivery | `kagai_refund_cancellation_delivery_policy` | `/legal/refund-cancellation-delivery` |
| Terms of service & enterprise agreement | `kagai_terms_of_service_enterprise_agreement` | `/legal/terms` |
| Legal disclaimer & security compliance | `kagai_legal_disclaimer_compliance_framework` | `/legal/disclaimer` |

### Additional routes to implement when content is ready

- `/services/software-development`
- `/services/iot-embedded-systems`
- `/services/cybersecurity`
- `/services/ai-automation`
- `/academy/courses`
- `/academy/courses/:slug`
- `/insights/:slug`
- `/solutions/:slug`
- `/careers`
- `/faq`
- `/legal/cookie-policy`
- `/legal/shipping-delivery` (only if physical goods are sold)
- `/legal/acceptable-use`
- `/legal/intellectual-property`
- `/portal/register`
- `/portal/forgot-password`
- `/portal/dashboard` (protected)
- `/admin` (role-protected)

Do not publish empty or placeholder pages as finished content. If a page is not ready, omit it from primary navigation or mark it clearly as forthcoming.

---

## 3. Brand and design system

### 3.1 Brand palette

Use the KAGAI logo as the brand reference. The following values are working digital approximations and should be checked against the original vector/high-resolution logo before final brand sign-off.

| Token | Value | Usage |
|---|---|---|
| `--kagai-navy` | `#081848` | Primary brand, headings, navigation, dark sections |
| `--kagai-crimson` | `#A81028` | Primary action, highlights, active states |
| `--white` | `#FFFFFF` | Main background and inverse text |
| `--soft-grey` | `#F3F4F6` | Alternate section and surface background |
| `--charcoal` | `#202938` | Body text and dark neutral surfaces |
| `--steel-grey` | `#737D8C` | Secondary text |
| `--border` | `#E1E5EB` | Borders and dividers |
| `--crimson-hover` | `#861020` | Crimson hover state |
| `--navy-hover` | `#14295A` | Navy hover state |

The master theme is **Corporate Classic**: predominantly white and navy with restrained crimson accents. Dark navy sections may be used for cybersecurity, technical showcases, calls to action, and the footer. Do not introduce unrelated accent colours or use crimson as a dominant page background without a clear design reason.

### 3.2 Typography

- Headings: Manrope.
- Body: Inter.
- Editorial/long-form accent: DM Serif Display, only where it matches the supplied design.
- Technical labels and metadata: IBM Plex Mono or Space Mono.

Use responsive type sizes with `clamp()` where appropriate. Maintain readable line length, clear heading hierarchy, and sufficient line height. Avoid excessive all-caps text.

### 3.3 Layout and components

- Use a consistent max-width content container and responsive page gutters.
- Use editorial grids and asymmetric compositions where the supplied screens indicate them.
- Avoid repeating the same three-card layout in every section.
- Use restrained borders and shadows; avoid unnecessary glassmorphism and decorative gradients.
- Preserve logo aspect ratio and clear space. Use an approved light/dark logo variant where available; do not recolour or distort the logo.
- Build reusable components rather than duplicating page markup.

### 3.4 Design tokens

```css
:root {
  --kagai-navy: #081848;
  --kagai-crimson: #A81028;
  --kagai-crimson-hover: #861020;
  --kagai-navy-hover: #14295A;
  --white: #FFFFFF;
  --soft-grey: #F3F4F6;
  --charcoal: #202938;
  --steel-grey: #737D8C;
  --border: #E1E5EB;

  --font-heading: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-editorial: "DM Serif Display", serif;
  --font-mono: "IBM Plex Mono", monospace;

  --container-max: 1280px;
  --page-gutter: clamp(1rem, 4vw, 3.5rem);
  --section-space: clamp(4rem, 8vw, 7.5rem);
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
}
```

---

## 4. MERN technology stack

### Frontend

- React with Vite.
- React Router for client-side routing.
- Tailwind CSS for responsive styling, with shared design tokens.
- Framer Motion for controlled entrance, reveal, and route transitions.
- Lucide React for consistent iconography.
- React Hook Form and Zod for form state and validation.
- TanStack Query for server-state fetching and caching when API integration grows.

### Backend

- Node.js LTS.
- Express.js REST API.
- MongoDB with Mongoose.
- Zod or equivalent server-side schema validation.
- Centralised error handling, request logging, and rate limiting.

### Supporting services (select when required)

- Object storage for course assets and uploads; do not store large media files directly in MongoDB.
- A reputable payment gateway for paid courses or services.
- Video hosting/streaming with access control for paid lectures.
- Transactional email provider for verification, enquiries, and account notifications.
- CAPTCHA or equivalent abuse protection on public forms where needed.

### Architecture principles

- Keep the public corporate site, Academy, portal, and admin areas in one React application initially, but separate them by route, layout, permissions, and feature modules.
- Keep frontend and backend independently deployable.
- The browser must never connect directly to MongoDB.
- All privileged operations must be authorised by the Express API.
- Use environment variables for secrets and deployment-specific configuration.
- Keep development, staging, and production configuration separate.

---

## 5. Recommended repository structure

```text
kagai-innovation-technology/
├── client/
│   ├── public/
│   │   ├── assets/
│   │   └── logo/
│   └── src/
│       ├── app/
│       │   ├── router.jsx
│       │   └── providers.jsx
│       ├── assets/
│       ├── components/
│       │   ├── common/
│       │   ├── navigation/
│       │   ├── sections/
│       │   ├── forms/
│       │   └── motion/
│       ├── layouts/
│       │   ├── MainLayout.jsx
│       │   ├── PortalLayout.jsx
│       │   └── AdminLayout.jsx
│       ├── pages/
│       │   ├── Home/
│       │   ├── About/
│       │   ├── Services/
│       │   ├── Academy/
│       │   ├── Insights/
│       │   ├── Solutions/
│       │   ├── Contact/
│       │   ├── Portal/
│       │   └── Legal/
│       ├── hooks/
│       ├── lib/
│       ├── services/
│       ├── styles/
│       └── main.jsx
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── validators/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   └── tests/
├── docs/
│   ├── Design.md
│   └── API.md
├── .gitignore
└── README.md
```

Keep page-specific components close to their feature when the codebase grows. The structure above is a starting convention, not a requirement to create empty folders immediately.

---

## 6. Routing and page layouts

Use React Router with a shared corporate layout for public pages. The main layout should provide the announcement bar (when enabled), responsive navigation, page content, and global footer.

Use separate layouts for:

- Public corporate pages.
- Academy learning experience.
- Client/student authentication and portal.
- Administration dashboard.
- Long-form legal documents.

For direct navigation and refreshes, configure the hosting platform to serve the React entry point for client-side routes. Add a not-found page and route-level error handling.

Use route metadata for page title, description, canonical URL, and social preview metadata. Where search indexing is important, assess prerendering or server-side rendering rather than relying exclusively on client-rendered metadata.

---

## 7. Scroll reveal, smooth scrolling, and transitions

Motion is a core interaction requirement, but it must remain subtle, fast, and accessible. Normal browser scrolling must remain under the visitor's control. Do not use scroll-jacking or trap the scroll position.

### 7.1 Scroll reveal behaviour

Use Framer Motion's `whileInView` or an Intersection Observer-backed reusable reveal component.

Recommended defaults:

- Reveal: opacity `0 → 1` and vertical offset `18–24px → 0`.
- Duration: approximately `0.55–0.75s`.
- Easing: a restrained ease-out curve.
- Stagger: approximately `0.08–0.12s` between related children.
- Viewport threshold: approximately `0.15–0.25`.
- Trigger once for most content to avoid distracting repeated motion; use repeat-on-enter only for specific visual elements where it adds meaning.

Apply reveal patterns to section headings, paragraphs, imagery, service features, case-study content, article previews, and CTA sections. Avoid animating every line or every small icon independently.

### 7.2 Smooth scrolling

- Use native CSS `scroll-behavior: smooth` for anchor navigation where supported.
- Add `scroll-margin-top` to anchor targets to account for the sticky header.
- Use Lenis only if a tested design requirement cannot be met with native scrolling. If used, integrate it carefully with Framer Motion and disable or simplify it for reduced-motion preferences and touch devices where appropriate.
- Do not override trackpad, keyboard, or touch scrolling behaviour.

### 7.3 Page and navigation transitions

- Use short opacity transitions between routes where they do not delay navigation.
- Animate mobile navigation open/close with opacity and small translation.
- Use subtle navbar background/shadow changes after scrolling.
- Use hover/focus transitions for links and buttons, not large scaling or bouncing effects.
- Avoid long full-screen transition sequences.

### 7.4 Reduced motion and accessibility

Respect `prefers-reduced-motion: reduce`. In reduced-motion mode, remove non-essential movement and smooth scrolling while keeping content visible. Every revealed element must remain readable if JavaScript or animation fails. Do not hide essential content until an animation runs.

### 7.5 Performance

Prefer transform and opacity animations. Avoid animating layout-heavy properties such as width, height, top, or left unless necessary. Lazy-load below-the-fold images, reserve image dimensions to prevent layout shift, and avoid heavy animation libraries beyond the selected stack.

---

## 8. Responsive and mobile-first requirements

Every supplied screen must be implemented and tested at mobile, tablet, laptop, and wide desktop widths. Do not treat mobile as a compressed desktop layout; adapt hierarchy and interactions intentionally.

### Target breakpoints

| Name | Width | Expected behaviour |
|---|---:|---|
| Small mobile | 320–374px | Single-column layout; compact spacing |
| Mobile | 375–767px | Mobile navigation; stacked sections |
| Tablet | 768–1023px | Flexible two-column layouts where suitable |
| Desktop | 1024–1439px | Full navigation and designed grids |
| Wide desktop | 1440px+ | Constrained content width; generous whitespace |

Use Tailwind's responsive utilities and content-driven breakpoints where necessary. The table is a testing guide; do not force every component to change at identical widths.

### Mobile acceptance requirements

- No horizontal page overflow at 320px width.
- Navigation collapses into an accessible menu with keyboard and touch support.
- Primary actions remain visible and easy to tap.
- Text remains readable without pinch zoom.
- Multi-column grids become one column or a deliberate horizontal scroller where appropriate.
- Tables and code samples have an intentional narrow-screen treatment.
- Images use responsive sizing and appropriate crops.
- Forms use full-width controls and clear validation messages.
- Footer columns stack logically and legal links remain accessible.
- Motion is reduced where it could affect usability or device performance.
- Portal and Academy interfaces remain usable on touch screens.

---

## 9. Shared component requirements

Build and reuse these components where they match the supplied screens:

- `AnnouncementBar`
- `SiteHeader`
- `DesktopNavigation`
- `MobileNavigation`
- `PrimaryButton` / `SecondaryButton`
- `PageHero`
- `SectionHeading`
- `Reveal` / `StaggerGroup`
- `ServiceFeature`
- `CapabilityGrid`
- `CaseStudyFeature`
- `InsightPreview`
- `CoursePreview`
- `ConsultationForm`
- `FAQAccordion`
- `LegalDocumentLayout`
- `CookiePreferences`
- `SiteFooter`
- `BackToTop`

Components must support semantic HTML, keyboard focus, accessible names, loading/error states where applicable, and responsive behaviour.

---

## 10. Backend modules and initial data models

Implement only the models needed for each delivery phase. Suggested future modules:

| Module | Example collections |
|---|---|
| Identity & access | `users`, `sessions`, `passwordresets` |
| Enquiries | `enquiries`, `consultations` |
| Content | `articles`, `categories`, `caseStudies`, `services` |
| Academy | `courses`, `lessons`, `enrollments`, `instructors`, `lectureProgress` |
| Commerce (if enabled) | `orders`, `payments`, `refundRequests`, `subscriptions` |
| Administration | `auditLogs`, `siteSettings`, `announcements` |

Define schemas, indexes, validation, retention, and access rules before implementing each module. Never trust role, price, payment status, course access, or ownership values supplied by the browser.

### Initial API groups

- `/api/v1/enquiries`
- `/api/v1/services`
- `/api/v1/solutions`
- `/api/v1/insights`
- `/api/v1/academy/courses`
- `/api/v1/auth`
- `/api/v1/users`
- `/api/v1/admin`

Use consistent response shapes, status codes, pagination, validation errors, and API versioning. Public read endpoints should expose only published content.

---

## 11. Authentication and security

- Hash passwords using a modern password-hashing algorithm such as Argon2id or bcrypt with appropriate parameters.
- Prefer secure, HTTP-only, SameSite cookies for browser sessions; configure CSRF protection when using cookie-based authentication.
- Enforce server-side role and resource-level authorisation on every protected endpoint.
- Rate-limit login, password reset, and public form endpoints.
- Validate and sanitise untrusted input on the server.
- Use secure headers, HTTPS, CORS allowlists, and safe error responses.
- Protect file uploads with type/size checks, storage isolation, and malware scanning where appropriate.
- Keep secrets out of source control and client bundles.
- Maintain audit logs for privileged administrative actions.
- Use payment gateway tokens/webhooks and verify webhook signatures. Do not store raw card details.
- Define backups, restore testing, dependency updates, and incident response procedures.

---

## 12. Legal and policy content

The supplied legal screens are starting content/design references, not legal approval. Final text must match KAGAI's actual business model, products, payment flows, data practices, and jurisdictions, and should be reviewed by qualified counsel.

Required or conditional documents:

- Terms of Service / Enterprise Agreement.
- Privacy Policy, including applicable Indian data-protection requirements.
- Cookie Policy and preference controls where applicable.
- Refund and Cancellation Policy for paid products/services.
- Digital Delivery Policy for digital courses and downloadable content.
- Shipping and Delivery Policy only if physical goods are sold or shipped.
- Legal Disclaimer and Security Compliance Framework.
- Acceptable Use Policy.
- Intellectual Property Policy.

Do not publish a physical shipping policy as if it applies when KAGAI only provides digital services. Keep policy versions and effective dates visible. Link relevant policies at registration, enquiry, and checkout points where appropriate.

---

## 13. SEO, accessibility, and performance

### SEO

- Unique page title and meta description per route.
- Canonical URLs and social metadata.
- XML sitemap and robots configuration.
- Descriptive URLs and internal links.
- Structured data only when accurate and applicable.
- Optimised images with meaningful alt text.
- Prerender or server-render indexable pages if client-only rendering limits discovery.

### Accessibility

Target WCAG 2.2 AA where applicable:

- Semantic landmarks and heading order.
- Keyboard-accessible navigation and forms.
- Visible focus indicators.
- Sufficient colour contrast.
- Accessible names and error messages.
- Captions/transcripts for learning media where available.
- Reduced-motion support.
- No information conveyed by colour alone.

### Performance targets

- LCP: 2.5 seconds or less.
- INP: 200 milliseconds or less.
- CLS: 0.1 or less.

Use responsive images, lazy loading, code splitting, route-level loading, caching, compressed assets, and restrained third-party scripts. Measure performance on representative mobile devices and networks.

---

## 14. Development phases

### Phase 1 — Project foundation

- Create the MERN repository and development scripts.
- Configure React, Vite, Tailwind, routing, and shared tokens.
- Configure Express, MongoDB connection, environment validation, and error handling.
- Add linting, formatting, and Git conventions.

### Phase 2 — Corporate website implementation

- Implement the shared header, footer, buttons, typography, containers, and reveal utilities.
- Build the homepage from the supplied design.
- Implement About, Services, Solutions, Insights, and Contact pages.
- Match supplied screenshots at desktop sizes before completing responsive refinements.

### Phase 3 — Motion and responsive refinement

- Add scroll reveal and route transitions.
- Implement sticky navigation behaviour and mobile menu.
- Test all routes at the agreed breakpoints.
- Verify reduced-motion and keyboard behaviour.

### Phase 4 — Content API and administration

- Add MongoDB models and public content APIs.
- Add enquiry submission and administration workflow.
- Add protected admin access and audit logging.

### Phase 5 — Academy and portal

- Add course catalogue and course detail pages.
- Add student/instructor authentication and role permissions.
- Add enrolment, lecture access, progress, and certificates as scoped.
- Integrate payment and video services only when required.

### Phase 6 — Legal, QA, and deployment

- Finalise policy content and consent flows.
- Run accessibility, security, responsive, and performance testing.
- Configure production frontend/backend deployments, database access, backups, and monitoring.

---

## 15. Definition of done

A page or feature is complete only when:

1. It follows the supplied KAGAI design reference and brand tokens.
2. It works at 320px, 375px, tablet, laptop, and desktop widths.
3. It has no horizontal overflow or broken layout.
4. Navigation, forms, links, and buttons perform their stated actions.
5. Scroll reveals and transitions are smooth, restrained, and non-blocking.
6. Reduced-motion preferences are respected.
7. Keyboard navigation and focus states work.
8. Loading, empty, success, and error states are handled where relevant.
9. Data is validated and protected on the server.
10. Page metadata, image optimisation, and basic SEO are present.
11. No placeholder claims, fake testimonials, invented metrics, or non-functional controls are presented as real.

---

## 16. Final implementation principle

KAGAI's website must feel like a carefully engineered corporate platform, not a generic template. The supplied Stitch screens define the intended visual direction; the MERN architecture provides a maintainable implementation; scroll reveals and transitions add polish without compromising performance; and mobile-first responsive behaviour ensures that every page remains usable across devices.

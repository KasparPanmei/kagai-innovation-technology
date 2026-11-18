# COMPANY WEBSITE — DESIGN.md

**Document Type:** UI/UX Design & Development Specification  
**Version:** 1.0  
**Project:** Corporate Technology Website  
**Primary Market:** India  
**Design Philosophy:** Premium, Minimal, Editorial, Engineering-Driven  
**Status:** Initial Design Blueprint

---

# 1. PROJECT OVERVIEW

## 1.1 Project Vision

Develop a modern, professional, responsive corporate website representing a technology and innovation company specialising in software engineering, Internet of Things (IoT), cybersecurity, digital transformation, and online technical education.

The website must establish credibility, communicate technical expertise, attract business clients, provide educational resources, and facilitate commercial enquiries.

The design must avoid generic template-based layouts and overly artificial AI-generated visual styles.

## 1.2 Core Objectives

1. Establish a distinctive and recognisable corporate identity.
2. Showcase technology services and engineering capabilities.
3. Present IoT, software and cybersecurity solutions.
4. Provide a dedicated online learning platform.
5. Generate leads through structured enquiry and consultation forms.
6. Publish company news, research, insights and technical articles.
7. Provide transparent commercial, legal and privacy information.
8. Create a scalable foundation for future services and products.

## 1.3 Brand Personality

The brand should communicate:

- Technical excellence
- Innovation and practical engineering
- Reliability and transparency
- Security and responsibility
- Research-driven development
- Professional education
- Long-term technology partnerships

---

# 2. DESIGN SYSTEM

## 2.1 KAGAI Official Brand Colour System

The website must follow the visual identity established by the KAGAI Innovation Technology logo.

### Primary Brand Colours

| Colour | HEX | Purpose |
|---|---|---|
| KAGAI Navy | #081848 | Primary brand colour |
| KAGAI Crimson | #A81028 | Secondary brand colour |
| Pure White | #FFFFFF | Primary background |
| Soft Grey | #F3F4F6 | Secondary background |
| Charcoal | #202938 | Body text and dark surfaces |
| Steel Grey | #737D8C | Supporting text |
| Light Border | #E1E5EB | Dividers and borders |

### Official Design Direction

The website shall use a predominantly white and navy visual identity, with crimson red used selectively for emphasis and important interactions.

### Colour Distribution

Suggested visual distribution:

- 55% White and light backgrounds.
- 25% Navy and dark surfaces.
- 10% Soft grey and neutral surfaces.
- 10% Crimson and other accent applications.

These percentages are visual guidelines, not strict design constraints.

### Colour Application

**Navy**
- Main headings.
- Navigation.
- Footer.
- Primary typography.
- Dark feature sections.

**Crimson**
- Primary call-to-action buttons.
- Active navigation indicators.
- Selected icons.
- Important highlights.
- Small decorative elements.

**White**
- Main content backgrounds.
- Navigation background.
- Service descriptions.
- Reading interfaces.

**Soft Grey**
- Alternate section backgrounds.
- Content separation.
- Form backgrounds.
- Subtle card surfaces.

### Alternative Visual Modes

1. Corporate Classic: Default website appearance.
2. Executive Dark: Selected technology and cybersecurity sections.
3. Modern Technology: Academy and digital product interfaces.
4. Premium Editorial: Research, publications and company storytelling.

The four modes are design variations, not separate website themes. Corporate Classic remains the master brand identity.

### CSS Design Tokens

```css
:root {
  --brand-navy: #081848;
  --brand-crimson: #A81028;

  --background-primary: #FFFFFF;
  --background-secondary: #F3F4F6;
  --background-dark: #081848;

  --text-primary: #202938;
  --text-secondary: #737D8C;
  --text-inverse: #FFFFFF;

  --border-default: #E1E5EB;

  --button-primary: #A81028;
  --button-primary-hover: #861020;

  --button-secondary: #081848;
  --button-secondary-hover: #14295A;

  --radius-small: 6px;
  --radius-medium: 10px;
  --radius-large: 16px;
}
```

### Brand Consistency Rules

- Never replace the official navy and crimson combination with unrelated accent colours.
- Avoid excessive gradients, neon effects and glassmorphism.
- Maintain sufficient contrast between text and backgrounds.
- Preserve the original logo proportions and colours.
- Use crimson sparingly to establish visual hierarchy.
- Ensure the logo remains recognisable on both light and dark backgrounds.


## 2.2 Typography

Use a combination of editorial typography and modern sans-serif typography.

Recommended font combinations:

| Purpose | Font |
|---|---|
| Primary headings | Manrope |
| Body text | Inter |
| Editorial highlights | DM Serif Display |
| Technical labels | IBM Plex Mono |

Typography rules:

- Large, distinctive hero headings.
- Clear hierarchy between H1, H2, H3 and body text.
- Comfortable reading width.
- Avoid excessive uppercase text.
- Use monospace typography selectively for technical metadata.
- Maintain consistent line-height and letter spacing.

## 2.3 Layout Principles

- Spacious layouts with intentional negative space.
- Strong alignment and grid-based composition.
- Asymmetric sections where appropriate.
- Minimal borders and restrained shadows.
- Large editorial headings.
- Carefully selected photography and technical illustrations.
- Avoid excessive rounded cards.
- Avoid unnecessary gradients and decorative elements.

---

# 3. WEBSITE INFORMATION ARCHITECTURE

## 3.1 Primary Navigation

The main navigation should include:

1. Home
2. About Us
3. Services
4. Solutions
5. Academy
6. Insights
7. Contact

Additional navigation elements:

- Search
- Client Portal
- Student Login
- Request a Consultation

The navigation should remain compact and adapt to mobile devices.

## 3.2 Website Sitemap

/
├── Home
├── About
│   ├── Company Overview
│   ├── Mission & Vision
│   ├── Our Team
│   ├── Our Approach
│   └── Careers
│
├── Services
│   ├── Software Development
│   ├── Web Development
│   ├── Mobile Application Development
│   ├── AI & Machine Learning
│   ├── IoT Engineering
│   ├── Embedded Systems
│   ├── Cybersecurity
│   ├── Cloud & Infrastructure
│   └── Technical Consulting
│
├── Solutions
│   ├── Smart Systems
│   ├── Digital Transformation
│   ├── Enterprise Solutions
│   └── Custom Engineering
│
├── Academy
│   ├── All Courses
│   ├── Online Lectures
│   ├── Live Classes
│   ├── Recorded Lectures
│   ├── Workshops
│   ├── Learning Resources
│   ├── Student Dashboard
│   └── Certificates
│
├── Insights
│   ├── Blog
│   ├── Research & Publications
│   ├── Technical Articles
│   ├── News & Announcements
│   └── Case Studies
│
├── Contact
│   ├── General Enquiry
│   ├── Business Enquiry
│   ├── Technical Support
│   └── Partnership Enquiry
│
├── Legal
│   ├── Terms & Conditions
│   ├── Privacy Policy
│   ├── Cookie Policy
│   ├── Refund & Cancellation Policy
│   ├── Shipping & Delivery Policy
│   ├── Disclaimer
│   ├── Intellectual Property Policy
│   └── Acceptable Use Policy
│
└── Account
    ├── Login
    ├── Register
    ├── Forgot Password
    └── Account Dashboard

---

# 4. HOMEPAGE DESIGN

The homepage should function as a corporate introduction, service showcase and lead-generation platform.

## Section 01 — Announcement Bar

A slim announcement bar above the navigation.

Possible messages:
- New technical courses are now available.
- Explore our latest engineering solutions.
- Collaborate with us on your next technology project.

Keep the announcement bar optional and dismissible.

## Section 02 — Main Navigation

Design:
- Transparent navigation initially.
- Background becomes solid when scrolling.
- Company logo on the left.
- Navigation links in the centre.
- Primary CTA on the right.
- Mobile hamburger navigation.

CTA: "Let's Discuss Your Project"

## Section 03 — Hero Section

Design direction:
A distinctive editorial hero rather than a conventional AI-generated technology banner.

Suggested headline:

"Engineering Ideas Into Intelligent Solutions."

Supporting description:

"We build practical digital experiences, connected technologies and secure systems that help businesses, institutions and individuals move forward."

Primary CTA: Explore Our Services

Secondary CTA: Start a Conversation

Visual direction:
- Original engineering photography or custom technical artwork.
- A subtle interactive technical illustration.
- Structured typography.
- Strong contrast between text and background.
- Avoid generic AI robot imagery and excessive neon effects.

## Section 04 — Company Introduction

Headline:

"Technology Is More Than Code. It's How We Solve Problems."

Content:

Introduce the company, its engineering approach, technical expertise and commitment to developing meaningful digital solutions.

Include:
- Company overview.
- Areas of expertise.
- Engineering philosophy.
- Learn More CTA.

## Section 05 — Services Overview

Create six primary service categories:

1. Software Engineering
2. IoT & Embedded Systems
3. Cybersecurity
4. AI & Intelligent Automation
5. Cloud & Digital Infrastructure
6. Technical Education

Each service should have:
- Distinctive visual identity.
- Short description.
- Relevant technical capabilities.
- Dedicated service page link.

Use a varied editorial grid rather than six identical cards.

## Section 06 — Featured Solutions

Showcase selected projects and solutions.

Each project should include:
- Project title.
- Industry or application.
- Problem statement.
- Solution overview.
- Technologies used.
- Results, where verified.
- Project details CTA.

Do not publish fictional client names, results or performance statistics.

## Section 07 — Why Choose Us?

Suggested headline:

"Built Around Engineering. Driven by Purpose."

Key principles:

- Practical problem-solving.
- Security-conscious development.
- Scalable architecture.
- Continuous improvement.
- Transparent collaboration.
- Research-oriented innovation.

## Section 08 — IoT & Innovation Showcase

A dedicated visual section demonstrating:
- Connected devices.
- Sensor-based systems.
- Smart monitoring.
- Embedded technology.
- Real-time dashboards.
- Automation workflows.

Use actual project photography, diagrams or custom illustrations wherever possible.

## Section 09 — Academy Preview

Headline:

"Learn. Build. Innovate."

Introduce the online learning platform.

Include:
- Featured courses.
- Upcoming lectures.
- Technical workshops.
- Instructor profiles.
- Learning pathways.
- Course categories.

CTA: Explore the Academy.

## Section 10 — Insights & Research

Showcase:
- Technical articles.
- Research publications.
- Cybersecurity awareness.
- Engineering tutorials.
- Industry developments.

Use an editorial article layout with publication date, category and author.

## Section 11 — Partnership / CTA

Headline:

"Have an Idea Worth Building?"

Description:

"Whether you're developing a new digital product, implementing connected systems or exploring technology partnerships, let's discuss how we can make it happen."

CTA: Contact Our Team.

## Section 12 — Footer

Organise the footer into four columns:

**Company**
- About
- Our Team
- Careers
- Contact

**Services**
- Software Development
- IoT Engineering
- Cybersecurity
- AI & Automation

**Learning**
- Academy
- Courses
- Live Lectures
- Learning Resources

**Legal**
- Terms & Conditions
- Privacy Policy
- Cookie Policy
- Refund Policy
- Shipping Policy
- Disclaimer

Footer bottom:
- Copyright notice.
- Registered company details, where applicable.
- Contact email.
- Business address, where appropriate.
- Social media links.
- Privacy and cookie preferences.

---

# 5. INDIVIDUAL SERVICE PAGES

Every service must have its own dedicated landing page.

## 5.1 Software Technology

Include:
- Custom software development.
- Website and web application development.
- Mobile application development.
- Enterprise application development.
- API integration.
- Database architecture.
- AI/ML integration.
- Software maintenance.

## 5.2 IoT & Embedded Systems

Include:
- Embedded system development.
- Sensor integration.
- Smart device development.
- IoT gateways.
- MQTT and communication protocols.
- Real-time monitoring.
- Industrial automation.
- Hardware-software integration.

## 5.3 Cybersecurity

Include:
- Security assessment.
- Vulnerability assessment.
- Secure application development.
- Security awareness training.
- Infrastructure security consulting.
- Security monitoring and incident response planning.

Only advertise security testing and penetration-testing services within properly authorised scopes.

## 5.4 AI & Automation

Include:
- Machine learning solutions.
- Predictive analytics.
- Intelligent automation.
- Data processing.
- AI-powered applications.
- Decision-support systems.

## 5.5 Technical Education

Include:
- Programming courses.
- Software engineering lectures.
- IoT training.
- Cybersecurity fundamentals.
- AI and machine learning.
- Practical workshops.

Each service page should contain:

1. Hero introduction.
2. Overview.
3. Problems addressed.
4. Capabilities.
5. Development approach.
6. Technologies used.
7. Relevant projects.
8. Frequently asked questions.
9. Consultation CTA.

---

# 6. ONLINE ACADEMY / LEARNING PLATFORM

The Academy should be designed as an integrated educational platform rather than merely a collection of course links.

## 6.1 Academy Homepage

Features:
- Course catalogue.
- Course categories.
- Featured instructors.
- Upcoming live lectures.
- Popular learning paths.
- Student testimonials, where genuine.
- Course search and filtering.

## 6.2 Course Details Page

Every course should include:

- Course title.
- Course thumbnail.
- Instructor information.
- Course description.
- Learning objectives.
- Curriculum.
- Course duration.
- Difficulty level.
- Prerequisites.
- Lecture format.
- Pricing, if applicable.
- Enrolment information.
- Refund-policy reference.

## 6.3 Student Dashboard

Features:
- Enrolled courses.
- Learning progress.
- Recorded lectures.
- Upcoming classes.
- Downloadable resources.
- Certificates.
- Account settings.
- Support requests.

## 6.4 Lecture Experience

Include:
- Secure video playback.
- Lecture navigation.
- Notes and learning resources.
- Progress tracking.
- Captions or transcripts where available.
- Instructor announcements.
- Discussion functionality, if supported.

## 6.5 Instructor Dashboard

Features:
- Course management.
- Lecture uploads.
- Student enrolment overview.
- Assignment management.
- Course announcements.
- Learning analytics.

---

# 7. MOTION DESIGN & SCROLL INTERACTIONS

This is an important part of the website identity.

The website should feel smooth and sophisticated without making visitors wait for animations.

## 7.1 Smooth Scrolling

Implement:
- Native smooth scrolling for anchor navigation.
- Scroll offset for sticky navigation.
- Consistent section spacing.
- Reduced-motion accessibility support.

Avoid forcing users into scroll-jacking or disabling normal browser scrolling.

## 7.2 Scroll Reveal Animation

Recommended reveal behaviour:

| Element | Animation |
|---|---|
| Main heading | Fade-up |
| Paragraphs | Fade-in |
| Images | Fade-in with slight scale |
| Service sections | Staggered reveal |
| Statistics | Count-up when appropriate |
| Project images | Subtle clip reveal |
| Section headings | Fade-up |

Suggested animation parameters:

- Duration: 500–800 ms.
- Vertical movement: 16–28 px.
- Stagger interval: 80–120 ms.
- Easing: ease-out or a restrained custom cubic-bezier curve.
- Trigger: Intersection Observer.
- Trigger threshold: approximately 15–25%.

## 7.3 Navigation Behaviour

- Transparent navbar at the top.
- Solid navbar after scrolling.
- Subtle background transition.
- Active section indicator.
- Smooth mobile navigation.
- No excessive bouncing or floating effects.

## 7.4 Hover Interactions

Use subtle interactions:
- Image scale: 1.02–1.04.
- Link underline animation.
- Button background transitions.
- Icon movement.
- Border colour transitions.

Avoid animations that interfere with readability or touch interaction.

## 7.5 Performance Requirements

- Animate primarily transform and opacity.
- Avoid continuous animation of large sections.
- Use Intersection Observer rather than heavy scroll event processing.
- Respect prefers-reduced-motion.
- Prevent layout shifts.
- Ensure all content remains accessible if JavaScript is disabled.

---

# 8. ADDITIONAL WEBSITE PAGES

## 8.1 About Us

Sections:
- Company introduction.
- Mission.
- Vision.
- Values.
- Leadership.
- Technical expertise.
- Company journey.
- Careers.

## 8.2 Careers

Include:
- Open positions.
- Job descriptions.
- Required qualifications.
- Application process.
- Application form.
- Recruitment privacy notice.

## 8.3 Contact

Contact categories:
- General enquiries.
- Software development enquiries.
- IoT projects.
- Cybersecurity consultations.
- Educational enquiries.
- Partnerships.

Contact form fields:
- Full name.
- Email.
- Phone number (optional).
- Organisation (optional).
- Enquiry category.
- Subject.
- Message.
- Privacy notice acknowledgement.

Include spam protection and appropriate form validation.

## 8.4 Frequently Asked Questions

Organise FAQs into:
- Company.
- Services.
- Software development.
- IoT.
- Cybersecurity.
- Academy.
- Payments.
- Refunds.
- Technical support.

## 8.5 Search

Provide global website search for:
- Services.
- Courses.
- Articles.
- Research.
- FAQs.

---

# 9. LEGAL & COMPLIANCE PAGES

All legal documents must be accessible through the footer and relevant checkout or registration interfaces.

These documents must reflect the actual business practices, not merely use generic template wording.

## 9.1 Terms & Conditions

Include:
- Acceptance of terms.
- Website usage.
- User eligibility.
- Account registration.
- User responsibilities.
- Service descriptions.
- Orders and payments.
- Intellectual property.
- Prohibited activities.
- Third-party services.
- Service availability.
- Limitation of liability.
- Indemnification, where legally appropriate.
- Termination and suspension.
- Governing law and jurisdiction.
- Dispute resolution.
- Amendments.
- Contact details.

## 9.2 Privacy Policy

Explain:
- Information collected.
- Personal information processing.
- Account information.
- Contact form information.
- Payment-related information.
- Cookies and tracking.
- Purpose of data collection.
- Data sharing.
- Third-party service providers.
- Data retention.
- Security safeguards.
- User rights.
- Grievance redressal.
- Children's information.
- Privacy contact details.

The policy should reflect applicable Indian data protection requirements, including the Digital Personal Data Protection Act, 2023 and applicable rules and commencement provisions.

## 9.3 Cookie Policy

Include:
- What cookies are.
- Essential cookies.
- Analytics cookies.
- Functional cookies.
- Marketing cookies, if used.
- Third-party cookies.
- Cookie management.
- Consent preferences.
- Cookie retention.

Implement a cookie preference interface where required.

## 9.4 Refund & Cancellation Policy

This policy is especially important if the company sells online courses, subscriptions, digital services or physical products.

Include:
- Eligibility for refunds.
- Course cancellation.
- Subscription cancellation.
- Duplicate transactions.
- Failed payments.
- Technical access problems.
- Refund request procedure.
- Refund processing timelines.
- Non-refundable items, where lawful.
- Contact information.

Clearly distinguish between cancellation of a future subscription and refund of an already completed payment.

## 9.5 Shipping & Delivery Policy

This page is applicable if the company sells or ships physical products, hardware, electronic devices or merchandise.

Include:
- Shipping locations.
- Delivery estimates.
- Shipping charges.
- Order processing.
- Tracking details.
- Delayed shipments.
- Damaged packages.
- Incorrect deliveries.
- Undeliverable shipments.
- Customer support.

If the business only provides software, online courses and digital services, display a Digital Delivery Policy instead of publishing an irrelevant physical shipping policy.

## 9.6 Disclaimer

Include:
- General informational disclaimer.
- Technical information disclaimer.
- Educational content disclaimer.
- Cybersecurity disclaimer.
- Third-party links.
- No guarantee of specific outcomes.
- Professional advice limitations.

## 9.7 Intellectual Property Policy

Include:
- Company trademarks.
- Website content.
- Software ownership.
- Course materials.
- Images and graphics.
- User-submitted content.
- Licensing.
- Copyright complaints.
- Restrictions on reproduction.

## 9.8 Acceptable Use Policy

Include:
- Prohibited website activities.
- Unauthorised access.
- Malicious software.
- Abuse of APIs.
- Security testing restrictions.
- Misuse of educational resources.
- Account abuse.
- Intellectual property violations.

## 9.9 Legal Information

Publish applicable business identification details, such as:
- Registered business name.
- Legal entity type.
- Registered office address.
- Business contact details.
- GSTIN, if registered and applicable.
- Applicable grievance contact.
- Relevant registration information.

Do not publish personal or sensitive information unnecessarily.

---

# 10. UI COMPONENT LIBRARY

Create reusable components:

### Navigation
- Navbar
- MobileMenu
- DropdownMenu
- Breadcrumbs

### Content
- HeroSection
- SectionHeading
- EditorialGrid
- ServiceFeature
- ProjectShowcase
- ArticlePreview
- Testimonial
- FAQAccordion

### Interactive
- PrimaryButton
- SecondaryButton
- ContactForm
- NewsletterForm
- SearchBar
- Modal
- ToastNotification

### Academy
- CourseCard
- CourseGrid
- InstructorCard
- LecturePlayer
- ProgressIndicator
- StudentDashboard

### Legal
- LegalPageLayout
- PolicySidebar
- PolicySection
- CookieConsent
- CookiePreferences

### Footer
- FooterNavigation
- SocialLinks
- LegalLinks
- CompanyInformation

---

# 11. RESPONSIVE DESIGN

Design for:

| Device | Target Width |
|---|---|
| Small mobile | 320–374 px |
| Mobile | 375–767 px |
| Tablet | 768–1023 px |
| Laptop | 1024–1439 px |
| Desktop | 1440–1919 px |
| Large desktop | 1920 px and above |

Requirements:
- Mobile-first implementation.
- Responsive navigation.
- Flexible grids.
- Readable typography.
- Proper image scaling.
- Touch-friendly controls.
- No horizontal overflow.
- Accessible forms.
- Consistent spacing.

---

# 12. ACCESSIBILITY

Target WCAG 2.2 AA where applicable.

Requirements:
- Keyboard navigation.
- Visible focus indicators.
- Appropriate colour contrast.
- Semantic HTML.
- Descriptive image alt text.
- Accessible form labels.
- Screen-reader support.
- Reduced-motion support.
- Accessible menus and modals.
- Captions and transcripts for educational videos where available.

---

# 13. SEO & DIGITAL PRESENCE

Implement:

- Unique page titles.
- Meta descriptions.
- Canonical URLs.
- XML sitemap.
- Robots.txt.
- Open Graph metadata.
- Social sharing previews.
- Structured data where appropriate.
- Descriptive URL structures.
- Optimised images.
- Internal linking.
- Search-friendly content.

Recommended URL structure:

/about
/services/software-development
/services/iot-engineering
/services/cybersecurity
/services/ai-automation
/academy
/academy/courses
/academy/courses/course-name
/insights
/insights/article-name
/contact
/legal/terms-and-conditions
/legal/privacy-policy
/legal/cookie-policy
/legal/refund-policy
/legal/shipping-policy

---

# 14. PERFORMANCE REQUIREMENTS

Target the following Core Web Vitals:

| Metric | Target |
|---|---|
| LCP | ≤ 2.5 seconds |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |

Implementation:
- Optimised image formats.
- Lazy loading below the fold.
- Font optimisation.
- Code splitting.
- Route-based loading.
- Minimal third-party scripts.
- Efficient animation.
- Caching.
- Compression.
- Optimised video delivery.

---

# 15. SECURITY REQUIREMENTS

Security must be treated as a core engineering requirement.

Include:
- HTTPS enforcement.
- Secure authentication.
- Strong password hashing.
- Input validation.
- Server-side authorisation.
- CSRF protection where applicable.
- XSS prevention.
- SQL/NoSQL injection prevention.
- Rate limiting.
- Secure session management.
- Secure file uploads.
- Appropriate security headers.
- Backup and recovery strategy.
- Dependency updates.
- Audit logging.
- Restricted administrative access.

Never store payment card details directly unless the required compliance infrastructure is in place. Prefer a reputable payment gateway.

---

# 16. RECOMMENDED TECHNICAL STACK

Suggested implementation:

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Smooth Scroll | Native CSS scrolling / optional Lenis |
| Icons | Lucide React |
| Backend | Node.js + Express.js |
| Database | MongoDB |
| Authentication | Secure session or JWT architecture |
| Validation | Zod |
| Forms | React Hook Form |
| Media Storage | Secure cloud object storage |
| Payments | Supported payment gateway |
| Video Hosting | Secure video delivery platform |
| Deployment | Vercel / suitable backend hosting |
| Version Control | Git + GitHub |

The public corporate website should be architecturally separated from the Academy's student and instructor functionality while allowing shared authentication and data services where appropriate.

---

# 17. CONTENT MANAGEMENT

The website should support an administrative interface for managing:

- Homepage content.
- Company information.
- Services.
- Projects.
- Blog posts.
- Research publications.
- Courses.
- Lectures.
- Instructors.
- Announcements.
- Contact enquiries.
- Legal documents.
- SEO metadata.

Recommended administrative roles:

1. Super Administrator
2. Content Administrator
3. Course Administrator
4. Instructor
5. Support Administrator

Use role-based permissions and maintain administrative audit logs.

---

# 18. DEVELOPMENT PHASES

### Phase 1 — Brand & Foundation
- Finalise company identity.
- Finalise colour palette.
- Establish typography.
- Create design tokens.
- Define reusable components.

### Phase 2 — Corporate Website
- Homepage.
- About.
- Services.
- Solutions.
- Insights.
- Contact.
- Footer and navigation.

### Phase 3 — Motion & Interactions
- Smooth scrolling.
- Scroll reveal.
- Navigation transitions.
- Hover effects.
- Responsive animations.

### Phase 4 — Academy
- Course catalogue.
- Course details.
- Student authentication.
- Lecture interface.
- Instructor dashboard.

### Phase 5 — Legal & Compliance
- Terms and conditions.
- Privacy policy.
- Cookie policy.
- Refund policy.
- Shipping or digital delivery policy.
- Disclaimer.

### Phase 6 — Backend & Administration
- Database integration.
- API development.
- Admin dashboard.
- Enquiry management.
- Course management.
- Authentication.

### Phase 7 — Testing & Deployment
- Responsive testing.
- Accessibility testing.
- Security testing.
- Performance optimisation.
- SEO verification.
- Production deployment.

---

# 19. FINAL DESIGN PRINCIPLES

The finished website must follow these principles:

1. It must look like a professionally designed engineering company website, not a generic AI-generated template.
2. Each section must have a clear purpose.
3. Use restrained animation rather than excessive motion.
4. Prioritise typography, composition and spacing.
5. Avoid repetitive three-column card layouts throughout the website.
6. Use authentic project images and technical diagrams.
7. Maintain a consistent visual identity.
8. Make the website accessible and responsive.
9. Keep legal information transparent and easy to locate.
10. Build with scalability and maintainability in mind.

## Final Design Statement

The company website should represent an organisation that combines engineering expertise, technological innovation, digital security and education.

Its visual identity should be distinctive without being distracting, modern without being predictable, and technically sophisticated without sacrificing usability.

**The objective is not simply to create another technology website. It is to establish a recognisable digital identity for a technology and engineering company.**
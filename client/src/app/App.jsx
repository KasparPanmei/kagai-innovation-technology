import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import ContentPage from "../pages/ContentPage.jsx";
import Contact from "../pages/Contact.jsx";
import LegalPage from "../pages/LegalPage.jsx";
import NotFound from "../pages/NotFound.jsx";

const pages = [
  {
    path: "/about",
    title: "Engineering with purpose.",
    eyebrow: "ABOUT KAGAI",
    intro:
      "We bring software, connected systems and security-minded engineering together to solve practical problems.",
    sections: [
      [
        "Our approach",
        "We begin by understanding the real-world problem, then shape a practical technical path from discovery to delivery.",
      ],
      [
        "What guides us",
        "Clarity, responsible engineering, collaboration and a commitment to building systems that can grow.",
      ],
      [
        "Our capabilities",
        "Software technology, IoT and embedded systems, cybersecurity, intelligent automation and technical education.",
      ],
    ],
  },
  {
    path: "/services",
    title: "Disciplines built for scale and reliability.",
    eyebrow: "SERVICES & CAPABILITIES",
    intro:
      "Engineering capabilities across software, connected devices, intelligent systems and digital security.",
    sections: [
      [
        "Software engineering",
        "Web platforms, custom applications, API development, integrations and maintainable software systems.",
      ],
      [
        "IoT & embedded systems",
        "Connected devices, sensor integration, telemetry, embedded software and monitoring workflows.",
      ],
      [
        "Cybersecurity",
        "Security-conscious development, authorised assessments, application hardening and awareness.",
      ],
      [
        "AI & automation",
        "Machine learning integration, data workflows, predictive systems and process automation.",
      ],
    ],
  },
  {
    path: "/solutions",
    title: "Engineered implementations.",
    eyebrow: "SOLUTIONS & CASE STUDIES",
    intro:
      "Explore how considered engineering can turn complex requirements into useful, measurable systems.",
    sections: [
      [
        "Industrial IoT",
        "Connected monitoring and telemetry architectures designed around operational visibility.",
      ],
      [
        "Digital platforms",
        "Web applications and workflow tools shaped around the needs of teams and customers.",
      ],
      [
        "Applied intelligence",
        "Data-driven tools and automation that support better operational decisions.",
      ],
    ],
  },
  {
    path: "/academy",
    title: "Learn. Build. Innovate.",
    eyebrow: "KAGAI ACADEMY",
    intro:
      "Technical learning designed to connect concepts with practical engineering skills.",
    sections: [
      [
        "Technical pathways",
        "Explore software development, IoT, cybersecurity, AI and other applied technology topics.",
      ],
      [
        "Live and recorded lectures",
        "A future-ready learning experience for structured lessons, workshops and recorded sessions.",
      ],
      [
        "Learning support",
        "Course resources, progress tracking and instructor-led guidance as Academy features are introduced.",
      ],
    ],
  },
  {
    path: "/insights",
    title: "Engineering insights & papers.",
    eyebrow: "RESEARCH & INSIGHTS",
    intro:
      "Ideas, technical notes and research perspectives from across the engineering landscape.",
    sections: [
      [
        "Engineering notes",
        "Practical explorations of software architecture, connected systems and secure development.",
      ],
      [
        "Research",
        "Technical writing and applied research, presented with context and clear attribution.",
      ],
      [
        "Knowledge sharing",
        "Resources intended to help practitioners and learners understand emerging technologies.",
      ],
    ],
  },
];

function RouteView() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          {pages.map((p) => (
            <Route
              key={p.path}
              path={p.path}
              element={<ContentPage page={p} />}
            />
          ))}
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/portal/login"
            element={
              <ContentPage
                page={{
                  eyebrow: "KAGAI PORTAL",
                  title: "Your work and learning, in one place.",
                  intro:
                    "The client and student portal is being prepared. Portal access will be introduced as the secure account module is implemented.",
                  sections: [
                    [
                      "Portal access",
                      "For client project access, student learning and account support.",
                    ],
                    [
                      "Need assistance?",
                      "Contact the KAGAI team for enquiries while portal access is being developed.",
                    ],
                  ],
                }}
              />
            }
          />
          <Route path="/legal/:slug" element={<LegalPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
export default function App() {
  return (
    <>
      <RouteView />
      <Analytics />
    </>
  );
}

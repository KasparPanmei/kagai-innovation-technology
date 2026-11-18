import { useParams, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/motion/Reveal.jsx";
const docs = {
  "privacy-policy": {
    title: "Privacy Policy",
    eyebrow: "LEGAL / PRIVACY",
    intro:
      "How KAGAI Innovation Technology handles personal information when you visit our website or contact us.",
    updated: "Draft policy — requires review before publication",
    sections: [
      [
        "1. Information we collect",
        "We may collect information you provide through enquiry forms, account registration and communications, such as your name, email address, organisation and message details. The final policy must be updated to reflect the exact data collected by the live website.",
      ],
      [
        "2. How information is used",
        "Information may be used to respond to enquiries, provide requested services, administer accounts, improve the website, maintain security and meet applicable legal obligations.",
      ],
      [
        "3. Sharing and service providers",
        "Information should only be shared with service providers and other parties where necessary for the stated purposes, with appropriate safeguards and contractual controls.",
      ],
      [
        "4. Retention and security",
        "KAGAI should define retention periods and apply appropriate technical and organisational safeguards. No online service can guarantee absolute security.",
      ],
      [
        "5. Your choices and rights",
        "Requests concerning personal information may be sent through the verified company privacy contact. The final policy must state the rights, processes and grievance contact applicable under laws in force.",
      ],
      [
        "6. Contact and updates",
        "Add the verified legal entity name, privacy contact and grievance details before publication. This draft is not a substitute for legal review.",
      ],
    ],
  },
  terms: {
    title: "Terms of Service",
    eyebrow: "LEGAL / TERMS",
    intro:
      "Terms governing access to the KAGAI website and the services made available through it.",
    updated: "Draft terms — requires review before publication",
    sections: [
      [
        "1. Acceptance",
        "By accessing the website, visitors agree to use it lawfully and in accordance with the applicable terms. Service-specific agreements may apply to individual projects, courses or products.",
      ],
      [
        "2. Website information",
        "Website content is provided for general information. Service scope, deliverables, timelines, fees and acceptance criteria should be confirmed in a written proposal or agreement.",
      ],
      [
        "3. Acceptable use",
        "Users must not attempt unauthorised access, disrupt services, introduce malicious code, misuse forms or infringe intellectual property rights.",
      ],
      [
        "4. Intellectual property",
        "Unless stated otherwise in a separate agreement, website content, branding and materials remain the property of their respective owners. Project ownership and licensing must be documented separately.",
      ],
      [
        "5. Third-party services",
        "The website may link to third-party platforms. KAGAI does not control their content or availability.",
      ],
      [
        "6. Contact and governing terms",
        "Insert the correct legal entity, jurisdiction, dispute process and business contact after legal review.",
      ],
    ],
  },
  "refund-cancellation-delivery": {
    title: "Refund, Cancellation & Digital Delivery",
    eyebrow: "LEGAL / COMMERCE",
    intro:
      "Information for customers purchasing eligible courses, subscriptions or digital services from KAGAI.",
    updated: "Draft policy — final terms depend on products and payment flows",
    sections: [
      [
        "1. Scope",
        "This policy applies only to products and services that KAGAI makes available for purchase. Specific proposals or order terms may contain additional conditions.",
      ],
      [
        "2. Cancellation requests",
        "Customers should submit cancellation requests using the verified support contact and include the order reference and account email. Eligibility depends on the product, delivery status and applicable law.",
      ],
      [
        "3. Refund assessment",
        "Refund eligibility, exclusions and processing timelines must be defined for each paid offering and disclosed before checkout. Duplicate or failed transactions should be investigated promptly.",
      ],
      [
        "4. Digital delivery",
        "Access to digital courses, downloads or services may be delivered electronically after payment confirmation. Customers should be informed of access requirements and support channels.",
      ],
      [
        "5. Physical shipping",
        "If KAGAI begins selling physical goods, a separate shipping and delivery section must specify serviceable locations, dispatch timelines, charges, tracking and damaged-delivery procedures.",
      ],
      [
        "6. Contact",
        "Add the verified support email, business address and escalation contact before publication.",
      ],
    ],
  },
  disclaimer: {
    title: "Legal Disclaimer & Security Compliance",
    eyebrow: "LEGAL / DISCLAIMER",
    intro:
      "Important information about website content, technical material and cybersecurity-related services.",
    updated: "Draft disclaimer — requires review before publication",
    sections: [
      [
        "1. General information",
        "Website content is provided for general information and does not constitute a binding offer unless expressly stated in a signed agreement.",
      ],
      [
        "2. Technical and educational content",
        "Technical articles, examples and learning resources are provided for educational purposes. Users should evaluate suitability for their own environments.",
      ],
      [
        "3. Cybersecurity services",
        "Security assessments and testing must be conducted only with explicit authorisation and an agreed scope. Visitors must not use information on this website to access systems without permission.",
      ],
      [
        "4. No guarantee",
        "Descriptions of capabilities do not guarantee a particular result. Project outcomes depend on scope, requirements, dependencies and operating conditions.",
      ],
      [
        "5. Third-party references",
        "Third-party names, tools and links are used for identification or reference and remain subject to their owners’ terms.",
      ],
    ],
  },
};
export default function LegalPage() {
  const { slug } = useParams();
  const doc = docs[slug] || {
    title: "Legal information",
    eyebrow: "LEGAL",
    intro: "This policy is being prepared.",
    updated: "Not yet published",
    sections: [
      [
        "Content pending",
        "The relevant policy will be published after operational details and legal review are complete.",
      ],
    ],
  };
  return (
    <div className="inner-page legal-page">
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">{doc.eyebrow}</p>
          <h1>{doc.title}</h1>
          <p className="inner-lede">{doc.intro}</p>
          <span className="draft-label">{doc.updated}</span>
        </div>
      </section>
      <section className="section-pad">
        <div className="container legal-layout">
          <aside className="legal-aside">
            <span>ON THIS PAGE</span>
            {doc.sections.map(([t], i) => (
              <a key={t} href={`#policy-${i}`}>
                {t}
              </a>
            ))}
            <Link to="/contact">
              Contact KAGAI <ArrowUpRight size={14} />
            </Link>
          </aside>
          <div className="legal-copy">
            {doc.sections.map(([title, body], i) => (
              <Reveal key={title} className="legal-block">
                <span>SECTION 0{i + 1}</span>
                <h2 id={`policy-${i}`}>{title}</h2>
                <p>{body}</p>
              </Reveal>
            ))}
            <p className="legal-warning">
              This is initial website copy for implementation review, not
              approved legal advice. Confirm the legal entity, actual data
              practices, commerce model, applicable law and contact details
              before publishing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Instagram, Facebook } from "lucide-react";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <img
            src="/assets/kagai-logo.jpeg"
            alt="KAGAI Innovation Technology"
          />
          <p>
            Engineering ideas into intelligent solutions. Software, connected
            systems and security-minded technology built around real needs.
          </p>
          <div className="socials">
            <a href="#linkedin" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <Facebook size={17} />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About KAGAI</Link>
          <Link to="/solutions">Our solutions</Link>
          <Link to="/insights">Insights & papers</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/services">Software engineering</Link>
          <Link to="/services">IoT & embedded systems</Link>
          <Link to="/services">Cybersecurity</Link>
          <Link to="/services">AI & automation</Link>
        </div>
        <div className="footer-col">
          <h4>Learning & legal</h4>
          <Link to="/academy">KAGAI Academy</Link>
          <Link to="/portal/login">Student portal</Link>
          <Link to="/legal/terms">Terms of service</Link>
          <Link to="/legal/privacy-policy">Privacy policy</Link>
          <Link to="/legal/refund-cancellation-delivery">
            Refund & delivery
          </Link>
          <Link to="/legal/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} KAGAI Innovation Technology. All rights
          reserved.
        </span>
        <span>Built with purpose. Engineered with care.</span>
        <Link to="/legal/privacy-policy">
          Privacy <ArrowUpRight size={12} />
        </Link>
      </div>
    </footer>
  );
}

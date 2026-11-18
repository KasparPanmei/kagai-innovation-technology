import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight, UserRound, Search } from "lucide-react";
const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Academy", "/academy"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];
export default function SiteHeader() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false),
    [notice, setNotice] = useState(true);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      {notice && (
        <div className="announcement">
          <div className="container announcement-inner">
            <span>
              <i /> New technical courses are being prepared for KAGAI Academy ·
              Explore our engineering capabilities
            </span>
            <button
              aria-label="Dismiss announcement"
              onClick={() => setNotice(false)}
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}
      <div className="container nav-row">
        <Link
          to="/"
          className="brand"
          aria-label="KAGAI Innovation Technology home"
        >
          <img
            src="/assets/kagai-logo.jpeg"
            alt="KAGAI Innovation Technology"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <Link className="portal-link" to="/portal/login">
            <UserRound size={15} /> <span>Client / Student Portal</span>
          </Link>
          <Link className="button button-red nav-cta" to="/contact">
            Let's talk <ArrowUpRight size={15} />
          </Link>
          <button
            className="mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          <nav aria-label="Mobile navigation">
            {links.map(([label, to], i) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setOpen(false)}
              >
                <span>0{i + 1}</span>
                {label}
                <ArrowUpRight size={17} />
              </NavLink>
            ))}
          </nav>
          <Link
            className="button button-red mobile-menu-cta"
            to="/portal/login"
            onClick={() => setOpen(false)}
          >
            Client / Student Portal
          </Link>
        </div>
      )}
    </header>
  );
}

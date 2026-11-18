import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, MoveRight } from "lucide-react";
import Reveal from "../components/motion/Reveal.jsx";
export default function ContentPage({ page }) {
  return (
    <div className="inner-page">
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="inner-lede">{page.intro}</p>
          <div className="inner-hero-actions">
            <Link className="button button-red" to="/contact">
              Discuss a project <ArrowUpRight size={15} />
            </Link>
            <span>ENGINEERING / KAGAI INNOVATION TECHNOLOGY</span>
          </div>
        </div>
      </section>
      <section className="inner-content section-pad">
        <div className="container inner-content-grid">
          <div className="inner-aside">
            <span>01 / OVERVIEW</span>
            <p>
              Practical engineering.
              <br />
              Purposeful outcomes.
            </p>
            <Link to="/contact">
              Talk to our team <MoveRight size={14} />
            </Link>
          </div>
          <div className="inner-sections">
            {page.sections.map(([title, desc], i) => (
              <Reveal className="inner-section" key={title}>
                <div className="inner-section-num">0{i + 1}</div>
                <div>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </div>
                <CheckCircle2 size={19} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="inner-cta">
        <div className="container">
          <p className="eyebrow eyebrow-light">NEXT STEP</p>
          <h2>
            Let's make the next idea <em>real.</em>
          </h2>
          <Link className="button button-red" to="/contact">
            Start a conversation <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  ShieldCheck,
  Workflow,
  Code2,
  RadioTower,
  BrainCircuit,
  Network,
  Database,
  ChevronRight,
  Play,
  MoveUpRight,
} from "lucide-react";
import Reveal from "../components/motion/Reveal.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";

const capabilities = [
  {
    n: "01",
    icon: Code2,
    title: "Enterprise Software Engineering",
    desc: "High-throughput backend architectures, microservices, and distributed web platforms engineered for scale, clarity, and operational confidence.",
    tags: ["Web platforms", "API architecture", "Cloud systems"],
  },
  {
    n: "02",
    icon: RadioTower,
    title: "IoT & Hardware Telemetry",
    desc: "Connected devices, sensor integration and telemetry pipelines that turn field signals into useful operational visibility.",
    tags: ["Embedded systems", "MQTT", "Edge computing"],
    featured: true,
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Cybersecurity Operations",
    desc: "Hardened application foundations, secure development practices, vulnerability awareness and authorised security assessments.",
    tags: ["Secure SDLC", "Assessment", "Governance"],
  },
  {
    n: "04",
    icon: BrainCircuit,
    title: "AI & Automation",
    desc: "Applied machine learning, intelligent workflows and data-driven automation designed around real business requirements.",
    tags: ["Machine learning", "Data workflows", "Automation"],
  },
  {
    n: "05",
    icon: Database,
    title: "Cloud Infrastructure & Technical Academy",
    desc: "Reliable deployment foundations and practical technical education for teams, learners and emerging engineers.",
    tags: ["Cloud foundations", "Technical training", "DevOps"],
  },
];
const projects = [
  {
    label: "INDUSTRIAL IOT",
    title: "Industrial IoT Cold-Chain Telemetry",
    desc: "Telemetry and monitoring workflows that help operations teams maintain visibility across critical environments.",
    visual: "visual-telemetry",
  },
  {
    label: "ZERO-TRUST SECURITY",
    title: "Zero-Trust Microsegmentation",
    desc: "A structured approach to network boundaries, identity-aware access and layered security controls.",
    visual: "visual-security",
  },
  {
    label: "SMART AUTOMATION",
    title: "Automated Municipal Workflow Engine",
    desc: "Connected data and workflow automation designed to reduce manual hand-offs and improve service visibility.",
    visual: "visual-workflow",
  },
];
function TechnicalVisual() {
  return (
    <div className="architecture-card">
      <div className="visual-top">
        <span>
          <i /> KAGAI / SYSTEM ARCHITECTURE
        </span>
        <span>LIVE MODEL</span>
      </div>
      <div className="architecture-flow">
        <div className="node">
          EDGE
          <br />
          <small>01 / INPUT</small>
        </div>
        <div className="connector" />
        <div className="node node-red">
          CORE
          <br />
          <small>02 / PROCESS</small>
        </div>
        <div className="connector" />
        <div className="node">
          CLOUD
          <br />
          <small>03 / OUTPUT</small>
        </div>
      </div>
      <div className="visual-foot">
        <span>ENGINEERING FRAMEWORK</span>
        <span>SECURE · SCALABLE · CONNECTED</span>
      </div>
      <div className="visual-grid" />
    </div>
  );
}
function MiniTelemetry() {
  return (
    <div className="telemetry-panel">
      <div className="telemetry-head">
        <span>
          <i /> EDGE NODE CLUSTER / ALPHA-09
        </span>
        <span>LIVE SIGNAL</span>
      </div>
      <div className="telemetry-meta">
        <span>Signal integrity</span>
        <strong>99.8%</strong>
        <span>Last sync</span>
        <strong>00:04:12</strong>
      </div>
      <div className="bars">
        {[
          36, 58, 48, 78, 62, 92, 72, 54, 85, 68, 98, 74, 88, 57, 76, 94, 65,
          82, 50, 70,
        ].map((v, i) => (
          <i key={i} style={{ height: `${v}%` }} />
        ))}
      </div>
      <div className="telemetry-foot">
        <span>
          LATENCY <b>42 MS</b>
        </span>
        <span>
          UPTIME <b>99.9%</b>
        </span>
        <span>
          DATA FLOW <b>1.4 MBPS</b>
        </span>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> INDEPENDENT ENGINEERING &
              TECHNOLOGY
            </p>
            <h1>
              Engineering Ideas Into <em>Intelligent Solutions.</em>
            </h1>
            <p className="hero-lede">
              We build practical digital experiences, connected technologies and
              secure systems that help businesses, institutions and individuals
              move forward with confidence.
            </p>
            <div className="hero-actions">
              <Link className="button button-red" to="/services">
                Explore our services <ArrowUpRight size={16} />
              </Link>
              <Link className="button button-outline" to="/contact">
                Start a conversation <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hero-proof">
              <div>
                <strong>01</strong>
                <span>
                  Engineering-led
                  <br />
                  approach
                </span>
              </div>
              <div>
                <strong>02</strong>
                <span>
                  Connected
                  <br />
                  technologies
                </span>
              </div>
              <div>
                <strong>03</strong>
                <span>
                  Security-minded
                  <br />
                  development
                </span>
              </div>
            </div>
          </div>
          <Reveal className="hero-visual" delay={0.15}>
            <TechnicalVisual />
          </Reveal>
        </div>
        <div className="container hero-bottomline">
          <span>SOFTWARE / IoT / CYBERSECURITY / INTELLIGENT SYSTEMS</span>
          <span>
            SCROLL TO EXPLORE <b>↓</b>
          </span>
        </div>
      </section>
      <section className="intro-section section-pad">
        <div className="container intro-layout">
          <Reveal className="intro-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1100&q=85"
              alt="Engineering team working with technical equipment"
            />
            <div className="image-caption">
              <span>FIELD NOTES / 001</span>
              <strong>Built for real-world systems.</strong>
            </div>
          </Reveal>
          <div className="intro-copy">
            <p className="eyebrow">A KAGAI INTRODUCTION</p>
            <h2>
              Technology Is More Than Code. It's How We <em>Solve Problems.</em>
            </h2>
            <p>
              KAGAI Innovation Technology brings practical software, connected
              systems and security-aware engineering together. We explore
              complex requirements and translate them into dependable solutions.
            </p>
            <p>
              From connected industrial environments to digital platforms, our
              work is grounded in clarity, reliability and thoughtful execution.
            </p>
            <div className="intro-stats">
              <div>
                <strong>04</strong>
                <span>
                  Core engineering
                  <br />
                  disciplines
                </span>
              </div>
              <div>
                <strong>100%</strong>
                <span>
                  Commitment to
                  <br />
                  thoughtful delivery
                </span>
              </div>
              <div>
                <strong>∞</strong>
                <span>
                  Ideas worth
                  <br />
                  exploring
                </span>
              </div>
            </div>
            <Link className="text-link" to="/about">
              Learn more about KAGAI <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="capabilities-section section-pad">
        <div className="container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="TECHNICAL CAPABILITIES"
              title="Disciplines Built for Scale & Reliability"
              description="A connected set of engineering capabilities, applied with care to the problems that matter."
            />
            <Link className="text-link desktop-only" to="/services">
              View all capabilities <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="capability-grid">
            {capabilities.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.n}
                  delay={i * 0.06}
                  className={`capability-card ${item.featured ? "capability-featured" : ""}`}
                >
                  <div className="capability-meta">
                    <span>{item.n} / CAPABILITY</span>
                    <Icon size={19} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="tag-list">
                    {item.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <Link to="/services" className="card-link">
                    Explore capability <ArrowUpRight size={14} />
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Link className="text-link mobile-only" to="/services">
            View all capabilities <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="projects-section section-pad">
        <div className="container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="SELECTED ENGINEERING WORK"
              title="Engineered Implementations"
              description="A view into the types of systems and technical challenges we work to solve."
            />
            <Link className="text-link desktop-only" to="/solutions">
              All case studies <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.09} className="project-card">
                <div className={`project-visual ${p.visual}`}>
                  <div className="project-visual-label">{p.label}</div>
                  {i === 0 ? (
                    <MiniTelemetry />
                  ) : i === 1 ? (
                    <div className="security-visual">
                      <ShieldCheck size={42} />
                      <div className="security-lines">
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <span>IDENTITY / ACCESS / TRUST</span>
                    </div>
                  ) : (
                    <div className="workflow-visual">
                      <div className="workflow-node">INPUT</div>
                      <ChevronRight />
                      <div className="workflow-node active">PROCESS</div>
                      <ChevronRight />
                      <div className="workflow-node">OUTPUT</div>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <p className="eyebrow">{p.label}</p>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <Link to="/solutions">
                    Read the approach <ArrowUpRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="principles-section section-pad">
        <div className="container principles-layout">
          <div>
            <p className="eyebrow">THE KAGAI APPROACH</p>
            <h2>
              Built Around Engineering.
              <br />
              <em>Driven by Purpose.</em>
            </h2>
            <p className="principles-intro">
              We avoid complexity for its own sake. Our work is shaped by
              practical requirements, considered architecture and a commitment
              to building systems people can rely on.
            </p>
            <Link className="text-link" to="/about">
              Discover our approach <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="principle-list">
            {[
              [
                "01",
                "Practical Problem-Solving",
                "We begin with the real challenge, then shape a solution that fits the context.",
              ],
              [
                "02",
                "Security-Conscious Development",
                "Security is considered throughout the design and delivery process.",
              ],
              [
                "03",
                "Scalable Architecture",
                "We favour dependable foundations that can evolve with changing needs.",
              ],
              [
                "04",
                "Transparent Collaboration",
                "Clear communication, considered decisions and shared understanding.",
              ],
            ].map(([n, t, d]) => (
              <Reveal key={n} className="principle-item">
                <span>{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
                <ArrowUpRight size={17} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="telemetry-section section-pad">
        <div className="container telemetry-layout">
          <div>
            <p className="eyebrow eyebrow-light">
              ENGINEERING / FIELD TELEMETRY
            </p>
            <h2>
              Connected Sensor Telemetry & <em>Automation</em>
            </h2>
            <p>
              Explore how connected devices, real-time monitoring and structured
              data flows can make complex environments easier to understand.
            </p>
            <Link to="/solutions" className="button button-light">
              Explore IoT solutions <ArrowUpRight size={15} />
            </Link>
          </div>
          <Reveal>
            <MiniTelemetry />
          </Reveal>
        </div>
      </section>
      <section className="academy-section section-pad">
        <div className="container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="KAGAI ACADEMY / TECHNICAL LEARNING"
              title="Learn. Build. Innovate."
              description="Practical technical education shaped around the tools, systems and ideas engineers use."
            />
            <Link className="button button-navy desktop-only" to="/academy">
              Explore the Academy <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="course-grid">
            {[
              [
                "ADVANCED IoT",
                "Advanced IoT & Embedded Systems Architecture",
                "Build an understanding of connected devices, embedded software and system integration.",
              ],
              [
                "AI & MACHINE LEARNING",
                "Applied Machine Learning & Production MLOps",
                "Bridge data science with practical workflows and responsible model deployment.",
              ],
              [
                "CYBERSECURITY",
                "Zero-Trust Cyber Defense & Incident Readiness",
                "Understand defensive foundations, operational readiness and secure engineering.",
              ],
            ].map(([tag, title, desc], i) => (
              <Reveal className="course-card" delay={i * 0.08} key={title}>
                <div className="course-card-top">
                  <span>{tag}</span>
                  <span>COMING SOON</span>
                </div>
                <div className="course-mark">0{i + 1}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/academy">
                  Explore learning path <ArrowUpRight size={14} />
                </Link>
              </Reveal>
            ))}
          </div>
          <Link
            className="button button-navy mobile-only academy-mobile-cta"
            to="/academy"
          >
            Explore the Academy <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <section className="insights-section section-pad">
        <div className="container">
          <div className="section-topline">
            <SectionHeading
              eyebrow="TECHNICAL EXPLORATION"
              title="Engineering Insights & Papers"
              description="Ideas, observations and research across emerging engineering disciplines."
            />
            <Link className="text-link desktop-only" to="/insights">
              Browse all insights <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="insight-grid">
            {[
              [
                "IOT / CONNECTIVITY",
                "Implementing Fault-Tolerant MQTT Clusters at Multi-Gigabit Scale",
                "An engineering overview of data synchronisation, resilient messaging and practical considerations for connected environments.",
              ],
              [
                "SECURITY / DISTRIBUTED SYSTEMS",
                "Zero-Trust Verification for Distributed Microservices via SPIFFE/SPIRE",
                "A closer look at workload identity, service-to-service trust and secure communication patterns.",
              ],
            ].map(([tag, title, desc], i) => (
              <Reveal key={title} delay={i * 0.1} className="insight-card">
                <p className="eyebrow">{tag}</p>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/insights">
                  Read research <ArrowUpRight size={14} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="closing-section">
        <div className="container">
          <Reveal className="closing-panel">
            <p className="eyebrow eyebrow-light">
              LET'S BUILD SOMETHING USEFUL
            </p>
            <h2>
              Have an Idea Worth <em>Building?</em>
            </h2>
            <p>
              Whether you're developing a new digital product, implementing
              connected systems or exploring a technology partnership, let's
              discuss how we can make it happen.
            </p>
            <div className="hero-actions">
              <Link className="button button-red" to="/contact">
                Contact our team <ArrowUpRight size={15} />
              </Link>
              <Link className="button button-dark-outline" to="/services">
                Review capabilities <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import { useState } from "react";
import { Mail, MapPin, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import Reveal from "../components/motion/Reveal.jsx";
const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email address."),
  category: z.string().min(1, "Choose an enquiry type."),
  message: z.string().min(10, "Please add a little more detail."),
});
export default function Contact() {
  const [form, setForm] = useState({
      name: "",
      email: "",
      category: "",
      message: "",
    }),
    [errors, setErrors] = useState({}),
    [sent, setSent] = useState(false),
    [busy, setBusy] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  async function submit(e) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setErrors(
        Object.fromEntries(
          parsed.error.issues.map((x) => [x.path[0], x.message]),
        ),
      );
      return;
    }
    setErrors({});
    setBusy(true);
    try {
      const r = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/v1/enquiries`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );
      if (!r.ok) throw new Error("API unavailable");
      setSent(true);
    } catch {
      setErrors({
        form: "The enquiry service is not connected yet. Please start the API server and try again.",
      });
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="inner-page">
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">CONTACT / ENGINEERING CONSULTATION</p>
          <h1>
            Let's talk about
            <br />
            <em>what you're building.</em>
          </h1>
          <p className="inner-lede">
            Share a little about your project, challenge or idea. We'll use the
            details to understand how KAGAI may be able to help.
          </p>
        </div>
      </section>
      <section className="contact-section section-pad">
        <div className="container contact-layout">
          <Reveal className="contact-details">
            <p className="eyebrow">START A CONVERSATION</p>
            <h2>
              Good work starts with a <em>clear brief.</em>
            </h2>
            <p>
              For software, IoT, cybersecurity, learning or partnership
              enquiries, use the form or contact the team.
            </p>
            <div className="contact-detail">
              <Mail />
              <div>
                <span>EMAIL</span>
                <strong>hello@kagai.in</strong>
                <small>
                  Replace with your verified company email before launch.
                </small>
              </div>
            </div>
            <div className="contact-detail">
              <MapPin />
              <div>
                <span>LOCATION</span>
                <strong>India</strong>
                <small>Business address to be added after confirmation.</small>
              </div>
            </div>
          </Reveal>
          <Reveal className="contact-form-wrap" delay={0.1}>
            {sent ? (
              <div className="success-state">
                <CheckCircle2 size={42} />
                <h2>Enquiry received.</h2>
                <p>
                  Thank you for contacting KAGAI. Your message has been
                  submitted.
                </p>
                <button
                  className="button button-navy"
                  onClick={() => setSent(false)}
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="form-heading">
                  <span>01 / PROJECT ENQUIRY</span>
                  <h3>Tell us what you have in mind.</h3>
                </div>
                <label>
                  Full name
                  <input
                    name="name"
                    value={form.name}
                    onChange={update}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <small className="field-error">{errors.name}</small>
                  )}
                </label>
                <label>
                  Email address
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <small className="field-error">{errors.email}</small>
                  )}
                </label>
                <label>
                  What can we help with?
                  <select
                    name="category"
                    value={form.category}
                    onChange={update}
                  >
                    <option value="">Select an enquiry type</option>
                    <option>Software engineering</option>
                    <option>IoT & embedded systems</option>
                    <option>Cybersecurity</option>
                    <option>AI & automation</option>
                    <option>Academy / education</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                  {errors.category && (
                    <small className="field-error">{errors.category}</small>
                  )}
                </label>
                <label>
                  Project details
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows="5"
                    placeholder="A short description of your requirements..."
                  />
                  {errors.message && (
                    <small className="field-error">{errors.message}</small>
                  )}
                </label>
                {errors.form && <p className="field-error">{errors.form}</p>}
                <p className="form-note">
                  By submitting, you acknowledge that your information will be
                  handled according to our privacy policy.
                </p>
                <button
                  className="button button-red form-submit"
                  disabled={busy}
                >
                  {busy ? "Submitting…" : "Send enquiry"} <Send size={15} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}

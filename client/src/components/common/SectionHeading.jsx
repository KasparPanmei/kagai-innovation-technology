import Reveal from "../motion/Reveal.jsx";
export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <Reveal className="section-heading">
      <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p>
      <h2 className={light ? "text-white" : ""}>{title}</h2>
      {description && (
        <p className={light ? "text-white/70" : ""}>{description}</p>
      )}
    </Reveal>
  );
}

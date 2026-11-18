import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.98,
  once = false,
  direction = "up",
}) {
  const reduce = useReducedMotion();
  const offset =
    direction === "left"
      ? { x: 22, y: 0 }
      : direction === "right"
        ? { x: -22, y: 0 }
        : { x: 0, y: 22 };
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: reduce ? 0 : 0.65,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxDividerProps {
  variant?: "wave" | "scatter" | "line";
}

const ParallaxDivider = ({ variant = "wave" }: ParallaxDividerProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  if (variant === "scatter") {
    return (
      <div ref={ref} className="relative h-32 md:h-48 overflow-hidden" aria-hidden>
        <motion.div style={{ opacity }} className="absolute inset-0 flex items-center justify-center">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              style={{ y: i % 2 === 0 ? y1 : y2, rotate }}
              className="absolute"
              initial={false}
            >
              <div
                className="rounded-full bg-primary/10"
                style={{
                  width: 4 + Math.random() * 8,
                  height: 4 + Math.random() * 8,
                  left: `${10 + i * 13}%`,
                  position: "absolute",
                }}
              />
            </motion.div>
          ))}
          <motion.div
            style={{ y: y3 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"
          />
        </motion.div>
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div ref={ref} className="relative h-24 md:h-32 overflow-hidden" aria-hidden>
        <motion.div style={{ opacity }} className="absolute inset-0 flex items-center">
          <motion.div
            style={{ y: y1 }}
            className="w-full flex items-center gap-4 px-8"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // wave variant
  return (
    <div ref={ref} className="relative h-32 md:h-48 overflow-hidden" aria-hidden>
      <motion.div style={{ opacity }} className="absolute inset-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute top-3/4 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/8 to-transparent"
        />
        {/* Floating accent dots */}
        <motion.div style={{ y: y2, rotate }} className="absolute top-1/3 left-[25%] w-2 h-2 rounded-full bg-primary/15" />
        <motion.div style={{ y: y1, rotate }} className="absolute top-2/3 right-[30%] w-1.5 h-1.5 rounded-full bg-primary/10" />
      </motion.div>
    </div>
  );
};

export default ParallaxDivider;

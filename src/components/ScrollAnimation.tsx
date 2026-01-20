import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollAnimation = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 50, x: 0 };
      case "down":
        return { y: -50, x: 0 };
      case "left":
        return { y: 0, x: 50 };
      case "right":
        return { y: 0, x: -50 };
      default:
        return { y: 50, x: 0 };
    }
  };

  const initial = getInitialPosition();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initial }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...initial }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;

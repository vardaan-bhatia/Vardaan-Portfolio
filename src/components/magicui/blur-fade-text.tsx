"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useMemo } from "react";

interface BlurFadeTextProps {
  text: string | React.ReactNode; // Change this to accept string or ReactNode
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}

const BlurFadeText = ({
  text,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
  };

  const combinedVariants = variant || defaultVariants;

  // Ensure that text is a string before passing to Array.from
  const characters = useMemo(() => {
    if (typeof text === "string") {
      return Array.from(text);
    }
    // Handle non-string `text` types (e.g., numbers, JSX, etc.)
    return [];
  }, [text]);

  if (animateByCharacter) {
    return (
      <div className="flex">
        <AnimatePresence>
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={combinedVariants}
              transition={{
                yoyo: Infinity,
                delay: delay + i * characterDelay,
                ease: "easeOut",
              }}
              className={cn(className)}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={combinedVariants}
      transition={{
        delay,
        ease: "easeOut",
        duration,
      }}
      className={cn(className)}
    >
      {text}
    </motion.div>
  );
};

export default BlurFadeText;

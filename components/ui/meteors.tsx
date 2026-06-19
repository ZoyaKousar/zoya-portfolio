"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const [meteorStyles, setMeteorStyles] = useState<Array<{
    delay: string;
    duration: string;
  }>>([]);

  useEffect(() => {
    setMounted(true);
    // Generate random values only on client side
    const styles = new Array(number || 20).fill(true).map(() => ({
      delay: Math.random() * 5 + "s",
      duration: Math.floor(Math.random() * (10 - 5) + 5) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  const meteors = new Array(number || 20).fill(true);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        // Calculate position to evenly distribute meteors across container width
        const position = idx * (800 / meteorCount) - 400; // Spread across 800px range, centered

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-fuchsia-500/60 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#C961DE] before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: "-40px", // Start above the container
              left: position + "px",
              // Use client-side generated values or fallback to deterministic values
              animationDelay: mounted && meteorStyles[idx] 
                ? meteorStyles[idx].delay 
                : (idx * 0.2) + "s", // Deterministic fallback for SSR
              animationDuration: mounted && meteorStyles[idx] 
                ? meteorStyles[idx].duration 
                : "7s", // Deterministic fallback for SSR
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};

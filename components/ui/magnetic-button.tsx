"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type MagneticButtonProps = ComponentProps<typeof motion.a>;

export function MagneticButton({
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } =
    useMagnetic();

  return (
    <motion.a
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}

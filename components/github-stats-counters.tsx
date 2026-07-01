"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/use-count-up";

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export function StatCounter({ value, label, suffix = "" }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 1500, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-semibold tabular-nums text-foreground sm:text-4xl">
        {active ? count : value}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

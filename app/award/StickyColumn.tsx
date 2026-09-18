"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

// Sticks once the column's vertical centre reaches the viewport's centre, so
// it starts aligned with its sibling and stays centred while the page scrolls.
// CSS sticky can't express "top: 50vh minus half my own height", so measure.
export default function StickyColumn({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setTop(Math.max(0, (window.innerHeight - el.offsetHeight) / 2));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ top }}>
      {children}
    </div>
  );
}

'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.2 });
  const smoothY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.2 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
      const target = event.target as HTMLElement | null;
      setHovering(!!target?.closest('a,button,[role="button"]'));
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-charcoal/40 mix-blend-multiply"
      style={{ x: smoothX, y: smoothY }}
      animate={{ width: hovering ? 34 : 20, height: hovering ? 34 : 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    />
  );
}

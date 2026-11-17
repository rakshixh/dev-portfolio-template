'use client';

import styles from './CustomCursor.module.scss';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor({ enabled }) {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [section, setSection] = useState('header');

  useEffect(() => {
    if (!enabled || !cursorRef.current) return;
    let frame = 0;
    let targetX = -100;
    let targetY = -100;
    let currentX = targetX;
    let currentY = targetY;
    const cursor = cursorRef.current;

    const animate = () => {
      currentX += (targetX - currentX) * 0.24;
      currentY += (targetY - currentY) * 0.24;
      cursor.style.setProperty('--cursor-x', `${currentX}px`);
      cursor.style.setProperty('--cursor-y', `${currentY}px`);
      if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2) {
        frame = window.requestAnimationFrame(animate);
      } else {
        frame = 0;
      }
    };

    const onMove = (event) => {
      if (event.pointerType !== 'mouse') return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(animate);
      setHovering(Boolean(event.target.closest('a, button, [role="button"]')));
      setSection(event.target.closest('section')?.id || 'header');
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`${styles.customCursor} ${hovering ? styles.cursorHover : ''}`}
      data-section={section}
      aria-hidden="true"
    >
      <span />
    </div>
  );
}

'use client';

import styles from './Reveal.module.scss';

import { useEffect, useRef, useState } from 'react';

export default function Reveal({ as: Element = 'div', children, className = '', style }) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -5% 0px' },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Element
      ref={elementRef}
      className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`}
      data-revealed={visible ? 'true' : 'false'}
      style={style}
    >
      {children}
    </Element>
  );
}

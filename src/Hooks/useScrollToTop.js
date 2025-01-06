import { useState, useEffect } from 'react';

export const useScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    const start = window.pageYOffset;
    const duration = 1500;
    const startTime = performance.now();

    const cubicBezier = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const scroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = timeElapsed / duration;
      if (progress < 1) {
        const easing = cubicBezier(progress);
        window.scrollTo(0, start - start * easing);
        requestAnimationFrame(scroll);
      } else {
        window.scrollTo(0, 0);
      }
    };

    requestAnimationFrame(scroll);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return { visible, scrollToTop };
};

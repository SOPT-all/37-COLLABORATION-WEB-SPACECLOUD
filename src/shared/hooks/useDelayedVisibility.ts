import { useEffect, useRef, useState } from 'react';

export const useDelayedVisibility = (isActive: boolean, delayMs = 400) => {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (isActive) {
      timerRef.current = window.setTimeout(() => {
        setIsVisible(true);
        timerRef.current = null;
      }, delayMs);
    } else if (isVisible) {
      timerRef.current = window.setTimeout(() => {
        setIsVisible(false);
        timerRef.current = null;
      }, 0);
    }

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isActive, delayMs, isVisible]);

  return isVisible;
};

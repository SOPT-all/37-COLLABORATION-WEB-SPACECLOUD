import { type ReactNode, useEffect, useRef, useState } from 'react';

interface DeferredProps {
  active: boolean;
  delayMs?: number;
  children: ReactNode;
}

const Deferred = ({ active, delayMs = 400, children }: DeferredProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (active) {
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
  }, [active, delayMs, isVisible]);

  if (!isVisible) return null;
  return <>{children}</>;
};

export default Deferred;

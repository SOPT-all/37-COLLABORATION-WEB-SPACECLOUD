import { useEffect, useRef } from 'react';

interface UseIntersectionObserverOptions<T extends HTMLElement> extends IntersectionObserverInit {
  enabled?: boolean;
  onIntersect: (entry: IntersectionObserverEntry, target: T) => void;
}

export const useIntersectionObserver = <T extends HTMLElement>({
  onIntersect,
  enabled = true,
  root = null,
  rootMargin,
  threshold,
}: UseIntersectionObserverOptions<T>) => {
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onIntersect(entry, target);
        });
      },
      { root, rootMargin, threshold },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [enabled, onIntersect, root, rootMargin, threshold]);

  return targetRef;
};

import { Ref } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

const defaultOption: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

const useInView = <T,>(
  options: IntersectionObserverInit = defaultOption,
): [boolean, Ref<T>] => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef, options]);

  return [isVisible, elementRef];
};

export default useInView;

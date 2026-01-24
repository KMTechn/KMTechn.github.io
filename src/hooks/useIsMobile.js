import { useState, useEffect } from 'react';

/**
 * Custom hook to detect mobile devices and screen sizes
 * @param {number} breakpoint - Screen width threshold (default: 1024px)
 * @returns {boolean} - True if screen width is below breakpoint
 */
const useIsMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(() => {
    // SSR-safe initial value
    if (typeof window === 'undefined') return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    // Check for mobile devices via user agent (more reliable for performance decisions)
    const checkMobileDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent.toLowerCase()
      );
      return isMobileDevice;
    };

    const handleResize = () => {
      const isSmallScreen = window.innerWidth < breakpoint;
      const isMobileDevice = checkMobileDevice();
      // Consider both screen size and device type
      setIsMobile(isSmallScreen || isMobileDevice);
    };

    // Initial check
    handleResize();

    // Use ResizeObserver for better performance than resize event
    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(document.documentElement);
      return () => resizeObserver.disconnect();
    } else {
      // Fallback for older browsers
      window.addEventListener('resize', handleResize, { passive: true });
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [breakpoint]);

  return isMobile;
};

/**
 * Hook to check if device prefers reduced motion
 * @returns {boolean} - True if user prefers reduced motion
 */
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Legacy browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
};

export default useIsMobile;

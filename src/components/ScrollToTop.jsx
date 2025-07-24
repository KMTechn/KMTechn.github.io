import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ mainContentRef }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (mainContentRef && mainContentRef.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [pathname, mainContentRef]);

  return null;
};

export default ScrollToTop;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant', // Change to "smooth" if needed
      });
    }, 50); // Small delay to ensure React fully loads the page
  }, [pathname]);

  return null;
};

export default ScrollToTop;

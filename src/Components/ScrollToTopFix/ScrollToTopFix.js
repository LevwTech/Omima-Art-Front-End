import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const scrollablePages = ["floral", "landscape", "abstract", "paper"];

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!scrollablePages.includes(pathname.slice(1))) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;

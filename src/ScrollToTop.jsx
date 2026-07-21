import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  let urlLanguage = location.pathname.split("/")[1];

  if (urlLanguage !== "ka" && urlLanguage !== "en")
    window.location.href = "/ka";

  localStorage.setItem("language", urlLanguage);

  useEffect(() => {
    document.title = urlLanguage === "ka" ? "აღწერა 2024" : "Census 2024";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
      easing: "ease-in-out",
    });
  }, [location, urlLanguage]);

  return null;
};

export default ScrollToTop;

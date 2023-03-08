import React, { useContext, useEffect, lazy, Suspense } from "react";
import "./DarkMode.css";
import ThemeContext from "./store/theme-context";
import loadingSpinner from "./assets/loading-spinner.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Intro = lazy(() => import("./components/Intro/Intro"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Timeline = lazy(() => import("./components/Timeline/Timeline"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = themeContext;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <button
        className={`${
          theme === "light" ? "theme-toggle" : "dark-theme-toggle"
        }`}
        onClick={toggleTheme}
        type="button"
      />
      <Suspense
        fallback={
          <div className="fallback">
            <p>
              <LazyLoadImage
                src={loadingSpinner}
                width={50}
                height={50}
                alt="loading spinner"
              />
            </p>
          </div>
        }
      >
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;

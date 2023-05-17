import React, { lazy, Suspense } from "react";
import "./DarkMode.css";
import loadingSpinner from "./assets/loading-spinner.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Navigation from "./components/Layout/Navigation";

const Intro = lazy(() => import("./components/Intro/Intro"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Layout/Footer"));
const About = lazy(() => import('./components/About/About'));
const Tools = lazy(() => import('./components/Tools/Tools'));

const App = () => {
  return (
    <div>
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
        <Navigation/>
        <Intro id="home"/>
        <Portfolio id="projects"/>
        <About id="about"/>
        <Tools />
        <Contact id="contact"/>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;

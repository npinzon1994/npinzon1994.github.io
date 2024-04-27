import React, { lazy, Suspense } from "react";
import loadingSpinner from "./assets/loading-spinner.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "./components/Layout/Header";

const Intro = lazy(() => import("./components/Intro/Intro"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Layout/Footer"));
const About = lazy(() => import("./components/About/About"));
const Tools = lazy(() => import("./components/Tools/Tools"));

const App = () => {
  return (
    <main>
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
        <Header />
        <Intro id="home" />
        <Projects id="projects" />
        <About id="about" />
        <Tools />
        <Contact id="contact" />
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;

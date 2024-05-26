import { useState } from "react";

import SideBar from "./components/Layout/Navigation/SideBar";
import Header from "./components/Layout/Header";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layout/Footer";
import About from "./components/About/About";
import Tools from "./components/Tools/Tools";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <SideBar isOpen={isOpen} toggleMenu={toggleMenu} />
      <Header isOpen={isOpen} toggleMenu={toggleMenu}/>
      <Intro id="home" />
      <Projects id="projects" />
      <About id="about" />
      <Tools id="tools" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
};

export default App;

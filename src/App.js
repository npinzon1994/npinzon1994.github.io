import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layout/Footer";
import About from "./components/About/About";
import Tools from "./components/Tools/Tools";
import NavBar from "./components/Layout/Navigation/NavBar";
import SideBar from "./components/Layout/Navigation/SideBar";
import { useWindowWidth } from "./hooks/use-window-width";

const App = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <main>
      {windowWidth <= 783 ? <SideBar /> : undefined}
      <NavBar />
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

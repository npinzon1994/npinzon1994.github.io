import Header from "./components/Layout/Header";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layout/Footer";
import About from "./components/About/About";
import Tools from "./components/Tools/Tools";

const App = () => {
  return (
    <main>
      <Header />
      <Intro id="home" />
      <Projects id="projects" />
      <About id="about" />
      <Tools />
      <Contact id="contact" />
      <Footer />
    </main>
  );
};

export default App;

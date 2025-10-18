import "./App.css";

// === componente ===
import Home from "./componente/Home/Home";
import Nav from "./componente/Nav/Nav";
import About from "./componente/About/About";
import Skills from "./componente/Skills/Skills";
import Services from "./componente/Services/Services";
import Projects from "./componente/Projects/Projects";
import Contact from "./componente/Contact/Contact";
import Footer from "./componente/Footer/Footer";

function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

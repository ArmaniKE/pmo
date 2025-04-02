import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Tools from "../sections/Tools";
import WorkProcess from "../sections/WorkProcess";
import Contact from "../sections/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Tools />
      <WorkProcess />
      <Contact />
    </div>
  );
}

export default Home;
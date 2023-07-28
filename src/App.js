import React, { useEffect } from "react";
import Particles from "./components/layouts/Particles";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { animation } from "./profile";

function App() {
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const applyDarkMode = () => {
      document.documentElement.classList.add('dark-mode');
      const notDarkElem1 = document.getElementById('not-dark');
      const notDarkElem2 = document.getElementById('not-dark2');
      const imgProElems = document.getElementsByClassName('img-pro');

      if (notDarkElem1) {
        notDarkElem1.classList.add('inverse-dark');
      }

      if (notDarkElem2) {
        notDarkElem2.classList.add('inverse-dark');
      }

      for (let i = 0; i < imgProElems.length; i++) {
        imgProElems[i].classList.add('inverse-dark');
      }
    };

    applyDarkMode();
  }, []);

  return (
    <div className="App">
      <Header />
      <Particles />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;

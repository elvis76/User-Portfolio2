import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

export default function App() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  };

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="wrap">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

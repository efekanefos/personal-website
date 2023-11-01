import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <main className={`container--${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Experience theme={theme} />
    </main>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <main className={`container--${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
    </main>
  );
}

export default App;

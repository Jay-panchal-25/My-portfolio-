import * as React from "react";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import SelectedWork from "./Components/SelectedWork";
import CaseStudies from "./Components/CaseStudies";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <main className="overflow-hidden bg-white">
      <div className="flex flex-col pb-24 w-full bg-neutral-950 max-md:max-w-full">
        <Navigation />
        <Hero />
        <SelectedWork />
        <CaseStudies />
        <About />
        <Contact />
      </div>
    </main>
  );
}

export default App;

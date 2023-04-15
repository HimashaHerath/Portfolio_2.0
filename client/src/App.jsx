import React from "react";
import {
  Hero,
  Navbar,
  About,
  Works,
  Feedback,
  Contact,
} from "./Sections";

const App = () => {
  return (
    <div className="w-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Works />
      <Feedback />
      <Contact />
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
// import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
// import Testimonials from "./components/testmonials/Testimonials";
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from "./components/scrollup/ScrollUp";
// import Research from './components/research/Research';
// import Blog from './components/blog/Blog';

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        {/* <Services /> */}
        {/* <Testimonials /> */}
        <Work />
        {/* <Research /> */}
        {/* <Blog /> */}
        <Contact />  
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;

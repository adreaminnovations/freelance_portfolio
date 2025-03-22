import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const pageData = {
      "/": {
        title: "ADream Innovations - Freelance Software Services",
        description: "ADream Innovations offers top-notch software solutions for businesses, including API development, web development, Odoo customization, and more.",
      },
      "/about": {
        title: "About Us - ADream Innovations",
        description: "Learn more about ADream Innovations, our expertise, and how we provide top-quality software services to clients worldwide.",
      },
      "/projects": {
        title: "Our Projects - ADream Innovations",
        description: "Explore our past projects at ADream Innovations, showcasing our expertise in software development and innovative solutions.",
      }
    };

    const { title, description } = pageData[location.pathname] || pageData["/"];
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App bg-dark text-light">
      <HashRouter>
        <SEOUpdater />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;

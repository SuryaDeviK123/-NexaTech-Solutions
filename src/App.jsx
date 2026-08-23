import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

// Service Pages
import WebDevelopment from "./pages/WebDevelopment";
import MobileDevelopment from "./pages/MobileDevelopment";
import CloudSolutions from "./pages/CloudSolutions";
import UIUXDesign from "./pages/UIUXDesign";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import DigitalMarketing from "./pages/DigitalMarketing";

// Project Details
import ProjectDetails from "./pages/ProjectDetails";

// Apply Job Page
import ApplyJob from "./pages/ApplyJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />

          {/* Service Pages */}
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="mobile-development" element={<MobileDevelopment />} />
          <Route path="cloud-solutions" element={<CloudSolutions />} />
          <Route path="uiux-design" element={<UIUXDesign />} />
          <Route
            path="artificial-intelligence"
            element={<ArtificialIntelligence />}
          />
          <Route
            path="digital-marketing"
            element={<DigitalMarketing />}
          />

          {/* Portfolio Project Details */}
          <Route
            path="project/:id"
            element={<ProjectDetails />}
          />

          {/* Apply Job */}
          <Route
            path="apply/:job"
            element={<ApplyJob />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
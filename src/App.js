import Nav from "./Components/Nav/Nav.js";
import React from "react";
import Footer from "./Components/Footer/Footer.js";
import { Route, Routes } from "react-router-dom";
import Gallery from "./Pages/Gallery/Gallery";
import Exhibitions from "./Pages/Exhibitions/Exhibitions";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NoPage from "./Pages/NoPage/NoPage";
import GalleryItem from "./Components/GalleryItem/GalleryItem";
import ExhibitionEvent from "./Components/ExhibitionEvent/ExhibitionEvent";
import ScrollButton from "./Components/ScrollButton/ScrollButton.js";
import Collection from "./Pages/Collection/Collection";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="gallery/:id" element={<GalleryItem />} />
        <Route path="exhibitions" element={<Exhibitions />} />
        <Route path="exhibitions/:id" element={<ExhibitionEvent />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="collection" element={<Collection />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </React.Fragment>
  );
}

export default App;

import Nav from "./Components/Nav/Nav.js";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import Exhibitions from "./Pages/Exhibitions/Exhibitions";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NoPage from "./Pages/NoPage/NoPage";
import GalleryItem from "./Components/GalleryItem/GalleryItem";
import ExhibitionEvent from "./Components/ExhibitionEvent/ExhibitionEvent";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="gallery/:id" element={<GalleryItem />} />
        <Route path="exhibitions" element={<Exhibitions />} />
        <Route path="exhibitions/:id" element={<ExhibitionEvent />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;

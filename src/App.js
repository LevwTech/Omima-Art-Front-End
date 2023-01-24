import React from "react";
import axios from "axios";
import Nav from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer.js";
import { Route, Routes } from "react-router-dom";
import Gallery from "./Pages/Gallery/Gallery";
import Exhibitions from "./Pages/Exhibitions/Exhibitions";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NoPage from "./Pages/NoPage/NoPage";
import GalleryItem from "./Components/GalleryItem/GalleryItem";
import ExhibitionEvent from "./Components/ExhibitionEvent/ExhibitionEvent";
import Collection from "./Pages/Collection/Collection";
import Admin from "./Pages/Admin/Admin";
import { useAuth0 } from "@auth0/auth0-react";
import ScrollToTopFix from "./Components/ScrollToTopFix/ScrollToTopFix";
import PaymentSuccessful from "./Pages/PaymentSuccessful/PaymentSuccessful";
import PaymentFailed from "./Pages/PaymentFailed/PaymentFailed";
import Category from "./Pages/Category/Category";
import FloatingWhatsApp  from "react-floating-whatsapp";
import profilePic from "./Assets/profilepic.jpg";
const categories = ["floral", "landscape", "abstract", "paper"];
function App() {
  const { isAuthenticated } = useAuth0();
  const bootServer = async () => {
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/boot`);
  };
  bootServer(); // saves 2 to 3 second of cold boot server time, remove on buying a new hosting droplet
  return (
    <React.Fragment>
      <Nav />
      <ScrollToTopFix></ScrollToTopFix>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="gallery" element={<Gallery />} />
        {categories.map((category) => (
          <Route path={category} element={<Category category={category} />} />
        ))}
        <Route path="gallery/:id" element={<GalleryItem />} />
        <Route path="exhibitions" element={<Exhibitions />} />
        <Route path="exhibitions/:id" element={<ExhibitionEvent />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="paymentsuccessful" element={<PaymentSuccessful />} />
        <Route path="paymentfailed" element={<PaymentFailed />} />
        <Route path="collection" element={<Collection />} />
        {isAuthenticated && <Route path="admin" element={<Admin />} />}
        <Route path="*" element={<NoPage />} />
      </Routes>
      <FloatingWhatsApp
        phoneNumber="+201159275566"
        accountName="Omima Art Gallery"
        allowEsc
        allowClickAway
        notification
        notificationSound
        statusMessage
        avatar={profilePic}
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;

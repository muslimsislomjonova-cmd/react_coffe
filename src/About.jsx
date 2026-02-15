import Header2 from "../components/Header2";
import AboutHero from "../components/AboutHero";
import OurCommitment from "../components/OurCommitment";
import UncompromisingQuality from "../components/UncompromisingQuality";
import Headquarters from "../components/Headquarters";
import Footer2 from "../components/Footer2";


import "./About.css";


import Home from "./pages/Home";
import About from "./pages_2/About";
function About() {
  return (
    <>
      <Header2 />
      <AboutHero />
      <OurCommitment />
      <UncompromisingQuality />
      <Headquarters />
      <Footer2 />


         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
   



    
  );
}

export default About;
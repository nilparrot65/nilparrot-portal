import { useState } from "react";
import Footer from "../componant/Footer";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "../componant/Navbar";
import Portfolio from "./Portfolio";
import SinglePortfolio from "./SinglePortfolio";
import SingleService from "./SingleService";
import Services from "./Services";
import PageNotFound from "./PageNotFount";
import PrivacyPolicy from "./PrivacyPolicy";
import RefundPolicy from "./RefundPolicy";
import TermsAndConditions from "./TermsAndConditions";


function Layout() {

const [activeMenu, setActiveMenu] = useState("home");
const serviceDetailsActiveMenu = "service-details";
const portfolioSingleActiveMenu = "portfolio-single";

  return (
    <div>
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>

      <Routes>
        <Route path="/" element={<Home activeMenu={activeMenu}/>}/>
        <Route path="/services" element={<Services activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>} />
        <Route path="/service-details" element={<SingleService activeMenu={serviceDetailsActiveMenu}/>} />        
        <Route path="/portfolio" element={<Portfolio activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>} />
        <Route path="/portfolio-single" element={<SinglePortfolio activeMenu={portfolioSingleActiveMenu}/>} />
        <Route path="/contact" element={<Contact activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>} />
        <Route path="/about" element={<About activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>} />
        <Route path="/demo" element={<Contact activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>} />

        <Route path="/privacy-policy" element={<PrivacyPolicy activeMenu={"privacy-policy"} setActiveMenu={setActiveMenu}/>} />
        <Route path="/refund-policy" element={<RefundPolicy activeMenu={"refund-policy"} setActiveMenu={setActiveMenu}/>} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions activeMenu={"terms-and-conditions"} setActiveMenu={setActiveMenu}/>} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;

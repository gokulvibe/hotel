import Footer from "Compnents2/Footer";
import Header from "Compnents2/Header";
import MobileMenu from "Compnents2/MobileMenu";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SuccessBox from "Compnents2/SuccessComponents/SuccessBox";
import "Compnents2/MainContent/CustomCSS/Feedback.css";


function Success() {
  return(
     <div className="bg-black" style={{maxWidth:"100vw",height:"180vh"}}>
          <Header/>
          <MobileMenu/>
          <SuccessBox/>
          <Footer/>
     </div>
  );
}

export default Success;
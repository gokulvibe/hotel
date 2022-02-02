import Footer from "Compnents2/Footer";
import Header from "Compnents2/Header";
import MobileMenu from "Compnents2/MobileMenu";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedbackBox from "Compnents2/FeedbackBox";
import "Compnents2/MainContent/CustomCSS/Feedback.css";


function Profile() {
  return(
     <div className="bg-black" style={{maxWidth:"100vw",height:"180vh"}}>
          <FeedbackBox/>
     </div>
  );
}

export default Profile;
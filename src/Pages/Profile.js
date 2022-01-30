import Footer from "Compnents2/Footer";
import Header from "Compnents2/Header";
import MobileMenu from "Compnents2/MobileMenu";
import React from 'react';
import {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicInfo from "Compnents2/ProfileComponents/BasicInfo";
import "Compnents2/CustomCSS/Profile.css";


function Profile() {
  return(
     <div className="bg-black profDark" style={{maxWidth:"100vw",height:"220vh"}}>
          <Header/>
          <MobileMenu/>
          <BasicInfo/>
          <Footer/>
     </div>
  );
}

export default Profile;
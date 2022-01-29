import Footer from "Compnents2/Footer";
import Header from "Compnents2/Header";
import MobileMenu from "Compnents2/MobileMenu";
import React from 'react';
import {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicInfo from "Compnents2/ProfileComponents/BasicInfo";


function Profile() {
  return(
     <div className="bg-black" style={{maxWidth:"100vw",height:"180vh"}}>
          <Header/>
          <MobileMenu/>
          <BasicInfo/>
          <Footer/>
     </div>
  );
}

export default Profile;
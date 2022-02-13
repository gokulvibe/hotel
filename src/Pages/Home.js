import Footer from "../Compnents2/Footer";
import Header from "../Compnents2/Header";
import MainContent from "../Compnents2/MainContent";
import MobileMenu from "../Compnents2/MobileMenu";
import React from 'react';
import '../Compnents2/CustomCSS/snap.css';

function Home() {
  return(

       <div id="home" className="home" style={{maxWidth:"100%",overflow:"none"}}>


            <MainContent/>
            <div className="snapFoot"><Footer /></div>
        </div>
  );
}

export default Home;

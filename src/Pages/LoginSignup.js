import Footer from "../Compnents2/Footer";
import Header from "../Compnents2/Header";
import MobileMenu from "../Compnents2/MobileMenu";
import React from 'react';
import Tabs from "../Compnents2/Tabs";
import {useEffect} from "react";
import "../App.css";

var rootStyle = {
  backgroundColor : 'black',
  height: '100vh',
  minHeight : '100vh'
}

var headStyle = {
  backgroundColor : 'black',
}

function LoginSignup() {
   useEffect(() => { document.body.style.backgroundColor = 'black' }, []) 
  return(
     <div style={rootStyle}>
           <div class="header">
             <Header/>
             <MobileMenu/>
           </div>     
            <Tabs/>
            <Footer/>
        </div>
  );
}

export default LoginSignup;

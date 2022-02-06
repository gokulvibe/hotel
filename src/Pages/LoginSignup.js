import Footer from "../Compnents2/Footer";
import Header from "../Compnents2/Header";
import MobileMenu from "../Compnents2/MobileMenu";
import React from 'react';
import Tabs from "../Compnents2/Tabs";
import {useEffect} from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

var rootStyle = {
  backgroundColor : 'black',
  height: '100vh',
  minHeight : '100vh'
}

var headStyle = {
  backgroundColor : 'black',
}

function LoginSignup() {
   
  return(
     <div className="bg-black" style={{maxWidth:"100vw",height:"180vh"}}>
           <div class="header">
           </div>     
            <Tabs/>
            <Footer/>
        </div>
  );
}

export default LoginSignup;

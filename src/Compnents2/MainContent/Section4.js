import React from 'react';

import img1 from "../../img/butter-naan.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CustomCSS/section4.css";
AOS.init();

function Section4() {
    return (
        <div id='section4' className='d-block mx-auto' data-aos="zoom-in-up">
           <div className='container d-lg-flex mx-auto home-container' style={{borderColor:"black"}}>
               <div className='col' style={{borderRadius:"2em",overflow:"hidden"}}>
                   <img src={img1} className="img-fluid home-image section4-img" data-aos="zoom-in-right" style={{borderRadius:"2em",minWidth:"300px",minHeight:"300px"}} ></img>
               </div>
               <div className='col'>
                   <h1 className='myDiv' data-settings='{"craftcoffee_ext_is_scrollme":"true","craftcoffee_ext_scrollme_translatey":{"unit":"px","size":-120,"sizes":[]},"_position":"absolute","craftcoffee_ext_scrollme_disable":"mobile","craftcoffee_ext_scrollme_smoothness":{"unit":"px","size":30,"sizes":[]},"craftcoffee_ext_scrollme_scalex":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_scrollme_scaley":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_scrollme_scalez":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_scrollme_rotatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_scrollme_rotatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_scrollme_rotatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_scrollme_translatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_scrollme_translatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false"}' style={{color:"#ec8649",fontFamily:"Arkipelago",textTransform:"none",fontSize:"3em",whiteSpace:"no-wrap"}}>Fast and free delivery</h1>
                   <h4 style={{color:"white"}}>Tasty food under 30 mins or free</h4>
               </div>
           </div>
        </div>
    )
}

export default Section4;

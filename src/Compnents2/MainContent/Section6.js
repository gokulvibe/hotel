import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import  "./CustomCSS/Section6.css";
import {useState,UseEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
<script src="holder.js"></script>

AOS.init();



const logo = require("../../img/butter-naan.jpg");

function Section6() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div id="section6" className='my-auto' data-aos="zoom-in-up">
            <h1 className='myDiv' style={{fontFamily:"Arkipelago",textTransform:"none",color:"#ec8649"}}>Gallery</h1>
            <div>
                <Carousel style={{marginTop:"30px"}} activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item style={{border:"1px solid black",borderRadius:"2em",overflow:"none"}}>
                          <img className="d-block mx-auto fluid-image" style={{borderRadius:"2em",minWidth:"300px",minHeight:"300px",maxHeight:"450px"}} src="images/butter-naan.jpg" alt="First slide"/>
                        <Carousel.Caption style={{background: "rgb(220,220,220, .5)", borderRadius:"2em"}}>
                          <h4 style={{color:"black"}}>Paneer Butter Masala</h4>
                          <p style={{fontWeight:"bold", color:"black"}}>Feast yourself to this ultimate Punjabi delight.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{border:"1px solid black",borderRadius:"2em",overflow:"none"}}>
                        <img className="d-block mx-auto fluid-image" style={{borderRadius:"2em",minWidth:"300px",minHeight:"300px",maxHeight:"450px"}} src="images/variety-indian-food.jpeg"alt="Second slide"/>
                        <Carousel.Caption style={{background: "rgb(220,220,220, .5)", borderRadius:"2em"}}>
                          <h4 style={{color:"black"}}>South Indian meals</h4>
                          <p style={{fontWeight:"bold", color:"black"}}>Lip-smacking pure South-Indian meals.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Section6;

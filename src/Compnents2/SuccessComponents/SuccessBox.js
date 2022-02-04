import React from 'react';
import "scrollbarContainer.css";
import "App.css";
import { useNavigate } from "react-router-dom";
import "Compnents2/MainContent/CustomCSS/success.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function SuccessBox(){

    const navigate = useNavigate();

    const handleHome = event => {
     navigate("/");
    }

    const handleMenu = event => {
     navigate("/menu");
    }

    const handleAbout = event => {
     navigate("/about");
    }
    
    return(
        <div classname="Box" style={{paddingTop:"25vh",paddingBottom:"40vh",width:"fit-content",marginLeft:"auto",marginRight:"auto"}}>
                   <div style={{backgroundColor:"green",borderRadius:"50%",width:"10vw",minWidth:"fit-content",marginLeft:"auto",marginRight:"auto"}}><h1 style={{textAlign:"center",fontSize:"120px",fontStyle:"italic",color:"black"  } } data-aos="zoom-in-up" data-aos-duration="1000">&#10004;</h1></div>
                   <h1 style={{fontFamily:"Arkipelago,sans-serif",color:"#ec8649",fontSize:"5em",textTransform: "none",textAlign:"center"}} data-aos="zoom-in" data-aos-delay="750" data-aos-duration="1000" >Thank you!</h1>
                   <h4 style={{color:"white",textAlign:"center" }} data-aos="zoom-in" data-aos-delay="750" data-aos-duration="500" >We’re looking forward to making your experience even better in the future.</h4>
                   <h4 style={{color:"white",textAlign:"center"}} data-aos="zoom-in" data-aos-delay="750" data-aos-duration="500" >In the meanwhile, explore  our website </h4>
                   <div className="ButtonGroup">
                       <button onClick={handleHome} data-aos="zoom-in" data-aos-delay="100000" data-aos-duration="1000" >Home</button>
                       <button onClick={handleMenu} data-aos="zoom-in" data-aos-delay="100000" data-aos-duration="1000">Our menu</button>
                       <button onClick={handleAbout} data-aos="zoom-in" data-aos-delay="100000" data-aos-duration="1000">About Us</button>
                   </div>

        </div>
    )
}

export default SuccessBox;
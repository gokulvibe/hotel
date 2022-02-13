import React from 'react'
import './CustomCSS/title.css'
import './CustomCSS/hover.css'
import '../../scrollbarContainer.css'
import Section3 from 'Compnents2/MainContent/Section3';
import vid from "../../img/video.mp4"
import "../CustomCSS/Header.css";
import { useNavigate } from "react-router-dom";

function Section1() {
    const navigate = useNavigate();
    const Order=event=>{
     navigate("/menu");
   }
    return (
        <div id='section1' style={{width: '100%'}}>
             <video  id="background-video" autoPlay loop muted >
                   <source src={vid} style={{maxWidth:"100%"}} type="video/mp4"></source>
             </video>
             <div className="intro" id="navi">
                <h1 className="home-heading" style={{color:'orange',fontFamily:"saman",background: '-webkit-linear-gradient(orange,white,green)',WebkitBackgroundClip: 'text','-webkit-text-fill-color': 'transparent',whiteSpace: "nowrap",fontSize: "2em"}}>Clayton Chettinad</h1>
                <p style={{color:"white",fontWeight:"bold",fontSize:"smaller"}}>Authentic South Indian Cuisine</p>
                <button onClick={Order}>Order now</button>
             </div>
        </div>
    )
}

export default Section1

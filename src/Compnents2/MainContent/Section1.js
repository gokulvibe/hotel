import React from 'react'
import './CustomCSS/title.css'
import './CustomCSS/hover.css'
import '../../scrollbarContainer.css'
import Section3 from 'Compnents2/MainContent/Section3';
import vid from "../../img/video.mp4" 
import "../CustomCSS/Header.css";

function Section1() {
    return (
        <div id='section1'> 
             <video  id="background-video" autoPlay loop muted >
                   <source src={vid} style={{maxWidth:"100vw"}} type="video/mp4"></source>
             </video> 
             <div className="intro" id="navi">
                <h1  style={{color:'orange',fontFamily:"saman",background: '-webkit-linear-gradient(orange,white,green)',WebkitBackgroundClip: 'text','-webkit-text-fill-color': 'transparent',whiteSpace: "nowrap",fontSize: "2em"}}>Clayton Chettinad</h1> 
                <p style={{color:"white",fontWeight:"bold",fontSize:"smaller"}}>Authentic South Indian Cuisine</p>   
             </div>                      
        </div>
    )
}

export default Section1

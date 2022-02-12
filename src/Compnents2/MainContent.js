import React from 'react'
import Section1 from './MainContent/Section1';
import Section3 from './MainContent/Section3';

import Section4 from './MainContent/Section4';
import Section5 from './MainContent/Section5';
import Section6 from './MainContent/Section6';
import Section7 from './MainContent/Section7';
import Section8 from './MainContent/Section8';
import './MainContent/CustomCSS/title.css';
import './CustomCSS/snap.css';
import "./MainContent/CustomCSS/section4.css";
import "Compnents2/CustomCSS/HomeMobileView.css";

import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

function MainContent() {
    return (
        <div className='bg-black cont' style={{height:"max-content"}}>
            
                                       
                                         <div className="Section" ><Section1 /></div>
                                         <div className="Section"><Section3/></div> 
                                         <div className="Section"><Section4/></div> 
                                          <div className="Section"><Section5/></div>
                                          <div className="Section"><Section6/></div>
                                          <div className="Section"><Section7/></div>
                                         
                                 
        </div>
    )
}

export default MainContent;

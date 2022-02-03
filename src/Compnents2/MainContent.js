import React from 'react'
import Section1 from './MainContent/Section1';
import Section3 from './MainContent/Section3';

import Section4 from './MainContent/Section4';
import Section5 from './MainContent/Section5';
import Section6 from './MainContent/Section6';
import Section7 from './MainContent/Section7';
import Section8 from './MainContent/Section8';
import './MainContent/CustomCSS/title.css'

import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

function MainContent() {
    return (
        <div>
            <div id="wrapper" className="hasbg transparent">
            

            <div id="page-content-wrapper" className="no-title">
                <div className="inner">
                    <div className="inner-wrapper">
                        <div className="sidebar-content fullwidth">
                            <div data-elementor-type="wp-page" data-elementor-id="4882" className="elementor custom-css-style" data-elementor-settings="[]">
                                <div className="elementor-inner">
                                    <div className="elementor-section-wrap">
                                        <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}>
                                         <Section1 />
                                          <Section3/>  
                                        </Link>
                                        
                                        <Link activeClass="active" to="section4" spy={true} smooth={true} duration={1000}>
                                          <Section4/>
                                        </Link>
                                        <Link activeClass="active" to="section1" spy={true} smooth={true} duration={1000}><Section5/></Link>
                                        <span style={{minHeight:'100vh'}}><Section6/></span>
                                        <span style={{minHeight:'100vh'}}><Section7/></span>
                                       
                                        <span style={{minHeight:'100vh'}}><Section8/></span>
                                        
                                        
                                        
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="comment_disable_clearer"></div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
        </div>
    )
}

export default MainContent;

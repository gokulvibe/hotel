import React from 'react'
import ContactNumber from './Header/ContactNumber'
import Logo from './Header/Logo'
import Navbar from './Header/Navbar'
import SocialIcons from './Header/SocialIcons'
import "./CustomCSS/Header.css";

function Header() {
    return (
       <div id="navi" style={{overflowX:"hidden"}}>
        

  	<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label for="menu-icon"></label>
  	<nav class="nav"> 		
  		<ul class="pt-5">
  			<li><a href="/" style={{fontFamily:"Arkipelago",textTransform:"none"}}>Home</a></li>
  			<li><a href="/menu" style={{fontFamily:"Arkipelago",textTransform:"none"}}>Menu</a></li>
  			<li><a href="/cart" style={{fontFamily:"Arkipelago",textTransform:"none"}}>Cart</a></li>
  			<li><a href="/about" style={{fontFamily:"Arkipelago",textTransform:"none"}}>Contact</a></li>
  		</ul>
  	</nav>
             {/*<div id="elementor-header" className="main-menu-wrapper">
                <div data-elementor-type="wp-post" data-elementor-id="3099" className="elementor custom-css-style" data-elementor-settings="[]">
                    <div className="elementor-inner">
                        <div className="elementor-section-wrap">
                            <section
                                className="elementor-section elementor-top-section elementor-element elementor-element-a216edb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                data-id="a216edb"
                                data-element_type="section"
                                data-settings='{"craftcoffee_ext_is_background_parallax":"false"}'
                            >
                                <div className="elementor-container elementor-column-gap-default">
                                    <div className="elementor-row">
                                        <Navbar />
                                        <Logo />
                                        <SocialIcons />
                                        <ContactNumber />

                                        
                                    </div>
                                </div>
                            </section>
                            <section
                                className="elementor-section elementor-top-section elementor-element elementor-element-3727a07 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                data-id="3727a07"
                                data-element_type="section"
                                data-settings='{"stretch_section":"section-stretched","craftcoffee_ext_is_background_parallax":"false"}'
                            >
                                <div className="elementor-container elementor-column-gap-default">
                                    <div className="elementor-row">
                                        <div
                                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f260150"
                                            data-id="f260150"
                                            data-element_type="column"
                                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                        >
                                            <div className="elementor-column-wrap elementor-element-populated">
                                                <div className="elementor-widget-wrap">
                                                    <div
                                                        className="elementor-element elementor-element-d00d5a2 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                        data-id="d00d5a2"
                                                        data-element_type="widget"
                                                        data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                                        data-widget_type="divider.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <div className="elementor-divider">
                                                                <span className="elementor-divider-separator"> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
    </div>*/}
        </div>
    )
}

export default Header

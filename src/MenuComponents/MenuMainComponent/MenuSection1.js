import React from 'react';
import './CustomCSS/MainSections.css'
import './CustomCSS/title.css'
import './CustomCSS/hover.css'
import SearchIcon from '@mui/icons-material/Search';
import Section1 from '../../Compnents2/MainContent/Section1';
import {MDBFormInline, MDBBtn} from 'react-bootstrap';

// Imports for searchbar
import SearchBar from './SearchBar';

// import '../../scrollbarContainer.css'

function MenuSection1() {
  return (
        <div id="menu_section_1">
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-1ef6e22 elementor-section-stretched elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                data-id="1ef6e22"
                data-element_type="section"
                data-settings='{"stretch_section":"section-stretched","background_background":"classic","craftcoffee_ext_is_background_parallax":"true","craftcoffee_ext_is_background_parallax_speed":{"unit":"px","size":0.8000000000000000444089209850062616169452667236328125,"sizes":[]}}'
            >
                <div className="elementor-background-overlay"></div>
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6fc77c4"
                            data-id="6fc77c4"
                            data-element_type="column"
                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                        >
                            <div className="elementor-column-wrap elementor-element-populated">
                                <div className="elementor-widget-wrap">
                                <div
                                        className="elementor-element elementor-element-dcb02db elementor-widget elementor-widget-heading"
                                        data-id="dcb02db"
                                        data-element_type="widget"
                                        data-settings='{"craftcoffee_ext_is_smoove":"true","craftcoffee_ext_smoove_disable":"769","craftcoffee_ext_smoove_duration":1000,"craftcoffee_ext_smoove_scalex":{"unit":"px","size":2,"sizes":[]},"craftcoffee_ext_smoove_scaley":{"unit":"px","size":2,"sizes":[]},"craftcoffee_ext_is_fadeout_animation":"true","craftcoffee_ext_is_fadeout_animation_direction":"down","craftcoffee_ext_is_fadeout_animation_velocity":{"unit":"px","size":0.5,"sizes":[]},"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"craftcoffee_ext_is_infinite":"false"}'
                                        data-widget_type="heading.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <h1 className="elementor-heading-title elementor-size-default">Check out our Menus</h1>
                                        </div>
                                    </div>
                                    
                                    <div
                                        className="elementor-element elementor-element-6a605a3 elementor-widget elementor-widget-heading"
                                        data-id="6a605a3"
                                        data-element_type="widget"
                                        data-settings='{"craftcoffee_ext_is_smoove":"true","craftcoffee_ext_smoove_disable":"769","craftcoffee_ext_smoove_duration":1000,"craftcoffee_ext_smoove_scalex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_scaley":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatey":{"unit":"px","size":100,"sizes":[]},"craftcoffee_ext_is_fadeout_animation":"true","craftcoffee_ext_is_fadeout_animation_velocity":{"unit":"px","size":0.299999999999999988897769753748434595763683319091796875,"sizes":[]},"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation_direction":"up"}'
                                        data-widget_type="heading.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <h3 className="elementor-heading-title elementor-size-default">Explore a wide variety of delicious Indian Food  </h3>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            
                        </div>

                        
                    </div>

                </div>

                
            </section>

            

            

            {/* <Section1/> */}
        </div>
  );
}

export default MenuSection1;

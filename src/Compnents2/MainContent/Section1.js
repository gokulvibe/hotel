import React from 'react'
import './CustomCSS/title.css'
import './CustomCSS/hover.css'
import '../../scrollbarContainer.css'
import Section3 from './Section3';
import vid from "../../img/video.mp4" 

function Section1() {
    return (
        <div id='section1'>
           
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-802c50d elementor-section-stretched elementor-section-height-min-height elementor-section-items-top elementor-section-boxed elementor-section-height-default"
                data-id="802c50d"
                data-element_type="section"
                data-settings='{"stretch_section":"section-stretched","background_background":"classNameic","craftcoffee_ext_is_background_parallax":"false"}'
            >
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-row">
                        
                        <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d47f703 animation"
                            data-id="d47f703"
                            data-element_type="column"
                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                        >
                            <div className=" elementor-element-populated">
                                <div >
                                    <div className='video' >
                                        <video  id="background-video" autoPlay loop muted >
                                           <source src={vid} type="video/mp4"></source>
                                        </video> 
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-8a2447b elementor-widget__width-inherit elementor-widget elementor-widget-heading"
                                        data-id="8a2447b"
                                        data-element_type="widget"
                                        data-settings='{"craftcoffee_ext_is_smoove":"true","craftcoffee_ext_smoove_disable":"769","craftcoffee_ext_smoove_duration":600,"craftcoffee_ext_smoove_translatey":{"unit":"px","size":40,"sizes":[]},"craftcoffee_ext_is_fadeout_animation":"true","craftcoffee_ext_is_fadeout_animation_velocity":{"unit":"px","size":0.59999999999999997779553950749686919152736663818359375,"sizes":[]},"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_smoove_scalex":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_smoove_scaley":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation_direction":"up"}'
                                        data-widget_type="heading.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <h1 className="vhead fix" style={{fontFamily:'saman',color:'orange',background: '-webkit-linear-gradient(orange,white,green)',WebkitBackgroundClip: 'text','-webkit-text-fill-color': 'transparent',fontSize:'4em',whiteSpace: "nowrap",display: "block",textAlign:"center",paddingRight:"40%"}} >Clayton Chettinad</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-b8d0c1c elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                        data-id="b8d0c1c"
                                        data-element_type="widget"
                                        data-settings='{"craftcoffee_ext_is_smoove":"true","craftcoffee_ext_smoove_disable":"769","craftcoffee_ext_smoove_duration":600,"craftcoffee_ext_is_fadeout_animation":"true","craftcoffee_ext_is_fadeout_animation_velocity":{"unit":"px","size":0.200000000000000011102230246251565404236316680908203125,"sizes":[]},"craftcoffee_ext_smoove_translatey":{"unit":"px","size":40,"sizes":[]},"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_smoove_scalex":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_smoove_scaley":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation_direction":"up"}'
                                        data-widget_type="heading.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <h2 className="elementor-heading-title elementor-size-default" style={{fontSize:'3em',marginLeft:"16%"}}>Authenthic South Indian Cuisine</h2>
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-f65ff64 elementor-widget__width-auto elementor-widget elementor-widget-image"
                                        data-id="f65ff64"
                                        data-element_type="widget"
                                        data-settings='{"craftcoffee_ext_is_smoove":"true","craftcoffee_ext_smoove_disable":"769","craftcoffee_ext_smoove_duration":600,"craftcoffee_ext_smoove_translatey":{"unit":"px","size":40,"sizes":[]},"craftcoffee_ext_is_fadeout_animation":"true","craftcoffee_ext_is_fadeout_animation_direction":"down","craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_smoove_scalex":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_smoove_scaley":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation_velocity":{"unit":"px","size":0.6999999999999999555910790149937383830547332763671875,"sizes":[]}}'
                                        data-widget_type="image.default"
                                    >
                                        
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-ed84df8 elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                        data-id="ed84df8"
                                        data-element_type="widget"
                                        data-settings='{"craftcoffee_ext_is_smoove":"true","craftcoffee_ext_smoove_disable":"769","craftcoffee_ext_smoove_duration":600,"craftcoffee_ext_smoove_translatey":{"unit":"px","size":40,"sizes":[]},"craftcoffee_ext_is_fadeout_animation":"true","craftcoffee_ext_is_fadeout_animation_direction":"down","craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_smoove_scalex":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_smoove_scaley":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_smoove_rotatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_rotatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_translatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewx":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_skewy":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_smoove_perspective":{"unit":"px","size":1000,"sizes":[]},"craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation_velocity":{"unit":"px","size":0.6999999999999999555910790149937383830547332763671875,"sizes":[]}}'
                                        data-widget_type="heading.default"
                                       
                                    >
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <Section3/>    
                                       
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section1

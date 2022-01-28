import React from "react";
import Login from "../Login";
import "../../App.css";

const FirstTab = () => {
  return (
    <div className="FirstTab">
      <div class="elementor-container elementor-column-gap-default">
                                                                        <div class="elementor-row">
                                                                            <div
                                                                                class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e3a3e0a"
                                                                                data-id="e3a3e0a"
                                                                                data-element_type="column"
                                                                                data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                                                            >
                                                                                <div class="elementor-column-wrap elementor-element-populated">
                                                                                    <div class="elementor-widget-wrap">
                                                                                        <div
                                                                                            class="elementor-element elementor-element-088133c elementor-transparent elementor-widget elementor-widget-shortcode"
                                                                                            data-id="088133c"
                                                                                            data-element_type="widget"
                                                                                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                                                                            data-widget_type="shortcode.default"
                                                                                        >
                                                                                            <div class="elementor-widget-container">
                                                                                                <div class="elementor-shortcode">
                                                                                                    <div role="form" class="wpcf7" id="wpcf7-f19-p4106-o1" lang="en-US" dir="ltr">
                                                                                                        <div class="screen-reader-response">
                                                                                                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                                                                                                            <ul></ul>
                                                                                                        </div>

                                                                                                        <form method="post" action="contactform/contactengine.php" class="forms-input">
                                                                                                                                                                                                                    
                                                                                                
                                                                                                            <label for="Email" style={{fontFamily:"Roboto condensed,sans-serif",color:"white",fontSize:"2em",textTransform: "none"}}>EMAIL:</label>
                                                                                                            <input type="email" name="Email" id="Email" />
                                                                                                            <br/> 
                                                                                                            <br/>  
                                                                                                             <label for="Password" style={{fontFamily:"Roboto condensed,sans-serif",color:"white",fontSize:"2em",textTransform: "none"}}>PASSWORD:</label>
                                                                                                             <input type="password" name="Password" id="Password" />
                                                                                                             <a href="#" ><p class="forgot" style={{fontFamily:"Roboto condensed,sans-serif",color:"white",fontSize:"1.25em"}}>FORGOT PASSWORD?</p></a>                                                                                                           
                                                                                                            <input type="submit" name="submit" value="Login" class="submit-button" />
                                                                                                        </form>
        
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
    </div>
  );
};
export default FirstTab;
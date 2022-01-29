import React from 'react'
import './css/logo.css'

function Logo() {
    return (
            <div
                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-8dfe958"
                data-id="8dfe958"
                data-element_type="column"
                data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
            >
                <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                        <div
                            className="elementor-element elementor-element-6f23744 elementor-absolute elementor-widget elementor-widget-image"
                            data-id="6f23744"
                            data-element_type="widget"
                            data-settings='{"_position":"absolute","craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                            data-widget_type="image.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="elementor-image">
                                    <a href="/">
                                        <img
                                            width="150"
                                            height="150"
                                            src="customImages/logo_white.png"
                                            className="attachment-full size-full"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Logo;

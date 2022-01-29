import React from 'react'

function Navbar() {
    return (
            <div
                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-eb2db78 elementor-hidden-tablet elementor-hidden-phone"
                data-id="eb2db78"
                data-element_type="column"
                data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
            >
                <div className="elementor-column-wrap elementor-element-populated">
                    <div className="elementor-widget-wrap">
                        <div
                            className="elementor-element elementor-element-d6b5ce3 elementor-widget elementor-widget-craftcoffee-navigation-menu"
                            data-id="d6b5ce3"
                            data-element_type="widget"
                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                            data-widget_type="craftcoffee-navigation-menu.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="themegoods-navigation-wrapper menu_style1">
                                    <div className="menu-main-menu-container">
                                        <ul id="nav_menu34" className="nav">
                                            <li className="menu-item current-menu-ancestor current-menu-parent menu-item-has-children"> {/*Add "arrow" class for a nav arrow*/}
                                                <a href="/">Home</a>
                                                {/* <ul className="sub-menu">
                                                    <li className="menu-item">
                                                        <a href="index.html" aria-current="page">Home 1</a>
                                                    </li>
                                                    <li className="menu-item"><a href="home-2.html">Home 2</a></li>
                                                    <li className="menu-item"><a href="home-3.html">Home 3</a></li>
                                                    <li className="menu-item"><a href="home-4.html">Home 4</a></li>
                                                    <li className="menu-item"><a href="home-5.html">Home 5</a></li>
                                                    <li className="menu-item"><a href="home-6.html">Home 6</a></li>
                                                    <li className="menu-item"><a href="home-7.html">Home 7</a></li>
                                                    <li className="menu-item"><a href="home-8.html">Home 8</a></li>
                                                    <li className="menu-item"><a href="home-9.html">Home 9</a></li>
                                                </ul> */}
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <a href="/about">About</a>
                                               
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <a href="/auth">Login</a>
                                                
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <a href="/profile">Profile</a>
                                               
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <a href="/menu">Menus</a>
                                                
                                            </li>
                                            <li className="menu-item menu-item-has-children">
                                                <a href="/cart">Cart</a>
                                               
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Navbar;

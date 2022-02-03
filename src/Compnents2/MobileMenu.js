import React from 'react';
import "Compnents2/CustomCSS/MobileMenu.css";

function MobileMenu() {
    return (
        <div id="mobile-menu">
            <a id="btn-close-mobile-menu" href="javascript:;"></a>
            <div className="mobile-menu-wrapper">
            <div className="mobile-menu-content">
                <div className="menu-main-menu-container">
                        
                    <ul id="mobile_main_menu" className="mobile-main-nav">
                        <li className="menu-item current-menu-ancestor current-menu-parent menu-item-has-children">
                            <a href="/">Home</a>
                            {/* <ul className="sub-menu">
                                <li className="menu-item menu-item-home current-menu-item page_item page-item-4462 current_page_item">
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
    )
}

export default MobileMenu

import React from 'react';
import MenuSection1 from 'MenuComponents/MenuMainComponent/MenuSection1';
import MenuItems from 'MenuComponents/MenuMainComponent/MenuItems';
import 'MenuComponents/MenuMainComponent/CustomCSS/MainSections.css';
import SearchBar from 'MenuComponents/MenuMainComponent/SearchBar';
import CartIcon from 'CommonComponents/CartIcon';
import {useState} from 'react';
import CartIcon2 from 'CommonComponents/CartIcon2';

function MenuMainContent() {
    const [cartActive, setcartActive] = useState(false);
  return (
      <div id="menu_main_content">
          <div id="wrapper" className="hasbg transparent" style={{bacgroundColor: "black"}}>
            <div id="page-content-wrapper" className="no-title">
                <div className="inner">
                    <div className="inner-wrapper">
                        <div className="sidebar-content fullwidth">
                            <div data-elementor-type="wp-page" data-elementor-id="3602" className="elementor custom-css-style" data-elementor-settings="[]">
                                <div className="elementor-inner">
                                    <div className="elementor-section-wrap">

                                        <MenuSection1/>
                                        <SearchBar/>
                                        <MenuItems cartActive = {cartActive} setcartActive={setcartActive}/>
                                        <CartIcon2/>
                                        
                                        
                                        
                                        
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

export default MenuMainContent;

import React from 'react';
import MenuSection1 from './MenuMainComponent/MenuSection1';
import MenuSection2 from './MenuMainComponent/MenuSection2';
import MenuSection3 from './MenuMainComponent/MenuSection3';
import MenuSection4 from './MenuMainComponent/MenuSection4';

function MenuMainContent() {
  return (
      <div id="menu_main_content">
          <div id="wrapper" className="hasbg transparent">
            <div id="page-content-wrapper" className="no-title">
                <div className="inner">
                    <div className="inner-wrapper">
                        <div className="sidebar-content fullwidth">
                            <div data-elementor-type="wp-page" data-elementor-id="3602" className="elementor custom-css-style" data-elementor-settings="[]">
                                <div className="elementor-inner">
                                    <div className="elementor-section-wrap">

                                        <MenuSection1/>
                                        <MenuSection2/>
                                        <MenuSection3/>
                                        <MenuSection4/>
                                        
                                        
                                        
                                        
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

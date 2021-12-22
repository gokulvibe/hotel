import Section1 from "./MainContent/Section1";
import Section10 from "./MainContent/Section10";
import Section11 from "./MainContent/Section11";
import Section12 from "./MainContent/Section12";
import Section13 from "./MainContent/Section13";
import Section14 from "./MainContent/Section14";
import Section15 from "./MainContent/Section15";
import Section16 from "./MainContent/Section16";
import Section2 from "./MainContent/Section2";
import Section3 from "./MainContent/Section3";
import Section4 from "./MainContent/Section4";
import Section5 from "./MainContent/Section5";
import Section6 from "./MainContent/Section6";
import Section7 from "./MainContent/Section7";
import Section8 from "./MainContent/Section8";
import Section9 from "./MainContent/Section9";

function MainContent(){
    return(
        <div id="wrapper" className="hasbg transparent">
            

            {/* <!-- Begin content --> */}
            <div id="page-content-wrapper" className="no-title">
                <div className="inner">
                    {/* <!-- Begin main content --> */}
                    <div className="inner-wrapper">
                        <div className="sidebar-content fullwidth">
                            <div data-elementor-type="wp-page" data-elementor-id="4462" className="elementor custom-css-style" data-elementor-settings="[]">
                                <div className="elementor-inner">
                                    <div className="elementor-section-wrap">
                                        <Section1/>
                                        <Section2/>
                                        <Section3/>
                                        <Section4/>
                                        <Section5/>
                                        <Section6/>
                                        <Section7/>
                                        <Section8/>
                                        <Section9/>
                                        <Section10/>
                                        <Section11/>
                                        <Section12/>
                                        <Section13/>
                                        <Section14/>
                                        <Section15/>
                                        <Section16/>
                                    </div>
                                </div>
                            </div>
                            <div className="comment_disable_clearer"></div>
                        </div>
                    </div>
                    {/* <!-- End main content --> */}
                </div>
            </div>
        </div>
    );
}

export default MainContent;
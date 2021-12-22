import FooterSection1 from "./Footer/FooterSection1";
import FooterSection2 from "./Footer/FooterSection2";
import FooterSection3 from "./Footer/FooterSection3";

function Footer(){
    return(
        <div id="footer-wrapper">
            <div data-elementor-type="wp-post" data-elementor-id="3725" class="elementor custom-css-style" data-elementor-settings="[]">
                <div class="elementor-inner">
                    <div class="elementor-section-wrap">
                        <FooterSection1/>
                        <FooterSection2/>
                        <FooterSection3/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
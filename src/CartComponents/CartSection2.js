import React from 'react';
import 'MenuComponents/MenuMainComponent/CustomCSS/foodmenu.css'
import CartItems from 'CartComponents/CartItems';
import CartSummary from 'CartComponents/CartSummary';
import 'CartComponents/CustomCSS/Cart.css';


function CartSection2() {

    return (
        <div className='menusection4'>

        
            <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-52dc38a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="52dc38a"
                    data-element_type="section"
                    data-settings='{"craftcoffee_ext_is_background_parallax":"false"}'
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                            
                            <CartItems/>
                            <CartSummary/>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default CartSection2;

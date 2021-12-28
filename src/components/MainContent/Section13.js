import React from 'react'
import Product from "./Product";
import products from "./data/products.json";

function Section13() {
    
    return (
        <div className='section13'>
            <section
                                            className="elementor-section elementor-top-section elementor-element elementor-element-d7723e8 elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                            data-id="d7723e8"
                                            data-element_type="section"
                                            data-settings='{"craftcoffee_ext_is_background_parallax":"false"}'
                                        >
                                            <div className="elementor-container elementor-column-gap-default">
                                                <div className="elementor-row">
                                                    <div
                                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d28e719"
                                                        data-id="d28e719"
                                                        data-element_type="column"
                                                        data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                                    >
                                                        <div className="elementor-column-wrap elementor-element-populated">
                                                            <div className="elementor-widget-wrap">
                                                                <div
                                                                    className="elementor-element elementor-element-bedfc57 elementor-widget elementor-widget-craftcoffee-woocommerce-grid"
                                                                    data-id="bedfc57"
                                                                    data-element_type="widget"
                                                                    data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                                                    data-widget_type="craftcoffee-woocommerce-grid.default"
                                                                >
                                                                    <div className="elementor-widget-container">
                                                                        <div className="woocommerce-grid-container" >
                                                                            <div className="woocommerce columns-3"  style={{display:"flex",flexFlow: "row wrap",justifyContent: "space-between"}}>
                                                                               
                                                                                {products.map((product) => (
                                                                                   <Product product={product} key={product.id} />
                                                                                 ))}
                                                                              
                                                                            </div>
                                                                        </div>
                                                                    </div>
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

export default Section13

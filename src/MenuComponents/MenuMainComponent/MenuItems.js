import React from 'react';
import {useState} from 'react';
import MenuItem from './MenuItem';
import './CustomCSS/foodmenu.css'
import CartIcon2 from 'CommonComponents/CartIcon2';

function MenuItems(props) {
    const [menu, setMenu] = useState(
        [
            {
                "id": 1,
                "name": "Fried Chicken",
                "regularPrice": "$9",
                "sellingPrice": "$7",
                "description": "Espresso shots topped with hot water",
                "image": "customImages/chettinad-chicken-900x600.png",
                "category": "STARTERS",
                "tags": [],
                "nutritionInfo": {
                    "calories": 480,
                    "totalFat": "20g",
                    "cholestrol": "60mg",
                    "sodium:": "220mg",
                    "totalCarbohydrate": "71g",
                    "protein": "5g",
                    "caffeine": "80mg"
                }

            },

            {
                "id": 2,
                "name": "Butter Chicken",
                "regularPrice": "",
                "sellingPrice": "$7",
                "description": "Signature Espresso Roast with rich flavor",
                "image": "customImages/butter-chicken.png",
                "category": "INDIAN MASALAS",
                "tags": ["Exclusive"],
                "nutritionInfo": {
                    "calories": 480,
                    "totalFat": "20g",
                    "cholestrol": "60mg",
                    "sodium:": "220mg",
                    "totalCarbohydrate": "71g",
                    "protein": "5g",
                    "caffeine": "80mg"
                }

            },

            {
                "id": 3,
                "name": "Dosa",
                "regularPrice": "",
                "sellingPrice": "$7",
                "description": "Some random good drink dazfajhbfcmahbcm",
                "image": "customImages/dosa.jpg",
                "category": "SOUTH INDIAL CLASSIC",
                "tags": [],
                "nutritionInfo": {
                    "calories": 480,
                    "totalFat": "20g",
                    "cholestrol": "60mg",
                    "sodium:": "220mg",
                    "totalCarbohydrate": "71g",
                    "protein": "5g",
                    "caffeine": "80mg"
                }

            },

            {
                "id": 2,
                "name": "Prawn Biriyani",
                "regularPrice": "",
                "sellingPrice": "$7",
                "description": "Signature Espresso Roast with rich flavor",
                "image": "customImages/prawnbiryaniPIN1-683x1024.png",
                "category": "BIRIYANI",
                "tags": [],
                "nutritionInfo": {
                    "calories": 480,
                    "totalFat": "20g",
                    "cholestrol": "60mg",
                    "sodium:": "220mg",
                    "totalCarbohydrate": "71g",
                    "protein": "5g",
                    "caffeine": "80mg"
                }

            },

            
        ]
    )

    const categories = ["BIRIYANI", "INDIAN MASALAS", "SOUTH INDIAL CLASSIC", "STARTERS"]


    


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
                            <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c9f3e7c"
                                data-id="c9f3e7c"
                                data-element_type="column"
                                data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                            >

                                <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                        {
                                            Array.from(Array(2)).map((item,id)=>{
                                                console.log(id);
                                                return(
                                                    <div id="Menu" className='menu'>
                                                        <div
                                                            className="elementor-element elementor-element-6cd32de elementor-widget elementor-widget-heading"
                                                            data-id="6cd32de"
                                                            data-element_type="widget"
                                                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                                            data-widget_type="heading.default"
                                                        >
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">{categories[id]}</h2>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="elementor-element elementor-element-6a86839 elementor-widget elementor-widget-craftcoffee-food-menu"
                                                            data-id="6a86839"
                                                            data-element_type="widget"
                                                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                                            data-widget_type="craftcoffee-food-menu.default"
                                                        >
                                                        <div className="elementor-widget-container">
                                                                <div className="food-menu-container">
                                                                    <div className="food-menu-content-wrapper food-menu">
                                                                        {
                                                                            menu.map((item) => {
                                                                                {/* true ? <MenuItem/> : <div></div> */}
                                                                                if(item.category===categories[id])
                                                                                    return <MenuItem key={item.id} item={item} cartActive = {props.cartActive} setcartActive={props.setcartActive}/>
                                                                                return null;
                                                                        })
                                                                        }
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            

                                                            
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-61d58b4"
                                data-id="61d58b4"
                                data-element_type="column"
                                data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                            >
                                <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                    {
                                            Array.from(Array(2)).map((item,id)=>{
                                                console.log(id);
                                                return(
                                                    <div id="Menu" className='menu'>
                                                        <div
                                                            className="elementor-element elementor-element-6cd32de elementor-widget elementor-widget-heading"
                                                            data-id="6cd32de"
                                                            data-element_type="widget"
                                                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                                            data-widget_type="heading.default"
                                                        >
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">{categories[id+2]}</h2>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="elementor-element elementor-element-6a86839 elementor-widget elementor-widget-craftcoffee-food-menu"
                                                            data-id="6a86839"
                                                            data-element_type="widget"
                                                            data-settings='{"craftcoffee_ext_is_scrollme":"false","craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
                                                            data-widget_type="craftcoffee-food-menu.default"
                                                        >
                                                        <div className="elementor-widget-container">
                                                                <div className="food-menu-container">
                                                                    <div className="food-menu-content-wrapper food-menu">
                                                                        {
                                                                            menu.map((item) => {
                                                                                {/* true ? <MenuItem/> : <div></div> */}
                                                                                if(item.category===categories[id+2])
                                                                                    return <MenuItem key={item.id} item={item} cartActive = {props.cartActive} setcartActive={props.setcartActive}/>
                                                                                return null;
                                                                        })
                                                                        }
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            

                                                            
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default MenuItems;

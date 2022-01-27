import React from 'react';
import {useState} from 'react';
import CartItem from 'CartComponents/CartItem';
import 'CartComponents/CustomCSS/Cart.css';


function CartItems() {
    const [menu, setMenu] = useState(
        [
            {
                "id": 1,
                "name": "CAFE AMERICANO",
                "regularPrice": "$9",
                "sellingPrice": "$7",
                "description": "Espresso shots topped with hot water",
                "image": null,
                "category": "HOT COFFEES",
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
                "name": "ICED COFFEE WITH MILK",
                "regularPrice": "",
                "sellingPrice": "$7",
                "description": "Signature Espresso Roast with rich flavor",
                "image": null,
                "category": "LUNCH",
                "tags": ["wow"],
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
                "name": "ESPRESSO",
                "regularPrice": "",
                "sellingPrice": "$7",
                "description": "Some random good drink dazfajhbfcmahbcm",
                "image": null,
                "category": "BAKERY",
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
                "name": "ICED COFFEE WITH MILK",
                "regularPrice": "",
                "sellingPrice": "$7",
                "description": "Signature Espresso Roast with rich flavor",
                "image": null,
                "category": "COLD COFFEES",
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

    const categories = ["HOT COFFEES", "COLD COFFEES", "BAKERY", "LUNCH"]
  return (
      <div className='cart_items'>
            {
                Array.from(Array(4)).map((item,id)=>{
                    console.log(id);
                    return(
                        <div id="Cart">
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
                                                    if(item.category===categories[id])
                                                        return <CartItem key={item.id} item={item}/>
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
  )
}

export default CartItems;

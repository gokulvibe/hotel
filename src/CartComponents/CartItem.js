import React from 'react'
import {useState} from 'react';
import 'CartComponents/CustomCSS/CartItem.css'

function CartItem(props) {

    const [quantity, setQuantity] = new useState(0);

        return (
            <div className='menuItemWithoutHighlight'>
                <div className="food-menu-grid-wrapper food-tooltip food-menu-1" data-tooltip-content="#tooltip-content-6a86839-1">
                    

                    {/* <div className="food-menu-img">
                        {
                            props.item.image !== null
                            ? <img src={props.item.image} alt="FoodImg" />
                            : <img src="upload/f12bc8af498d45ed92c5d6f1dac64062_result-150x150.jpg" alt="" />
                        }
                    </div> */}

                    <div className="food-menu-content">
                        <div className="food-menu-content-top-holder">
                            <div className="food-menu-content-title-holder">
                                <h3 className="food-menu-title">{props.item.name}</h3>
                            </div>

                            <div className="food-menu-content-title-line"></div>

                            
                            <div className="food-menu-content-price-holder">
                                <div id="price">
                                    <span className="food-menu-content-price-normal"> $7 </span>
                                </div>
                                
                            </div>
                            
                        </div>

                        <div className="food-menu-desc"></div>

                        <div className='add'>
                            <div className='quantity-manage cart'>

                            <button className={quantity > 0 ? "quantity_button minus cart" : "quantity_button minus_zero cart"} onClick={()=>{
                                let current_quantity = quantity;
                                setQuantity(Math.max(0, current_quantity-1));

                            }}
                            >-</button>

                            <p className='quantity cart' style={{padding: ".2em"}}>{quantity}</p>

                            <button className="quantity_button plus cart" onClick={()=>{
                                let current_quantity = quantity;
                                setQuantity(current_quantity+1);

                            }}
                            >+</button>

                            <button className="remove_from_cart_button cart">Remove</button>
                            </div>
                        </div>
                    </div>
    
                    
                </div>
            </div>
        )
    
    
}

export default CartItem;

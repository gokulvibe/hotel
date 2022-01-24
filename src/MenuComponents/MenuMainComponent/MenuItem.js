import { ButtonGroup, Button } from '@mui/material';
import React from 'react'
import './CustomCSS/menuitem.css';

function MenuItem(props) {

    if (props.item.tags.length>0){
        return (
            <div className='menuItemWithHighlight'>
                <div className="food-menu-grid-wrapper food-tooltip food-menu-1 food-menu-highlight" data-tooltip-content="#tooltip-content-6a86839-1">
                    <div className="tooltip_templates">
                        <div id="tooltip-content-6a86839-1" className="food-menu-tooltip-content">
                            <h5>Nutrition Information</h5>
                            <div className="food-menu-tooltip-templates-content">
                                <ul>
                                    <li><strong>Calories</strong> {props.item.nutritionInfo.calories}</li>
                                    <li><strong>Total Fat</strong> {props.item.nutritionInfo.totalFat}</li>
                                    <li><strong>Cholesterol</strong> {props.item.nutritionInfo.cholestrol}</li>
                                    <li><strong>Sodium</strong> {props.item.nutritionInfo.sodium}</li>
                                    <li><strong>Total Carbohydrates</strong> {props.item.nutritionInfo.totalCarbohydrate}</li>
                                    <li><strong>Protein</strong> {props.item.nutritionInfo.protein}</li>
                                    <li><strong>Caffeine</strong> {props.item.nutritionInfo.caffeine}</li>
                                </ul>
                                <p>* 2,000 calories a day is used for general nutrition advice, but calorie needs vary.</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="food-menu-content-highlight-holder menu_highlight">
                        <h4>{props.item.tags[0]}</h4>
                    </div>
                    <div className="food-menu-img">
                        {
                            props.item.image !== null
                            ? <img src={props.item.image} alt="FoodImg" />
                            : <img src="upload/f12bc8af498d45ed92c5d6f1dac64062_result-150x150.jpg" alt="" />
                        }
                    </div>

                    <div className="food-menu-content menu-highlight">
                        <div className="food-menu-content-top-holder">
                            <div className="food-menu-content-title-holder">
                                <h3 className="food-menu-title">{props.item.name}</h3>
                            </div>

                            <div className="food-menu-content-title-line"></div>

                            
                            <div className="food-menu-content-price-holder">
                                {
                                    props.item.regularPrice===""  
                                    ? (
                                        <div id="price">
                                            <span className="food-menu-content-price-normal"> $7 </span>
                                        </div>
                                    )
                                    : (
                                        <div id="price">
                                            <span className="food-menu-content-price-sale"> $9 </span>

                                            <span className="food-menu-content-price-normal"> $7 </span>
                                        </div>
                                    )
                                }
                                
                            </div>
                        </div>

                        <div className="food-menu-desc">{props.item.description}</div>
                        <div className='add'>
                            <div className='quantity-manage'>
                            <button className="quantity_button minus">-</button>
                            <p className='quantity' style={{padding: ".2em"}}>5</p>
                            <button className="quantity_button plus">+</button>
                            <button className="add_to_cart_button">Add to cart</button>
                            </div>
                        </div>
                    </div>
    
                    
                </div>
            </div>
        )
    }

    else{
        return (
            <div className='menuItemWithoutHighlight'>
                <div className="food-menu-grid-wrapper food-tooltip food-menu-1" data-tooltip-content="#tooltip-content-6a86839-1">
                    <div className="tooltip_templates">
                        <div id="tooltip-content-6a86839-1" className="food-menu-tooltip-content">
                            <h5>Nutrition Information</h5>
                            <div className="food-menu-tooltip-templates-content">
                                <ul>
                                    <li><strong>Calories</strong> {props.item.nutritionInfo.calories}</li>
                                    <li><strong>Total Fat</strong> {props.item.nutritionInfo.totalFat}</li>
                                    <li><strong>Cholesterol</strong> {props.item.nutritionInfo.cholestrol}</li>
                                    <li><strong>Sodium</strong> {props.item.nutritionInfo.sodium}</li>
                                    <li><strong>Total Carbohydrates</strong> {props.item.nutritionInfo.totalCarbohydrate}</li>
                                    <li><strong>Protein</strong> {props.item.nutritionInfo.protein}</li>
                                    <li><strong>Caffeine</strong> {props.item.nutritionInfo.caffeine}</li>
                                </ul>
                                <p>* 2,000 calories a day is used for general nutrition advice, but calorie needs vary.</p>
                            </div>
                        </div>
                    </div>

                    <div className="food-menu-img">
                        {
                            props.item.image !== null
                            ? <img src={props.item.image} alt="FoodImg" />
                            : <img src="upload/f12bc8af498d45ed92c5d6f1dac64062_result-150x150.jpg" alt="" />
                        }
                    </div>

                    <div className="food-menu-content">
                        <div className="food-menu-content-top-holder">
                            <div className="food-menu-content-title-holder">
                                <h3 className="food-menu-title">{props.item.name}</h3>
                            </div>

                            <div className="food-menu-content-title-line"></div>

                            
                            <div className="food-menu-content-price-holder">
                                {
                                    props.item.regularPrice===""  
                                    ? (
                                        <div id="price">
                                            <span className="food-menu-content-price-normal"> $7 </span>
                                        </div>
                                    )
                                    : (
                                        <div id="price">
                                            <span className="food-menu-content-price-sale"> $9 </span>

                                            <span className="food-menu-content-price-normal"> $7 </span>
                                        </div>
                                    )
                                }
                                
                            </div>
                            
                        </div>

                        <div className="food-menu-desc">{props.item.description}</div>

                        <div className='add'>
                            <div className='quantity-manage'>
                            <button className="quantity_button minus">-</button>
                            <p className='quantity' style={{padding: ".2em"}}>5</p>
                            <button className="quantity_button plus">+</button>
                            <button className="add_to_cart_button">Add to cart</button>
                            </div>
                        </div>
                    </div>
    
                    
                </div>
            </div>
        )
    }
    
}

export default MenuItem

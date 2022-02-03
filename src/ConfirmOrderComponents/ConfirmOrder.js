import React from 'react';
import "ConfirmOrderComponents/CustomCSS/ConfirmOrder.css"
import {useState} from 'react'

function ConfirmOrder(props) {
    const [Items, setItems] = useState(["Chicken 65", "Paneer Butter Masala", "Butter Naan"]);
  return (
      <div className='summary_container confirm-order'>
                    <div className="summary confirm-order">
                        <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
                        <div className="summary-subtotal">
                        {
                            Items.map(item => (
                                <div className='item'>
                                <div className="subtotal-title">{item}</div>
                                <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
                                </div>
                                
                            ))
                        }
                        </div>


                        <div className="summary-subtotal">
                        <div className="subtotal-title">Subtotal</div>
                        <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
                        <div className="summary-promo">
                            <div className="promo-title">Taxes</div>
                            <div className="promo-value final-value" id="basket-promo">50</div>
                        </div>
                        </div>
                        {/* <div className="summary-delivery">
                        <select name="delivery-collection" className="summary-delivery-selection">
                            <option value="0" selected="selected">Select Collection or Delivery</option>
                            <option value="collection">Collection</option>
                            <option value="first-className">Royal Mail 1st ClassName</option>
                            <option value="second-className">Royal Mail 2nd ClassName</option>
                            <option value="signed-for">Royal Mail Special Delivery</option>
                        </select>
                        </div> */}
                        <div className="summary-total">
                        <div className="total-title">Total</div>
                        <div className="total-value final-value" id="basket-total">180.00</div>
                        </div>
                        <div className="summary-checkout">
                        <button className="checkout-cta"
                        >Proceed to checkout</button>
                        </div>
                    </div>

                    </div>

  )
}

export default ConfirmOrder;


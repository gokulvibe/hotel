import React from 'react';
import "CartComponents/CustomCSS/CartSummary.css"
import Modal from 'CommonComponents/Modal';
import { propTypes } from 'react-bootstrap/esm/Image';
function CartSummary(props) {
  return (
      <div className='summary_container'>
                    <div className="summary">
                        <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
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
                        <button className="checkout-cta" onClick={() => {
                             console.log("Hi")
                             props.setshowModal(true);

                        }}
                        >Go to Secure Checkout</button>
                        </div>
                    </div>

                    </div>

  )
}

export default CartSummary;

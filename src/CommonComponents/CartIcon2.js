import React, { useState } from 'react'
import 'CommonComponents/CustomCSS/CartIcon.css';
import { Link } from 'react-router-dom';

function CartIcon2() {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <div className='CartIcon2'>
        <div className={cartOpen?"menu_cart_icon open":"menu_cart_icon"} title="Cart" onClick={() => {
          console.log(cartOpen);
          setCartOpen(!cartOpen);
        }

        }>
            <div className="cart_button" title="Total Quantity"><div className='cart_button_content one'>1</div></div>
            <div className="cart_button" title="Total Price"><div className='cart_button_content three'>500Rs</div></div>
            {/* <Link to='/cart' > */}
              <div className="cart_button" title="Proceed to checkout"><div className='cart_button_content two'></div></div>
            {/* </Link> */}
        </div>
    </div>
  )
}

export default CartIcon2;

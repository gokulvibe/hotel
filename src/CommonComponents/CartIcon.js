import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function CartIcon(props) {
  return (
    <div className={props.cartActive ? 'cart_icon' : 'cart_icon none'}>
        <div className='cart_quantity_text'>
            1
        </div>
        <div className='icon'>
            <Link to='/cart' >
                <AiOutlineShoppingCart className={props.cartActive ? 'cart_icon' : 'cart_icon none'}/>
            </Link>
        </div>
    </div>
  );
}

export default CartIcon;

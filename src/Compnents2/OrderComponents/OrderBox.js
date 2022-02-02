import React from 'react';
import "scrollbarContainer.css";
import "App.css";
import "Compnents2/CustomCSS/Orders.css";
import Filter from "Compnents2/OrderComponents/Filter";

function OrderBox(){
    return(
        <div class="order">
            <h1 className='orderHeader' style={{fontFamily:"Arkipelago",color:"#ec8649",textTransform:"none",position:"relative",whiteSpace:"nowrap",textAlign:"left"}}>Your Orders</h1>
            <Filter/>
        </div>
    )
}

export default OrderBox;
import React from "react";
import "Compnents2/CustomCSS/Order.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Order ({order: {id, date, items,price,type}}) {
  return (
    <div class="container square-animation" data-aos="zoom-in-up" >
      <div className="column1" >
        <h2 style={{color:"white"}}>#{id}-{date}</h2>
        {items.map(item=>(
            <div>
             <h3 key={item.name} style={{color:"#ec8649"}}>{item.name}-X{item.qty}</h3>
             <br/>
            </div>
        ))}
        <h3  style={{color:"#ec8649"}}><span style={{color:"white"}}>Total:</span>{price}$</h3>
      </div>
      <div className="column2">
          <button>{type==='previous'?'Order Again':'Edit Order'}</button>
          <button>{type==='previous'?'Add to cart':'Cancel Order'}</button>
          <h3 style={{color:type==='previous'?"green":"#ec8649"}}><span style={{color:"white"}}>Order Status:</span>{type==='previous'?'Delivered':'Awaiting Pickup'}</h3>
      </div>
    </div>
  );
}
 
export default Order;

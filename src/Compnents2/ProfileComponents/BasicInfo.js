import React from 'react';
import Avatar from "img/avatar.png";
import "Compnents2/CustomCSS/Profile.css";
import "scrollbarContainer.css"

function BasicInfo(){
    return(
        <div className='BasicInfo' >
            <div id="profileCard">
              <img src={Avatar} alt="Avatar"/>
              <div id="boxed">
                <br/>  
                <h1><mark style={{fontFamily:"Arkipelago",textTransform:"none"}}>Ashok Kaushik</mark></h1>
              </div>
              <br/>
              <h3>&#128231;-kaushikashok45@gmail.com</h3>
              <h3>&#128241;-7358427164</h3>
              <br/>
              <h1><mark style={{fontFamily:"Arkipelago",textTransform:"none"}}>Explore</mark></h1>
              <div class="table">
               <ul>
                  <li><a href="http://allisondskinner.com">Your Orders</a></li>
                  <li><a href="/menu">Our Menu</a></li>
                  <li><a href="/cart">Your Cart</a></li>
                  <li><a href="http://allisondskinner.com">Give Feedback</a></li>
               </ul>
              </div> 
            </div>
        </div>
    )
}

export default BasicInfo;
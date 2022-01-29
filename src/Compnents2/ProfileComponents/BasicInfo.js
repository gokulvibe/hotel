import React from 'react';
import Avatar from "img/avatar.png";
import "Compnents2/CustomCSS/Profile.css";
import "scrollbarContainer.css"

function BasicInfo(){
    return(
      <div className='BasicInfo' >
            <div id="profileCard">
              <div className='column1'>
                <img src={Avatar} alt="Avatar"/>
                <div id="boxed">
                  <br/>  
                  <h1><mark style={{fontFamily:"Arkipelago",textTransform:"none"}}>Ashok Kaushik</mark></h1>
                </div>
                <br/>
                <h3>&#128231;-kaushikashok45@gmail.com</h3>
                <h3>&#128241;-7358427164</h3>
              </div>
              <div className='column2'>
                <h1 style={{textAlign:"center"}}><mark style={{fontFamily:"Arkipelago",textTransform:"none"}}>Explore</mark></h1>
                <div className="table">
                 <ul className='options'>
                    <li className='oli'><a href="http://allisondskinner.com">Your Orders</a></li>
                   
                    <li className='oli'><a href="/menu">Give Feedback</a></li>
                    
                    <li className='oli'><a href="/cart">Your Cart</a></li>
                    
                    <li className='oli'><a href="http://allisondskinner.com">Our Menu</a></li>
                 </ul>
                </div>
              </div>   
            </div>
      </div>
    )
}

export default BasicInfo;
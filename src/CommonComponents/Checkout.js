import ConfirmOrder from 'ConfirmOrderComponents/ConfirmOrder';
import React from 'react';
import { useState } from 'react';
import "CommonComponents/CustomCSS/Checkout.css"
import Timeline from './Timeline';
import Tabs from 'Compnents2/Tabs';
import StripeMain from 'StripeComponents/StripeMain';

function Checkout(props) {
  const [Progress, setProgress] = useState(0);
  if (Progress == 0){
    return (
      <div id='blank_page' className='blank_page'>
      <Timeline value={["grey", "grey", "grey", "grey", "grey"]}/>   
      <Tabs/>
      {/* <ConfirmOrder/> */}
      {/* <StripeMain/> */}
      </div>
  );
  }

  else if (Progress == 1){
    return (
      <div id='blank_page' className='blank_page'>
      <Timeline value={["green", "green", "grey", "grey", "grey"]}/>   
      {/* <Tabs/> */}
      <ConfirmOrder/>
      {/* <StripeMain/> */}
      </div>
  );
  }

  else if (Progress == 2){
    return (
      <div id='blank_page' className='blank_page'>
      <Timeline value={["green", "green", "green", "green", "grey"]}/>   
      {/* <Tabs/> */}
      {/* <ConfirmOrder/> */}
      <StripeMain/>
      </div>
  );
  }

  else{
    return(
      <div id='blank_page' className='blank_page'>
      <h1>Error</h1>
      </div>
    )
  }
  
}

export default Checkout;

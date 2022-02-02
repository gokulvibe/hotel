import React from 'react';
import 'CommonComponents/CustomCSS/Modal.css'
import Tabs from 'Compnents2/Tabs';
import Timeline from 'CommonComponents/Timeline';
import ConfirmOrder from 'ConfirmOrderComponents/ConfirmOrder';
import StripeMain from 'StripeComponents/StripeMain';

function Modal(props) {
  return (
    <div id="myModal" class="my-modal">

    

    {/* Modal content */}
    <div class="my-modal-content">
    
      <span class="modal-close" onClick={()=>{
        props.setshowModal(false);
      }

      }>&times;</span>

      {/* <Timeline/> */}
      {/* <Tabs/> */}
      <ConfirmOrder/>
      {/* <StripeMain/> */}
    </div>
  
  </div>
  )
}

export default Modal;

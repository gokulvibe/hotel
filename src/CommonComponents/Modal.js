import React from 'react';
import 'CommonComponents/CustomCSS/Modal.css'
import Tabs from 'Compnents2/Tabs';
import Timeline from 'CommonComponents/Timeline';
import ConfirmOrder from 'ConfirmOrderComponents/ConfirmOrder';

function Modal(props) {
  return (
    <div id="myModal" class="my-modal">

    

    {/* Modal content */}
    <div class="my-modal-content">
    
      <span class="modal-close" onClick={()=>{
        props.setshowModal(false);
      }

      }>&times;</span>

<Timeline/>
      <ConfirmOrder/>
    </div>
  
  </div>
  )
}

export default Modal;

import React from 'react';
import 'CommonComponents/CustomCSS/Modal.css'
import Tabs from 'Compnents2/Tabs';

function Modal(props) {
  return (
    <div id="myModal" class="modal">

    {/* Modal content */}
    <div class="modal-content">
      <span class="close" onClick={()=>{
        props.setshowModal(false);
      }

      }>&times;</span>
      {props.children}
      Some content here
    </div>
  
  </div>
  )
}

export default Modal;

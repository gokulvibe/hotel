import React from 'react'
import "CommonComponents/CustomCSS/BottomCartBar.css";
import { Link } from 'react-router-dom';

function BottomCartBar() {
  return (
    <div className='BottomCartBar'>
        <div className="phone">
        {/* <input type="radio" name="radio" id="input_1"></input>
        <input type="radio" name="radio" id="input_2" checked="checked"></input>
        <input type="radio" name="radio" id="input_3"></input> */}

        
        <label for="input_1"><i className="fa">1 Item</i></label>
        {/* <label for="input_2"><i className="fa fa-shopping-cart"></i></label> */}
        <label for="input_3"><i className="fa">500Rs</i></label>

        <Link to='/checkout' >
        <div className="circle"></div>
        </Link>

        <div className="phone_content">
            <div className="phone_bottom">
                <span className="indicator"></span>
            </div>
        </div>

    </div>
    </div>
  )
}

export default BottomCartBar
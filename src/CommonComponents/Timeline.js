import React from 'react';
import 'CommonComponents/CustomCSS/Timeline.css'


function Timeline() {
  return (
      <div id="timeline">
        <div className="Timeline">

        {/* <svg height="5" width="200">
        <line x1="0" y1="0" x2="200" y2="0" style={{stroke:"#004165", strokeWidth:"5"}} />
        Sorry, your browser does not support inline SVG.
    </svg> */}
    
        <div className="event login">
        
        <div className="eventBubble">
            <div className="eventTitle">Login</div>
        </div>
        <svg height="20" width="20">
            <circle cx="10" cy="11" r="5" fill="green" />
        </svg>
        
        </div>
        
        <svg height="5" width="300">
        <line x1="0" y1="0" x2="300" y2="0" style={{stroke:"green", strokeWidth:"5"}} />
        Sorry, your browser does not support inline SVG.
        </svg>
    
        <div className="event confirm">
        
        <div className="eventBubble">
            <div className="eventTitle">Confirm Order</div>
        </div>
        <svg height="20" width="20">
            <circle cx="10" cy="11" r="5" fill="grey" />
        </svg>
        
        </div>

        <svg height="5" width="300">
        <line x1="0" y1="0" x2="300" y2="0" style={{stroke:"grey", strokeWidth:"5"}} />
        Sorry, your browser does not support inline SVG.
        </svg>

        <div className="event checkout">
        
        <div className="eventBubble">
            <div className="eventTitle">Checkout</div>
        </div>
        <svg height="20" width="20">
            <circle cx="10" cy="11" r="5" fill="grey" />
        </svg>
        
        </div>
        
    
         
        
        
        
        
    
        
    </div>
    </div>
  );
}

export default Timeline;

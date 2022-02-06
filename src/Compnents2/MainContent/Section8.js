import React from 'react'

function Section8() {
    return (
        <div id='section8' className='my-auto'>
            <h1 className='myDiv' style={{textAlign:"center",fontFamily:"Arkipelago",textTransform:"none",color:"#ec8649"}}>Events</h1>
             <div className='container d-lg-flex flex-lg-row-reverse mx-auto' style={{borderColor:"black"}}>
               <div className='col'>
                   <img data-aos="zoom-in-right" className='fluid-image min-height-500-px' src="images/event1.jpg" style={{borderRadius:"2em",minHeight:"400px"}} ></img>
               </div>
                <div className='col'>
                   <img data-aos="zoom-in-right" className='fluid-image' src="images/event2.webp" style={{borderRadius:"2em",minHeight:"400px"}} ></img>
               </div>
               <div className='col'>
                   <h4 style={{color:"white",whiteSpace:"no-wrap"}}>Make your events fullfilled</h4>
                   <h4  style={{whiteSpace:"no-wrap",color:"white"}}>Events We serve throughout your special occasions with full responsibility in serving the food as well</h4>
                   
               </div>
           </div> 
           
        </div>
    )
}

export default Section8;

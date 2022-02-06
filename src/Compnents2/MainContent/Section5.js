import React from 'react'
import '../../scrollbarContainer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dosa from "../../img/variety-indian-food.jpeg"
AOS.init();

function Section5() {
    return (
        <div id='section5' className='d-block mx-auto' data-aos="zoom-in-up" >
             <div className='container d-lg-flex flex-lg-row-reverse mx-auto' style={{borderColor:"black"}}>
               <div className='col' style={{borderRadius:"2em",overflow:"hidden"}}>
                   <img data-aos="zoom-in-left"  src={dosa}  style={{borderRadius:"2em",minWidth:"300px",minHeight:"300px"}} ></img>
               </div>
               <div className='col mx-sm-auto'>
              
                   <h1 className='myDiv' style={{color:"#ec8649",fontFamily:"Arkipelago",textTransform:"none",fontSize:"3em",whiteSpace:"no-wrap"}}>Taste the difference</h1>
                   <h4 style={{color:"white"}}>Feast your taste-buds to authentic and pure South-Indian cuisine</h4>
               </div>
           </div>

          
        </div>
    )
}

export default Section5;

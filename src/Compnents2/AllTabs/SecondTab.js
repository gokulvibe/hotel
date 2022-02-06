import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const SecondTab = () => {
  return (
    <div className="SecondTab" data-aos="zoom-in-left">
        <form method="post" action="contactform/contactengine.php" class="forms-input">
                                                                                                                  
          <label for="Name" style={{fontFamily:"Roboto condensed,sans-serif",color:"white",fontSize:"1.5em",textTransform: "none"}}>NAME:</label>
          <input type="email" name="Name" id="Name" />
          <label for="Phone" style={{fontFamily:"Roboto condensed,sans-serif",color:"white",fontSize:"1.5em",textTransform: "none"}}>PHONE:</label>
          <input type="tel" name="Phone" id="Phone" />
          <label for="Email" style={{fontFamily:"Roboto condensed,sans-serif",color:"white",fontSize:"1.5em",textTransform: "none"}}>EMAIL:</label>
          <input type="email" name="Email" id="Email" />

            <label for="Password" style={{fontFamily:"Roboto condensed,sans-serif",color:"white",fontSize:"1.5em",textTransform: "none"}}>PASSWORD:</label>
            <input type="password" name="Password" id="Password" />
          <label for="Cpassword" style={{fontFamily:"Roboto condensed,sans-serif",color:"white",fontSize:"1.5em",textTransform: "none"}}>CONFIRM PASSWORD:</label>
          <input type="password" name="Cpassword" id="Cpasswprd" />                                                                                                          
          <input type="submit" name="submit" value="Sign up" class="submit-button" />
      </form>
        
    </div>
  );
};
export default SecondTab;
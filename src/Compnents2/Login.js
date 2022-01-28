import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./MainContent/CustomCSS/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
   
                                                                               

          <form method="post" action="contactform/contactengine.php" class="forms-input">
                                            
  
              <label for="Email">Email:</label>
              <input type="text" name="Email" id="Email" />

                <label for="City">Password:</label>
              <input type="text" name="Password" id="Password" />
              
              

              <input type="submit" name="submit" value="LOGIN" class="submit-button" />
          </form>
        
                                                                                                   
   
  );
}
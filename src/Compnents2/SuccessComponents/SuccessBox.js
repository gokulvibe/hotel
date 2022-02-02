import React from 'react';
import "scrollbarContainer.css";
import "App.css";
import { TextareaAutosize } from '@mui/material';
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function SuccessBox(){

    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = event => {
     event.preventDefault();
     setSubmitting(true);
     setTimeout(() => {
     setSubmitting(false);
     }, 3000)
     navigate("/success");
    }
    
    return(
        <div classname="Box" style={{paddingTop:"25vh",paddingBottom:"40vh",width:"fit-content",marginLeft:"auto",marginRight:"auto"}}>
              <form method="post" action="contactform/contactengine.php" onSubmit={handleSubmit} class="forms-input" id="feed">
                   <h1 style={{fontFamily:"Arkipelago,sans-serif",color:"#ec8649",fontSize:"5em",textTransform: "none",textAlign:"left"}}>Thank you:</h1>
                   <h4 style={{color:"white",textAlign:"left"}}>Tell us your thoughts.</h4>
                   <TextareaAutosize name="feedback" id="feedback" placeholder='Type here...'  style={{display:"block",width:"30vw",height:"40vh",padding:"10px",color:"black",minWidth:"275px",marginLeft:"auto",marginRight:"auto",borderRadius:"1.25em"}} required/>
                   <button type="submit" value="submit" style={{position:"relative",display:"block",fontSize:"1em",width:"fit-content",marginTop:"20px",marginLeft:"auto",marginRight:"auto"}  }>Submit</button>
                   {submitting &&
                     <div style={{color:"white",textAlign:"center"}}>Submtting Form...</div>
                   }
              </form>
        </div>
    )
}

export default SuccessBox;
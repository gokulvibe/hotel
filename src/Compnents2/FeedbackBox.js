import React from 'react';
import "scrollbarContainer.css";
import "App.css";
import { TextareaAutosize } from '@mui/material';

function FeedbackBox(){
    return(
        <div classname="Box" style={{paddingTop:"25vh",paddingBottom:"40vh"}}>
              <form method="post" action="contactform/contactengine.php" class="forms-input" id="feed">
                   <h1 style={{fontFamily:"Arkipelago,sans-serif",color:"#ec8649",fontSize:"5em",textTransform: "none",textAlign:"center"}}>Feedback:</h1>
                   <h4 style={{color:"white",textAlign:"center"}}>Tell us your thoughts.</h4>
                   <TextareaAutosize name="feedback" id="feedback" placeholder='Type here...' style={{display:"block",width:"30vw",height:"40vh",padding:"10px",color:"black",minWidth:"275px",marginLeft:"auto",marginRight:"auto",borderRadius:"1.25em"}}/>
                   <a href="http://allisondskinner.com" style={{display:"block",fontSize:"1em",width:"fit-content",marginTop:"20px",marginLeft:"auto",marginRight:"auto"}}>Submit</a>
              </form>
        </div>
    )
}

export default FeedbackBox;
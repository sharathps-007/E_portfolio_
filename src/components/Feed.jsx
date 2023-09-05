import React from "react";
import {FaEnvelopeOpenText} from "react-icons/fa";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


function Feed(){

    return <div class="feedback">
<h1>
<KeyboardDoubleArrowDownIcon className="feed-icons"/> Please provide your Feedback <KeyboardDoubleArrowDownIcon className="feed-icons"/>
</h1>
<p>Please feel free to share your thoughts, whether they relate to the overall layout,<br/>content arrangement, design aesthetics, or any other aspects that catch your attention.<br/>Your critical assessment will be useful in helping me refine my portfolio to its fullest potential.</p>
<br/><br/>
<div class="feedback-btn">
<a href="https://docs.google.com/forms/d/e/1FAIpQLSeCeJrKmcbPBEgyseh2VI4hO2GZQN8ROIjzGFWK6rzp8pLkDg/viewform?usp=sf_link" class="btn btn-feed" style={{color:"aliceblue"}}><FaEnvelopeOpenText style={{marginBottom:"0.4rem", marginRight:"0.2rem"}} fontSize="medium"/> feedback</a>
</div>
<h2>
    Thank you !
</h2>
    </div>
}

export default Feed;
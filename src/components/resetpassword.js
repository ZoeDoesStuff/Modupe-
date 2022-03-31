import React from "react";
import {useNavigate} from "react-router-dom"
import "./resetpassword.css"; 
function ResetPass() {
    return (
        <><div className="grid grid-cols-2" /> <>
        <h2 className= "font-sans-serif">Reset Password</h2><br/><label htmlFor="email">Email:</label><input type="email" name="email" id="email" />
        <br></br><label htmlFor="newpassword">New Password:</label><input type="password" name="newpassword" id="newpassword" />
            <br></br><button type="submit">Enter</button></></>
        
        )
}
export default ResetPass;
import React from "react";
import Call from "../images/call.jpg";
import Github from "../images/github.png";
import Mail from "../images/mail.png";
import image from "../images/123.png";
export const MyWall = (props) => {
    return (
        <div className="content">
        <div className="left">
            <div className="iname">
                PRADOSH 
            <br/>
            KUMAR
            <br/>
            SAHOO
            </div>
            <div className="details">
                <a href="mailto:pradoshsahoo81@gmail.com"> <img className="icon" src={Mail} alt=""/> pradoshsahoo81@gmail.com</a>
                <br/>
                <a href="http://github.com/pradoshsahoo"><img className="icon" src={Github} alt=""/> git.hub/pradoshsahoo</a>
                <br/>
                <a href="tel:7008123452"><img className="icon" src={Call} alt=""/> +917008071464</a>
            </div>
        </div>
        <div className="dp">
            <img src={image} alt=""/>
        </div>
        </div>
    )
}
import React from "react";

function Details(props){
    return ( <div class="homepage-content">
    <div class="homepage-content-txt">
        Instructor Details:
        <div class="sub-content-txt">
            {props.name} <br />
            <b>Email:</b> {props.email} <br />
            <b>UTA ID:</b> {props.id}
        </div>
        <div class="login-btn">
            <a href="" class="login-btn-txt-2">Sign Out</a>
        </div>
    </div>
    </div>)
}

export default Details;
import React from "react";

function Details(props) {
  return (
    <div class="homepage-content">
      <div class="homepage-content-txt">
        Admin Details:
        <div class="sub-content-txt">
          <b>Name:</b> {props.name} <br />
          <b>Email:</b> {props.email} <br />
          <b>UTA ID:</b> {props.id}
        </div>
        {/* <div class="login-btn">
          {/* <a href="" class="login-btn-txt-2">
            Sign Out
          </a> */}
        
      </div>
    </div>
  );
}

export default Details;

import React from "react";

function Avatar(props) {

    return (
        <div className="profile-img">
          <img src={props.img} alt="" /><br />
          <div className="edit-profile-photo">
            <a href="" className="edit-profile-photo">edit</a>
          </div>
        </div>
      );
    }
    

export default Avatar;
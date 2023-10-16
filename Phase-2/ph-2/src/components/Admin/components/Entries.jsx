import React from "react";

function Entries(){
    return (
        <div>
        <br /> <br />
        <div className="feedback-label">
      <div className="feedback-txt">Update details:</div><br />
      <input type="text" className="update-details-inp" placeholder="Enter name" /><br />
      <input type="text" className="update-details-inp" placeholder="Enter email" /><br />
      <input type="text" className="update-details-inp" placeholder="Enter ID" /><br />
      <button className="feedback-submit-btn">Update</button>
        </div><br /><br /><br />
        </div>
    )
}


export default Entries;
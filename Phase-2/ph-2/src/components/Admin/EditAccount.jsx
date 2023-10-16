import React from "react";
import "./EditAccount.css";
import NavBar from "../UniversalComponents/NavBar";
function EditAccount(){
    return<div>
    <NavBar x="admin" /> 
    <div>
        <div class="main-section">
        <section className="editAccount-section">
            <div className="course-label">Edit user details: <b>1003987654</b></div>
            <input type="text" name="name" placeholder="Edit user name" /><br />
            <input type="text" name="id" placeholder="Edit userID" /><br />
            <input type="text" name="course-instructor" placeholder="Edit role" /><br />
            <input type="text" name="meeting-time" placeholder="Edit email" /><br />
            <button type="submit" className="edit-account">Edit</button>
        </section>
    
        <section className="editAccount-section">
            <div class="course-label"><b>Edit user permissions</b></div>
            <input type="text" name="name" placeholder="Enter permission name" /><br />
            <input type="text" name="meeting-time" placeholder="Enter Value" /><br />
            <button type="submit" class="permit-button">Permit</button>
        </section>
    
    </div>
    </div>
    </div>
}

export default EditAccount;
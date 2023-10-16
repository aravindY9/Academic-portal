import React from "react";
import NavBar from "../UniversalComponents/NavBar";
import './EditCourses.css'
function EditCourses(){

    return <div>
        <NavBar x="admin" />
     <section className="editCourse-section">
    
    <div className="course-label">Edit course details: <b>CSE5338</b></div>
    <input type="text" name="course-name" placeholder="Enter course name" />
    <input type="text" name="course-code" placeholder="Enter course code" /><br />
    <input type="text" name="course-instructor" placeholder="Enter instructor name" />
    <input type="text" name="room-number" placeholder="Enter room number" /><br />
    <input type="text" name="course-instructor" placeholder="Enter syllabus link" />
    <input type="text" name="meeting-time" placeholder="Enter meeting time" /><br />
    <textarea name="" id="" cols="30" rows="10" placeholder="Enter course objectives"></textarea><br />
    <button type="submit" className="edit-course">Submit</button>
</section></div>
}

export default EditCourses;
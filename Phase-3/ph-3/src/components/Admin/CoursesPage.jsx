import React, { useState, useEffect } from "react";
import CreateTable from "./components/CreateTable";
import "./AccountPage.css";
import TableEntries from "./components/TableEntries";
import NavBar from "../UniversalComponents/NavBar";



function CoursePage(){

    const [courseData, setCourseData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("http://localhost/backend/coursedata.php", {
            credentials: 'include',
          })
        .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(`Response status is not 200: ${response.status}`);
            }
          })
            .then((data) => setCourseData(data))
            .catch((error) => setError(error));;
    }, []);
    if (error) {
        // Handle the error condition, e.g., server is down
        return <div>Access Denied: Server is not responding.</div>;
      }

    const deleteUser = (id) => {
        fetch(`http://localhost/backend/deletecourse.php?id=${id}`)
            .then((response) => response.json())
            .then(() => {
                // Force a page refresh to get the latest data
                window.location.reload(true);
            })
            .catch((error) => console.error(error));
    };
    return<div>
        <NavBar x="admin" />

    <section>
    <div className="view-assessments">View Courses</div><CreateTable th1="Course" th2="Code" th3="Instructor" data={courseData.map(function mapentries (data){
    return <TableEntries name={data.COURSE} id={data.CODE} info={data.INSTRUCTOR} edit={`/admin/editcourse/${data.CODE}`} deleteAccount={() => deleteUser(data.CODE)}/>
})}/><a href="/admin/createcourse"><button className="createuser">Create Course</button></a></section> </div>
    ;
}

export default CoursePage;
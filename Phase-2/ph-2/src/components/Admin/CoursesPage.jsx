

import React from "react";
import CreateTable from "./components/CreateTable";
import "./AccountPage.css";
import Courses from "./CourseData";
import TableEntries from "./components/TableEntries";
import NavBar from "../UniversalComponents/NavBar";
function CoursePage(){
    return<div>
        <NavBar x="admin" />

    <section>
    <div className="view-assessments">View Courses</div><CreateTable th1="Course" th2="Code" th3="Instructor" data={Courses.map(function mapentries (data){
    return <TableEntries name={data.course} id={data.code} info={data.instructor} edit="/admin/editcourse"/>
})}/></section> </div>
    ;
}

export default CoursePage;
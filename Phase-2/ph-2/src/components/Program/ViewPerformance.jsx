import React from "react";
import "./ViewPerformance.css"
import NavBar from "../UniversalComponents/NavBar";

function ViewPerformance(){
    return <div> 
    <NavBar x="program"/>
    <div class="homepage-content">
    <div class="homepage-content-txt">
        <select name="" id="" class="select-course">
            <option value="">Change Course</option>
            <option value="">CSE 5335</option>
            <option value="">CSE 5338</option>
            <option value="">CSE 6363</option>
        </select><br />
        Course: CSE 5338
        <div class="sub-content-txt">
            Information Security-1
            <br /><b>Student Name: </b> Jane Doe
            <br /><b>Email: </b> jxd2341@mavs.uta.edu
            <br /><b>ID: </b>1000XXXXXX <br /><br />
            <div class="performance-label">
                <div class="perf"><b>Performance:</b></div>
                <div class="grades">Total Grade: <b>A</b></div>
            </div>
        </div>
        <table class="performance-table">
            <tr>
                <th class="table-head">Exam</th>
                <th class="table-head">Score</th>
            </tr>
            <tr>
                <td class="table-row-1">Exam1</td>
                <td class="table-row-1">90/100</td>
            </tr>
            <tr>
                <td class="table-row-2">Exam2</td>
                <td class="table-row-2">90/100</td>
            </tr>
            <tr>
                <td class="table-row-1">Exam3</td>
                <td class="table-row-1">90/100</td>
            </tr>
            <tr>
                <td class="table-row-2">Exam4</td>
                <td class="table-row-2">90/100</td>
            </tr>
        </table>
    </div>
</div>
</div>;
}

export default ViewPerformance;
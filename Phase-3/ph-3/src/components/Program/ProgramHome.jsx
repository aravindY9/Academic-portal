import React from "react";
import NavBar from "../UniversalComponents/NavBar";
import "./ProgramHome.css"
function ProgramHome(){
    return <div>
    <div>  
    <NavBar x="program"/>
    <div className="homepage-content-program">
    <div className="homepage-content-program-txt"> 
        Send Notification  
        <div className="sub-content-txt">
            <textarea name="" id="" cols="30" rows="10" placeholder="Enter message" className="text-inp"></textarea>
            <input type="text" placeholder="Enter email" className="text-inp" /> 
            <button className="send-btn">Send</button>
        </div>
    </div>
    <div className="homepage-content-program-txt"> 
        View Student Performance
        <div className="sub-content-txt">
            <input type="text" placeholder="Enter student ID" className="text-inp" />  
            <div className="student-list">
                <li className="student-list-item"><a href="/program/viewperformance" className="student-list-item">Student 1</a></li>
                <li className="student-list-item"><a href="/program/viewperformance" className="student-list-item">Student 2</a></li>
                <li className="student-list-item"><a href="/program/viewperformance" className="student-list-item">Student 3</a></li>
                <li className="student-list-item"><a href="/program/viewperformance" className="student-list-item">Student 4</a></li>

            </div>        
        </div>
    </div>
</div>
</div>
</div>;
}

export default ProgramHome;
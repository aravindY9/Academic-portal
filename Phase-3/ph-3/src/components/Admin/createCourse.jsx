import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../UniversalComponents/NavBar";
import './EditCourses.css';

function CreateCourse() {
    const navigate = useNavigate();
    const [courseData, setCourseData] = useState({
        COURSE: "",
        CODE: "",
        INSTRUCTOR: "",
        ROOM_NUMBER: "",
        SYLLABUS: "",
        TIME: "",
        OBJECTIVE: "",
    });
    const [error, setError] = useState(null);
    // useEffect(() => {
    //     fetch(`http://localhost/backend/fetchCourseData.php?id=${courseId}`, {
    //         credentials: 'include',
    //       })
    //       .then((response) => {
    //         if (response.ok) {
    //           return response.json();
    //         } else {
    //           throw new Error(`Response status is not 200: ${response.status}`);
    //         }
    //       })
    //         .then((data) => {
    //             if (data.length == 0){
    //                 // courseId = "Course Not Found"
    //                 setCourseData({
    //                     COURSE: "Not Found",
    //                     CODE: "Not Found",
    //                     INSTRUCTOR: "Not Found",
    //                     ROOM_NUMBER: "Not Found",
    //                     SYLLABUS: "Not Found",
    //                     TIME: "Not Found",
    //                     OBJECTIVE: "Not Found",
    //                 });
                    
    //             }
    //             else{
    //                 setCourseData(data[0]);
    //                 // console.log(data.length);
    //             }
                
    //         })
    //         .catch((error) => setError(error));
    // }, [courseId]);
    // if (error) {
    //     // Handle the error condition, e.g., server is down
    //     return <div>Access Denied: Server is not responding.</div>;
    //   }

    const upload = () => {
        const updatedCourseData = {
            COURSE: courseData.COURSE,
            CODE: courseData.CODE,
            INSTRUCTOR: courseData.INSTRUCTOR,
            ROOM_NUMBER: courseData.ROOM_NUMBER,
            SYLLABUS: courseData.SYLLABUS,
            TIME: courseData.TIME,
            OBJECTIVE: courseData.OBJECTIVE,
        };
    
        fetch(`http://localhost/backend/creactecourse.php`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCourseData),
    credentials: "include",
})
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Check for empty response
            if (response.status === 204) {
                return null; // No content
            }
            return response.json(); // Parse JSON response
        })
        .then((data) => {
            if (data === "Success") {
                alert(data);
                navigate("/admin/course");
            } else {
                alert(data.split(":")[2]);
            }
        })
        .catch((error) => {
            console.error("Error updating user data:", error);
        });
    };
    
    // Helper function to update the state when a field changes
    const updateField = (field, value) => {
        setCourseData({ ...courseData, [field]: value });
    };

    return (
        <div>
            <NavBar x="admin" />
            <section className="editCourse-section">
                <div className="course-label">Enter course details: <b></b></div>
                <input
                    className="editinput"
                    type="text"
                    name="course-name"
                    placeholder="Enter course name"
                    onChange={(e) => updateField("COURSE", e.target.value)}
                />
                <input
                    className="editinput"
                    type="text"
                    name="course-code"
                    placeholder="Enter course code"
                    onChange={(e) => updateField("CODE", e.target.value)}
                /><br />
                <input
                    className="editinput"
                    type="text"
                    name="course-instructor"
                    placeholder="Enter instructor name"
                    onChange={(e) => updateField("INSTRUCTOR", e.target.value)}
                />
                <input
                    className="editinput"
                    type="text"
                    name="room-number"
                    placeholder="Enter room number"
                    onChange={(e) => updateField("ROOM_NUMBER", e.target.value)}
                /><br />
                <input
                    className="editinput"
                    type="text"
                    name="syllabus"
                    placeholder="Enter syllabus link"
                    onChange={(e) => updateField("SYLLABUS", e.target.value)}
                />
                <input
                    className="editinput"
                    type="text"
                    name="meeting-time"
                    placeholder="Enter meeting time"
                    onChange={(e) => updateField("TIME", e.target.value)}
                /><br />
                <textarea
                    className="editinput"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Enter course objectives"
                    onChange={(e) => updateField("OBJECTIVE", e.target.value)}
                ></textarea><br />
                <button type="submit" className="edit-course" onClick={upload}>Submit</button>
            </section>
        </div>
    );
}

export default CreateCourse;

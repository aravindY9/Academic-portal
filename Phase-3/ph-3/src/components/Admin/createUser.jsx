import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./EditAccount.css";
import NavBar from "../UniversalComponents/NavBar";

function CreateUser() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        NAME: "",
        TYPE: "",
        id:"",
        email: "",
        PERMISSION_NAME: "",
        PERMISSION_VALUE: "",
    });
    const [error, setError] = useState(null);
    // useEffect(() => {
    //     // Fetch user data using the 'userId' parameter
    //     fetch(`http://localhost/backend/fetchUserData.php?id=${userId}`,{
    //         credentials:'include',
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // Set the fetched user data in the state
    //             setUserData(data[0]);
    //         })
    //         .catch((error) => setError(error));
    // }, [userId]);
    // if (error) {
    //     // Handle the error condition, e.g., server is down
    //     return <div>Access Denied: Server is not responding.</div>;
    //   }
    const upload = () => {
        // Define the updated user data
        const updatedUserData = {
            id: userData.id,
            NAME: userData.NAME,
            TYPE: userData.TYPE,
            email: userData.email,
            PERMISSION_NAME: userData.PERMISSION_NAME,
            PERMISSION_VALUE: userData.PERMISSION_VALUE,
        };
        console.log(JSON.stringify(updatedUserData));
        // Send a POST request to update the user data
        fetch(`http://localhost/backend/createuser.php`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUserData),
    credentials:"include",
})
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        if (data === "Success") {
          // Handle a successful update
          alert(data);
          navigate("/admin/accounts");
        }else {
          // Handle unexpected response
          alert(data.split(":")[2]);
        }
      })
    .catch((error) => {
        // Handle network or request errors
        console.error("Error updating user data:", error);
    });

    };


    return (
        <div>
            <NavBar x="admin" />
            <div className="main-section">
                <section className="editAccount-section">
                    <div className="course-label">Edit user details: <b></b></div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Edit user name"
                        onChange={(e) => setUserData({ ...userData, NAME: e.target.value })}
                    /><br />
                    <input
                        type="text"
                        name="id"
                        placeholder="Edit userID"
                        onChange={(e) => setUserData({ ...userData, id: e.target.value })}
                    /><br />
                    <input
                        type="text"
                        name="course-instructor"
                        placeholder="Edit role"
                        onChange={(e) => setUserData({ ...userData, TYPE: e.target.value })}
                    /><br />
                    <input
                        type="text"
                        name="meeting-time"
                        placeholder="Edit email"
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    /><br />
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter permission name"
                        onChange={(e) => setUserData({ ...userData, PERMISSION_NAME: e.target.value })}
                    /><br />
                    <input
                        type="text"
                        name="meeting-time"
                        placeholder="Enter Value"
                        onChange={(e) => setUserData({ ...userData, PERMISSION_VALUE: e.target.value })}
                    /><br />
                    <button type="submit" className="edit-account" onClick={upload}>
                        Edit
                    </button>
                </section>
            </div>
        </div>
    );
}

export default CreateUser;

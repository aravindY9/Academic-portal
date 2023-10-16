import React from "react";
import Avater from "./components/Avatar";
import Details from "./components/Details";
import Entries from "./components/Entries";
import profilepic from "../../photos/profile_photo.png";

import "./ProfilePage.css";
import NavBar from "../UniversalComponents/NavBar";
function ProfilePage(){
    return(
        <div>
        <NavBar x="admin" />
        <Details name="Bruce Wayne" email="Batman@gotham.com" id="001"/>
        {/* <Avater img={profilepic} /> */} <br />
        <Entries />
        </div>
    )
}

export default ProfilePage;
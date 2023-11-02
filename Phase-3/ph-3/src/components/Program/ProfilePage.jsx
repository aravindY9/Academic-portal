import React from "react";
import Avater from "../Admin/components/Avatar";
import Details from "../Admin/components/Details";
import Entries from "../Admin/components/Entries";
// import profilepic from "../../photos/profile_photo.png";

import "./ProfilePage.css";
import NavBar from "../UniversalComponents/NavBar";
function ProfilePage(){
    return(
        <div>
        <NavBar x="program" />
        <Details name="Bruce Wayne" email="Batman@gotham.com" id="001"/>
        {/* <Avater img={profilepic} /> */} <br />
        <Entries />
        </div>
    )
}

export default ProfilePage;
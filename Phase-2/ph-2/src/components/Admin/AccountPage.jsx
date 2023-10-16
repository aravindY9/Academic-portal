import React from "react";
import CreateTable from "./components/CreateTable";
import "./AccountPage.css";
import accounts from "./AccountsData";
import TableEntries from "./components/TableEntries";
import NavBar from "../UniversalComponents/NavBar";
function AccountPage(){
    return<div>
        <NavBar x="admin" />

    <section>
    <div className="view-assessments">View Users</div><CreateTable th1="Name" th2="ID" th3="Type" data={accounts.map(function mapentries (data){
    return <TableEntries name={data.name} id={data.id} info={data.type} edit="/admin/editaccount" />
})}/></section> </div>
    ;
}

export default AccountPage;
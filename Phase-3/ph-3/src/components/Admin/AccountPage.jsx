import React, { useState, useEffect } from "react";
import CreateTable from "./components/CreateTable";
import TableEntries from "./components/TableEntries";
import NavBar from "../UniversalComponents/NavBar";
import { Link } from "react-router-dom";

function AccountPage() {
    const [accountData, setAccountData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("http://localhost/backend/api.php", {
          credentials: 'include',
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(`Response status is not 200: ${response.status}`);
            }
          })
          .then((data) => setAccountData(data))
          .catch((error) => setError(error));
      }, []);
    
      if (error) {
        // Handle the error condition, e.g., server is down
        return <div>Access Denied: Server is not responding.</div>;
      }
    const deleteUser = (id) => {
        fetch(`http://localhost/backend/deleteuser.php?id=${id}`)
            .then((response) => response.json())
            .then(() => {
                setAccountData(accountData.filter((data) => data.id !== id));
            })
            .catch((error) => console.error(error));
    };
        
    

    return (
        <div>
            <NavBar x="admin" />
            <section>
                <div className="view-assessments">View Users</div>
                <CreateTable
                    th1="Name"
                    th2="ID"
                    th3="Type"
                    data={accountData.map(function mapentries(data) {
                        return (
                            <TableEntries
                                key={data.id}
                                name={data.name}
                                id={data.id}
                                info={data.type}
                                edit={`/admin/editaccount/${data.id}`}
                                deleteAccount={() => deleteUser(data.id)}
                            />
                        );
                    })}
                />
                <a href="/admin/createuser"><button className="createuser">CreateUser</button></a>
            </section>
        </div>
    );
}

export default AccountPage;

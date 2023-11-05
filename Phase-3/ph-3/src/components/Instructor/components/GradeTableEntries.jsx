// components/TableEntries.js
import React from "react";
import { Link } from "react-router-dom";
import "../InstructorStyle.css";


function TableEntries(props) {
    return (
        <tr>    
            <td className="ih-td">
                <p>{props.name} </p>
            </td>
            <td className="ih-td">
                <p>{props.grade}</p>
            </td>
           
        </tr>
    );
}

export default TableEntries;

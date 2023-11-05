// components/TableEntries.js
import React from "react";
import { Link } from "react-router-dom";
import "../InstructorStyle.css";


function TableEntries(props) {
    return (
        <tr>    
            <td className="ih-td">
                <p>{props.nm} </p>
            </td>
            <td className="ih-td">
                <p>{props.due}</p>
            </td>
            <td className="ih-td">
                <p>{props.max}</p>
            </td>
            <td className="ih-td">
                <a
                    href="#"
                    className="ic-deleteButton"
                    onClick={props.deleteAccount}
                >
                    Delete
                </a>
            </td>
        </tr>
    );
}

export default TableEntries;

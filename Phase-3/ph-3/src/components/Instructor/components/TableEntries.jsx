// components/TableEntries.js
import React from "react";
import { Link } from "react-router-dom";
import "../InstructorStyle.css";


function TableEntries(props) {
    return (
        <tr>    
            <td className="ih-td">
                <p><Link to={props.link}>{props.nm}</Link> </p>
            </td>
            <td className="ih-td">
                <p>{props.code}</p>
            </td>
            <td className="ih-td">
                <p>{props.rno}</p>
            </td>
            <td className="ih-td">
                <p>{props.time}</p>
            </td>
            <td className="ih-td">
                <p>{props.dur}</p>
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

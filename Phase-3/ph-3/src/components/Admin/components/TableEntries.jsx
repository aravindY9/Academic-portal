// components/TableEntries.js
import React from "react";
import { Link } from "react-router-dom";

function TableEntries(props) {
    return (
        <tr>    
            <td className="th-admin">
                <p>{props.name}</p>
            </td>
            <td className="th-admin">
                <p>{props.id}</p>
            </td>
            <td className="th-admin">
                <p>{props.info}</p>
            </td>
            <td className="th-admin">
                <Link to={props.edit} className="edit-link edit">
                    Edit
                </Link>
                <a
                    href="#"
                    className="delete-link delete"
                    onClick={props.deleteAccount}
                >
                    Delete
                </a>
            </td>
        </tr>
    );
}

export default TableEntries;

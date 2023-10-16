import React from "react";
import { Link } from "react-router-dom";
function TableEntries(props){
    return <tr>
    <td class="th-admin">
      <p>{props.name}</p>
    </td>
    <td class="th-admin">
      <p>{props.id}</p>
    </td>
    <td class="th-admin">
      <p>{props.info}</p>
    </td>
    <td class="th-admin"><Link to={props.edit} className="edit">Edit</Link><a href="" class="delete">Delete</a></td>
    </tr>
    
}

export default TableEntries;
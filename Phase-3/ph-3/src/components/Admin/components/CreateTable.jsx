import React from "react";
import TableEntries from "./TableEntries";
// function mapentries (data){
//     return <TableEntries name={data.name} id={data.id} info={data.type} />
// }
function CreateTable(props){
    return (
        <div>
      <input className="input-admin" type="text" name="course-code" placeholder="Search user ID (eg: 1000XXXXXX)" />
      <button type="submit" className="search-button">Search</button>
        <table class="table-admin">
        <tr>
          <th class="th-admin">{props.th1}</th>
          <th class="th-admin">{props.th2}</th>
          <th class="th-admin">{props.th3}</th>
          <th class="th-admin">Actions</th>
        </tr>
       
       {props.data}
      </table>
    </div>
    )
}


export default CreateTable;
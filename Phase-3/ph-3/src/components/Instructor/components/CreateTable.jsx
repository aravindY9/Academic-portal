import React from "react";
import TableEntries from "./TableEntries";
import "../InstructorStyle.css";

// function mapentries (data){
//     return <TableEntries name={data.name} id={data.id} info={data.type} />
// }
function CreateTable(props){
    return (
        <div>
        <table class="ih-table">
        <tr>
          <th class="ih-th">Course Name</th>
          <th class="ih-th">Course Code</th>
          <th class="ih-th">Room Number</th>
          <th class="ih-th">Day and Time</th>
          <th class="ih-th">Duration</th>
          <th class="ih-th">Actions</th>
        </tr>
       
       {props.data}
      </table>
    </div>
    )
}


export default CreateTable;
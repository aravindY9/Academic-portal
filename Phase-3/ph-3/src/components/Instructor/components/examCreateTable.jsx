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
          <th class="ih-th">Exam Name</th>
          <th class="ih-th">Date</th>
          <th class="ih-th">Max Score</th>
          <th class="ih-th">Actions</th>
        </tr>
       
       {props.data}
      </table>
    </div>
    )
}


export default CreateTable;
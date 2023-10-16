import React from "react";
import "./ChatPage.css";
import NavBar from "../UniversalComponents/NavBar";
function ChatPage(){
    return (
      <div>
       <NavBar x="admin" />
        <div>
       
    <div className="warning-msg"><b>Chat Responsibly:</b> Words have consequences. Be mindful of your words and actions in
      this chat. Keep it respectful and considerate.
    </div><br />
    <div className="chat-section">
      <table className="chat-table">
        <tr>
          <th className="table-head">ID</th>
          <th className="table-head">Action</th>
        </tr>
        <tr>
          <td className="table-row-1">1003987654</td>
          <td className="table-row-1"><a href="studentProgressDetails.html" className="edit">chat</a></td>
        </tr>
        <tr>
          <td className="table-row-2">1006214875</td>
          <td className="table-row-2"><a href="studentProgressDetails.html" className="edit">chat</a></td>
        </tr>
        <tr>
          <td className="table-row-1">1005392168</td>
          <td className="table-row-1"><a href="studentProgressDetails.html" className="edit">chat</a></td>
        </tr>
        <tr>
          <td className="table-row-2">1008745923</td>
          <td className="table-row-2"><a href="studentProgressDetails.html" className="edit">chat</a></td>
        </tr>
        <tr>
          <td className="table-row-1">1005392168</td>
          <td className="table-row-1"><a href="studentProgressDetails.html" className="edit">chat</a></td>
        </tr>
        <tr>
          <td className="table-row-2">1008745923</td>
          <td className="table-row-2"><a href="studentProgressDetails.html" className="edit">chat</a></td>
        </tr>
      </table><br />
      <div className="chat">
        <div className="chat-to">
          <p><b><u>Admin</u></b></p>
          <p>Hi, how can I help you?</p>
        </div><br />
        <div className="chat-from">
          <p><b><u>1005392168</u></b></p>
          <p>Hi, I have a doubt</p>
        </div><br />
        <div className="chat-to">
          <p><b><u>Admin</u></b></p>
          <p>please, go ahead</p>
        </div><br />
        <div className="chat-from">
          <p><b><u>1005392168</u></b></p>
          <p>what are your QA policies?</p>
        </div>
        <input type="text" className="chat-input" placeholder="Enter text here" />
        <button type="submit" className="send-button">Send</button>
      </div>
    </div>
  </div>
  </div>
    )
}


export default ChatPage;
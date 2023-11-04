import NavBar from "../UniversalComponents/NavBar";
import "../Instructor/Chat.css";
import React, { useEffect, useState } from "react";
// import Header from './components/UniversalComponents/Header';

function App() {
  const [error, setError] = useState(null);
  useEffect(() => {
      fetch("http://localhost/QA/api.php", {
        credentials: 'include',
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Response status is not 200: ${response.status}`);
          }
        })
        .then((data) => null)
        .catch((error) => setError(error));
    }, []);
  
    if (error) {
      // Handle the error condition, e.g., server is down
      return <div>Access Denied: Server is not responding.</div>;
    }


  return (
    <div className="sch-mainBody">
      <div className="pageFormat">
        <NavBar x="qanav" />
      </div>
      <br />
      <br />
      <div className="chatBody">
        <div className="welcomeMsg">
          <b>Chat Responsibly:</b> Words have consequences. Be mindful of your
          words and actions in this chat. Keep it respectful and considerate.
        </div>
        <div className="subChatBody">
          {/* <input
              type="text"
              class="chat-input"
              placeholder="Enter text here"
            /> 
            <button type="submit" class="send-button">
              Send
            </button> */}
     

          <div class="chat">
            <div class="chat-to">
              <p>
                <b>
                  <u>You</u>
                </b>
              </p>
              <p>How are you?</p>
            </div>
            <br />
            <div class="chat-from">
              <p>
                <b>
                  <u>Jane Doe</u>
                </b>
              </p>
              <p>I am fine, how are you?</p>
            </div>
            <br />
            <div class="chat-to">
              <p>
                <b>
                  <u>You</u>
                </b>
              </p>
              <p>Doing good, thanks</p>
            </div>
            <br />
            <div class="chat-from">
              <p>
                <b>
                  <u>Jane Doe</u>
                </b>
              </p>
              <p>So, how can I help you?</p>
            </div>
            <input
              type="text"
              class="chat-input"
              placeholder="Enter text here"
            />
            <button type="submit" class="send-button">
              Send
            </button>
          </div>
          <div>
            <div className="tableScroll">
              <table className="ih-table">
                {/* <div className="studentLabel">Users:</div> */}

                <tr>
                  <th>Recents</th>
                </tr>
                <tr>
                  <td>
                    <a href="">jsm8323@mavs.uta.edu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">axv9331@mavs.uta.edu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">dsy4321@mavs.uta.edu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">hgf3456@mavs.uta.edu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">jsm8323@mavs.uta.edu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">axv9331@mavs.uta.edu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">dsy4321@mavs.uta.edu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">hgf3456@mavs.uta.edu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">jsm8323@mavs.uta.edu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">axv9331@mavs.uta.edu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">dsy4321@mavs.uta.edu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">hgf3456@mavs.uta.edu</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">hgf3456@mavs.uta.edu</a>
                  </td>
                </tr>
              </table>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

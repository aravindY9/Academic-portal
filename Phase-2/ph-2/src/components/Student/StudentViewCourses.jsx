import NavBar from "../UniversalComponents/NavBar";
import Table from "../UniversalComponents/Table";
import "./StudentViewCourses.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <div className="mainBody">
      <div className="pageFormat">
        <NavBar x="indexNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        Course: CSE 5338
        <div className="subContentTxt">
          Information Security-1
          <br />
          <b>Instructor: </b> Liam Wilosn
          <br />
          <b>Email: </b> lsw2341@mavs.uta.edu
          <br />
          <b>Room: </b>NH100 <br />
          <b>Time: </b>Mon-Wed 10AM-12PM <br />
          <br />
          <a href="" className="syllabus">
            Download Syllabus
          </a>{" "}
          <a href="" className="enroll">
            Enroll
          </a>
          <br />
          <br />
          Course Objectives:
          <br />
          <div className="CourseObjContent">
            <ul>
              <li>
                Comprehend Information Security Fundamentals:
                <ul>
                  <li>
                    Gain a comprehensive understanding of the core principles
                    and concepts in information security.
                  </li>
                  <li>
                    Learn the importance of confidentiality, integrity, and
                    availability in securing data and systems.
                  </li>
                </ul>
              </li>
              <li>
                Identify Threats and Vulnerabilities:
                <ul>
                  <li>
                    Recognize and categorize common cyber threats, such as
                    malware, phishing, and social engineering.
                  </li>
                  <li>
                    Evaluate system vulnerabilities and weaknesses, including
                    software and hardware vulnerabilities.
                  </li>
                </ul>
              </li>
              <li>
                Secure Network and System Design:
                <ul>
                  <li>
                    Develop the ability to design and implement secure network
                    architectures and system configurations.
                  </li>
                  <li>
                    Explore security best practices for different types of
                    systems, including web applications, databases, and IoT
                    devices.
                  </li>
                </ul>
              </li>
              <li>
                Encryption and Access Control:
                <ul>
                  <li>
                    Understand cryptographic techniques and encryption
                    algorithms.
                  </li>
                  <li>
                    Master access control mechanisms, including role-based
                    access control (RBAC) and multi-factor authentication (MFA).
                  </li>
                </ul>
              </li>
              <li>
                Incident Response and Risk Management:
                <ul>
                  <li>
                    Learn how to create and execute an incident response plan in
                    the event of a security breach.
                  </li>
                  <li>
                    Understand risk assessment methodologies and implement risk
                    management strategies to protect sensitive information.
                  </li>
                </ul>
              </li>
              <li>
                Stay Informed about Emerging Trends:
                <ul>
                  <li>
                    Stay up-to-date with the latest developments and emerging
                    technologies in information security.
                  </li>
                  <li>
                    Engage with current threat intelligence to anticipate and
                    defend against evolving cyber threats.
                  </li>
                </ul>
              </li>
              <li>
                Ethical and Legal Considerations:
                <ul>
                  <li>
                    Explore the ethical considerations involved in information
                    security, including privacy and data handling.
                  </li>
                  <li>
                    Familiarize yourself with relevant laws, regulations, and
                    compliance requirements, such as GDPR and HIPAA.
                  </li>
                </ul>
              </li>
              <li>
                Practical Application of Knowledge:
                <ul>
                  <li>
                    Apply theoretical knowledge to real-world scenarios by
                    securing data and systems.
                  </li>
                  <li>
                    Participate in hands-on exercises and labs to develop
                    practical cybersecurity skills.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./QaHome.css";
import NavBar from "../UniversalComponents/NavBar";
import progress from '../../photos/graph.png';

function HomePage(){
    return (<div><NavBar x="qanav" /><section><div className="welcome-msg"><br />

Welcome to the Quality Assurance Hub! Your dedication to excellence drives our institution forward. Explore, collaborate, and elevate quality together
 </div>
  <br />
  <div className="course-obj">
      Course Objectives:
      <div className="course-obj-txt">
        <ul>
          <li>Introduction to Computer Science:
            Understand the fundamental concepts and principles of computer science.
            Learn the basics of programming and algorithm design.
            Develop problem-solving skills using computational methods.
          </li><br />

          <li>Data Structures and Algorithms:

            Master various data structures such as arrays, linked lists, stacks, and queues.
            Analyze and implement efficient algorithms for sorting, searching, and data manipulation.
            Apply data structures and algorithms to solve real-world computing problems.
          </li><br />
          <li>Programming Languages and Paradigms:

            Explore different programming languages and paradigms.
            Develop proficiency in at least one high-level programming language.
            Understand the strengths and weaknesses of different programming approaches.
          </li><br />
          <li>
            Database Management Systems:

            Learn the principles of database design and normalization.
            Gain expertise in using relational database management systems (RDBMS).
            Develop skills in SQL for data querying and manipulation.
          </li>
        </ul>
      </div><br />
      Overall Student performance:
      <img src={progress} alt="" className="student-perf-img" />
    </div>
  </section></div>)
}

export default HomePage;
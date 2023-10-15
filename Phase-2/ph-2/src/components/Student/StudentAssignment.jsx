import NavBar from "../UniversalComponents/NavBar";
import "./StudentAssignment.css";
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
        <b>Assignment-1:</b> Data Cleaning
        <div className="subContentTxt">
          Information Security-1
          <br />
          <b>Due Date: </b> 09/30/2023
          <br />
          <b>Maximum Score: </b> 100
          <br />
          <br />
          <a href="" className="syllabus">
            Download Assignment Description
          </a>
          <br />
          <br />
          Description:
          <br />
          <div className="CourseObjContent">
            In today's data-centric landscape, data quality is foundational for
            meaningful analysis and machine learning. This project focuses on
            creating a robust data cleaning and preprocessing tool using Python.
            Its objective is to assist data professionals in transforming raw,
            messy data into a structured, high-quality format for more accurate
            analysis and modeling.
            <br />
            <br />
            Project Goals: The project aims to accomplish several key goals. It
            will include functions for importing data from various sources, such
            as CSV files, Excel spreadsheets, and databases. It will also offer
            tools for initial data exploration, like generating summary
            statistics and identifying missing values. Furthermore, the tool
            will incorporate data cleaning techniques, encompassing tasks like
            missing value imputation, duplicate handling, and outlier treatment.
            Data transformation capabilities will be provided, allowing for
            feature scaling, categorical variable encoding, and feature
            engineering. Data visualization will enable users to gain deeper
            insights, and user-friendly interfaces will ensure easy interaction.
            Customization will empower users to define their cleaning rules, and
            automation features will streamline repetitive preprocessing tasks.
            Comprehensive documentation will guide users through effective tool
            utilization.
            <br />
            <br />
            Technologies: The project will leverage Python and utilize libraries
            like Pandas, NumPy, Matplotlib/Seaborn, and scikit-learn for data
            processing, analysis, and visualization. The choice of a user
            interface will be based on the project's requirements, possibly
            involving a command-line interface or a graphical user interface
            (GUI).
            <br />
            <br />
            Deliverables: The project's primary deliverables will encompass a
            Python script or application for data cleaning and preprocessing,
            accompanied by user documentation featuring practical examples and
            guidelines. A presentation or report summarizing the project's
            goals, methodologies, and outcomes will provide a comprehensive
            overview.
            <br />
            <br />
            Benefits: The project brings several advantages, including improved
            data quality, saving time and effort, enhancing understanding
            through data visualization, and catering to individual project
            requirements via customization. This versatile tool is poised to
            become an invaluable asset for data professionals dealing with
            diverse and messy datasets.
          </div><br />
          Honor Code:
          <div className="honorcode">
            I pledge to uphold the principles of academic integrity. I
            understand that plagiarism undermines the value of education and
            original thought. Therefore, I commit to producing my own work,
            giving proper credit to the ideas and contributions of others, and
            acknowledging sources through appropriate citations. I value the
            pursuit of knowledge and will not engage in dishonest practices that
            compromise the integrity of my work or the educational community.
          </div>
          <br />
          Submit: <br />
          <input type="text" placeholder="Enter Drive Link" className="driveSubmitInput"/><br />
          <button className="submit">Submit</button><br /><br />
          
        </div>
      </div>
    </div>
  );
}

export default App;

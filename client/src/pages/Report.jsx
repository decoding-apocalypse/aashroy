import React, { useState } from "react";
import "./css/Report.css";
import CustomChatbot from "../components/Chatbot/CustomChatbot";

const Report = (props) => {
  const [reportData, setReportData] = useState(null);

  const handleReportData = (data) => {
    setReportData((prevData) => ({ ...prevData, ...data }));
  };

  console.log(reportData);

  return (
    <main className="report">
      <div className="report-content">
        <h1>Online Complaint Portal</h1>
      </div>
      <div className="report-main">
        <p>
          The only place where your complaints are precious to us! If you have a
          complaint or want to report a crime or any illegal atrocities against
          the helpless, please feel free to report through an anonymous
          reporting mechanism where we try to help and build the society through
          your hands. <br />
          You can also share your valuable feedback to us which can help us to
          serve the community better.
        </p>
        <button type="button" className="btn btn-outline-info">
          Complaint Now
        </button>
      </div>
      <div>
        <img className="report-bg" src="/img/report-bg-1.png" alt="nothing" />
      </div>

      <div className="report-form">
        <h3 className="form-heading">Feedback Form for Aakansha</h3>
        <form>
          <label htmlFor="fname">Your Name</label>
          <input
            type="text"
            className="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="fname"
            name="email"
            placeholder="Your Email Id here"
          />

          <label htmlFor="lname">Feedback</label>
          <input
            type="text"
            className="fname"
            name="lastname"
            placeholder="Your valuable feedback.."
          />

          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
      <CustomChatbot updateData={handleReportData} />
    </main>
  );
};

export default Report;

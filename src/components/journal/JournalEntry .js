import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/e/e4/Elliot_Grieveson.png)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un nuevo dia
          </p>
        <p className="journal__entry-content">
          Ipsum nisi cupidatat voluptate ipsum Lorem adipisicing est deserunt
          sint incididunt amet.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

import React from "react";
import "./education.css";

const Education = () => {
  const educationDetails = [
    {
      id: 1,
      school: "Gujarat Public School, Vadodara",
      board: "Secondary(X)",
      year: "April 2016 - May 2017",
      cgpa: "CGPA: 7.4",
    },
    {
      id: 2,
      school: "Gujarat Public School, Vadodara",
      board: "Higher Secondary (XII)",
      year: "April 2018 - May 2019",
      cgpa: "PERCENTAGE: 70.2",
    },
    {
      id: 3,
      school: "Vellore Institue of Technology, Bhopal",
      board: "Bachelor of Technology in Computer Science and Enginnering",
      year: "July 2019 - May 2023",
      cgpa: "CGPA: 8.17",
    },
  ];
  return (
    <section id="education">
      <h5>Where I've studied</h5>
      <h2>Education</h2>
      <div className="container education__container">
        {educationDetails.map((education) => {
          return (
            <div className="education__school" key={education.id}>
              <h2>{education.school}</h2>
              <h4 className="board">{education.board}</h4>
              <h5>{education.year}</h5>
              <h4 className="marks">{education.cgpa}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;

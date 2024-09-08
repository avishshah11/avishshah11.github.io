import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Where I've worked</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>
            Frontend Intern @{" "}
            <a href="https://iRekommend.com">iRekommend.com </a>
          </h3>
          <h5>January 2022 - march 2022</h5>
          <div className="experience__content">
            <p>
              Redesigned the Candidate Portal in React js and integrated
              multiple API'S with the back-end server. Changed the UI/UX of
              Candidate Portal with the help of Material UI framework.
            </p>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>
            Computer Vision Intern @{" "}
            <a href="https://internship.thesparksfoundation.info/">
              The Sparks Foundation{" "}
            </a>
          </h3>
          <h5>October 2021 - November 2021</h5>
          <div className="experience__content">
            <p>
              Worked on task related to Object Detection built with PyTorch
              using convolutional neural network having an accuray of 97% on
              taken Kaggle Dataset.
            </p>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>
            Jr. Fontend Engineer @{" "}
            <a href="https://xcodewebsolutions.com/">
              XCode Web Solutions LLP{" "}
            </a>
          </h3>
          <h5>October 2023 - Present</h5>
          <div className="experience__content">
            <p>
              Developing new user interface using fluent UI framework based on
              client preference. Worked on making website responsive for
              cross-platform usage using CSS grid layouts and media queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import Certification from "./components/certification/Certification";
import UserPermission from "./components/userPermission/UserPermission";
import "./index.css";

const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Certification />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <UserPermission />
    </>
  );
};

export default app;

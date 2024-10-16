import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import Sider from "./Sider";
import { useSelector } from "react-redux";
import Resume from "./Resume";


function Home() {
  const {portfolioData} = useSelector((state) => state.portfolio);
  return (
    <>
      <div>
        <Header />
        { portfolioData && (
          <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <About/>
          <Experience/>
          <Projects/>
          <Courses/>
          <Resume/>
          <Contact/>
          <Footer/>
          <Sider/>
        </div>
        )}
      </div>
    </>
  );
}

export default Home;

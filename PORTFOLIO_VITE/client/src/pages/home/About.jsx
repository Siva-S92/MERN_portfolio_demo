import React from "react";
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from "react-redux";


function About() {
  const {portfolioData} = useSelector((state) => state.portfolio);
  const {about} = portfolioData;
  const{ lottieUrl, description1, description2, skills } = about;
  
  return (
    <div id="about" className="py-2">
      <SectionTitle title="About"/>
      <div className="flex sm:flex-col w-full items-center">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <lottie-player
            src={lottieUrl || ''}
            background="##fff"
            speed="1"
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>

        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white text-justify">
            {description1 || ''}
          </p>
          <p className="text-white text-justify">
            {description2 || ''}
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-teritary text-2xl">
          Here are a few technologies I've been working with recently...
        </h1>

        <div className="flex flex-wrap justify-center gap-10 mt-5">
          {skills.map((skill, index) => (
            <button key={index} className="border border-teritary w-40 py-2 rounded text-teritary">{skill}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const {portfolioData} = useSelector((state) => state.portfolio);
  const {intro} = portfolioData;
  const{ firstName, lastName, welcomeText, description, caption } = intro
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">{welcomeText || ''}</h1>
      <h1 className="text-secondary text-7xl sm:text-3xl font-semibold">
        {firstName || ''} {lastName || ''}
      </h1>
      <h1 className="text-white text-6xl sm:text-3xl font-semibold">
        {caption || ''}
      </h1>
      <p className="text-white text-justify w-2/3 sm:w-full">
        {description || ''}
      </p>
      <button className="btn border-2 border-teritary text-teritary text-2xl px-10 py-3 rounded-full">
        Get Started
      </button>
    </div>
  );
}

export default Intro;

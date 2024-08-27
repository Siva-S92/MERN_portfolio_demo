import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
// import { experiences } from "../../resources/experiencesdata";
import { useSelector } from "react-redux";

function Experience() {
  const { portfolioData } = useSelector((state) => state.portfolio);
  const { experiences } = portfolioData;

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title="Experience"/>
      <div className="flex sm:flex-col py-10 gap-20">
        <div className="flex flex-col justify-between gap-10 border-l-4 sm:border-none border-[#7a898a1b] w-1/3 sm:flex-row sm:overflow-auto sm:w-full py-5">
          {experiences.map((experience, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer shrink-0 my-3"
            >
              <span
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-teritary border-l-4 -ml-[4px] sm:-ml-[0px] border-teritary rounded bg-[#4091b12e] py-3"
                    : "text-white"
                } `}
              >
                {experience.period}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 w-2/3 sm:w-full">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-teritary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            {experiences[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;

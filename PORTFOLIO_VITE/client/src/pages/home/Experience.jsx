import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
// import { experiences } from "../../resources/experiencesdata";
import { useSelector } from "react-redux";

function Experience() {
  const {portfolioData} = useSelector((state) => state.portfolio);
  const {experiences} = portfolioData;
  

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col ">
        <div className="flex flex-col gap-10 border-l-4 sm:border-none border-[#7a898a1b] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-teritary border-l-4 -ml-[4px] sm:-ml-[0px] border-teritary rounded bg-[#4091b12e] py-3"
                    : "text-white"
                } `}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-teritary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            inventore tempora, consequatur vero soluta asperiores ipsam! Odio
            numquam voluptate explicabo nostrum quos perferendis iste soluta
            aliquam illum deserunt. Quam, et?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;

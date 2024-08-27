import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
// import { projects } from "../../resources/projectdata";

function Projects() {
  const { portfolioData } = useSelector((state) => state.portfolio);
  const { projects } = portfolioData;

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div id="project" className="py-2 w-full">
      <SectionTitle title="Projects" />
      <div className="w-full flex py-10 gap-20 sm:flex-col ">
        <div className="flex flex-col gap-10 justify-between border-l-4 sm:border-none border-[#7a898a1b] w-[15%] sm:flex-row sm:overflow-x-scroll sm:w-full py-5">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer shrink-0"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-teritary border-l-4 -ml-[4px] sm:-ml-[0px] border-teritary rounded bg-[#4091b12e] py-3"
                    : "text-white"
                } `}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="w-[85%] flex items-center justify-center gap-10 sm:flex-col sm:w-full">
          <div className="group w-[35%] sm:w-full flex flex-col items-center relative">
            {/* <p className="text-red-500 text-xs">click on the image</p> */}

            <img
              src={projects[selectedItemIndex].image}
              alt="image not available"
              className="h-60 w-72 object-cover rounded-lg border border-slate-400/10  group-hover:shadow-xl duration-500 ease-in-out group-hover:shadow-white/15"
            />

            <div className="absolute hidden mt-28 group-hover:flex animate-bounce transition-all ease-in-out duration-1000">
              <a href={projects[selectedItemIndex].link} target="_blank">
                <button className="text-sm text-white px-6 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 duration-200 ease-in-out">
                  click me
                </button>
              </a>
            </div>
          </div>

          <div className="w-[65%] sm:w-full flex flex-col gap-5">
            <h1>
              <span className="text-secondary text-xl">{projects[selectedItemIndex].title}&nbsp;</span><span><a href={projects[selectedItemIndex].link} target="_blank"><small className="underline underline-offset-2 text-gray-400">see the project here</small>👈</a></span>
            </h1>
            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
            <p className="text-white text-justify">
              please visit or check my projects, that i have done recently by
              clicking on the image given here. And please let me know your
              suggestions and opinions about the projects. You should definitely
              give the guidance to improve my skills. Then please teach me more
              from your skills, and give me a better career life....Thank you...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

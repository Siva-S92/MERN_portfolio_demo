import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
// import { courses } from "../../resources/coursedata";

function Courses() {
  const {portfolioData} = useSelector((state) => state.portfolio);
  const {courses} = portfolioData;

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title="My&nbsp;Courses" />
      <div className="flex py-10 gap-20 sm:flex-col ">
        <div className="flex flex-col gap-10 border-l-4 sm:border-none border-[#7a898a1b] w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full py-5">
          {courses.map((course, index) => (
            <div key={index}
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
                {course.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {courses[selectedItemIndex].title}
            </h1>

            <p className="text-red-400">coming soon</p>

            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              inventore tempora, consequatur vero soluta asperiores ipsam! Odio
              numquam voluptate explicabo nostrum quos perferendis iste soluta
              aliquam illum deserunt. Quam, et?
            </p>
          </div>

          <img
            src={courses[selectedItemIndex].image}
            alt=""
            className="h-52 w-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;

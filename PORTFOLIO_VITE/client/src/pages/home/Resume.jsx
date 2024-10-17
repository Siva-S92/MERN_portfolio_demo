import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { FolderArrowDownIcon } from "@heroicons/react/24/solid";

function Resume() {
  return (
    <>
      <div id="resume" className="py-2">
        <SectionTitle title="Resume" />
        <p className="text-white my-5">please find my resume below</p>

        <div className="w-3/4 mx-auto sm:w-full flex sm:flex-col justify-center items-center">
          <img src="images/resumeIcon.png" alt="resume" className="h-52" />
          <p className="flex text-red-500">
            Resume Attached here...👉{" "}
            <a href="https://drive.google.com/file/d/1iWxYy30FausVupF4o4S_M6BbCt7FUx9N/view?usp=sharing" target="_blank"><FolderArrowDownIcon className="size-6 text-blue-500 cursor-pointer" /></a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Resume;

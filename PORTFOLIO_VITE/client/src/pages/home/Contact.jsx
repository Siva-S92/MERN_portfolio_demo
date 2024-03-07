import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.portfolio);
  const { contact } = portfolioData;

  // const user = {
  //   name: "Sivajnanam.S",
  //   email: "sivagraphics4fashion@gmail.com",
  //   mobile: "9840350329",
  //   country: "INDIA",
  // };
  return (
    <>
      <div id="contact" className="py-2">
        <SectionTitle title="Say Hello!" />
        <div className="flex sm:flex-col items-center">
          <div className="flex w-1/2 sm:w-auto items-center">
            <div className="flex flex-col gap-3 text-md text-teritary">
              <span>{"{ "}</span>
              {Object.keys(contact)
                .slice(1)
                .map((key, index) => {
                  return (
                    <h1 key={index} className="pl-5">
                      <span>{key}</span> : <span>"{contact[key]}",</span>
                    </h1>
                  );
                })}

              <span>{" }"}</span>
            </div>
          </div>

          <div className="flex w-1/2 sm:w-full">
            <dotlottie-player
              src="https://lottie.host/532c5529-8ed2-4b62-96c0-b63603117f7b/Y1fKNgKymD.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

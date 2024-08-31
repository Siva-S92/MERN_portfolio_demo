import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { CLIENT_URL } from "../static_data/constant";

// import Logo from "images/sv_logo.png";

function Header() {
  const [toggleBar, setToggleBar] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <header className="fixed z-50 top-0 w-full flex justify-between items-center px-5 bg-[#424297] border-b-2 border-[#ffffff27]">
        <div className="flex items-center">
          <a href="" className="font-bold text-black text-2xl">
            SVS{" "}
          </a>
          <span>
            <img className="w-[50px] h-[50px]" src="images/sv_logo.png" alt="image not vailable" />
          </span>
        </div>

        <p className="font-semibold text-sm sm:text-xs text-[#c343bf] border-b-2 border-[#c343bf] cursor-pointer" onClick={()=> {
          navigate("/admin-login")
        }}>Go to Admin Page</p>

        <nav className="sm:hidden lg:block">
          <ul className="flex text-white">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href={`${CLIENT_URL}/#about`}>About</a>
            </li>
            <li>
              <a href={`${CLIENT_URL}/#project`}>Projects</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href={`${CLIENT_URL}/#contact`}>Contact</a>
            </li>
          </ul>
        </nav>

        {toggleBar && (
          <nav className="sm:block lg:hidden">
            <ul onClick={() => setToggleBar(!toggleBar)} className="flex flex-col text-white mobile-nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href={`${CLIENT_URL}/#about`}>About</a>
              </li>
              <li>
                <a href={`${CLIENT_URL}/#project`}>Projects</a>
              </li>
              <li>
                <a href={`${CLIENT_URL}/#resume`}>Resume</a>
              </li>
              <li>
                <a href={`${CLIENT_URL}/#contact`}>Contact</a>
              </li>
            </ul>
          </nav>
        )}

        <button
          onClick={() => setToggleBar(!toggleBar)}
          className="sm:block lg:hidden"
        >
          <Bars3Icon className="text-white h-5" />
        </button>
      </header>
    </>
  );
}

export default Header
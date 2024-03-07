import React from "react";

function Sider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col sm:flex-row sm:justify-center gap-3 items-center">
        <a href="https://www.facebook.com/"><i className="ri-facebook-circle-line text-gray-600 text-4xl"></i></a>
        <a href="https://www.gmail.com/"><i className="ri-mail-line text-gray-600 text-4xl"></i></a>
        <a href="https://www.instagram.com/"><i className="ri-instagram-line text-gray-600 text-4xl"></i></a>
        <a href="https://www.linkedin.com/"><i className="ri-linkedin-box-line text-gray-600 text-4xl"></i></a>
        <a href="https://www.github.com/"><i className="ri-github-fill text-gray-600 text-4xl"></i></a>
        <div className="w-[1px] h-52 bg-[#4242dd6f] sm:hidden"></div>
      </div>
    </div>
  );
}

export default Sider;

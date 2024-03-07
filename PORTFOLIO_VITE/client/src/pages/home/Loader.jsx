import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed z-[100] inset-0 bg-primary">
        <div className="flex gap-5 text-6xl sm:text-3xl font-semibold text-secondary">
            <h1 className="page">Page</h1>
            <h1 className="loading">Loading</h1>
            <h1 className="now">Now....</h1>
        </div>
    </div>
  );
}

export default Loader;

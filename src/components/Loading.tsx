import React from "react";

const Loading = () => {
  return (
    <div className="relative w-20 h-12 flex items-center justify-center">
      <span className="absolute top-0 text-xs text-[#C8B6FF] animate-text">
        loading
      </span>
      <div className="bg-[#9A79FF] w-4 h-4 rounded-full absolute bottom-0 animate-loading">
        <div className="absolute w-full h-full bg-[#D1C2FF] rounded-full animate-loading2"></div>
      </div>
    </div>
  );
};

export default Loading;

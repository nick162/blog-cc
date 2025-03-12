import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-md">
      <div className="relative w-32 h-20 flex items-center justify-center">
        <span className="absolute top-0 text-lg text-[#C8B6FF] animate-text">
          loading
        </span>
        <div className="bg-[#9A79FF] w-8 h-8 rounded-full absolute bottom-0 animate-loading">
          <div className="absolute w-full h-full bg-[#D1C2FF] rounded-full animate-loading2"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

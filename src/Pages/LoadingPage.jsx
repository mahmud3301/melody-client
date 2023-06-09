import React from "react";

const LoadingPage = () => {
  return (
    <div>
      <div className="bg-base-300 py-[5%] items-center min-h-screen">
        <div>
          <img
            className="mx-auto justify-center items-center mt-[55%] lg:mt-0 h-[30%] w-[30%]"
            src="https://i.pinimg.com/1200x/fa/96/6f/fa966f2794f277078e9f0379efdfb1bc.jpg"
            alt=""
          />
        </div>
        <div className="items-center">
          <span className="loading loading-bars loading-lg text-primary mx-auto justify-center items-center mt-28 ml-[50%]  w-100"></span>
        </div>
        ;
      </div>
    </div>
  );
};

export default LoadingPage;

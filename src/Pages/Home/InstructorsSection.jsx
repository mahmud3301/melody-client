import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const InstructorsSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortedInstructors, setSortedInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoading(!loading);
        }
        const sortedInstructors = data
          .sort((a, b) => b.numClasses - a.numClasses)
          .slice(0, 6);
        setData(data);
        setSortedInstructors(sortedInstructors);
      });
  }, [loading]);

  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-14">
        Popular <span className="text-primary">Instructors</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3  px-8 lg:px-36">
        {sortedInstructors.map((instructor, index) => (
          <div key={index} className="group transition cursor-pointer">
            <div className="relative">
              <img
                src={instructor.url}
                alt={instructor.name}
                className="w-full h-96 rounded p-4 "
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded">
                <div className="text-white text-xl font-bold">
                  <h2 className="text-2xl font-bold mb-2">{instructor.name}</h2>
                  <br />
                  <p>Email: {instructor.email}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsSection;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const InstructorsSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortedInstructors, setSortedInstructors] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-gilt.vercel.app/instructors")
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-36">
        {sortedInstructors.map((instructor, index) => (
          <div
            key={index}
            className="card grid grid-cols-1 md:grid-cols-2 glass bg-base-200 shadow-3xl group transition cursor-pointer">
            <figure>
              <img
                className="h-96 w-96 group-hover:scale-125 transition"
                src={instructor.url}
                alt={instructor.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <p>
                <span className="font-semibold underline">Email</span>:{" "}
                {instructor.email}
              </p>
              <p>
                <span className="underline font-semibold">
                  Number of Classes
                </span>
                : {instructor.numClasses}
              </p>
              <p>
                <span className="underline font-semibold">Classes Taken</span>:{" "}
                {instructor.classesTaken.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsSection;

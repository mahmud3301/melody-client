import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Instructors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch('instructors.json')
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-36 py-24">
        {data.map((instructor, index) => (
          <div
            key={index}
            className="card lg:card-side glass rounded-2xl bg-base-200 shadow-3xl group transition cursor-pointer">
            <div className="grid grid-cols-2">
              <figure>
                <img
                  className="h-96 w-96 group-hover:scale-125 transition"
                  src={instructor.image}
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
                  <span className="underline font-semibold">Classes Taken</span>
                  :{" "}
                  {instructor.classesTaken &&
                    instructor.classesTaken.join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
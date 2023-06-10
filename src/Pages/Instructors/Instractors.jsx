import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Melody | Instructors</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 lg:px-36 py-24">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="card grid grid-cols-1 lg:grid-cols-2 glass bg-base-200 shadow-3xl group transition cursor-pointer"
          >
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
              {instructor.numClasses && (
                <p>
                  <span className="underline font-semibold">
                    Number of Classes
                  </span>
                  : {instructor.numClasses}
                </p>
              )}
              {instructor.classesTaken && (
                <p>
                  <span className="underline font-semibold">
                    Classes Taken
                  </span>
                  : {instructor.classesTaken.join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;

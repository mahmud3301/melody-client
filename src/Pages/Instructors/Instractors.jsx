import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [loading, setLoading] = useState(false);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
    setLoading(!loading);
  }, [loading]);

  return (
    <div>
      <Helmet>
        <title>Melody | Instructors</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 lg:px-36 py-24">
        {instructors.map((instructor, index) => (
          <Fade key={index}>
            <div className="card grid grid-cols-1 lg:grid-cols-2 glass bg-base-200 shadow-3xl group transition cursor-pointer">
              <figure>
                <img
                  className="h-96 w-96 group-hover:scale-125 transition"
                  src={instructor.url || instructor.photo }
                  alt={instructor.name}
                />
              </figure>
              <div className="card-body justify-center">
                <h2 className="card-title">{instructor.name}</h2>
                <div className="justify-center">
                  <p>Email:</p>
                  <br />
                  <p>{instructor.email}</p>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Instructors;

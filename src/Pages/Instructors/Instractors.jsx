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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 lg:px-36 py-24">
        {instructors.map((instructor, index) => (
          <Fade key={index}>
            <div className="group transition cursor-pointer">
              <div className="relative">
                <img
                  src={instructor.url}
                  alt={instructor.name}
                  className="w-full h-96 rounded p-4 "
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 rounded">
                  <div className="text-white text-xl font-bold">
                    <h2 className="text-2xl font-bold mb-2">
                      {instructor.name}
                    </h2>
                    <br />
                    <p>Email: {instructor.email}</p>
                  </div>
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

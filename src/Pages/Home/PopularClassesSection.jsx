import React, { useEffect } from "react";
import { useState } from "react";

const PopularClassesSection = () => {
  const [topClasses, setTopClasses] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-gilt.vercel.app/classes")
      // fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedClasses = data.sort((a, b) => b.students - a.students);
        const top6Classes = sortedClasses.slice(0, 6);
        setTopClasses(top6Classes);
      });
  }, []);

  return (
    <div>
      <div className="py-8">
        <h2 className="text-3xl text-center font-bold my-14">
          Popular <span className="text-primary">Courses</span>
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-36">
          {topClasses.map((classItem) => (
            <div
              key={classItem._id}
              className="mb-5 h-full cursor-pointer group transition">
              <div className="card w-full glass bg-base-200">
                <figure>
                  <img
                    className="h-96 group-hover:scale-125 transition"
                    src={classItem.image}
                    alt={classItem.name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{classItem.name}</h2>
                  <p>
                    <span className="underline font-medium">
                      Instructor Name
                    </span>
                    : {classItem.instructor}
                  </p>
                  <p>
                    <span className="underline font-medium">
                      Available Seats
                    </span>
                    : {classItem.availableSeats}
                  </p>
                  <p>
                    <span className="underline font-medium">Rate</span>:{" "}
                    {classItem.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClassesSection;

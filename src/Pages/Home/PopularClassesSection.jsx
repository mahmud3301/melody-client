import React, { useEffect } from "react";
import { useState } from "react";

const PopularClassesSection = () => {
  const [topClasses, setTopClasses] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/classes")
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
          Popular <span className="text-primary">Classes</span>
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:px-36">
          {topClasses.map((classItem) => (
            <div key={classItem._id} className="mb-5 h-full cursor-pointer group transition">
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
                  <p>{classItem.instructor} Instructor</p>
                  <p>{classItem.availableSeats} Available Seats</p>
                  <p>{classItem.price} Price</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                  </div>
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
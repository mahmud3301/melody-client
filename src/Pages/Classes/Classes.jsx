import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { Fade } from "react-awesome-reveal";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [changeLog, setChangeLog] = useState(false);
  const [isInstructor] = useInstructor();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:5000/approved-classes")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setChangeLog(!changeLog);
        }
        const sortedClasses = data.sort((a, b) => b.students - a.students);
        setData(sortedClasses);
      });
  }, [changeLog]);

  const handleAddToCart = (classItem) => {
    if (user && user.email) {
      const courseItem = {
        name: classItem.name,
        price: classItem.price,
        instructor: classItem.instructor,
        students: classItem.students,
        availableSeats: classItem.availableSeats,
        image: classItem.image,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(courseItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Class added to the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location.pathname } });
        }
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Melody | Classes</title>
      </Helmet>
      <div className="py-8 px-8 lg:px-36">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.map((classItem) => (
            <Fade key={classItem.name}>
              <div className="mb-5 h-full cursor-pointer group transition">
                <div
                  className={`card w-full ${
                    classItem.availableSeats === 0
                      ? "bg-error"
                      : "glass bg-base-200"
                  }`}>
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
                      : {classItem.instructorName}
                    </p>
                    <p>
                      <span className="underline font-medium">
                        Available Seats
                      </span>
                      : {classItem.availableSeats}
                    </p>
                    <p>
                      <span className="underline font-medium">Students</span>:{" "}
                      {classItem.students}
                    </p>
                    <p>
                      <span className="underline font-medium">Rate</span>: $
                      {classItem.price}
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        onClick={() => handleAddToCart(classItem)}
                        className="btn btn-primary font-bold"
                        disabled={
                          classItem.availableSeats === 0 ||
                          isAdmin ||
                          isInstructor
                        }>
                        {isAdmin && "Admins cannot select classes"}
                        {isInstructor && "Instructors cannot select classes"}
                        {!isAdmin && !isInstructor && "Select"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;

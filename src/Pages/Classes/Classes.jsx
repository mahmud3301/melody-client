import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleAddToCart = (classItem) => {
    console.log(classItem);
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
              title: "Class added on the cart.",
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
          navigate("/login", { state: { from: location } });
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
            <div
              key={classItem.name}
              className="mb-5 h-full cursor-pointer group transition">
              <div
                className={`card w-full ${
                  classItem.availableSeats === 0
                    ? "bg-red-500"
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
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary font-bold"
                      disabled={classItem.availableSeats === 0}
                      onClick={() => handleAddToCart(classItem)}>
                      Select !!!
                    </button>
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

export default Classes;

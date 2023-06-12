import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/instructors-classes?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    // .then((data) => console.log(data));
  });
  return (
    <div className="w-full">
      <Helmet>
        <title>Melody | My Classes</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-12">
          <span className="text-primary">My Classes: </span>
          {data.length}{" "}
        </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table text-center shadow-2xl">
          <thead className="bg-primary">
            <tr>
              <th className="text-lg font-bold"></th>
              <th className="text-lg font-bold">#</th>
              <th className="text-lg font-bold">Image</th>
              <th className="text-lg font-bold">Name</th>
              <th className="text-lg font-bold">Students</th>
              <th className="text-lg font-bold">Status</th>
              <th className="text-lg font-bold">Price</th>
            </tr>
          </thead>
          <tbody className="bg-base-300">
            {data.map((item, index) => (
              <tr key={item._id}>
                <th></th>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.availableSeats}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <button className="font-bold btn btn-accent">
                      {item.status}
                    </button>
                  </div>
                </td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;

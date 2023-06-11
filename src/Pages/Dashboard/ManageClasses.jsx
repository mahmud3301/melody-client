import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [classData, setClassData] = useState([]);
  const [updatedLog, setUpdatedLog] = useState(false);

  useEffect(() => {
    axiosSecure.get("/classes").then((response) => {
      setClassData(response.data);
    });
  }, [axiosSecure, updatedLog]);

  

  return (
    <div className="w-full h-full mt-[100%]">
      <Helmet>
        <title>Melody | Manage classes</title>
      </Helmet>
      <p className="text-5xl font-bold text-center mb-12">
        Manage <span className="text-primary">Classes</span>
      </p>

      <div className="overflow-x-auto">
        <table className="table text-center shadow-2xl">
          <thead className="bg-primary">
            <tr>
              <th className="text-lg font-bold"></th>
              <th className="text-lg font-bold">#</th>
              <th className="text-lg font-bold">Image</th>
              <th className="text-lg font-bold">Name</th>
              <th className="text-lg font-bold">Price</th>
              <th className="text-lg font-bold">Instructor</th>
              <th className="text-lg font-bold">Instructor Email</th>
              <th className="text-lg font-bold">Available Seats</th>
              <th className="text-lg font-bold">Status</th>
              <th className="text-lg font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-base-300">
            {classData.map((item, index) => (
              <tr key={item._id}>
                <th></th>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 overflow-hidden rounded-full">
                      <img
                        className="w-full h-full object-cover"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </td>
                <td>${item.price}</td>
                <td>{item.instructorName}</td>
                <td>{item.instructorEmail}</td>
                <td>{item.availableSeats}</td>
                <td>{item.status}</td>
                <td className="flex justify-center">
                  <button
                    disabled={item.status === "approved" || item.status === "deny"}
                    onClick={() => handleAccept(item)}
                    className="btn btn-primary mx-2">
                    Accept
                  </button>
                  <button
                    className="btn btn-error mx-2"
                    onClick={() => handleDeny(item)}
                    disabled={item.status === "approved" || item.status === "deny"}>
                    Deny
                  </button>
                  <button className="btn btn-secondary mx-2">Feedback</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;

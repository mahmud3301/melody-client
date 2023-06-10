import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    axiosSecure.get("/classes").then((response) => {
      setClassData(response.data);
    });
  }, [axiosSecure]);

  return (
    <div className="w-full h-full mt-[100%]">
      <Helmet>
        <title>Melody | Manage classes</title>
      </Helmet>
      <p className="text-5xl font-bold text-center mb-12 ">
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
              <th className="text-lg font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-base-300">
            {classData.map((item, index) => (
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
                <td>${item.price}</td>
                <td>{item.instructorName}</td>
                <td>{item.instructorEmail}</td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary "
                    />
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary "
                    />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ManageClasses;

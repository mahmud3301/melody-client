import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://summer-camp-server-gilt.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`https://summer-camp-server-gilt.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  
  const handleMakeStudent = (user) => {
    fetch(`https://summer-camp-server-gilt.vercel.app/users/student/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is an Student Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full mt-[55%] text-center">
      <Helmet>
        <title>Melody | All users</title>
      </Helmet>
      {users.length > 0 ? (
        <>
          <h1 className="text-3xl text-center font-bold mb-6">
            All users: {users.length}
          </h1>
          <div className="overflow-x-auto">
            <table className="table shadow-2xl">
              <thead className="bg-primary text-center">
                <tr>
                  <th className="text-lg font-bold"></th>
                  <th className="text-lg font-bold">#</th>
                  <th className="text-lg font-bold">Name</th>
                  <th className="text-lg font-bold">Email</th>
                  <th className="text-lg font-bold">Users Actions</th>
                </tr>
              </thead>
              <tbody className="bg-base-300 text-center">
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th></th>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td className="flex">
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-sm btn-accent">
                        {user.role === "admin" ? "Admin" : "Make Admin"}
                      </button>
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-sm btn-info ml-20">
                        {user.role === "instructor"
                          ? "Instructor"
                          : "Make Instructor"}
                      </button>
                      <button
                        onClick={() => handleMakeStudent(user)}
                        className="btn btn-sm btn-secondary ml-20">
                        {user.role === "student"
                          ? "student"
                          : "Make student"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <p className="text-center font-bold text-2xl mt-[20%]">
            No user in database
          </p>
        </>
      )}
    </div>
  );
};

export default AllUsers;

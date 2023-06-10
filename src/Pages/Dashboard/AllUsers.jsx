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
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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

  return (
    <div>
      <Helmet>
        <title>Melody | All users</title>
      </Helmet>
      {users.length > 0 ? (
        <>
          <h1 className="text-3xl text-center font-bold mb-6">
            All users: {users.length}
          </h1>
          <div className="overflow-x-auto w-full">
            <table className="table text-center shadow-2xl">
              <thead className="bg-primary">
                <tr>
                  <th className="text-lg font-bold"></th>
                  <th className="text-lg font-bold">#</th>
                  <th className="text-lg font-bold">Name</th>
                  <th className="text-lg font-bold">Email</th>
                  <th className="text-lg font-bold">Users Actions</th>
                </tr>
              </thead>
              <tbody className="bg-base-300">
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th></th>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-sm btn-primary"
                      >
                        {user.role === "admin" ? "Admin" : "Make Admin"}
                      </button>
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-sm btn-primary ml-5"
                      >
                        {user.role === "instructor"
                          ? "Instructor"
                          : "Make Instructor"}
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
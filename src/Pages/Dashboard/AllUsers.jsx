import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {
  const { data: user = [], refetch } = useQuery(["user"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  return (
    <div>
      <Helmet>
        <title>Melody | All users</title>
      </Helmet>
      <h1 className="text-3xl text-center font-bold mb-6">All users: {user.length}</h1>
      {user.length > 0 ? (
        <>
          <div className="overflow-x-auto w-full">
            <table className="table text-center shadow-2xl">
              <thead className="bg-primary">
                <tr>
                  <th className="text-lg font-bold"></th>
                  <th className="text-lg font-bold">#</th>
                  <th className="text-lg font-bold">Name</th>
                  <th className="text-lg font-bold">Email</th>
                  <th className="text-lg font-bold">Actions</th>

                </tr>
              </thead>
              <tbody className="bg-base-300">
                {user.map((users, index) => (
                  <tr key={users._id}>
                    <th></th>
                    <th>{index + 1}</th>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>
                      <button className="btn btn-sm btn-primary">Make Admin</button>
                      <button className="btn btn-sm btn-primary ml-5">Make Instructor</button>
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
            You do not have any class yet.
            <span className="text-primary"> Please add some.</span>
          </p>
        </>
      )}
    </div>
  );
};

export default AllUsers;

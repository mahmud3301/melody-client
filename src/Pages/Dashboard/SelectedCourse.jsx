import React from "react";
import useCart from "../../Components/useCart";
import { Helmet } from "react-helmet-async";
import { MdDeleteForever, MdPayment } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const SelectedCourse = () => {
  const {user} = useContext(AuthContext);
  const [cart, refetch] = useCart();

  const handleDelete = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${data._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full h-full mt-24">
      <Helmet>
        <title>Melody | My Selected Classes</title>
        </Helmet>

        <p className="text-5xl font-bold text-center underline mb-12">Welcome!! <span className="text-primary">{user.displayName}</span></p>

      {cart.length > 0 ? (
        <>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-12">
              <span className="text-primary">Classes in cart: </span>
              {cart.length}{" "}
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
                  <th className="text-lg font-bold">Price</th>
                  <th className="text-lg font-bold">Instructor</th>
                  <th className="text-lg font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-base-300">
                {cart.map((item, index) => (
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
                    <td>{item.instructor}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-primary btn-square text-xl">
                        <MdDeleteForever />
                      </button>
                      <button className="btn btn-primary btn-square ml-4 text-xl">
                        <MdPayment />
                      </button>
                    </th>
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

export default SelectedCourse;

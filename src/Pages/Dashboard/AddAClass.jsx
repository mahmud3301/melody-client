import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      const newData = {
        price: parseFloat(data.price),
        image: data.image,
        name: data.name,
        availableSeats: parseInt(data.availableSeats),
        instructorId: user._id,
        instructorEmail: user.email,
        instructorName: user.displayName,
        status: "pending",
        students: 0,
      };
      await axiosSecure.post("/classes", newData).then((res) => console.log(res.data));
      reset();
      Swal.fire({
        background: "#f0efe6",
        position: "center",
        icon: "success",
        title: "Class Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        background: "#f0efe6",
        position: "center",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="container justify-center mx-auto p-12 bg-base-300 rounded-3xl">
      <div>
        <h2
          data-aos="fade-left"
          className="text-2xl font-bold mt-8 mb-14 text-center">
          Add a <span className="text-primary">Class</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div data-aos="fade-up" className="mb-4 ml-6 lg:ml-0">
              <label className="label">Class Image*</label>
              <input
                type="text"
                id="image"
                className="input input-bordered border-primary w-80 md:w-full lg:w-full"
                required
                placeholder="Class Image"
                {...register("image", { required: true })}
              />
            </div>
            <div data-aos="fade-down" className="mb-4 ml-6 lg:ml-0">
              <label className="label">Class Name</label>
              <input
                type="text"
                id="className"
                className="input input-bordered border-primary w-80 md:w-full lg:w-full"
                required
                placeholder="Class Name"
                {...register("name", { required: true })}
              />
            </div>
            <div data-aos="fade-up" className="mb-4 ml-6 lg:ml-0">
              <label className="label">Instructor Name</label>
              <input
                type="text"
                id="instructorName"
                className="input input-bordered border-primary w-80 md:w-full lg:w-full"
                required
                placeholder="Instructor Name"
                defaultValue={user?.displayName || user?.name || ""}
                disabled
              />
            </div>
            <div data-aos="fade-down" className="mb-4 ml-6 lg:ml-0">
              <label className="label">Instructor Email</label>
              <input
                type="text"
                id="instructorEmail"
                className="input input-bordered border-primary w-80 md:w-full lg:w-full"
                required
                placeholder="Instructor Email"
                defaultValue={user?.email || ""}
                disabled
              />
            </div>
            <div data-aos="fade-up" className="mb-4 ml-6 lg:ml-0">
              <label className="label">Available Seats</label>
              <input
                type="number"
                id="availableSeats"
                className="input input-bordered border-primary w-80 md:w-full lg:w-full"
                required
                placeholder="Available Seats"
                {...register("availableSeats", { required: true })}
              />
            </div>
            <div data-aos="fade-down" className="mb-4 ml-6 lg:ml-0">
              <label className="label">Price</label>
              <input
                type="number"
                id="price"
                className="input input-bordered border-primary w-80 md:w-full lg:w-full"
                required
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="lg:mx-0 mt-8 mx-5 w-100">
            <button type="submit" className="btn btn-primary btn-block">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
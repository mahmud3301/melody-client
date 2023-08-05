import { useState } from "react";
import Swal from "sweetalert2";

const SubscribeUs = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    Swal.fire({
      icon: "success",
      title: "Subscribe Successfully",
      showConfirmButton: false,
      timer: 1500
    });
    console.log("Subscribed Email:", email);
    setEmail("");
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="px-6 md:px-48 mt-24 text-white">
      <div className="bg-[#091430] rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 mt-12 lg:ml-5">
            <h1 className="text-5xl font-bold">Enjoy with subscribing us</h1>
            <p className="mt-16 text-xl font-medium">
              Sit adipiscing maecenas nunc, rhoncus. Nunc massa donec morbi id
              diam iaculis. Eu, praesent a, sed facilisis et cras ultrices
              lacus. Adipiscing cras pulvinar in non. Velit adipiscing lobortis
              mi porttitor.
            </p>
            <div className="join mt-8">
              <input
                required
                id="emailInput"
                type="email"
                className="input input-bordered w-96 join-item rounded-full"
                placeholder="Your Email Here"
                value={email}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-secondary rounded-full join-item rounded-r-full"
                onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <img
              className="rounded-3xl my-8 p-4 md:p-0 md:ml-40"
              src="https://media.istockphoto.com/id/185002619/photo/guitar-player.jpg?s=612x612&w=0&k=20&c=w_zR019swe4ywmXEq0RfDi55FuLEczNSkYK3U7v2NuA="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeUs;

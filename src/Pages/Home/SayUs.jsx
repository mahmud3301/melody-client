import { useEffect } from "react";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";

const SayUs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("feedback.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="px-6 md:px-48 mt-12">
      <div className="text-center mt-24">
        <h1 className="text-5xl lg:text-8xl font-bold mb-12">
          12.000 people <span className="text-primary">Say Us</span>
        </h1>
        <p className="text-gray-400 text-xl font-semibold">
          Malesuada dignissim nullam quis pellentesque eget scelerisque erat{" "}
          <br />
          adipiscing parturient. Ultricies amet amet ipsum eget.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((feedback) => (
          <div key={feedback.name} className="bg-gradient-to-r from-cyan-300 to-blue-500 rounded-3xl p-6">
            <h1 className="flex text-black font-bold">
              <FaTwitter className="mt-2 text-2xl " />
              <span className="text-2xl ml-3">{feedback.name}</span>
            </h1>
            <p className="text-2xl text-black mt-4">
              {feedback.feedback}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SayUs;

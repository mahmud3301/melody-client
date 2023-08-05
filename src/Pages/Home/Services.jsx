import { useEffect } from "react";
import { useState } from "react";

const Services = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="px-6 md:px-48 mt-12">
      <div className="grid grid-cols md:grid-cols-3 gap-12">
        {data.map((service) => (
          <div key={service.id} className="mt-24 hover:scale-95 transition duration-200 hover:shadow-2xl hover:shadow-blue-500/50 rounded-3xl p-8">
            <img
              className="rounded-3xl"
              src={service.image}
              alt={service.name}
            />
            <h1 className="text-5xl font-bold mt-16 mb-8">{service.name}</h1>
            <p className="text-xl text-gray-400">{service.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

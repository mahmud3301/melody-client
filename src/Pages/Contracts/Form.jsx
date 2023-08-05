import { useState } from 'react';
import Swal from 'sweetalert2';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      message: '',
    });
    Swal.fire('Form data cleared!', '', 'success');
  };

  return (
    <div className="px-6 md:px-48 mt-24">
      <div className="bg-base-200 p-12 rounded-2xl justify-center items-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold">Name*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold">Email*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold">
                Phone Number*
              </span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold">
                Name of Company*
              </span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Name of Company"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-bold">Message*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered h-48 w-full"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="btn btn-secondary btn-block"
            onClick={handleClearForm}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

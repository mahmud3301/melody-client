import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [classData, setClassData] = useState([]);
  const [updatedLog, setUpdatedLog] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    axiosSecure.get("/classes").then((response) => {
      setClassData(response.data);
    });
  }, [axiosSecure, updatedLog]);

  const handleAccept = (classData) => {
    const confirm = window.confirm(
      "Are you sure you want to accept this class?"
    );
    if (confirm) {
      axiosSecure
        .put(`/classes/${classData._id}?status=approved`)
        .then((response) => {
          if (response.data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Class Approved",
              showConfirmButton: true,
              timer: 1500
            });
            setUpdatedLog(!updatedLog);
          }
        });
    }
  };

  const handleDeny = (classData) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this class?"
    );
    if (confirm) {
      axiosSecure
        .put(`/classes/${classData._id}?status=deny`)
        .then((response) => {
          if (response.data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Class denied",
              showConfirmButton: true,
              timer: 1500
            });
            setUpdatedLog(!updatedLog);
          }
        });
    }
  };

  const handleFeedbackModalOpen = (classData) => {
    setSelectedClass(classData);
    setFeedbackModalOpen(true);
  };

  const handleFeedbackModalClose = () => {
    setSelectedClass(null);
    setFeedbackModalOpen(false);
    setFeedbackMessage("");
  };

  const handleSendFeedback = () => {
    if (feedbackMessage.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Feedback Error",
        text: "Please enter a feedback message"
      });
      return;
    }

    const feedbackData = {
      classId: selectedClass._id,
      feedback: feedbackMessage
    };

    axiosSecure.post("/feedback", feedbackData).then((response) => {
      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Feedback Sent",
          showConfirmButton: true,
          timer: 1500
        });
        handleFeedbackModalClose();
      }
    });
  };

  return (
    <div className="w-full h-full mt-[100%]">
      <Helmet>
        <title>Melody | Manage classes</title>
      </Helmet>
      <p className="text-5xl font-bold text-center mb-12">
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
              <th className="text-lg font-bold">Available Seats</th>
              <th className="text-lg font-bold">Status</th>
              <th className="text-lg font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-base-300">
            {classData.map((item, index) => (
              <tr key={item._id}>
                <th></th>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 overflow-hidden rounded-full">
                      <img
                        className="w-full h-full object-cover"
                        src={item.image}
                        alt={item.name}
                      />
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
                <td>{item.availableSeats}</td>
                <td>{item.status}</td>
                <td className="flex justify-center">
                  <button
                    disabled={
                      item.status === "approved" || item.status === "deny"
                    }
                    onClick={() => handleAccept(item)}
                    className="btn btn-primary mx-2">
                    Accept
                  </button>
                  <button
                    className="btn btn-error mx-2"
                    onClick={() => handleDeny(item)}
                    disabled={
                      item.status === "approved" || item.status === "deny"
                    }>
                    Deny
                  </button>
                  <button
                    className="btn btn-secondary mx-2"
                    onClick={() => handleFeedbackModalOpen(item)}>
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Feedback Modal */}
      {feedbackModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70">
          <div className="mx-auto p-8 bg-base-200 rounded-lg">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleFeedbackModalClose}>
                Close
              </button>
            </div>
            <div className="mt-4">
              <textarea
                type="text"
                value={feedbackMessage}
                onChange={(e) => setFeedbackMessage(e.target.value)}
                placeholder="Feedback"
                className="textarea w-96 h-36"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button className="btn btn-primary" onClick={handleSendFeedback}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
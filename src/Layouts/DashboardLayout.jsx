import React from "react";
import { FaBook, FaCartPlus, FaUser, FaPlus, FaHome } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { BsFillBookFill } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { Fade } from "react-awesome-reveal";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <>
      <Fade>
        <div className="flex justify-center items-center h-screen">
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="px-8 lg:px-36 drawer-content flex flex-col items-center justify-center">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <Outlet></Outlet>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                {isAdmin && (
                  <>
                    <li>
                      <NavLink
                        to="/"
                        activeClassName=""
                        className="text-lg font-medium mb-3 mt-9">
                        <FaHome className="text-primary" /> Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard"
                        activeClassName=""
                        className="text-lg font-medium mb-3">
                        <RiDashboardFill className="text-primary" /> Dashboard
                      </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                      <NavLink
                        to="/dashboard/all-users"
                        activeClassName=""
                        className="text-lg font-medium mb-5">
                        <FaUser className="text-primary" /> Manage Users
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/manage-classes"
                        activeClassName=""
                        className="text-lg font-medium mb-5">
                        <FaBook className="text-primary" /> Manage Classes
                      </NavLink>
                    </li>
                  </>
                )}
                {isInstructor && (
                  <>
                    <li>
                      <NavLink
                        to="/"
                        activeClassName=""
                        className="text-lg font-medium mb-3 mt-9">
                        <FaHome className="text-primary" /> Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard"
                        activeClassName=""
                        className="text-lg font-medium mb-3">
                        <RiDashboardFill className="text-primary" /> Dashboard
                      </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                      <NavLink
                        to="/dashboard/add-a-class"
                        activeClassName=""
                        className="text-lg font-medium mb-5">
                        <FaPlus className="text-primary" /> Add a Class
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/my-classes"
                        activeClassName=""
                        className="text-lg font-medium mb-3">
                        <BsFillBookFill className="text-primary" /> My Classes
                      </NavLink>
                    </li>
                  </>
                )}
                {!isAdmin && !isInstructor && (
                  <>
                    <li>
                      <NavLink
                        to="/"
                        activeClassName=""
                        className="text-lg font-medium mb-3 mt-9">
                        <FaHome className="text-primary" /> Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard"
                        activeClassName=""
                        className="text-lg font-medium mb-3">
                        <RiDashboardFill className="text-primary" /> Dashboard
                      </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                      <NavLink
                        to="/dashboard/selected-course"
                        activeClassName=""
                        className="text-lg font-medium mb-5">
                        <FaBook className="text-primary" /> My Selected Classes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/my-enrolled-classes"
                        activeClassName=""
                        className="text-lg font-medium mb-3">
                        <FaCartPlus className="text-primary" /> My Enrolled
                        Classes
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default DashboardLayout;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Instructors from "../Pages/Instructors/Instractors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import SelectedCourse from "../Pages/Dashboard/SelectedCourse";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddAClass from "../Pages/Dashboard/AddAClass";
import MyClasses from "../Pages/Dashboard/MyClasses";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contract from "../Pages/Contracts/Contract";
// import Payment from "../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contract-us",
        element: <Contract />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute> 
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "selected-course",
        element: <SelectedCourse />,
      },
      {
        path: "my-enrolled-classes",
        element: <EnrolledClasses />,
      },
      // {
      //   path: "payment/:id",
      //   element: <Payment/>,
      // },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manage-classes",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      {
        path: "add-a-class",
        element: (
          <InstructorRoute>
            <AddAClass />
          </InstructorRoute>
        ),
      },
      {
        path: "my-classes",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default router;

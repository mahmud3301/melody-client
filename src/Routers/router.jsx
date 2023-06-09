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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <Error />,
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
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/selected-course",
        element: <SelectedCourse/>,
      },
      {
        path: "/dashboard/my-enrolled-classes",
        element: <EnrolledClasses/>
      }
    ]
  },
]);

export default router;

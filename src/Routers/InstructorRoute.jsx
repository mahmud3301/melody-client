import { Navigate, useLocation } from "react-router";
import LoadingPage from "../Pages/LoadingPage";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useInstructor from "../hooks/useInstructor";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <LoadingPage/>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;
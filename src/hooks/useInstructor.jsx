import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useInstructor = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
        console.log("is instructor response", res);
        return res.data.instructor;
      }
      return false;
    },
    enabled: !!user?.email,
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      if (user?.email) {
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        console.log("is admin response", res);
        return res.data.admin;
      }
      return false;
    },
    enabled: !!user?.email,
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;

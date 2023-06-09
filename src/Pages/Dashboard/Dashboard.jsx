import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="items-center flex">
        <img
          className="mask mask-squircle w-32 mr-16"
          src={user.photoURL}
        />
        <p className="text-5xl font-bold text-center">
          Welcome!! <span className="text-primary">{user.displayName}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

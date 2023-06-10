import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Melody | Dashboard</title>
      </Helmet>
      <div className="items-center flex">
        <PhotoProvider className="rounded-xl">
          <PhotoView src={user.photoURL}>
            <img
              className="mask mask-squircle w-32 mr-16 cursor-pointer hover:scale-150 transition"
              src={user.photoURL}
            />
          </PhotoView>
        </PhotoProvider>
        <p className="text-5xl font-bold text-center">
          Welcome <span className="text-primary">{user.displayName}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import loginPng from "../../assets/login.png";
import { AuthContext } from "../../provider/AuthProvider";
import { app } from "../../firebase/firebase.config";
import Swal from "sweetalert2";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("from") || "/";
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;
  
    if (!email || !password) {
      setError("Please fill in all the fields");
      return;
    }
  
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
  
        // Show SweetAlert when user is logged in
        Swal.fire({
          title: "Login Successful",
          text: "You have successfully logged in.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.log(error);
        setError("Invalid email or password");
      });
  };
  

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
  
        Swal.fire({
          title: "User Created",
          text: "Congratulations! Your account has been created successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1 data-aos="fade-down" className="text-5xl font-bold text-center mt-28">
        <span className="text-primary">Login</span> now!
      </h1>
      <div className="hero bg-base-100">
        <div className="hero-content mt-24 flex-col lg:flex-row-reverse">
          <div data-aos="fade-left" className="text-center lg:text-left">
            <p className="py-6">
              <img className="w-96 mb-8" src={loginPng} alt="" />
            </p>
          </div>
          <form data-aos="fade-right" className="w-full" onSubmit={handleSubmit(handleLogin)}>
            <div className="card flex-shrink-0 mr-0 lg:mr-16 shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && <p className="text-error">{errors.email.message}</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="input input-bordered w-full"
                      {...register("password", { required: "Password is required" })}
                    />
                    <div
                      className="absolute right-0 mr-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </div>
                  </div>
                  {errors.password && <p className="text-error">{errors.password.message}</p>}
                </div>

                <p className="mt-4">
                  Don't have an account?{" "}
                  <Link to="/register" className="link link-primary">
                    Register
                  </Link>
                </p>
                <p className="text-error mt-3 text-center">{error}</p>
                <div className="form-control mt-5">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
              <div className="divider">OR Login With</div>
              <div className="card-body justify-center mx-auto">
                <div>
                  <button onClick={handleGoogleLogin} className="btn btn-primary">
                    <FaGoogle />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
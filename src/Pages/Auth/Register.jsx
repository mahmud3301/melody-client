import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import registerPng from "../../assets/login.png";
import { AuthContext } from "../../provider/AuthProvider";
import { app } from "../../firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [capitalLetterError, setCapitalLetterError] = useState(false);
  const [specialCharacterError, setSpecialCharacterError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  useEffect(() => {
    if (auth.currentUser) {
      const { displayName, photoURL } = auth.currentUser;
      if (displayName && photoURL) {
        navigate(from, { replace: true });
      }
    }
  }, [auth.currentUser, navigate, from]);

  const handleRegister = (formData) => {
    const { name, url, email, password } = formData;
    const saveUser = {
      name,
      email,
    };
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setCapitalLetterError(true);
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setSpecialCharacterError(true);
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const createdUser = userCredential.user;
        updateProfile(createdUser, { displayName: name, photoURL: url })
          .then(() => {
            fetch("http://localhost:5000/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then(() => {
                console.log("Profile updated!");
                navigate(from || "/", { replace: true });

                Swal.fire({
                  title: "User Created",
                  text: "Congratulations! Your account has been created successfully.",
                  icon: "success",
                  confirmButtonText: "OK",
                });
              })
              .catch((error) => {
                console.log("Error updating profile:", error);
              });
          })
          .catch((error) => {
            console.log("Error updating profile:", error);
          });
      })
      .catch((error) => {
        console.log("Error creating user:", error);
      });
  };

  const handleGoogleRegister = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const { user } = result;

        const { displayName, email, photoURL } = user;
        const saveUser = {
          name: displayName,
          email,
        };

        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then(() => {
            console.log("Profile updated!");
            navigate(from || "/", { replace: true });

            Swal.fire({
              title: "User Created",
              text: "Congratulations! Your account has been created successfully.",
              icon: "success",
              confirmButtonText: "OK",
            });
          })
          .catch((error) => {
            console.log("Error updating profile:", error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const password = watch("password");

  return (
    <div>
      <Helmet>
        <title>Melody | Sign Up</title>
      </Helmet>
      <h1 className="text-5xl font-bold text-center mt-28">
        <span className="text-primary">Register</span> now!
      </h1>
      <div className="hero bg-base-100 mb-24">
        <div className="hero-content mt-24 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="w-full h-full">
              <img className="w-96 mb-8" src={registerPng} alt="" />
            </p>
          </div>
          <form className="w-full" onSubmit={handleSubmit(handleRegister)}>
            <div className="card flex-shrink-0 mr-0 lg:mr-16 shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="error-message text-error">
                      Name is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="error-message text-error">
                      Email is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                      placeholder="Password"
                      className={`input w-full input-bordered ${
                        errors.password ? "input-error" : ""
                      }`}
                    />
                    <div
                      className="absolute right-0 mr-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={handleShowPassword}>
                      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </div>
                  </div>
                  {errors.password && (
                    <span className="error-message text-error">
                      Password is required and must be at least 6 characters
                      long
                    </span>
                  )}
                  {capitalLetterError && (
                    <span className="error-message text-error">
                      Password must contain at least one capital letter
                    </span>
                  )}
                  {specialCharacterError && (
                    <span className="error-message text-error">
                      Password must contain at least one special character
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">{/* ... */}</div>
                  {/* ... */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <div className="relative">
                    <input
                      {...register("confirmPassword", {
                        required: true,
                      })}
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className={`input input-bordered w-full ${
                        errors.confirmPassword ? "input-error" : ""
                      }`}
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                    <div
                      className="absolute right-0 mr-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={handleShowPassword}>
                      {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </div>
                  </div>
                  {errors.confirmPassword && (
                    <span className="error-message text-error">
                      Confirm Password is required
                    </span>
                  )}
                  {passwordError && (
                    <span className="error-message text-error">
                      {passwordError}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="url"
                    {...register("url", {
                      required: true,
                    })}
                    placeholder="Photo Url"
                    className="input input-bordered"
                  />
                  {errors.url && (
                    <span className="error-message text-error">
                      Photo Urls is required
                    </span>
                  )}
                </div>
                <p className="mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="link link-primary">
                    Login
                  </Link>
                </p>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <div className="divider">OR Login With</div>
                <div className="card-body justify-center mx-auto">
                  <div>
                    <button
                      onClick={handleGoogleRegister}
                      className="btn btn-primary">
                      <FaGoogle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-base-300 py-[5%] items-center min-h-screen">
      <div>
        <img
          className="mx-auto justify-center items-center mt-[55%] lg:mt-0 h-96"
          src="https://www.pagenotfound.ca/img/404_test_1a.gif"
          alt=""
        />
      </div>
      <Link to="/">
        <button className="btn btn-primary ml-[33%] lg:ml-[46%]">
          Go Back To Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
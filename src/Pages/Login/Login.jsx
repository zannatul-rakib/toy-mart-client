import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const result = { email, password };
    console.log(result);

    loginUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        toast.success("User login successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setError("");
        form.reset();
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setError("");
        toast.success("Google Sign in successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate(from);
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });
  };

  return (
    <section className=" min-h-screen flex items-center justify-center my-28">
      <ToastContainer />
      <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
        <div className="md:w-1/2 px-5">
          <h2 className="text-2xl font-bold text-[#ef0081]">Login</h2>
          <p className="text-sm mt-4 text-[#002D74]">
            If you have an account, please login
          </p>
          <form
            onSubmit={handleLogIn}
            className="mt-6"
            action="#"
            method="POST">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-[#ef0081] focus:bg-white focus:outline-none"
                autoFocus
                autoComplete
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-[#ef0081]
                      focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-[#ef0081] focus:text-blue-700">
                Forgot Password?
              </a>
            </div>

            <div className="text-sm flex justify-between items-center mt-3">
              <p>{error}</p>
            </div>

            <button
              type="submit"
              className="w-full block bg-[#ef0081] hover:bg-[#ff6cad] focus:bg-blue-400 text-white font-semibold rounded-lg
                    px-4 py-3 mt-6">
              Log In
            </button>
          </form>

          <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-500" />
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
            <span className="text-xl">
              <FcGoogle />
            </span>
            <span className="ml-4">Login with Google</span>
          </button>

          <div className="text-sm flex justify-between items-center mt-3">
            <p>If you don`t have an account...</p>
            <Link
              to="/register"
              className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-[#ef0081]  ">
              Register
            </Link>
          </div>
        </div>

        <div className="w-1/2 md:block hidden ">
          <img
            src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            className="rounded-2xl"
            alt="page img"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;

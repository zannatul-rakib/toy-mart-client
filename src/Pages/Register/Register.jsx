import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    setError('');
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const result = { name, photo, email, password };
    console.log(result);

    // password validation 
    if (!password.length > 6) {
      setError('Password must be 6 character');
      return;
    }
    else if (!/(?=.*[a-z])/.test(password)) {
      setError("Please should be a lowercase character.");
            return;
    }
    else  if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please should be a Uppercase character.");
      return;
  }
  else  if (!/(?=.*[0-9])/.test(password)) {
      setError("Please should be a Number.");
      return;
  }
  else  if (!/(?=.*[@$!%*?&])/.test(password)) {
      setError("Please should be a Special character.");
      return;
    }
    

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        setError('');
        toast.success("User created successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        form.reset();
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
    })
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        toast.success("Google sign in successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setError('');
        navigate('/');
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message)
      });
  };

  return (
    <div className="h-screen md:flex my-24 border lg:mx-20">
      <ToastContainer />
      <div className="relative overflow-hidden md:flex w-1/2 bg-primary text-primary-content     i justify-around items-center hidden">
        <div>
          <h2 className="lg:text-4xl text-xl lg:font-bold font-semibold">
            <span className="text-[#ef0081]">Toy</span> Mart
          </h2>
          <p className="text-white mt-1">The most popular toy company</p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">
            Read More
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-8fillRule=0 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center">
        <div>
          <form onSubmit={handleCreateUser} className="">
            <h1 className="font-bold text-2xl mb-1">Hello Again!</h1>
            <p className="text-sm font-normal mb-7">Register Your Account</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none bg-transparent"
                type="text"
                name="name"
                id=""
                placeholder="Full name"
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none bg-transparent"
                type="text"
                name="photo"
                id=""
                placeholder="Photo URL"
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none bg-transparent"
                type="email"
                name="email"
                id=""
                placeholder="Email Address"
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none bg-transparent"
                type="password"
                name="password"
                id=""
                placeholder="Password"
                required
              />
            </div>
            <div className="text-sm flex justify-between items-center mt-3">
              <p>{ error}</p>
          </div>
            <button
              type="submit"
              className="block w-full bg-primary mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
              Register
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
            <p>Already have have an account...</p>
            <Link
              to="/login"
              className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-primary  ">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../../../assets/user.svg";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { AiFillSetting, AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { user, handleToggle, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('user logout');
        showToastMessage();
      })
      .catch(e => {
        console.log(e.message);
    })
  }

  const showToastMessage = () => {
    toast.success('User logout', {
        position: toast.POSITION.TOP_RIGHT
    });
};
  

  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-toys">All Toys</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/my-toys">My Toys</Link>
          </li>
          <li>
            <Link to="/add-toy">Add a Toy</Link>
          </li>
        </>
      ) : (
        ""
      )}
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="fixed z-20 top-0 left-0  w-full border-b">
      <ToastContainer/>
      <div className="navbar bg-base-200 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {menuItem}
            </ul>
          </div>
          <Link to="/">
            <h2 className="lg:text-3xl text-xl lg:font-bold font-semibold">
              <span className="text-[#ef0081]">Toy</span> Mart
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">9</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">9 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      {user?.photoURL ? (
                        <img src={user?.photoURL} alt="user photo" />
                      ) : (
                        <img src={userIcon} alt="user photo" />
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">
                          <AiOutlineUser />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="justify-between">
                        Settings
                        <span className="badge">
                          <AiFillSetting />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a onClick={handleLogOut} className="justify-between">
                        Logout
                        <span className="badge">
                          <BiLogOutCircle />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link to="/login" className="text-2xl" title="login">
                    <BiLogInCircle />
                  </Link>
                </div>
              </>
            )}
          </div>
          <div className="ml-3">
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={handleToggle} />

              <svg
                className="swap-off fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              

              <svg
                className="swap-on fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>

             
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

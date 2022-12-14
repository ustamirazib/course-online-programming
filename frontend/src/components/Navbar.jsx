import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticated } from "../store";
import { motion } from "framer-motion";
import "./Styles.css";

function Navbar(props) {
  const redirect = useNavigate();
  const [auth, setAuth] = useRecoilState(authenticated);
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const MySwal = withReactContent(Swal);
  const logout = async () => {
    setAuth({ check: false });
    localStorage.removeItem("tokens");
    redirect("/signin");
    MySwal.fire({
      title: <strong>Logout success</strong>,
      html: <i>Anda berhasil logout</i>,
      icon: "info",
    });
  };
  return (
    <>
      <nav className="bg-transparent mt-3">
        <nav className="flex flex-col items-center justify-between sm:flex-row container mx-auto ">
          <div className="bg flex w-full items-center justify-between px-5">
            <div className="flex items-center rounded-md bg-white shadow-sm">
              <button className="bg-primary p-3 rounded-l-md">
                <svg
                  className="h-5 w-5 text-white flex-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="w-40 bg-transparent px-2 placeholder:italic focus:outline-none flex-1"
                placeholder="e.g Python Variable"
              />
            </div>
            {/* Hamburger */}
            <div>
              <button
                className="block sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              </button>
            </div>
            {/* end Hamburger */}
          </div>
          {/* Mid */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            }  sm:flex justify-between w-full`}
          >
            <ul className="flex flex-col sm:flex-row">
              {auth.check ? (
                <li>
                  <NavLink
                    className="block px-4 py-5 font-bold hover:text-gray-500 font-text_secondary"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              {auth.check ? (
                <li>
                  <NavLink
                    className="block px-4 py-5 font-bold hover:text-gray-500 font-text_secondary"
                    to="/course"
                  >
                    Course
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              <li>
                <NavLink
                  className="block px-4 py-5 font-bold hover:text-gray-500 font-text_secondary"
                  to="/articles"
                >
                  Article
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* Right */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } sm:flex justify-between w-full sm:w-auto z-50`}
          >
            {auth.check ? (
              <ul className="flex w-full justify-center relative">
                <li className="flex items-center w-full">
                  <a
                    onClick={() => setOpenMenu(!openMenu)}
                    className="block px-4 py-5"
                    href="#"
                  >
                    {auth.user.first_name}
                  </a>
                  <button onClick={() => setOpenMenu(!openMenu)} type="button">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  <motion.div
                    animate={{ x: 50 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className={` ${
                      openMenu ? "hidden" : "block"
                    } absolute top-16 right-0 bg-gray-50 shadow-md divide-y divide-gray-300 rounded`}
                  >
                    <div className="px-5 py-3 flex space-x-3 w-48">
                      <i className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </i>

                      <NavLink
                        className="font-semibold font-text_secondary text-gray-700 hover:text-gray-500 text-sm"
                        to="/account/profile"
                      >
                        My Account
                      </NavLink>
                    </div>
                    <div className="px-5 py-3 flex space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>
                      <button type="button" onClick={logout}>
                        <span className="font-semibold font-text_secondary text-gray-700 hover:text-gray-500">
                          Logout
                        </span>
                      </button>
                    </div>
                  </motion.div>
                </li>
              </ul>
            ) : (
              <ul className="flex w-full justify-center">
                <li className="flex items-center w-full">
                  <NavLink className="block px-4 py-5" to="/signin">
                    Login
                  </NavLink>
                </li>
                <li className="flex items-center w-full">
                  <NavLink className="block px-4 py-5" to="/signup">
                    Register
                  </NavLink>
                </li>
              </ul>
            )}
          </nav>
        </nav>
      </nav>
    </>
  );
}

export default Navbar;

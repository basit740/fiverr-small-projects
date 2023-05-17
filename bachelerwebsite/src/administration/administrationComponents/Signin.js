import React, { useRef } from "react";
import sideImage from "../../assets/carouselImages/carouselThird.jpg";
import { useNavigate } from "react-router-dom";
import { getAdministrators } from "../../api/administrators";

import { login } from "../../store/reducers/authSlice";

import { useDispatch } from "react-redux";
const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();

    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    const admins = await getAdministrators();
    console.log(admins);
    // admins.find(admin)
    // admins.find(admin.email===)

    const found = admins.find(
      (admin) =>
        admin.email === emailRef.current.value &&
        admin.password === passwordRef.current.value
    );

    if (found === undefined) {
      alert("invalid credentials");
      return;
    } else {
      dispatch(login(found));

      if (localStorage.getItem("lastPage") && found.roleId !== 3) {
        window.location.href = localStorage.getItem("lastPage");
        return;
      }

      window.location.href = "/BachelorWebApp/admin/profile";
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={sideImage} alt="" />
      </div>
      <div class="flex flex-col items-center justify-center px-6 pt-8 dark:bg-gray-900 ">
        <div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="text-center 2xl:mb-10 mb-4">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sign in
            </h4>
            <div className="text-slate-500 text-base">
              Sign in to your account to start using our platform
            </div>
          </div>
          <form class="mt-8 space-y-6" action="#" onSubmit={submitHandler}>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="contact@kamtjatka.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>

            <button type="submit" class="btn btn-primary w-full">
              Login to your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;

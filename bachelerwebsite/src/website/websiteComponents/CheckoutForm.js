import React from "react";
import { useNavigate } from "react-router-dom";
const CheckoutForm = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/BachelorWebApp/adminsignin");
  }
  return (
    <div class="relative mx-auto w-full bg-white">
      <div class="grid min-h-screen grid-cols-10">
        <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
          <div class="mx-auto w-full max-w-lg">
            <h1 class="relative text-2xl font-medium text-gray-700 sm:text-3xl">
              Secure Checkout
              <span class="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
            </h1>
            <form action="" class="mt-10 flex flex-col space-y-4">
              <div class="relative">
                <label
                  for="card-number"
                  class="text-xs font-semibold text-gray-500"
                >
                  Card number
                </label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  placeholder="1234-5678-XXXX-XXXX"
                  class="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <p class="text-xs font-semibold text-gray-500">
                  Expiration date
                </p>
                <div class="mr-6 flex flex-wrap">
                  <div class="my-1">
                    <label for="month" class="sr-only">
                      Select expiration month
                    </label>
                    <select
                      name="month"
                      id="month"
                      class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Month</option>
                    </select>
                  </div>
                  <div class="my-1 ml-3 mr-6">
                    <label for="year" class="sr-only">
                      Select expiration year
                    </label>
                    <select
                      name="year"
                      id="year"
                      class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Year</option>
                    </select>
                  </div>
                  <div class="relative my-1">
                    <label for="security-code" class="sr-only">
                      Security code
                    </label>
                    <input
                      type="text"
                      id="security-code"
                      name="security-code"
                      placeholder="Security code"
                      class="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label for="card-name" class="sr-only">
                  Card name
                </label>
                <input
                  type="text"
                  id="card-name"
                  name="card-name"
                  placeholder="Name on the card"
                  class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </form>
            <p class="mt-10 text-center text-sm font-semibold text-gray-500">
              By placing this order you agree to the{" "}
              <a
                href="#"
                class="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
              >
                Terms and Conditions
              </a>
            </p>
            <button
              type="submit"
              class="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
              onClick={handleClick}
            >
              Place Order
            </button>
          </div>
        </div>
        <div class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
          <h2 class="sr-only">Order summary</h2>
          <div class="absolute inset-0 h-full w-full object-cover">
            <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
          </div>
          <div class="relative">
            <ul class="space-y-5">
              <li class="flex justify-between">
                <div class="ml-3">
                  <p class="text-base font-semibold text-white">
                    Nano Titanium Hair Dryer
                  </p>
                </div>

                <p class="text-sm font-semibold text-white">$260.00</p>
              </li>
              <li class="flex justify-between">
                <div class="ml-3">
                  <p class="text-base font-semibold text-white">Luisia H35</p>
                </div>

                <p class="text-sm font-semibold text-white">$350.00</p>
              </li>
            </ul>
            <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
            <div class="space-y-2">
              <p class="flex justify-between text-lg font-bold text-white">
                <span>Total price:</span>
                <span>$510.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

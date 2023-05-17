import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../context/CategoryContext";

const DetailsPagination = () => {
  const { categories } = useContext(CategoryContext);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const category = categories.find((category) => category.id === Number(id));

  const {
    name,
    longDescription,
    rent,
    consumption,
    deposit,
    moveInPrice,
    startPackage,
    images,
  } = category;

  return (
    <section>
      <div className="w-full h-[640px] relative flex justify-center items-center ">
        {images}
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2">{name}</h2>
            <p className="mb-8 text-base leading-relaxed">{longDescription}</p>
          </div>
          <div className="w-full h-full lg:w-[40%]">
            {/* reservation */}
            <div className="py-8 px-9  mb-12">
              <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    What is included in the price?
                  </h5>
                </div>
                <div class="flow-root">
                  <ul
                    role="list"
                    class="divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Rent
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {rent} DKK
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Utilities
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Incl. Water, Electricity, Heating
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {consumption} DKK
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Deposit
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            2 Months Rent
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {deposit} DKK
                        </div>
                      </div>
                    </li>
                    <li class="py-3 sm:py-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Starting Package
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Incl. Pillow, Duvet, Linen and Sheets
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {startPackage} DKK
                        </div>
                      </div>
                    </li>
                    <li class="pt-3 pb-0 sm:pt-4">
                      <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0"></div>
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Move-In Price
                          </p>
                          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            Total Price
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {moveInPrice} DKK
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => {
                  navigate("/BachelorWebApp/bookaroom");
                }}
                className="btn btn-large btn-primary w-full h-[60px] border border-gray-200 rounded-lg"
              >
                Book now for {moveInPrice}DKK
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPagination;

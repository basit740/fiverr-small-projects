import { useState, useEffect } from "react";
import { getCustomers } from "../../api/customers";
import { getFinanceCategories } from "../../api/finances";
import { createFinance } from "../../api/finances";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, Option } from "@material-tailwind/react";
import { Input, Textarea } from "@material-tailwind/react";

const Invoices = () => {
  const [searchValue, setSearchValue] = useState("");
  const [matchingTenants, setMatchingTenants] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); //state variable for dropdown
  const [selectedCategory, setSelectedCategory] = useState("");
  const [financeCategories, setFinanceCategories] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [amount, setAmount] = useState(""); //  state for the amount field
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the finance data
    const financeData = {
      category: selectedCategory.id,
      amountOfMoney: amount,
      customerId: searchValue.id,
      dueDate: selectedDate,
      description: message,
    };

    console.log(createFinance([financeData]));
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value.replace(/[^0-9]/g, "")); // Remove non-numeric characters
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetchFinanceCategories();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false); // Hide the dropdown after selecting a category
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    fetchTenants(value);
    setShowDropdown(true); // Show the dropdown when there's a search value
  };

  const fetchTenants = (searchTerm) => {
    getCustomers()
      .then((customers) => {
        const matchingCustomers = customers.filter((customer) => {
          const fullName = `${customer.firstName} ${customer.surname}`;
          return fullName.toLowerCase().includes(searchTerm.toLowerCase());
        });
        console.log("MATCHING tenant:", matchingCustomers);
        setMatchingTenants(matchingCustomers);
      })
      .catch((error) => {
        console.error("Error fetching tenants:", error);
      });
  };

  const handleTenantSelect = (tenant) => {
    setSearchValue(`${tenant.firstName} ${tenant.surname}`);
    // Handle tenant selection logic here
    setShowDropdown(false); // Hide the dropdown after selecting a tenant
    console.log("Selected tenant:", tenant);
  };

  const fetchFinanceCategories = async () => {
    try {
      const financeCategories = await getFinanceCategories();
      setFinanceCategories(financeCategories.map((category) => category.name));
    } catch (error) {
      console.error("Error fetching finance categories:", error);
    }
  };

  return (
    <section className="body-font relative">
      <div className="pb-4 bg-white dark:bg-gray-900">
        <div className="mb-5">
          <div className="container px-5 mx-auto flex flex-col items-center">
            <h2 class="h2 text-center ">Create an Invoice</h2>
            <div className="p-2 w-full">
              <div className="relative w-full border">
                <Select
                  size="lg"
                  label="Select Month"
                  className="leading-7 text-sm text-gray-600"
                  type="text"
                  id="category"
                  name="category"
                  value={selectedCategory}
                >
                  {financeCategories.map((category) => (
                    <Option
                      key={category.id}
                      value={category}
                      className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <Input
                  label="Amount of money"
                  htmlFor="amount"
                  type="text"
                  id="amount"
                  name="amount"
                  pattern="[0-9]*" // Accept only numbers
                  value={amount}
                  onChange={handleAmountChange}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <Input
                  label="Tenant email"
                  htmlFor="email"
                  type="email"
                  id="email"
                  name="email"
                  value={searchValue}
                  onChange={handleSearchChange}
                />

                {showDropdown && matchingTenants.length > 0 && (
                  <div className="absolute z-10 mt-2 py-2 bg-white rounded-md shadow-lg">
                    {matchingTenants.map((tenant) => (
                      <div
                        key={tenant.id}
                        className="cursor-pointer hover:bg-gray-200 px-4 py-2"
                        onClick={() => handleTenantSelect(tenant)}
                      >
                        {tenant.firstName} {tenant.surname}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <DatePicker
                  id="dueDate"
                  name="dueDate"
                  selected={selectedDate}
                  onChange={handleDateSelect}
                  placeholderText="Select a date"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <Textarea
                  id="message"
                  label="Message"
                  name="message"
                  for="message"
                  value={message}
                  onChange={handleMessageChange}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={handleSubmit}
                className="btn btn-secondary btn-sm w-full mx-auto"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invoices;

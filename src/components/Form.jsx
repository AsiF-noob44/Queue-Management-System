import { useState } from "react";
import { FiUserPlus } from "react-icons/fi";

const Form = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !service.trim())
      return alert("Please fill both fields.");

    onAdd({ name: name.trim(), service: service.trim() });
    setName("");
    setService("");
  };

  return (
    <div className="w-96 shrink-0 bg-gray-50 dark:bg-slate-800 rounded-xl p-8 shadow-xl border-2 border-gray-200 dark:border-slate-700 transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-slate-100 text-center">
        Add to Queue
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-gray-700 dark:text-slate-300"
          >
            Customer Name:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter customer name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all"
          />
        </div>

        {/* Service Select */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="service"
            className="text-sm font-semibold text-gray-700 dark:text-slate-300"
          >
            Service Type:
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all cursor-pointer"
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="consultation">Consultation</option>
            <option value="payment">Payment</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 cursor-pointer"
        >
          <FiUserPlus className="text-xl" />
          <span>Add to Queue</span>
        </button>
      </form>
    </div>
  );
};

export default Form;

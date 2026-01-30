import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Form from "./components/Form";
import Display from "./components/Display";
function App() {
  const [queue, setQueue] = useState([]);
  const [isDark, setIsDark] = useState(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    return currentTheme !== "light";
  });

  const addToQueue = (customer) => {
    setQueue((prevQueue) => [
      ...prevQueue,
      { id: crypto.randomUUID(), ...customer, status: "waiting" },
    ]); // Add new customer with unique ID and default status
  };

  const updateStatus = (id, newStatus) => {
    setQueue((prevQueue) =>
      prevQueue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer,
      ),
    );
  };

  const removeFromQueue = (id) => {
    setQueue((prevQueue) => prevQueue.filter((customer) => customer.id !== id)); // filter only returns true statements so we keep all customers except the one with the matching id
  };

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    document.documentElement.setAttribute(
      "data-theme",
      nextIsDark ? "dark" : "light",
    );
    setIsDark(nextIsDark);
  };

  return (
    <>
      <div className="container mx-auto p-8 min-h-screen">
        {/* Centered content with header and description */}
        <div className="flex flex-col items-center">
          <div className="grid w-full max-w-5xl grid-cols-[1fr_auto_1fr] items-center">
            <span aria-hidden="true" />
            <header className="text-center text-4xl font-bold text-gray-900 dark:text-[hsl(210,70%,56%)] text-shadow-2xs text-shadow-amber-50">
              Queue Management System
            </header>
            <div className="flex justify-end">
              <button
                onClick={toggleTheme}
                className={`group inline-flex items-center justify-center rounded-full border p-2.5 text-base font-semibold shadow-lg shadow-black/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 cursor-pointer ${
                  isDark
                    ? "border-slate-200/80 bg-slate-200 text-slate-900 hover:bg-white"
                    : "border-slate-700/70 bg-slate-900/80 text-slate-100 hover:bg-slate-800/80"
                }`}
                aria-label={
                  isDark ? "Switch to light theme" : "Switch to dark theme"
                }
              >
                <span className="text-base">
                  {isDark ? (
                    <FiSun className="text-lg" />
                  ) : (
                    <FiMoon className="text-lg" />
                  )}
                </span>
              </button>
            </div>
          </div>
          <p className="mt-3 text-md font-semibold text-gray-600 dark:text-slate-300">
            Manage your queues efficiently and effectively
          </p>
        </div>
        <main className="flex mt-16 gap-16 justify-center items-start">
          {/* Form and Display Components Here */}
          <Form onAdd={addToQueue} />
          <Display
            queue={queue}
            onUpdateStatus={updateStatus}
            onRemove={removeFromQueue}
          />{" "}
          {/* Pass queue and handler functions as props */}
        </main>
      </div>
    </>
  );
}

export default App;

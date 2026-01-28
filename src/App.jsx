import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Form from "./components/Form";
function App() {
  const [queue, setQueue] = useState([]);
  const [isDark, setIsDark] = useState(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    return currentTheme !== "light";
  });

  const addToQueue = (customer) => {
    // add data to queue
  };

  const updateStatus = (id, newStatus) => {
    // update customer status
  };

  const removeFromQueue = (id) => {
    // remove customer from queue
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
            <header className="text-center text-4xl font-bold dark:text-[hsl(210,70%,56%)] text-shadow-2xs text-shadow-amber-50">
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
                  {isDark ? <FiSun /> : <FiMoon />}
                </span>
              </button>
            </div>
          </div>
          <p className="mt-3 text-md font-semibold dark:text-slate-300">
            Manage your queues efficiently and effectively
          </p>
        </div>
        <main className="flex mt-10">
          <Form onAdd={addToQueue} />
        </main>
      </div>
    </>
  );
}

export default App;

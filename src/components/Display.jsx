const Display = ({ queue, onUpdateStatus, onRemove }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "text-yellow-600";
      case "processing...":
        return "text-blue-600";
      case "completed":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="w-175 h-150 shrink-0 flex flex-col bg-gray-50 dark:bg-slate-800 rounded-xl shadow-xl border-2 border-gray-200 dark:border-slate-700 transition-colors">
      <div className="px-8 pt-8 pb-4 border-b border-gray-200 dark:border-slate-700">
        <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-slate-200">
          Current Queue
        </h2>
        {queue.length > 0 && (
          <p className="text-center text-sm text-gray-500 dark:text-slate-400 mt-2">
            {queue.length} {queue.length === 1 ? "customer" : "customers"} in
            queue
          </p>
        )}
      </div>
      {queue.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-center text-gray-600 dark:text-slate-400 text-lg">
            The queue is currently empty.
          </p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="flex flex-col gap-3">
            {queue.map((customer) => (
              <div
                key={customer.id}
                className="group p-5 bg-white dark:bg-slate-700/50 rounded-lg shadow-md hover:shadow-lg border border-gray-200 dark:border-slate-600 transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-500"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-2">
                      {customer.name}
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-sm text-gray-600 dark:text-slate-300">
                        <span className="font-medium">Service:</span>{" "}
                        <span className="capitalize">{customer.service}</span>
                      </p>
                      <p className="text-sm">
                        <span className="font-medium text-gray-600 dark:text-slate-300">
                          Status:
                        </span>{" "}
                        <span
                          className={`font-semibold capitalize ${getStatusColor(customer.status)}`}
                        >
                          {customer.status}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    {customer.status === "waiting" && (
                      <button
                        className="w-24 px-4 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-md text-sm font-semibold transition-all duration-150 cursor-pointer shadow-sm hover:shadow"
                        onClick={() =>
                          onUpdateStatus(customer.id, "processing...")
                        }
                      >
                        Start
                      </button>
                    )}
                    {customer.status === "processing..." && (
                      <button
                        className="w-24 px-4 py-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded-md text-sm font-semibold transition-all duration-150 cursor-pointer shadow-sm hover:shadow"
                        onClick={() => onUpdateStatus(customer.id, "completed")}
                      >
                        Complete
                      </button>
                    )}
                    <button
                      className="w-24 px-4 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-md text-sm font-semibold transition-all duration-150 cursor-pointer shadow-sm hover:shadow"
                      onClick={() => onRemove(customer.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Display;

import { Link, useLocation } from "react-router-dom";

interface Iprops {
  statusCode?: number;
  title?: string;
  message?: string;
}

const ErrorHandler = ({
  statusCode = 500,
  title = "Server Error",
  message = "An unexpected error occurred. Please try again later.",
}: Iprops) => {
  const pathName = useLocation().pathname;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-6 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 p-6 text-white flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold">{statusCode}</h1>
            <h2 className="text-lg mt-1 font-medium">{title}</h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 opacity-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Message */}
        <div className="p-6 text-gray-700">
          <p className="text-base leading-relaxed">{message}</p>

          {/* Actions */}
          <div className="mt-6 space-y-3">
            <Link
              to={pathName}
              reloadDocument
              className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              Try Again
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              Go Back
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-6 py-3 text-center text-sm text-gray-500">
          Error code: {statusCode}
        </div>
      </div>
    </div>
  );
};

export default ErrorHandler;
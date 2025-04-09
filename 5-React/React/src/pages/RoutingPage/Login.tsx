import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/routing/ReportAnIssue");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white space-y-6">
      <h2 className="text-2xl font-semibold text-center">Login</h2>

      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-gray-500 bg-white text-gray-7 00 font-medium rounded-lg hover:bg-gray-500 hover:text-white transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
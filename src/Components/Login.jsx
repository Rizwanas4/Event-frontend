// src/Components/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || 'Failed to login');
      }

      const data = await response.json();
      setSuccess('Logged in successfully');
      console.log(data);
      navigate('/eventcreation');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <section className="home flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat w-full" style={{ backgroundImage: "url('https://kingsolomonscatering.com/wp-content/uploads/2022/11/bunch-flowers-leaves-table.jpg')" }}>
        <div className="bg-black bg-opacity-60 rounded-lg p-10 w-full max-w-md mx-auto">
          <section className="text-center mb-8">
            <h2 className="text-4xl font-bold text-pink-500">Login</h2>
          </section>
          {!isAuthenticated ? (
            <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="text-black shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:ring-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="mb-2 text-sm font-medium">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="text-black shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:ring-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
              <button
                type="button"
                onClick={() => loginWithRedirect()}
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Login with Google
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
            </form>
          ) : (
            <div className="text-center text-white mt-4">
              <p>You are already logged in.</p>
              <button
                onClick={() => navigate('/eventcreation')}
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 mt-4"
              >
                Go to Event Creation
              </button>
            </div>
          )}
          <p className="text-center text-white mt-4">
            Don't have an account? <Link to="/signup" className="text-pink-500 hover:underline">Sign Up</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;

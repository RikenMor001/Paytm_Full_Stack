import React from 'react';

export const SignIn = ({ navigate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-96 p-4">
        <div className="text-2xl font-semibold text-center text-blue-500 mb-6">
          Sign In
        </div>
        <form>
          <div className="mb-4">
            <div className="font-bold text-lg">Username</div>
            <input
              className="border rounded w-full text-gray-1000 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <div className="font-bold text-lg">Password</div>
            <input
              className="border rounded w-full text-gray-1000 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex justify-between">
          <p className="items-center text-sm text-gray-500 mt-3">
            Didn't Sign Up?
            <span
              className="underline hover:text-blue-700 cursor-pointer"
              onClick={() => navigate('dashboard')}
            >
              {' '}
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

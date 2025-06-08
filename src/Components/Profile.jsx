import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center p-4 text-gray-300">Loading...</div>;
  }

  if (!isAuthenticated) {
    return null; // or a message like "Please login"
  }

  return (
    <div className="max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-md p-6 mt-8 text-center">
      <img
        src={user.picture}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-500"
      />
      <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-300 break-words">{user.email}</p>
    </div>
  );
};

export default Profile;

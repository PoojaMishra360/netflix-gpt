import React, { useState } from "react";
import Header from "./Header";

export default function Login() {
  const [isSignin, setisSignUp] = useState(true);
  const handleSignUp = () => {
    // Handle sign-up logic here
    setisSignUp(!isSignin); // Example: Set sign-up state to true when the user clicks "Sign up now"
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
          alt="Netflix Logo"
        />
      </div>

      <form class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 bg-black/75 p-8 rounded-lg w-full max-w-sm">
        {/* <!-- Header --> */}
        <h1 class="text-3xl font-bold text-white mb-4">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>

        {/* <!-- Full Name --> */}
        {!isSignin && (
          <input
            type="text"
            placeholder="FullName"
            class="p-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        )}
        {/* <!-- Username --> */}
        <input
          type="text"
          placeholder="Username"
          class="p-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* <!-- Password --> */}
        <input
          type="password"
          placeholder="Password"
          class="p-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* <!-- Sign In Button --> */}
        <button
          type="submit"
          class="bg-red-600 text-white py-3 rounded font-bold hover:bg-red-700 transition duration-300"
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>

        {/* <!-- Options --> */}
        <div class="flex items-center justify-between text-gray-400 text-sm mt-2">
          <label class="flex items-center gap-2">
            <input type="checkbox" class="accent-red-600" />
            Remember me
          </label>
          <a href="#" class="hover:underline">
            Need help?
          </a>
        </div>

        {/* <!-- Footer --> */}
        <div class="text-gray-400 text-sm mt-6">
          <a href="#" onClick={handleSignUp} class="text-white hover:underline">
            {" "}
            {isSignin
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </a>
        </div>
      </form>
    </div>
  );
}

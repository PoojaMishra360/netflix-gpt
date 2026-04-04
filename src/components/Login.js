import React, { useRef, useState } from "react";
import LoginHeader from "./LoginHeader";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useNavigate} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignin, setisSignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = (e) => {
    const errors = validateData(email.current.value, password.current.value);
    setErrorMessage(errors);
    if (errors) return;
    if (!isSignin) {
      // Handle sign-up logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User signed up:", user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const {uid , email,displayName} = auth.currentUser;
                  dispatch(addUser({uid,email,displayName}));
              navigate("/browser");
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
                 setErrorMessage(error.code + ": " + error.message);
            });
        
          // ...
        })
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
          // ..
        });
    } else {
      // Handle sign-in logic here
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);
          navigate("/browser");
          // ...
        })
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
        });
    }
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
    setisSignUp(!isSignin); // Example: Set sign-up state to true when the user clicks "Sign up now"
  };
  return (
    <div>
      <LoginHeader />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
          alt="Netflix Logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 bg-black/75 p-8 rounded-lg w-full max-w-sm"
      >
        {/* <!-- Header --> */}{" "}
        <h1 className="text-3xl font-bold text-white mb-4">
          {" "}
          {isSignin ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {/* <!-- Full Name --> */}{" "}
        {!isSignin && (
          <input
          ref={name}
            type="text"
            placeholder="FullName"
            className="p-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        )}{" "}
        {/* <!-- Username --> */}{" "}
        <input
          ref={email}
          type="text"
          placeholder="Username"
          className="p-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {/* <!-- Password --> */}{" "}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <p className="text-red-500 text-sm"> {errorMessage} </p>
        {/* <!-- Sign In Button --> */}{" "}
        <button
          type="submit"
          onClick={handleButtonClick}
          className="bg-red-600 text-white py-3 rounded font-bold hover:bg-red-700 transition duration-300"
        >
          {isSignin ? "Sign In" : "Sign Up"}{" "}
        </button>
        {/* <!-- Options --> */}{" "}
        <div className="flex items-center justify-between text-gray-400 text-sm mt-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-red-600" />
            Remember me{" "}
          </label>{" "}
          <a href="#" className="hover:underline">
            Need help ?
          </a>{" "}
        </div>
        {/* <!-- Footer --> */}{" "}
        <div className="text-gray-400 text-sm mt-6">
          <a
            href="#"
            onClick={handleSignUp}
            className="text-white hover:underline"
          >
            {" "}
            {isSignin
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}{" "}
          </a>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}

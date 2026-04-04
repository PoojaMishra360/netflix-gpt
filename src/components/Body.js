import React, { use } from "react";
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, Router ,RouterProvider} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser , removeUser } from "../utils/userSlice";
import Error from "./Error";
export default function Body() {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browser", element: <Browser /> },
    {path:"/error",element:<Error />}
  ]);

  React.useEffect(() => {  
    // Check if the user is authenticated (you can replace this with your actual authentication logic)
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid , email,displayName} = user;
    dispatch(addUser({uid,email,displayName}));

    // ...
  } else {
    // User is signed out
    dispatch(removeUser());

    // ...
  }
});
  }, []);
  return (
    <div>
     <RouterProvider router={appRouter} />
    </div>
  );
}

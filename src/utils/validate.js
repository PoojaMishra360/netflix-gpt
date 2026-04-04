  export const validateData = (email, password) => {
  let  errors = null;    

  if (!email) {
   return  errors = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
   return errors = "Email is invalid";
  }

  if (!password) {
    return errors = "Password is required";
  } else if (password.length < 6) {
    errors = "Password must be at least 6 characters long";
  }

  return errors;
};




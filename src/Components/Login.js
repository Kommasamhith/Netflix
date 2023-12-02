import { useState, useRef } from "react";
import { LB } from "../Utils/Assets";
import Header from "./Header";
import { checkValidate } from "../Utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignForm, SetisSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    // for toogling the button
    SetisSignForm(!isSignForm);
  };

  const handleValidation = () => {
    // for Validating the form
    const message = checkValidate(
      !isSignForm && name.current.value,
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    if (message) return;
    // Auth for the Application
    if (!isSignForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed In
          const user = userCredential.user;
          console.log(user);
          navigate("./browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img src={LB} alt="LOGO" />
      </div>

      <form
        // form for the login page
        className=" w-3/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 bg-opacity-70 text-white rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4 m-2">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          // if it is not sign in page a new input will be opened wih this condition
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full rounded bg-gray-500"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 m-2 w-full rounded bg-gray-500"
        />

        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-2 m-2 w-full rounded bg-gray-500"
        />
        <p className="p-2 m-2 font-bold">{errorMessage}</p>
        <button
          className="p-2 m-2 bg-red-700 w-full rounded"
          onClick={handleValidation}
        >
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <h3 className="p-2 m-2">
          New to Netflix?
          <span
            className=" cursor-pointer hover:underline"
            onClick={handleClick}
          >
            {!isSignForm ? "Sign In" : "Sign Up"}
          </span>
        </h3>
        <h3 className="p-2 m-2 text-#696969">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className=" cursor-pointer hover:underline"> Learn more</span>
        </h3>
      </form>
    </div>
  );
};

export default Login;

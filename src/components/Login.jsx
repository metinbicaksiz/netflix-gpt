import React, {useRef, useState} from 'react';
import Header from "./Header";
import {checkValidDataSignUp, checkValidDataSignIn} from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useDispatch} from "react-redux";
import {addUser} from "../slices/userSlice";
import {BROWSE_BG, USER_AVATAR} from "../utils/constants";

const Login = () => {
    const [loginState, setLoginState] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setLoginState(!loginState);
    }

    const handleButtonClick = (e) => {
        //Validate the form data
        const message = !loginState
            ?
            checkValidDataSignUp(email.current.value, password.current.value, fullName.current.value)
            :
            checkValidDataSignIn(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
         //sign in / sign up process
        if(!loginState) {
            //Sign Up Logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullName.current.value,
                        photoURL: USER_AVATAR,
                    }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            displayName: displayName,
                            email: email,
                            photoURL: photoURL
                        }));
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                        // ...
                    });
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage + " " + errorCode);
                });

        } else {
            // Sign In Logic
            signInWithEmailAndPassword(auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage + " " + errorCode);
                });
        }
    }

    return (
        <>
            <Header />
            <div className="absolute m-0">
                <img className="h-screen object-cover md:w-screen"
                     src={BROWSE_BG}
                     alt="bg"/>
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="p-12 absolute w-3/4 md:w-1/4 bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 text-white rounded-md">
                <h1 className="font-bold text-3xl py-5 text-left">
                    {loginState ? "Sign In" : "Sign Up"}
                </h1>
                {
                    !loginState ? (
                        <input
                            ref={fullName}
                            type="text"
                            placeholder="Full Name"
                            className="p-4 my-2 w-full bg-gray-700 text-lg rounded-md" />
                    ) : null
                }
                <input
                    ref={email}
                    type="email"
                    placeholder="Email Address"
                    className="p-4 my-2 w-full bg-gray-700 text-lg rounded-md" />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-2 w-full bg-gray-700 text-lg rounded-md" />
                <p className="text-red-600 font-bold text-sm">{errorMessage}</p>
                <button
                    className="p-4 my-4 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}>
                    {loginState ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 text-sm text-left cursor-pointer" onClick={toggleSignInForm}>
                    {
                        loginState
                            ? "New to Netflix? Sign Up Now."
                            : "Already a user! Sign In Now!"
                    }
                    </p>
            </form>
        </>
    );
};

export default Login;
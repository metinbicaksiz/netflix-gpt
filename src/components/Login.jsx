import React, {useState} from 'react';
import Header from "./Header";

const Login = () => {
    const [loginState, setLoginState] = useState(true);
    const toggleSignInForm = () => {
        setLoginState(!loginState);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/TR-en-20240923-TRIFECTA-perspective_b0a755bd-461b-4005-b8d9-e86ae684e893_large.jpg"
                     alt="bg"/>
            </div>
            <form action="" className="p-12 absolute w-1/4 bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 text-white">
                <h1 className="font-bold text-3xl py-5 text-left">
                    {loginState ? "Sign In" : "Sign Up"}
                </h1>
                {
                    !loginState ? (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-4 my-4 w-full bg-gray-700 text-lg" />
                    ) : null
                }
                <input
                    type="email"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700 text-lg" />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700 text-lg" />
                <button className="p-4 my-6 bg-red-700 w-full">{loginState ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 text-sm text-left cursor-pointer" onClick={toggleSignInForm}>
                    {
                        loginState
                            ? "New to Netflix? Sign Up Now."
                            : "Already a user! Sign In Now!"
                    }
                    </p>
            </form>
        </div>
    );
};

export default Login;
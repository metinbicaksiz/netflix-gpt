import React, {useEffect} from 'react';
import logo from '../assets/logo.png';
import { auth } from "../utils/firebase";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, removeUser} from "../slices/userSlice";
import {toggleGptSearchView} from "../slices/gptSlice";
import {SUPPORTED_LANGUAGES} from "../utils/constants";
import {changeLanguage} from "../slices/appConfigSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const showGpt = useSelector(state => state.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({
                    uid: uid,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL
                }));
                navigate("/browse");
            } else {
                dispatch(removeUser())
                navigate("/");
            }
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const handleGptClick = () => {
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <Link to={"/"}>
                <img src={logo} className="w-44 mx-auto md:mx-0" alt="logo"/>
            </Link>
            {
                user &&
                (<div className="flex p-2 justify-between items-center">
                    {(
                        showGpt &&
                        <select
                        className="p-2 m-2 bg-blue-400 text-xl font-medium rounded-md"
                        onChange={handleLanguageChange}
                    >
                        {SUPPORTED_LANGUAGES.map(language => (
                            <option
                                key={language.identifier}
                                value={language.identifier}
                                className="hover:bg-amber-200"
                            >
                                {language.name}
                            </option>
                        ))}
                    </select>
                    )}
                    <button
                        className="py-2 px-4 m-2 bg-amber-200 rounded-md font-medium text-lg"
                        onClick={handleGptClick}>
                        {
                            !showGpt ? "AI Movie Recommendation" : "Home Page"
                        }
                    </button>
                    <img
                        className="hidden md:block w-12 h-12 rounded-md"
                        src={user?.photoURL}
                        alt="user icon"/>
                    <button
                        className="font-medium text-white px-2"
                        onClick={handleSignOut}
                    >Sign Out</button>
                </div>)
            }
        </div>
    );
};

export default Header;

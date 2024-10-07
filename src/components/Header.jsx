import React, {useEffect} from 'react';
import logo from '../assets/logo.png';
import { auth } from "../utils/firebase";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

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

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img src={logo} className="w-44" alt="logo"/>
            {
                user &&
                (<div className="flex p-2">
                    <img
                        className="w-12 h-12 rounded-md"
                        src={user?.photoURL}
                        alt="user icon"/>
                    <button
                        className="font-medium text-white"
                        onClick={handleSignOut}
                    >Sign Out</button>
                </div>)
            }
        </div>
    );
};

export default Header;
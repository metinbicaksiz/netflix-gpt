import React, {useEffect} from 'react';
import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter, useNavigate} from "react-router-dom";
import {RouterProvider} from "react-router-dom";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        }
    ]);



    return (
        <div className="text-center font-bold text-3xl text-blue-600">
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;
import Layout from "../layout";
import React, { useEffect } from "react";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { ChatList, MessagesInbox, UpdateProfile } from "../sections";
import Signup from "../pages/auth/Signup";
import Signin from "../pages/auth/Signin";
import Verification from "../pages/auth/Verification";

function index() {
    // Initializing theme for all pages of our application once on component mount.
    useEffect(() => {
        const theme = JSON.parse(localStorage.getItem("talksTheme"));
        theme === "dark"
            ? document.body.classList.add("dark")
            : document.body.classList.remove("dark");
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to="/dashboard" />,
        },

        {
            path: "/dashboard",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: (
                        <>
                            <ChatList />
                            <MessagesInbox />
                        </>
                    ),
                },

                {
                    path: "updateprofile",
                    element: <UpdateProfile />
                },
            ],
        },

        {
            path: "/auth/signup",
            element: <Signup />,
        },

        {
            path: "/auth/signin",
            element: <Signin />,
        },

        {
            path: "/auth/verification",
            element: <Verification />,
        },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
}

export default index;

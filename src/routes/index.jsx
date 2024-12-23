import Layout from "../layout";
import React from "react";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { ChatList, MessagesInbox } from "../sections";

function index() {
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
                    element: <>
                        <ChatList />
                        <MessagesInbox />
                    </>,
                }
            ],
        },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
}

export default index;

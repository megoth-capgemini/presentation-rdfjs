import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Presentation from "./components/presentation";
import Controller from "./components/controller";
import Layout from "./components/layout";
import BroadcastChannelContextProvider from "./hooks/use-broadcast-channel/provider.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BroadcastChannelContextProvider><Layout/></BroadcastChannelContextProvider>,
        children: [
            {
                index: true,
                element: <Presentation/>,
            },
            {
                path: "/controller",
                element: <Controller/>,
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

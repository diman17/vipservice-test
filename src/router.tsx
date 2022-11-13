import { createBrowserRouter, Navigate } from "react-router-dom";
import Avia from "./pages/Avia";
import Info from "./pages/Info";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/avia" />,
    },
    {
        path: "/avia",
        element: <Avia />,
    },
    {
        path: "/avia/info",
        element: <Info />,
    },
]);

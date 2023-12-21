import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../Pages/SignUp/SignUp";
import Todos from "../Pages/Todos/Todos";
import DashboardMain from "../Layout/DashboardMain";
import CompletedList from "../Components/CompletedList/CompletedList";
import Login from "../Pages/Login/Login"
import Home from "../Pages/Home/Home";
// bg-[#ffd79c]

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
            path: "/",
            element: <Home />,
            },
            {
            path: "/signup",
            element: <SignUp />,
            },
            {
            path: "/login",
            element: <Login />,
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardMain />,
        children: [
            {
            path: "/dashboard",
            element: <Todos />,
            },
            {
            path: "ongoingList",
            element: <Todos />,
            },
            {
            path: "completedList",
            element: <CompletedList />,
            }
        ]
    },
]);
export default router;
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../Pages/SignUp/SignUp";
import Todos from "../Pages/Todos/Todos";
// bg-[#ffd79c]

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
            path: "/signup",
            element: <SignUp />,
            },
            {
            path: "/todos",
            element: <Todos />,
            }
        ]
    },
]);
export default router;
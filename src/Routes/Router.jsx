import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import SignUp from "../Pages/SignUp/SignUp";
// bg-[#ffd79c]

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
            path: "/signup",
            element: <SignUp />,
            }
        ]
    },
]);
export default router;
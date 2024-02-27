import {createBrowserRouter} from "react-router-dom";
import Login from "./features/identity/components/login.jsx";
import Register from "./features/identity/components/register.jsx";
import IdentityLayout from "./layouts/identity-layout.jsx";

const router = createBrowserRouter([
    {
        element: <IdentityLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            }, {
                path: 'register',
                element: <Register/>
            }
        ]
    },

]);
export default router;
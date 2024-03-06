import {createBrowserRouter} from "react-router-dom";
import Login from "./features/identity/components/login.jsx";
import IdentityLayout from "./layouts/identity-layout.jsx";
import {loginAction, registerAction} from "./actions/actions.jsx";
import Register from "./features/identity/components/register.jsx";
import {MainLayout} from "./layouts/main-layout.jsx";
import {Courses} from "./pages/courses.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [{
            element: <Courses/>,
            index: true
        }]
    },
    {
        element: <IdentityLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>,
                action: loginAction,
                errorElement: <Login/>,
            }, {
                path: 'register',
                element: <Register/>,
                action: registerAction,
                errorElement: <Register/>
            }
        ]
    },

]);
export default router;
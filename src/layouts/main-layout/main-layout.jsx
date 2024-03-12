import {Outlet, useNavigate} from "react-router-dom";
import {Sidebar} from "./sidebar.jsx";
import {TopNav} from "./top-nav.jsx";
import {Footer} from "./footer.jsx";

export const MainLayout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    if (!token) {
        navigate('/login');
    }
    return (
        <div className='items-stretch flex min-h-screen'>
            <Sidebar/>
            <div className='flex w-full min-h-screen min-w-0 flex-col'>
                <TopNav/>
                <main className='p-10 flex-1'>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </div>
    )
}
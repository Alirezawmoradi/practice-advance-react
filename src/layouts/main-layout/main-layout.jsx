import {Outlet} from "react-router-dom";
import logo from '@assets/images/logo.svg';
import {useState} from "react";
import ChangeLanguage from "../../components/change-language.jsx";
import ChangeTheme from "../../components/change-theme.jsx";
import {useAppContext} from "../../contexts/app/app-context.jsx";
import {Sidebar} from "./sidebar.jsx";
import {TopNav} from "./top-nav.jsx";
import {Footer} from "./footer.jsx";

export const MainLayout = () => {
    const [collapseSidebar, setCollapseSidebar] = useState(false);
    const {language} = useAppContext();
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
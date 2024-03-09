import {Outlet} from "react-router-dom";
import logo from '@assets/images/logo.svg';
import {useState} from "react";
import ChangeLanguage from "../components/change-language.jsx";
import ChangeTheme from "../components/change-theme.jsx";
import {useAppContext} from "../contexts/app/app-context.jsx";

export const MainLayout = () => {
    const [collapseSidebar, setCollapseSidebar] = useState(false);
    return (
        <div className='items-stretch flex min-h-screen'>
            <nav className={`min-w-64 max-w-64 dark:bg-card bg-light shadow-md border dark:border-none ${collapseSidebar ? 'hidden' : 'block'}`}>

            </nav>
            <div className='flex w-full min-h-screen min-w-0 flex-col'>
                <nav
                    className='relative flex py-3.5 px-0.5 items-center border-b-0 shadow justify-start bg-white dark:bg-dark align-middle'>
                    <a className='cursor-pointer w-6 h-6 flex flex-col justify-center space-y-1.5 px-5'
                       onClick={() => setCollapseSidebar(!collapseSidebar)}>
                        <span
                            className='cursor-pointer rounded-sm h-0.5 w-5 bg-gray-600 dark:bg-gray-300 block content-none'></span>
                        <span
                            className='cursor-pointer rounded-sm h-0.5 w-6 bg-gray-600 block dark:bg-gray-300 content-none'></span>
                        <span
                            className='cursor-pointer rounded-sm h-0.5 w-4 bg-gray-600 block dark:bg-gray-300 content-none'></span>
                    </a>
                </nav>
                <main className='p-10 flex-1'>
                    <Outlet/>
                </main>
                <footer
                    className='block bg-white dark:bg-dark dark:border-gray-700 border-t border-solid border-b-gray-200 p-4'>

                </footer>
            </div>
        </div>
    )
}
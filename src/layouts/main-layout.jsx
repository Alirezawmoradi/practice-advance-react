import {Outlet} from "react-router-dom";
import logo from '@assets/images/logo.svg';
import {useState} from "react";
import ChangeLanguage from "../components/change-language.jsx";
import ChangeTheme from "../components/change-theme.jsx";
import {useAppContext} from "../contexts/app/app-context.jsx";

export const MainLayout = () => {
    const [collapseSidebar, setCollapseSidebar] = useState(false);
    const {language} = useAppContext();
    return (
        <div className='items-stretch flex min-h-screen'>
            <nav
                className={`min-w-64 max-w-64 dark:bg-card bg-light shadow-md border dark:border-none ${collapseSidebar ? 'hidden' : 'block'}`}>
                <div className='dark:bg-card bg-light transition ease-in-out duration-300'>
                    <a className='text-sm font-medium py-4 px-6 text-center flex flex-col items-center pt-0 mb-0'>
                        <img src={logo} className='h-20'/>
                        <p className='mb-0 text-base font-bold dark:text-white text-gray-500'>پلتفرم آموزش آنلاین</p>
                    </a>
                    <ul className='list-none p-0'>
                        <li className='bg-transparent text-gray-500 dark:text-gray-300 pt-6 pr-6 pl-6 pb-1.5'>
                            مدیریت دوره ها
                        </li>
                        <li className='pr-6'>
                            <a aria-current="page" className="block cursor-pointer font-medium px-2.5 py-6 relative no-underline transition-colors duration-700 text-gray-500 dark:text-gray-300" href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="h-5 w-5 align-middle me-2">
                                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                                </svg>
                                <span className="align-middle text-gray-500 dark:text-gray-300 me-2">همه دوره ها</span>
                            </a>
                        </li>
                    </ul>
                </div>
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
                    <div className={`flex items-center ${language === 'fa' ? 'mr-5' : 'ml-5'}`}>
                        <ChangeLanguage/>
                        <ChangeTheme/>
                    </div>
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
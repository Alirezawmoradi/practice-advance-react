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
                className={`min-w-64 max-w-64 dark:bg-card bg-light shadow-md transition-colors duration-500 ease-in-out ${collapseSidebar ? 'hidden' : 'block'}`}>
                <div className='dark:bg-card bg-light transition-colors duration-500 ease-in-out'>
                    <a className='text-sm font-medium py-4 px-6 text-center flex flex-col items-center pt-0 mb-0'>
                        <img src={logo} className='h-20'/>
                        <p className='mb-0 text-base font-bold dark:text-white text-gray-500'>پلتفرم آموزش آنلاین</p>
                    </a>
                    <ul className='list-none p-0'>
                        <li className='bg-transparent text-gray-500 dark:text-gray-300 pt-6 pr-6 pl-6 pb-1.5'>
                            مدیریت دوره ها
                        </li>
                        <li className='pr-6'>
                            <a aria-current="page"
                               className="flex cursor-pointer font-medium px-2.5 py-6 relative no-underline text-gray-500 dark:text-gray-300"
                               href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="h-5 w-5 align-middle text-gray-400 me-2 mt-1">
                                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                                </svg>
                                <span
                                    className="align-middle text-gray-500 dark:text-gray-400 me-2 dark:hover:text-gray-100 hover:text-gray-800">همه دوره ها</span>
                            </a>
                        </li>
                        <li className='pr-6'>
                            <a aria-current="page"
                               className="flex cursor-pointer font-medium px-2.5 py-0 relative no-underline text-gray-500 dark:text-gray-300"
                               href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="h-5 w-5 align-middle text-gray-400 me-2 mt-1">
                                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                                </svg>
                                <span
                                    className="align-middle text-gray-500 dark:text-gray-400 me-2 dark:hover:text-gray-100 hover:text-gray-800">دسته بندی دوره ها</span>
                            </a>
                        </li>
                        <li className='pr-6'>
                            <a aria-current="page"
                               className="flex cursor-pointer font-medium px-2.5 py-6 relative no-underline text-gray-500 dark:text-gray-300"
                               href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="h-5 w-5 align-middle text-gray-400 me-2">
                                    <line x1="19" y1="5" x2="5" y2="19"></line>
                                    <circle cx="6.5" cy="6.5" r="2.5"></circle>
                                    <circle cx="17.5" cy="17.5" r="2.5"></circle>
                                </svg>
                                <span
                                    className="align-middle text-gray-500 dark:text-gray-400 me-2 dark:hover:text-gray-100 hover:text-gray-800">تخفیف دوره ها</span>
                            </a>
                        </li>
                        <li className='bg-transparent text-gray-500 dark:text-gray-300 pt-3 pr-6 pl-6 pb-1.5'>
                            مدیریت کاربرها
                        </li>
                        <li className='pr-6'>
                            <a aria-current="page"
                               className="flex cursor-pointer font-medium px-2.5 py-6 relative no-underline text-gray-500 dark:text-gray-300"
                               href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="h-5 w-5 align-middle text-gray-400 me-2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span
                                    className="align-middle text-gray-500 dark:text-gray-400 me-2 dark:hover:text-gray-100 hover:text-gray-800">مدیریت مدرس ها</span>
                            </a>
                        </li>
                        <li className='pr-6'>
                            <a aria-current="page"
                               className="flex cursor-pointer font-medium px-2.5 py-0 relative no-underline text-gray-500 dark:text-gray-300"
                               href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="h-5 w-5 align-middle text-gray-400 me-2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                                <span
                                    className="align-middle text-gray-500 dark:text-gray-400 me-2 dark:hover:text-gray-100 hover:text-gray-800">مدیریت دانشجوها</span>
                            </a>
                        </li>
                        <li className='bg-transparent text-gray-500 dark:text-gray-300 pt-7 pr-6 pl-6 pb-1.5'>
                            مدیریت بلاگ
                        </li>
                        <li className='pr-6'>
                            <a aria-current="page"
                               className="flex cursor-pointer font-medium px-2.5 py-6 relative no-underline text-gray-500 dark:text-gray-300"
                               href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="h-5 w-5 align-middle text-gray-400 me-2">
                                    <path
                                        d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                                </svg>
                                <span
                                    className="align-middle text-gray-500 dark:text-gray-400 me-2 dark:hover:text-gray-100 hover:text-gray-800">مدیریت تگ ها</span>
                            </a>
                        </li>
                        <li className='pr-6'>
                            <a aria-current="page"
                               className="flex cursor-pointer font-medium px-2.5 py-0 relative no-underline text-gray-500 dark:text-gray-300"
                               href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="h-5 w-5 align-middle text-gray-400 me-2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                                <span
                                    className="align-middle text-gray-500 dark:text-gray-400 me-2 dark:hover:text-gray-100 hover:text-gray-800">مدیریت پست ها</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='flex w-full min-h-screen min-w-0 flex-col'>
                <nav
                    className='relative flex py-3.5 px-0.5 items-center border-b-0 shadow justify-start bg-white dark:bg-dark align-middle transition-colors duration-500 ease-in-out'>
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
                    className='block bg-white dark:bg-dark dark:border-gray-700 border-t border-solid border-b-gray-200 p-4 transition-colors duration-500 ease-in-out'>

                </footer>
            </div>
        </div>
    )
}
import ChangeLanguage from "../../components/change-language.jsx";
import ChangeTheme from "../../components/change-theme.jsx";
import {useAppContext} from "../../contexts/app/app-context.jsx";

export const TopNav = () => {
    const {toggleSidebar,language}=useAppContext()
    return (
        <nav
            className='relative flex py-3.5 px-0.5 items-center border-b-0 shadow justify-start bg-white dark:bg-dark align-middle transition-colors duration-500 ease-in-out'>
            <a className='cursor-pointer w-6 h-6 flex flex-col justify-center space-y-1.5 px-5'
               onClick={toggleSidebar}>
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
    )
}
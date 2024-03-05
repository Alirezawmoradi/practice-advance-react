import {useAppContext} from "../contexts/app/app-context.jsx";
import {FaMoon} from "react-icons/fa";
import {BsSunFill} from "react-icons/bs";

const ChangeTheme = () => {
    const {theme, language, changeTheme} = useAppContext();
    const changeThemeHandler = () => {
        changeTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div
            className={`relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1 ${language === 'fa' ? 'mr-6' : 'ml-6'}`}
            onClick={changeThemeHandler}
            data-theme={theme}
        >
            <FaMoon className='hover:text-gray-400 text-yellow-400' size={18}/>
            <div
                className='absolute bg-white dark:bg-dark w-6 h-6 rounded-full shadow-md transform transition-transform duration-300'
                style={theme === 'dark' ? {left: '2px'} : {right: '2px'}}>
            </div>
            <BsSunFill className={`${language==='fa'?'mr-auto':'ml-auto'} hover:text-blue-500 text-white`} size={18}/>
        </div>
    )
}

export default ChangeTheme;
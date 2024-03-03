import usFlag from '@assets/images/us.png';
import faFlag from '@assets/images/fa.png';
import {useEffect, useRef, useState} from "react";
import {useAppContext} from "../contexts/app/app-context.jsx";

const ChangeLanguage = () => {
    const [show, setShow] = useState(false);
    const ref = useRef();

    const {language, changeLanguage} = useAppContext();

    useEffect(() => {

        const checkIfClickOutside = (e) => {
            if (show && ref.current && !ref.current.contains(e.target)) {
                setShow(false)
            }
        }

        document.addEventListener('mousedown', checkIfClickOutside);

        return () => {
            document.removeEventListener('mousedown', checkIfClickOutside);
        }

    }, [show]);

    return (
        <div className='relative mr-5 ml-5'>
            <a className='mt-0.5 font-light transition-all delay-1000 ease-in-out leading-snug whitespace-nowrap cursor-pointer'
               onClick={() => setShow(true)}>
                <img src={language === 'fa' ? faFlag : usFlag} alt='English'
                     className='rounded-full border-gray-100 w-7 h-7'/>
            </a>
            <div
                className={`${show ? 'block' : 'hidden'} ${language==='fa'?'text-right':'text-left'} top-auto absolute z-auto min-w-40 p-2 m-0 font-light text-left list-none bg-clip-padding border dark:border-gray-600 rounded-md bg-white dark:bg-card`}
                ref={ref}
            >
                <a className='flex items-center gap-2 text-center hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 cursor-pointer mb-2 mr-3'
                   onClick={() => changeLanguage('fa')}
                >
                    <img src={faFlag} width='20px' alt='Persian'/>
                    <span className='align-middle font-bold text-gray-500 dark:text-gray-400 text-sm'>فارسی</span>
                </a>
                <a className='flex items-center gap-2 text-center hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer mb-2 hover:text-gray-800 mr-3'
                   onClick={() => changeLanguage('en')}
                >
                    <img src={usFlag} width='20px' alt='English'/>
                    <span className='align-middle font-bold text-gray-500 dark:text-gray-400 text-sm'>English</span>
                </a>
            </div>
        </div>
    )
}
export default ChangeLanguage;
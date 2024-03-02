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
                     className='rounded-full border border-gray-100 w-7 h-7'/>
            </a>
            <div
                className={`${show ? 'block' : 'hidden'} top-auto absolute z-auto min-w-40 p-2 m-0 font-light text-left list-none bg-clip-padding border rounded-md bg-white`}
                ref={ref}
            >
                <a className='flex items-center gap-2 text-center hover:bg-gray-100 hover:text-gray-800 cursor-pointer mb-2 mr-3'
                   onClick={() => changeLanguage('fa')}
                >
                    <img src={faFlag} width='20px'/>
                    <span className='align-middle font-bold text-gray-500 text-sm'>فارسی</span>
                </a>
                <a className='flex items-center gap-2 text-center hover:bg-gray-100 cursor-pointer mb-2 hover:text-gray-800 mr-3'
                   onClick={() => changeLanguage('en')}
                >
                    <img src={usFlag} width='20px'/>
                    <span className='align-middle font-bold text-gray-500 text-sm'>English</span>
                </a>
            </div>
        </div>
    )
}
export default ChangeLanguage;
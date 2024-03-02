import usFlag from '@assets/images/us.png';
import faFlag from '@assets/images/fa.png';

const ChangeLanguage = () => {
    return (
        <div className='relative mr-5'>
            <a className='mt-0.5 font-light transition-all delay-1000 ease-in-out leading-snug whitespace-nowrap'>
                <img src={usFlag} alt='English' className='rounded-full border border-gray-100 w-7 h-7'/>
            </a>
            <div className='block top-auto absolute z-auto min-w-40 p-2 m-0 font-light text-left list-none bg-clip-padding border rounded-md bg-white'>
                <a className='flex items-center gap-2 text-center hover:bg-gray-100 hover:text-gray-800 cursor-pointer mb-2 mr-3'>
                    <img src={faFlag} width='20px'/>
                    <span className='align-middle font-bold text-gray-500 text-sm'>فارسی</span>
                </a>
                <a className='flex items-center gap-2 text-center hover:bg-gray-100 cursor-pointer mb-2 hover:text-gray-800 mr-3'>
                    <img src={usFlag} width='20px'/>
                    <span className='align-middle font-bold text-gray-500 text-sm'>English</span>
                </a>
            </div>
        </div>
    )
}
export default ChangeLanguage;
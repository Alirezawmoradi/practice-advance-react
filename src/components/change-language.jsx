import usFlag from '@assets/images/us.png';
import faFlag from '@assets/images/fa.png';

const ChangeLanguage = () => {
    return (
        <div className='relative mr-5'>
            <a className='mt-0.5 font-light transition-all delay-1000 ease-in-out leading-snug whitespace-nowrap'>
                <img src={usFlag} alt='English' className='rounded-full border border-gray-100 w-7 h-7'/>
            </a>
            <div className='absolute z-[1000] hidden min-w-32 p-1 m-0 font-light text-left list-none bg-white bg-clip-padding border rounded-sm'>
                <a>
                    <img src={faFlag} width='20px'/>
                    <span>فارسی</span>
                </a>
                <a>
                    <img src={usFlag} width='20px'/>
                    <span>English</span>
                </a>
            </div>
        </div>
    )
}
export default ChangeLanguage;
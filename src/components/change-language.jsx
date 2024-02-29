import usFlag from '@assets/images/us.png';

const ChangeLanguage = () => {
    return (
        <div className='relative'>
            <a className='pt-1 pr-1 pb-1 pl-1 block rounded-b-full font-light bg-gray-700 transition-all delay-1000 ease-in-out leading-snug whitespace-nowrap'>
                <img src={usFlag} alt='English'/>
            </a>
        </div>
    )
}
export default ChangeLanguage;
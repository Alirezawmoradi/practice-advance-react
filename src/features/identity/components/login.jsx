import logo from '@assets/images/logo.svg';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Login = () => {

    const {t} = useTranslation();

    return (
        <>
            <div className='table-cell align-middle'>
                <div className='block text-center mt-4'>
                    <div className='flex justify-center'>
                        <img src={logo} style={{height: '100px'}}/>
                    </div>
                    <h1 className='text-center text-xl font-extrabold text-gray-600'>{t('login.title')}</h1>
                    <p className='leading-normal mt-4 text-base font-light text-gray-500'>
                        {t('login.introMessage')}
                    </p>
                    <p className='leading-normal mt-4 text-base font-light text-gray-500'>
                        {t('login.areNotRegistered')}
                        <Link className='me-2 text-blue-600 mr-2' to='/register'>{t('login.register')} </Link>
                    </p>
                </div>
                <div
                    className='mb-4 shadow relative flex flex-col min-w-0 break-words bg-white border bg-clip-border mt-5 rounded-lg'>
                    <div className='flex-auto p-2 block box-border'>
                        <div className='m-6 block box-bordex'>
                            <form>
                                <div className='mb-3'>
                                    <label
                                        className='inline-block box-border cursor-default text-gray-500 mb-2'>{t('login.mobile')}</label>
                                    <input
                                        className='min-h-1 py-1 pl-1.5 pr-4 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block w-full font-medium'/>
                                </div>
                                <div className='mb-3'>
                                    <label className='inline-block box-border cursor-default text-gray-500 mb-2'>
                                        {t('login.password')}
                                    </label>
                                    <input
                                        className='min-h-1 py-1 pl-1.5 pr-4 outline-offset-2 focus:outline-blue-300 bg-blue-100 border border-gray-300 rounded-md block w-full font-medium'
                                        type='password'/>
                                </div>
                                <div className='mb-3 text-center'>
                                    <button type="submit"
                                            className="inline-block font-light text-sm mt-3 text-gray-200 border rounded-md w-32 h-8"
                                            style={{backgroundColor: '#3f80ea', borderColor: '#3f80ea'}}>
                                        {t('login.signin')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;
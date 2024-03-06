import logo from '@assets/images/logo.svg';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";

const Login = () => {

    const {t} = useTranslation();

    const {
        register,
        formState: {errors},
        handleSubmit,
        watch
    } = useForm()

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <>
            <div className='table-cell align-middle'>
                <div className='block text-center mt-4'>
                    <div className='flex justify-center'>
                        <img src={logo} style={{height: '100px'}}/>
                    </div>
                    <h1 className='text-center text-xl font-extrabold text-gray-600 dark:text-white'>{t('login.title')}</h1>
                    <p className='leading-normal mt-4 text-base font-light text-gray-500 dark:text-gray-400'>
                        {t('login.introMessage')}
                    </p>
                    <p className='leading-normal mt-4 text-base font-light text-gray-500 dark:text-gray-400'>
                        {t('login.areNotRegistered')}
                        <Link className='me-2 text-blue-600 dark:text-blue-500 mr-2' to='/register'>{t('login.register')} </Link>
                    </p>
                </div>
                <div
                    className='mb-4 shadow relative flex flex-col min-w-0 break-words bg-white dark:bg-card dark:border-none border bg-clip-border mt-5 rounded-lg'>
                    <div className='flex-auto p-2 block box-border'>
                        <div className='m-6 block box-bordex'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mb-3'>
                                    <label
                                        className='inline-block box-border cursor-default text-gray-500  dark:text-gray-400 mb-2'>
                                        {t('login.mobile')}
                                    </label>
                                    <input
                                        {...register('mobile', {
                                            required: t('login.validation.mobileRequired'),
                                            minLength: 11,
                                            maxLength: 11
                                        })}
                                        className={`${errors.mobile ? 'min-h-1 py-1 outline-offset-2 focus:outline-red-200 bg-white border-red-500' : 'min-h-1 py-1 outline-offset-2 focus:outline-blue-200 bg-blue-100 border focus:border-blue-500'} min-h-1 py-1 pl-1.5 pr-4 outline-offset-2 bg-white border border-gray-300 rounded-md block w-full font-medium`}/>
                                    {
                                        errors.mobile && errors.mobile.type === 'required' && (
                                            <p className='text-red-700 dark:text-red-500 font-light text-xs mt-1'>
                                                {errors.mobile?.message}
                                            </p>
                                        )
                                    }{
                                    errors.mobile &&
                                    (errors.mobile.type === 'minLength'
                                        || errors.mobile.type === 'maxLength') && (
                                        <p className='text-red-700 dark:text-red-500 font-light text-xs mt-1'>
                                            {t('login.validation.mobileLength')}
                                        </p>
                                    )
                                }
                                </div>
                                <div className='mb-3'>
                                    <label
                                        className='inline-block box-border cursor-default text-gray-500 dark:text-gray-400 mb-2'>
                                        {t('login.password')}
                                    </label>
                                    <input
                                        {...register('password', {
                                            required: t('login.validation.passwordRequired')
                                        })}
                                        className={`${errors.password ? 'min-h-1 py-1 outline-offset-2 focus:outline-red-200 bg-white border-red-500' : 'min-h-1 py-1 outline-offset-2 focus:outline-blue-200 bg-blue-100 border focus:border-blue-500'} min-h-1 py-1 pl-1.5 pr-4 outline-offset-2 bg-white border border-gray-300 rounded-md block w-full font-medium`}
                                        type='password'/>
                                    {
                                        errors.password && errors.password.type === 'required' && (
                                            <p className='text-red-700 dark:text-red-500 font-light text-xs mt-1'>
                                                {errors.password?.message}
                                            </p>
                                        )
                                    }
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
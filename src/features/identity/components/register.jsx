import logo from "@assets/images/logo.svg";
import {Link, useActionData, useNavigate, useNavigation, useRouteError, useSubmit} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

const Register = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
        watch
    } = useForm()
    const submitForm = useSubmit();
    const onSubmit = data => {
        const {confirmPassword, ...userData} = data;
        submitForm(userData, {
            method: 'POST'
        })
    };
    const navigation = useNavigation();
    const isSubmitting = navigation.state !== 'idle';

    const isSuccessOperation = useActionData();

    const navigate = useNavigate();

    const routeErrors = useRouteError();

    const {t} = useTranslation();

    useEffect(() => {
        if (isSuccessOperation) {
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        }
    }, [isSuccessOperation])

    return (
        <>
            <div className='table-cell align-middle'>
                <div className='block text-center mt-4'>
                    <div className='flex justify-center'>
                        <img src={logo} style={{height: '100px'}}/>
                    </div>
                    <h1 className='text-center text-xl font-extrabold text-gray-600 dark:text-white'>
                        {t('register.title')}
                    </h1>
                    <p className='leading-normal mt-4 text-base font-light text-gray-500 dark:text-gray-400'>
                        {t('register.introMessage')}
                    </p>
                    <p className='leading-normal mt-4 text-base font-light text-gray-500 dark:text-gray-400'>
                        {t('register.alreadyRegistered')}
                        <Link className='me-2 text-blue-600 dark:text-blue-500 mr-2' to='/login'>{t('register.signin')}{" "}</Link>
                    </p>
                </div>
                <div
                    className='mb-4 shadow relative flex flex-col min-w-0 break-words bg-white dark:bg-card mt-5 rounded-lg transition-colors duration-500 ease-in-out'>
                    <div className='flex-auto p-2 block box-border'>
                        <div className='m-6 block box-bordex'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mb-3'>
                                    <label
                                        className='inline-block box-border cursor-default text-gray-500  dark:text-gray-400 mb-2'>
                                        {t('register.mobile')}
                                    </label>
                                    <input
                                        {...register('mobile', {
                                            required: t('register.validation.mobileRequired'),
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
                                            {t('register.validation.mobileLength')}
                                        </p>
                                    )
                                }
                                </div>
                                <div className='mb-3'>
                                    <label
                                        className='inline-block box-border cursor-default text-gray-500 dark:text-gray-400 mb-2'>
                                        {t('register.password')}
                                    </label>
                                    <input
                                        {...register('password', {
                                            required: t('register.validation.passwordRequired')
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
                                <div className='mb-3'>
                                    <label
                                        className='inline-block box-border cursor-default text-gray-500  dark:text-gray-400 mb-2'>
                                        {t('register.repeatPassword')}
                                    </label>
                                    <input
                                        {...register('confirmPassword', {
                                            required: t('register.validation.repeatPasswordRequired'),
                                            validate: value => {
                                                if (watch('password') !== value) {
                                                    return t('regiter.validation.notMatching')
                                                }
                                            }
                                        })}
                                        className={`${errors.confirmPassword ? 'min-h-1 py-1 outline-offset-2 focus:outline-red-200 bg-white border-red-500' : 'min-h-1 py-1 outline-offset-2 focus:outline-blue-200 bg-blue-100 border focus:border-blue-500'} min-h-1 py-1 pl-1.5 pr-4 outline-offset-2 bg-white border border-gray-300 rounded-md block w-full font-medium`}
                                        type='password'/>
                                    {
                                        errors.confirmPassword && errors.confirmPassword.type === 'required' && (
                                            <p className='text-red-700 dark:text-red-500 font-light text-xs mt-1'>
                                                {errors.confirmPassword?.message}
                                            </p>
                                        )
                                    }
                                    {
                                        errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
                                            <p className='text-red-700 dark:text-red-500 font-light text-xs mt-1'>
                                                {errors.confirmPassword?.message}
                                            </p>
                                        )
                                    }
                                </div>
                                <div className='mb-3 text-center'>
                                    <button type="submit"
                                            className={`inline-block font-light text-sm mt-3 text-gray-200 border rounded-md w-32 h-8 ${isSubmitting && 'bg-blue-200'}`}
                                            style={{
                                                backgroundColor: '#3f80ea',
                                                borderColor: '#3f80ea'
                                            }}
                                            disabled={isSubmitting}
                                    >{
                                        isSubmitting ? t('register.saving') : t('register.register')
                                    }
                                    </button>
                                    {
                                        isSuccessOperation && (
                                            <div
                                                className='rounded-md bg-green-100 w-full h-full text-green-500 text-sm font-light p-2 mt-3'>
                                                {t('register.successOperation')}
                                            </div>
                                        )
                                    }
                                    {
                                        routeErrors && (
                                            <div
                                                className='rounded-md bg-red-100 w-full h-full text-red-500 text-sm font-light p-2 mt-3'>
                                                {
                                                    routeErrors.response.data.map((error) => <p
                                                        className='mb-0'>{t(`register.validation.${error.code}`)}</p>)
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Register;
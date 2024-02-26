import logo from '../../../assets/images/logo.svg';

const Login = () => {
    return (
        <div className='flex justify-center w-screen'>
            <main className='flex p-0 w-screen'>
                <div className='container flex flex-col'>
                    <div className='flex-row h-screen'>
                        <div className='sm:col-span-10 md:col-span-8 lg:col-span-6 mx-auto table h-screen'>
                            <div className='table-cell align-middle'>
                                <div className='text-center mt-4'>
                                    <img src={logo} style={{height: '100px'}}/>
                                    <h1 className='text-center font-medium text-lg'>پلتفرم آموزش
                                        آنلاین</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Login;
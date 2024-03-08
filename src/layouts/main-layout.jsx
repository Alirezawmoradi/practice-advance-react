import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div className='flex-wrap min-h-screen'>
            <nav className='min-w-64 max-w-64 bg-dark'>

            </nav>
            <div className='flex w-full min-h-screen min-w-0 flex-col'>
                <nav
                    className='relative flex py-3.5 px-0.5 items-center border-b-0 shadow justify-start bg-white align-middle'>
                    <a className='cursor-pointer w-6 h-6 flex flex-col justify-center space-y-1.5 px-5'>
                        <span className='cursor-pointer rounded-sm h-0.5 w-5 bg-gray-600 block content-none transition-all duration-1000 ease-in-out'></span>
                        <span className='cursor-pointer rounded-sm h-0.5 w-6 bg-gray-600 block content-none transition-all duration-1000 ease-in-out'></span>
                        <span className='cursor-pointer rounded-sm h-0.5 w-4 bg-gray-600 block content-none transition-all duration-1000 ease-in-out'></span>
                    </a>
                </nav>
                <main className='p-10 flex-1'>
                    <Outlet/>
                </main>
                <footer className='block bg-white border-t border-solid border-b-gray-200 p-4'>

                </footer>
            </div>
        </div>
    )
}
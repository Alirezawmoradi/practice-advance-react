import {Outlet} from "react-router-dom";
import ChangeLanguage from "../components/change-language.jsx";

const IdentityLayout = () => {
    return (
        <>
            <div className='flex justify-center w-screen'>
                <nav className='border-b-0 shadow-sm'>
                    <ChangeLanguage/>
                </nav>
                <main className='flex p-0'>
                    <div className='container flex flex-col'>
                        <div className='flex-row h-screen'>
                            <div className='sm:col-span-10 md:col-span-8 lg:col-span-6 mx-auto table h-screen'>
                                <Outlet/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
export default IdentityLayout;
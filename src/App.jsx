import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import './core/i18n.js';
import {useAppContext} from "./contexts/app/app-context.jsx";

function App() {
    const {theme} = useAppContext();
    return (
        <div className={`${theme}`}>
            <div className='bg-light dark:bg-dark'>
                <RouterProvider router={router}/>
            </div>
        </div>
    )
}

export default App

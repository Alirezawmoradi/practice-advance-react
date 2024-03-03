import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import './core/i18n.js';

function App() {

    return (
        <div className='bg-light dark:bg-dark'>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App

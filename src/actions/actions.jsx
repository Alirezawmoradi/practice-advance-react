import {httpService} from "@core/http-service.js";
import {redirect} from "react-router-dom";

export async function registerAction({request}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData); //to convert key values to object
    const response = await httpService.post('/Users', data);
    return response.status === 200;
}

export async function loginAction({request}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData); //to convert key values to object
    const response = await httpService.post('/Users/login', data);
    if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        return redirect('/');
    }
}
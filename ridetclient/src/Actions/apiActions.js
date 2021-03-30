import axios from 'axios';
import {backendAPI} from "../Structure/api";


export const apiLogin = (username, password) => {
    const userLoginApi = backendAPI.concat(`/login`);
    return axios.post(userLoginApi,
        {
            "username": username,
            "password": password
        })

};

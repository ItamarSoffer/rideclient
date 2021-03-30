import axios from 'axios';
import {backendAPI} from "../Structure/api";

//Done
export const apiLogin = (username, password) => {
    const userLoginApi = backendAPI.concat(`/users/login`);
    return axios.post(userLoginApi,
        {
            "username": username,
            "password": password
        })

};

// DONE
export const apiNewLift = (jwtToken, ride_time, seats, dst_city_id, comments) => {
    const ApiNewLiftUrl = backendAPI.concat(`/rides/?auth_token=${jwtToken}`);
    return axios.post(ApiNewLiftUrl, {
        "ride_time": ride_time,
        "seats": seats,
        "dst_city_id": dst_city_id,
        "comments": comments
    })

};


// DONE
export const apiGetCities = () => {
    const getCitiesApi = backendAPI.concat(`/cities`);
    return axios.get(getCitiesApi)
            .then((results) => (results.data.cities))


};

// DONE
export const apiGetRides = () => {
    const getRidesApi = backendAPI.concat(`/rides`);
    return axios.get(getRidesApi)
        .then((results) => (results.data.rides))

};


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
// TODO: with filters!!!!
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


// DONE
export const apiSignUp = (jwtToken, car_company, car_color, car_seats, platform, platform_info, favorite_dst) => {
    const ApiNewLiftUrl = backendAPI.concat(`/users/signup/?auth_token=${jwtToken}`);
    return axios.post(ApiNewLiftUrl,
        {"car_company": car_company,
            "car_color": car_color,
            "car_seats": car_seats,
            "platform": platform,
            "platform_info": platform_info,
            "favorite_destination": favorite_dst
        })

};



// TODO: add to lift

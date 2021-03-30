/*
Saves the JWT authentication key and the current logged user.
the JWT token is provided by the server after the login has succeed.
 */
const jwtTokenLocalStorage = window.localStorage.getItem('jwtToken');

const initState = {
    jwtToken: (jwtTokenLocalStorage !== null ? jwtTokenLocalStorage : ''),
};

const usersReducer = (state = initState, action) => {


    switch(action.type){
        case "LOGIN":
            window.localStorage.setItem('jwtToken',action.jwtToken);
            state = {...state,
                jwtToken: action.jwtToken,
            };
            // logout- reset favorites
            if (action.jwtToken === ''){
            }
            break;
        default:
            break;
    }

    return state;
};

export default usersReducer;
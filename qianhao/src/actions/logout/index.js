import axios from "axios/index";

export const logOut = ()=>{
    return dispatch => {
        axios.get('/api/user/logout').then(res => {
            dispatch({
                type: 'USER_LOGOUT',
                payload: res.data
            });
        });
    }
};
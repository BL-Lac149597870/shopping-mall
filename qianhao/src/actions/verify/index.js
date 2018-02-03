import axios from "axios/index";

export const verify = ()=>{
    return dispatch => {
        return axios.get('/api/user/verify').then(res => {
            dispatch({
                type: 'USER_UPDATE',
                payload: res.data
            });
        });
    }
};
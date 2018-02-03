import axios from "axios/index";

export const login = (username,password)=>{
    return dispatch => {
        return axios.post('/api/user/login',{
            username,
            password
        }).then(res => {
            dispatch({
                type: 'USER_UPDATE',
                payload: res.data
            });




            return Promise.resolve(res.data);
        });
    }
};
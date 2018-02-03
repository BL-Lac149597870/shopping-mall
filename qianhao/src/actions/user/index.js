import axios from "axios/index";

export const fetchAddress = (id)=>{
    return dispatch => {
        axios.get('/api/user/address',{
            params: {
                id
            }
        }).then(res => {
            dispatch({
                type: 'UPDATE_ADDRESS',
                payload: res.data
            });
        });
    }
};
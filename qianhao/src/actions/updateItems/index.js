import axios from "axios/index";

/**
 * 从服务器获取商品列表
 * @returns {function(*)}
 */
export const updateItems = ()=>{
    return dispatch => {
        axios.get('/api/item').then(res => {
            dispatch({
                type: 'MAIN_UPDATE',
                payload: res.data.data
            });
        });
    }
};
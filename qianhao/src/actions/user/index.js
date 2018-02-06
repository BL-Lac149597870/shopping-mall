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
            return Promise.resolve(res.data);
        });
    }
};

/**
 * 修改用户地址
 * @param item
 * @returns {function(*)}
 */
export const editAddress = (item)=>{
    return dispatch => {
        const data = {
            id: item.id,
            user_name : item.userName,
            telephone : item.telephone,
            area_code : item.area_code,
            phone : item.phone,
            province : item.province,
            city : item.city,
            district : item.district,
            street : item.street
        };
        return axios.post('/api/user/address/edit',{...data}).then(res => {
            return Promise.resolve(res.data);
        });
    }
};

/**
 * 设置默认收货地址
 * @param id
 * @returns {function(*)}
 */
export const setDefault = (id)=>{
    return dispatch => {
        return axios.get('/api//user/address/set_default',{params:{id}}).then(res => {
            return Promise.resolve(res.data);
        });
    }
};

/**
 * 添加新地址
 * @param item
 * @returns {function(*)}
 */
export const addAddress = (item)=>{
    return dispatch => {
        const data = {
            id: item.id,
            user_name : item.userName,
            telephone : item.telephone,
            area_code : item.area_code,
            phone : item.phone,
            province : item.province,
            city : item.city,
            district : item.district,
            street : item.street
        };
        return axios.post('/api/user/address/add',{...data}).then(res => {
            return Promise.resolve(res.data);
        });
    }
};
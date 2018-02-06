import axios from "axios/index";




/**
 * 获取购物车商品
 * @returns {function(*)}
 */
export const fetchCarts = ()=>{
    return dispatch => {
        return axios.get('/api/cart').then(res => {
            dispatch({
                type: 'FETCH_CARTS',
                payload: res.data
            });
        });
    }
};

/**
 * 向购物车添加商品
 * @param item_id
 * @param quantity
 * @returns {function(*)}
 */
export const addItemToCart = (item_id,quantity)=>{
    return dispatch => {
        return axios.post('/api/cart/add',{item_id,quantity}).then(res => {
            return Promise.resolve(res.data);
        });
    }
};

/**
 * 从购物车删除商品
 * @param cart_id
 * @returns {function(*)}
 */
export const deleteToCart = (cart_id)=>{
    return dispatch => {
        return axios.post('/api/cart/delete',{cart_id}).then(res => {
            return Promise.resolve(res.data);
        });
    }
};

/**
 * 改变购物车商品选中状态
 * @param cart_id
 * @param checked
 * @returns {function(*)}
 */
export const changeChecked = (cart_id,checked)=>{
    return dispatch => {
        return axios.post('/api/cart/checked',{cart_id,checked}).then(res => {
            return Promise.resolve(res.data);
        });
    }
};
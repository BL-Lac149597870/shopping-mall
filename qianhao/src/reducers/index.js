import {combineReducers} from 'redux';

import mainReducers from './main/index';
import userReducers from './user/index';
import cartReducers from './cart/index';
import addressReducers from './address/index';

export default combineReducers({
    mainReducers,
    userReducers,
    cartReducers,
    addressReducers
});
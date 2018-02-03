export default (state={}, action)=>{
    switch (action.type){
        case 'USER_LOGOUT': return action.payload;
        case 'USER_UPDATE':return action.payload;
        default: return state;
    }
}



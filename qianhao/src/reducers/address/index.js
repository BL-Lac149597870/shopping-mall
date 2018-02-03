export default (state={}, action)=>{
    switch (action.type){
        case 'UPDATE_ADDRESS':return action.payload;
        default: return state;
    }
}
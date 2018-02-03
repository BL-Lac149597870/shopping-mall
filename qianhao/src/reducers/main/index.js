export default (state=[], action)=>{
    switch (action.type){
        case 'MAIN_UPDATE':return action.payload;
        default: return state;
    }
}
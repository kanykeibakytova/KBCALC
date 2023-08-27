const initialState ={
    money:"",
}

export const Reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_MONEY':
            return {...state,money: state.money + action.payload};
        //     if(state.money !==200){
        //         return {...state, money: state.money + action.payload}
        //     }else{
        //         return {...state,money : state.money + 0}
        //     }
        // case "GET_MONEY":
        //     if(state.money!==0){
        //         return {...state, money: state.money - action.payload}
        case 'ADD_HISTORY_ITEM': 
            return {...state,money: state.money+ action.payload};
        default:{
            return state;
        }
    }
};
export default Reducer;
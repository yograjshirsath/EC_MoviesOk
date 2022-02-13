import { ADD_USER,REMOVE_USER } from "../actions/types";
const intitalState={
    userList:[],
}

const userReducer=(state=intitalState,action)=>{
    switch(action.type){
        case 'ADD_USER':
            return {
                ...state,
                userList:state.userList.concat(action.data),//use concat instead of push when mutating the state
            }

       
        case 'DELETE_USER':
            return;
        default:
            return state;    
    }

}
export default userReducer;

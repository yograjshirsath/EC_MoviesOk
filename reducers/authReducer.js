import { AUTH_USER,LOGOUT_USER } from "../actions/types";
const intitalState={
    userData:null,
    isAuth:false
}

const authReducer=(state=intitalState,action)=>{
    switch(action.type){
        case 'AUTH_USER':
            console.log(state)
            return {
                ...state,
                userData:action.data,//use concat instead of push when mutating the state
                isAuth:true
            }


       // }
        case 'LOGOUT_USER':
            return;
        default:
            return state;    
    }
}

export default authReducer;
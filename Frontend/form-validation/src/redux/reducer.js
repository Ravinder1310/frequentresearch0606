import {  ADD_USER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionTypes";


const initialState = {
    user:[],
    isLoading:false,
    isError:false,
}

export const reducer=(state=initialState,{type,payload})=>{
 switch(type){
    case GET_USER_REQUEST:
        return {...state,isLoading:true};
    case GET_USER_SUCCESS:
        return {...state,isLoading:false,user:payload}
    case GET_USER_FAILURE:
        return {...state,isError:true}
    case ADD_USER_SUCCESS:
            return {...state,user:payload}    
    default :
        return state;
 }
}

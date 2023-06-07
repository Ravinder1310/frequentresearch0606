import {GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionTypes"
import axios from "axios"


const getUserRequestAction = () => {
    return {type:GET_USER_REQUEST};
}
const getUserSuccessAction = (payload) => {
    return {type:GET_USER_SUCCESS,payload};
}
const getUserFailureAction = () => {
    return {type:GET_USER_FAILURE};
}

// const addUserSuccessAction = (payload) => {
//     return {type:GET_USER_SUCCESS,payload};
// }

export const getUsers = (dispatch) => {
    dispatch(getUserRequestAction());

    axios.get(`https://lime-combative-scorpion.cyclic.app/admin`).then((res)=>{
        dispatch(getUserSuccessAction(res.data))
    }).catch((error)=>{
        dispatch(getUserFailureAction(error))
    })
}

// export const addUsers =({userInfo}) => (dispatch) => {

//     axios.get(`https://lime-combative-scorpion.cyclic.app/admin`,userInfo).then((res)=>{
//         dispatch(addUserSuccessAction(res.data))
//     }).catch((error)=>{
        
//     })
// }

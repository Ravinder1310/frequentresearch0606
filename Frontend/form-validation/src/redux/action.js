import {ADD_USER_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionTypes"
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

const addUserSuccessAction = (payload) => {
    return {type:ADD_USER_SUCCESS,payload};
}

export const getUsers = () => (dispatch) => {

    axios.get(`https://cute-blue-swallow-robe.cyclic.app/user`).then((res)=>{
        dispatch(getUserSuccessAction(res.data))
        console.log(res.data);
    }).catch((error)=>{
        dispatch(getUserFailureAction(error))
    })
}

export const addUsers =(userInfo) => (dispatch) => {
    console.log(userInfo);
    axios.post(`https://cute-blue-swallow-robe.cyclic.app/user/addUser`,userInfo).then((res)=>{
        dispatch(addUserSuccessAction(res.data))
        // console.log(res);
    }).catch((error)=>{
        console.log(error);
    })
}

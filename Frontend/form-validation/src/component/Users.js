import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import singleUser from './singleUser';
import { getUsers } from '../redux/action';
import SingleUser from './singleUser';

export const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((store)=>store.userReducer.user); 

  useEffect(()=>{
    
    dispatch(getUsers())
  },[])

  return (
    <div>
        {users.length>0 && users.map((el) => {
                return <SingleUser key={el._id} user={el}/>
            })}
    </div>
  )
}

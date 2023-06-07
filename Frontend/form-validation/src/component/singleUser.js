import React from 'react'

export default function SingleUser({user}) {
  return (
    <div>
       <h1>Name:- {user.first_name} {user.last_name}</h1>
       <h2>Email:- {user.email}</h2>
       <h3>Country:- {user.country}</h3>
       <h3>State:- {user.state}</h3>
       <h3>City:- {user.city}</h3>
       <h3>Gender:- {user.gender}</h3>
       <h3>D.O.B.:- {user.date_of_birth}</h3>
       <p>Age:- {user.age}</p>
    </div>
  )
}



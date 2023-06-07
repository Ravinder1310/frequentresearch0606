import React, { useState } from 'react'

export const Validate_form = () => {

    const [data,setData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        country:"",
        state:"",
        city:"",
        gender:"",
        date_of_birth:"",
        age:"",
    });

const handleChange = (e) => {
    const {name,value} = e.target;
    setData({...data,
       [name]:value
    })
}

const handleSubmit = (event) => {
  event.preventDefault();
}

  return (
    <div>
        <div>

        </div>
        <form onSubmit={handleSubmit()}>
           <input placeholder='Enter first name' type='text' name={"first_name"} value={data.first_name} onChange={(e)=>handleChange(e)}/><br/>
           <input placeholder='Enter last name' type='text' name={"last_name"} value={data.last_name} onChange={(e)=>handleChange(e)}/><br/>
           <input placeholder='Enter email' type='email' name={"email"} value={data.email} onChange={(e)=>handleChange(e)}/><br/>
           <label>Slelect country</label>
           <select value={data.country} name={"country"} onChange={(e)=>handleChange(e)}>
            <option>India</option>
            <option>USA</option>
            <option>Pakistan</option>
            <option>China</option>
           </select><br/>
           <label>Slelect state</label>
           <select value={data.state} name={"state"} onChange={(e)=>handleChange(e)}>
            <option>India</option>
            <option>USA</option>
            <option>Pakistan</option>
            <option>China</option>
           </select><br/>
           <label>Slelect city</label>
           <select value={data.city} name={"city"} onChange={(e)=>handleChange(e)}>
            <option>India</option>
            <option>USA</option>
            <option>Pakistan</option>
            <option>China</option>
           </select><br/>
           <label>Slelect gender</label>
           <div value={data.gender} name={"gender"} onChange={(e)=>handleChange(e)}>
            <input type='radio' name='Male' value={"male"}/>
            <label>Male</label>      
            <input type='radio' name='Female' value={"female"}/>
            <label>Female</label>
            <input type='radio' name='Other' value={"other"}/>
            <label>Other</label>
           </div>
           <input value={data.date_of_birth} name={"date_of_birth"} onChange={(e)=>handleChange(e)} type='date'/><br/>
           <input value={data.age} name={"age"} onChange={(e)=>handleChange(e)} placeholder='Age'/><br/>
           <button type='submit'>Save</button>
        </form>
    </div>
  )
}

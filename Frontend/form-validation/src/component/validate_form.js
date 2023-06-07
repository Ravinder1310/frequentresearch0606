import React, { useEffect, useState } from 'react';
import {useDispatch} from "react-redux"
import { addUsers } from '../redux/action';
import axios from 'axios';
// import { addUsers } from './redux/action';

export const Validate_form = () => {

  const dispatch = useDispatch();
  // const [countries, setCountries] = useState([]);
  // const [states, setStates] = useState([]);
  // const [cities, setCities] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState('');
  // const [selectedState, setSelectedState] = useState('');


  // const getData = async() => {
  //   let res = await axios.get("https://cute-blue-swallow-robe.cyclic.app/countries").then((res)=>{
  //   setPlace(res.data[0].place)
  //   console.log(place);
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // }


 
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


const handleChange2 = (e) => {
  setData({...data,gender:e.target.value})
}

const handleSubmit = (event) => {
  event.preventDefault();
  dispatch(addUsers(data));
  console.log(data);
  
}

// const handleCountryChange = (e) => {
//   const countryId = e.target.value;
//   setSelectedCountry(countryId);
//   setSelectedState('');
//   setData({...data,country:countries})
// };

// const handleStateChange = (e) => {
//   const stateId = e.target.value;
//   setSelectedState(stateId);
//   setData({...data,state:states})
// };

// useEffect(()=>{
//   const sampleCountries = [
//     { id: 1, name: 'USA' },
//     { id: 2, name: 'Canada' },
//     { id: 3, name: 'Australia' }
//   ];

//   const sampleStates = [
//     { id: 1, countryId: 1, name: 'California' },
//     { id: 2, countryId: 1, name: 'New York' },
//     { id: 3, countryId: 2, name: 'Ontario' },
//     { id: 4, countryId: 2, name: 'Quebec' },
//     { id: 5, countryId: 3, name: 'New South Wales' },
//     { id: 6, countryId: 3, name: 'Victoria' }
//   ];

//   const sampleCities = [
//     { id: 1, stateId: 1, name: 'Los Angeles' },
//     { id: 2, stateId: 1, name: 'San Francisco' },
//     { id: 3, stateId: 2, name: 'New York City' },
//     { id: 4, stateId: 2, name: 'Albany' },
//     { id: 5, stateId: 3, name: 'Toronto' },
//     { id: 6, stateId: 3, name: 'Ottawa' },
//     { id: 7, stateId: 4, name: 'Montreal' },
//     { id: 8, stateId: 4, name: 'Quebec City' },
//     { id: 9, stateId: 5, name: 'Sydney' },
//     { id: 10, stateId: 5, name: 'Newcastle' },
//     { id: 11, stateId: 6, name: 'Melbourne' },
//     { id: 12, stateId: 6, name: 'Geelong' }
//   ];

//   setCountries(sampleCountries);
//   setStates(sampleStates);
//   setCities(sampleCities);
  
// },[])

// const filteredStates = states.filter((state) => state.countryId === parseInt(selectedCountry));
// const filteredCities = cities.filter((city) => city.stateId === parseInt(selectedState));

  return (
    <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",border:"1px solid black",width:"25%",margin:"auto"}}>
       
        <form onSubmit={(event)=>handleSubmit(event)}>
           <input placeholder='Enter first name' type='text' name={"first_name"} value={data.first_name} onChange={(e)=>handleChange(e)}/><br/>
           <input placeholder='Enter last name' type='text' name={"last_name"} value={data.last_name} onChange={(e)=>handleChange(e)}/><br/>
           <input placeholder='Enter email' type='email' name={"email"} value={data.email} onChange={(e)=>handleChange(e)}/><br/>
           <select value={data.country} name={"country"} onChange={(e)=>handleChange(e)}>
            <option value={"india"}>India</option>
            <option value={"USA"}>USA</option>
            <option value={"pakistan"}>Pakistan</option>
            <option value={"China"}>China</option>
           </select><br/>
           <label>Slelect state</label>
           <select value={data.state} name={"state"} onChange={(e)=>handleChange(e)}>
            <option value={"west Bengal"}>west Bengal</option>
            <option value={"UK"}>UK</option>
            <option value={"Haryana"}>Haryana</option>
            <option value={"California"}>California</option>
           </select><br/>
           <label>Slelect city</label>
           <select value={data.city} name={"city"} onChange={(e)=>handleChange(e)}>
            <option value={"Hisar"}>Hisar</option>
            <option value={"new york"}>New York</option>
            <option value={"Faridabad"}>Faridabad</option>
            <option value={"Kolkata"}>China</option>
           </select><br/>
           <label>Slelect gender:- </label>
           <div >
            <input type='radio' id='male' checked={data.gender === 'male'} onChange={(e)=>handleChange2(e)} value={"male"}/>
            <label>Male</label>      
            <input type='radio' id='female' checked={data.gender === 'female'} onChange={(e)=>handleChange2(e)}  value={"female"}/>
            <label>Female</label>
            <input type='radio' id='other' checked={data.gender === 'other'} onChange={(e)=>handleChange2(e)} value={"other"}/>
            <label>Other</label>
           </div>
           <input value={data.date_of_birth} name={"date_of_birth"} onChange={(e)=>handleChange(e)} type='date'/><br/>
           <input value={data.age} name={"age"} onChange={(e)=>handleChange(e)} placeholder='Age'/><br/>
           <button type='submit'>Save</button>
        </form>
    </div>
  )
}



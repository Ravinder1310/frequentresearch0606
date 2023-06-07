import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:"flex",justifyContent:"space-between",fontSize:"30px",padding:"0px 100px"}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>Dashboard</Link>
    </div>
  )
}

export default Navbar
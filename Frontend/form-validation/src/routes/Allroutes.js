
import {Routes,Route} from "react-router-dom"
import { Validate_form } from "../component/validate_form"
import { Users } from "../component/Users"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Validate_form/>}/>
            <Route path="/users" element={<Users/>}/>
        </Routes>
    )
}
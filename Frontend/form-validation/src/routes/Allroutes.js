
import {Routes,Route} from "react-router-dom"
import { Validate_form } from "../component/validate_form"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Validate_form/>}/>
        </Routes>
    )
}
import axios from "axios";
import { BASE_URL } from "../common/constants/constants";

export const registerUser=(obj)=>{
let result=axios.post(`${BASE_URL}/tasktrack/register`,obj).then((res)=>res.data)
return result
}
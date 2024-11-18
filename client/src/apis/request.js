import axios from "axios";

export const registerUser=(obj)=>{
let result=axios.post(`${BASE_URL}/tasktrack/register`,obj).then((res)=>res.data)
return result
}
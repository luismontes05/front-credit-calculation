import axios from 'axios'

//const API_URL = "http://localhost:5000/api/";
const API_URL = "http://3.219.66.127:5000/api/";

const instance = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    headers: {
        'Authorization': 'Bearer '+localStorage.getItem("token"),
        'Content-Type': 'application/json'}
})

/*instance.interceptors.response.use(
(res) => {
    //console.log(res)    
},
(error) => {
    //console.log(error)
})


instance.interceptors.request.use(req => {
  
    return req
})*/
  

export default instance
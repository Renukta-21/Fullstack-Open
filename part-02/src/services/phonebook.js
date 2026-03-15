import axios from "axios"

const apiURL = "http://localhost:3001/persons"

const getAll =()=>{
    return axios.get(apiURL)
    .then(response=>response.data)
}
export default {getAll}
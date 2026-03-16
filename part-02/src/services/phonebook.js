import axios from "axios"

const apiURL = "http://localhost:3001/persons"

const getAll =()=>{
    return axios.get(apiURL)
    .then(response=>response.data)
}

const add=(newUser)=>{
    return axios.post(apiURL, newUser)
    .then(response=> response.data)
}
const deleteUser=(id)=>{
    return axios.delete(`${apiURL}/${id}`)
    .then(response=>response.data)
}
const updateUser=(updatedUser)=>{
    return axios.put(`${apiURL}/${updatedUser.id}`, updatedUser)
    .then(response=>response.data)
}
export default {getAll, add, deleteUser, updateUser}
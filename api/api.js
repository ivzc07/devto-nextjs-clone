const API_URL = "https://desafio-backend-o9nm.onrender.com"

function dataValidation (data){
    return fetch(`${API_URL}/auth/login`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
}

function createUser(data){
    console.log(data);
    return fetch(`${API_URL}/users`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
}

function getUser(id){
    return fetch(`${API_URL}/users/${id}`,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},   
    })
}

module.exports = {
    dataValidation,
    createUser,
    getUser
}


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

function getPost(){
    return fetch(`${API_URL}/posts/search?search=`,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},   
    })
}

function createPost(data,token){
    return fetch(`${API_URL}/posts/`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
        
    })
}

function getPostById (title){
        return fetch(`${API_URL}/posts/search?search=${title}`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},   
        })
}

module.exports = {
    dataValidation,
    createUser,
    getUser,
    getPost,
    createPost,
    getPostById
}


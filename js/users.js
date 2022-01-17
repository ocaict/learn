let login = false
let id = ""

window.onload = function() {
    const params = new URLSearchParams(window.location.search)
    login = params.get("login")
    email = params.get("email")
    getUsers(email)
    // similar behavior as an HTTP redirect
    if(!login) {
        window.location.replace("/login.html");
    }
}

const listOuput = document.querySelector(".list")
listOuput.innerHTML = "<h2> Loading...</h2>"

const displayUsers = (users) => {
    let html = ""
    users.map(user => {
        html += `
        <div class="person">

           
        <div class="image">
            <img src="${user.passport}" alt="${user.username}">
        </div>

        <div class="userdetails">
            <p>Username: ${user.username}</p>
            <p>Name: ${user.firstname} ${user.lastname}</p>
            <p>Email: ${user.email}</p>
            <p>Course: ${user.course}</p>
        </div>
    </div>
        
        `
    })

    listOuput.innerHTML = html
}


const getUsers = (email) => {
    fetch("https://ocawebtech.herokuapp.com/students")
    .then(data => data.json())
    .then(users => {
        let user = users.filter(user => user.email == email)
        displayUsers(user)
    })
}


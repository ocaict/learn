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
            <h2>Username: ${user.username}</h2>
            <h3>Name: ${user.firstname} ${user.lastname}</h3>
            <h3>Email: ${user.email}</h3>
            <h2>Course: ${user.course}</h2>
        </div>
    </div>
        
        `
    })

    listOuput.innerHTML = html
}


const getUsers = () => {
    fetch("https://ocawebtech.herokuapp.com/student")
    .then(data => data.json())
    .then(users => {
        displayUsers(users)
    })
}

getUsers()
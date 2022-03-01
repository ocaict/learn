let login = false
let id = ""
const listOuput = document.querySelector(".list")
listOuput.innerHTML = "<h3> Loading your Data...</h3>"

window.onload = async function () {
    const params = new URLSearchParams(window.location.search)

    login = params.get("login") || localStorage.getItem("login")
    email = params.get("email") || localStorage.getItem("userEmail")
    await getUsers(email)
    // similar behavior as an HTTP redirect
    if (!login) {
        window.location.replace("/login.html");
    }
}



const displayUsers = (users) => {
    let html = ""
    users.map(user => {
        html += `
      <div class="person-container">
      <h2>${user.firstname} ${user.lastname} Profile</h2>
        <div class="person">
           
        <div class="image">
            <img src="${user.passport}" alt="${user.firstname}">
        </div>

        <div class="userdetails">
            <p class="error">${user.verified ? "" : "Please Verify Your Account"}</p>
            <p>Name: ${user.firstname} ${user.lastname}</p>
            <p>Email: ${user.email}</p>
            <p>Course: ${user.course}</p>
            <p>Price: ${user.cost}</p>
            <p>Amount Payed: &#8358; ${user.amountPayed}</p>
            <p>Balance: &#8358; ${user.balance}</p>
        
        </div>

        <a class="btn logout-btn" onclick="logout(event)" href="./index.html">Log Out</a>
    </div>
    </div>
        
        `
    })

    listOuput.innerHTML = html
}

const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("login")
    localStorage.removeItem("userEmail")
    window.location.href = "/index.html"
}

let url = "https://ocawebtech.herokuapp.com/students"
let urlLocal = "http://localhost:3600/students"
const getUsers = async (email) => {
    fetch(url)
        .then(data => data.json())
        .then(users => {
            let user = users.filter(user => user.email == email)
            displayUsers(user)
        })
        .catch(err => {
            console.log(err)
            listOuput.innerHTML = "Unable to to connect to server, try again"
        })
}





const listOuput = document.querySelector(".list")
listOuput.innerHTML = "<h3> Loading your Data...</h3>"

window.addEventListener("DOMContentLoaded", async () => {
    await getUsers()
})
const displayUsers = (users) => {
    let html = ""
    users.map(user => {
        html += `
      <div class="person-container">
        <div class="person">
           
        <div class="image">
            <img src="${user.passport || "./images/user.png"}" alt="${user.username}">
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
    </div>
    </div>
        
        `
    })

    listOuput.innerHTML = html

}

const getUsers = async () => {
    fetch("https://ocawebtech.herokuapp.com/students")
        .then(data => data.json())
        .then(users => {
            if (users.length) {
                displayUsers(users)
            } else {
                listOuput.innerHTML = "Users not Found"
            }
        })
        .catch(err => {
            console.log(err)
            listOuput.innerHTML = "Unable to to connect to server, try again"
        })
}


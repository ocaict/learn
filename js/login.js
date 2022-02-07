const form = document.querySelector("form")
const formInputs = Array.from(document.querySelectorAll("form .input"));
let indicator = document.querySelector(".indicator")
let submitBtn = document.querySelector(".submitbtn")

form.onsubmit = (e) => {
    e.preventDefault()
    indicator.innerHTML = ""

let user = {}
formInputs.forEach(input => {
    if(input.value == ""){
        indicator.innerHTML= "Email or Password cannont be Blank"
    }else{
        user[input.name] = input.value
    }
})
submitBtn.value = "Loging In... Pls Wait"
submitBtn.disabled = true
   // Post Data Using Fetch Api
   fetch('https://ocawebtech.herokuapp.com/login', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(res => res.json())
    .then(res => {
      if(res.success){
        window.location.href = `/profile.html?login=true&email=${(res.user[0].email)}`;
        localStorage.setItem("login", true)
        localStorage.setItem("userEmail", res.user[0].email)
        // indicator.innerHTML = res.msg
      }else{
        indicator.innerHTML = res.msg
        submitBtn.value = "Login"
        submitBtn.disabled = false
      }
    })
    .catch(err => {
      indicator.innerHTML ="Unable to Connect to the Server"
      submitBtn.value = "Login"
      submitBtn.disabled = false
      console.log(err)
    })

}
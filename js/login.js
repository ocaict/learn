const form = document.querySelector("form")
const formInputs = Array.from(document.querySelectorAll("form .input"));
let indicator = document.querySelector(".indicator")
let submitBtn = document.querySelector(".submitbtn")

form.onsubmit = (e) => {
    e.preventDefault()

let user = {}
formInputs.forEach(input => {
    if(input.value == ""){
        indicator.innerHTML= "Email or Password cannont be Blank"
    }else{
      submitBtn.value = "Loging In... Pls Wait"
        user[input.name] = input.value

         // Post Data Using Fetch Api
     fetch('http://localhost:3600/login', {
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
            indicator.innerHTML = res.msg
          }else{
            indicator.innerHTML = res.msg
            submitBtn.value = "Login"
          }
        });
    }
})

}
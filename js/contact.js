const form = document.querySelector(".contact-form")
const formInputs = Array.from(form.querySelectorAll("input"))
const message = document.querySelector("textarea")
const messageBox = document.querySelector(".msg-box")
const sendBtn = document.querySelector(".submit-btn")
formInputs.push(message)

const displayMessage = (msg, addClass, removeClass) => {
    messageBox.innerHTML = msg
    messageBox.classList.add(addClass)
    messageBox.classList.remove(removeClass)
    messageBox.classList.remove("hide")
    
    setTimeout(() => {
        messageBox.classList.add("hide")
    }, 5000)
}



form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const data = {}
    formInputs.forEach(input => {
        if(!input.value){
            console.log(input.name + " field is required")
        }
        data[input.name] = input.value
        
    })
    let msgRule = /^[a-z\ \d]{10,100}$/i;
    let emailRule = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    let phoneRule = /^\d{11}$/

    let validPhone = phoneRule.test(data.phone);
    let validEmail = emailRule.test(data.email);
    let validMsg = msgRule.test(data.message);
    
    if(!validPhone ||!validEmail || !validMsg){

       displayMessage("Fill all fields correctly and try again", "error", "success")
        

        return

    }

        sendBtn.disabled = true
        sendBtn.classList.add("disabled")
       // Post Data Using Fetch Api
       fetch('https://ocawebtech.herokuapp.com/contact', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(data => data.json())
      .then(res => {
          console.log(res)
          if(res.success){
            sendBtn.disabled = false
            sendBtn.classList.remove("disabled")
            displayMessage("Your message was deliveered successfully", "success", "error")
              clearInputs(formInputs)
          }else{
            sendBtn.disabled = false
            sendBtn.classList.remove("disabled")
            displayMessage("Unable to add contact..", "error", "success")
          }
      })
      .catch(err => {
          
          sendBtn.disabled = false
          sendBtn.classList.remove("disabled")
        displayMessage("Unable to add connect to database.", "error", "success")
        console.log(err)

      })
})

const clearInputs = (inputs) => {
    inputs.forEach(input => {
        input.value = ""
    })
}
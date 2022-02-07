const form = document.querySelector(".contact-form")
const formInputs = Array.from(form.querySelectorAll("input"))
const message = document.querySelector("textarea")
formInputs.push(message)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const data = {}
    formInputs.forEach(input => {
        if(!input.value){
            console.log(input.name + " field is required")
        }
        data[input.name] = input.value
        
    })

       // Post Data Using Fetch Api
       fetch('http://localhost:3600/contact', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(data => data.json())
      .then(res => {
          if(res.success){
              console.log(res.msg, res.user)
              clearInputs(formInputs)
          }else{
              console.log("Unable to add contact..")
          }
      })
      .catch(err => console.log(err))
})

const clearInputs = (inputs) => {
    inputs.forEach(input => {
        input.value = ""
    })
}
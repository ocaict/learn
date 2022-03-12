const resetForm = document.querySelector(".email-form")
const successContainer = document.querySelector(".success")
let indicator = document.querySelector(".indicator")
let submitBtnText = document.querySelector(".login-btn")
let submitBtn = document.querySelector("#submit-btn")
let loader = document.querySelector(".loader")

resetForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = resetForm.querySelector("#email").value
    let emailRule = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    let validEmail = emailRule.test(email);

    if (email && validEmail) {
        submitBtnText.innerHTML = "Proccesssing..."
        submitBtn.disabled = true
        loader.classList.remove("hide")

        fetch("https://ocawebtech.herokuapp.com/send-reset-link", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text/plain"
            },
            body: JSON.stringify({ email })

        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    resetForm.classList.add("hide")
                    successContainer.classList.remove("hide")
                    submitBtnText.innerHTML = "Send Me a Link"
                    submitBtn.disabled = false
                    loader.classList.add("hide")
                } else {
                    indicator.innerHTML = result.message
                    submitBtnText.innerHTML = "Send Me a Link"
                    submitBtn.disabled = false
                    loader.classList.add("hide")
                }
            })
            .catch(err => {
                indicator.innerHTML = "Unable to send Email, Check your Network Connection"
            })
    } else {
        indicator.innerHTML = "Enter a Valid  Email and Try Again"

    }
})





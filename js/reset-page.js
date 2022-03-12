const resetPasswordForm = document.querySelector(".reset-form")
const successContainer = document.querySelector(".success")
let indicator = document.querySelector(".indicator")
let submitBtnText = document.querySelector(".login-btn")
let submitBtn = document.querySelector("#submit-btn")
let loader = document.querySelector(".loader")

resetPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let params = new URLSearchParams(location.search)
    let id = params.get("id")

    let passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    const passwordInputs = Array.from(resetPasswordForm.querySelectorAll("input[type='password']"))
    const user = {}
    passwordInputs.forEach(input => {
        user[input.name] = input.value
    })

    let validPassword = passwordRule.test(user.password);
    let validPassword2 = passwordRule.test(user.password2);
    if (user.password === user.password2 && validPassword && validPassword2) {
        submitBtnText.innerHTML = "Proccesssing..."
        submitBtn.disabled = true
        loader.classList.remove("hide")

        user.id = id
        fetch("https://ocawebtech.herokuapp.com/reset-password", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text/plain"
            },
            body: JSON.stringify(user)

        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    resetPasswordForm.classList.add("hide")
                    successContainer.classList.remove("hide")
                } else {
                    indicator.innerHTML = result.message
                    submitBtnText.innerHTML = "Reset Password"
                    submitBtn.disabled = false
                    loader.classList.add("hide")
                }
            })
            .catch(err => {
                submitBtnText.innerHTML = "Reset Password"
                submitBtn.disabled = false
                loader.classList.add("hide")

                indicator.innerHTML = "Unable to Connect with Server"
                // console.log(err)
            })
    } else {
        indicator.innerHTML = "Password must be at least 6 chareter with Uppercase, special charcter and a number"

    }
})

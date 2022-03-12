const resetPasswordForm = document.querySelector(".reset-form")

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
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        console.log("Password Invalid")
    }
})

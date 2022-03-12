const resetForm = document.querySelector(".email-form")
resetForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = resetForm.querySelector("#email").value

    if (email) {
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
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
})





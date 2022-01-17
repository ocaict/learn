let passportInput = document.querySelector(".passport");
let passport;
passportInput.addEventListener("change", (e) => {
  let file = passportInput.files[0];
  let size = (file.size / 1024 / 1024).toFixed(2)
 if(size > 0.05){
   alert("Image too Big to be uploaded..")
 }else{
  let fileReader = new FileReader();

  fileReader.readAsDataURL(file);

  fileReader.onload = (e) => {
    let result = e.target.result;
    passport = result
    document.querySelector(".passport-label").style.backgroundImage = "url("+result+")"

  };
 }
});


const formInputs = Array.from(document.querySelectorAll("form .input"));
let errorEles = Array.from(document.querySelectorAll(".error"));
const form = document.querySelector(".form");
const course = document.querySelector("#courses");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#password-confirm");
const submitBtn = document.querySelector(".submitbtn");

let isValid = false;

let mainInputs;

function showInputError(elem, msg) {
  elem.innerHTML = msg;
}
function hideError(elem) {
  elem.innerHTML = "";
}

//Validation Rules
let nameRule = /^[a-z\d]{3,10}$/i;
let usernameRule = /^[a-z]{3,8}$/;
let emailRule = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
// let phoneRule = /^\d{6,20}$/
let passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// let validName = nameRule.test(uname.value)

function validateName(nameEle) {
  let validName;

  switch (nameEle.id) {
    case "firstname":
      validName = nameRule.test(nameEle.value);
      if (validName) {
        isValid = true;
      } else {
        isValid = false;
        showInputError(errorEles[0], "Enter a valid firstname");
      }
      break;
    case "lastname":
      validName = nameRule.test(nameEle.value);
      if (validName) {
        isValid = true;
      } else {
        isValid = false;
        showInputError(errorEles[1], "Enter a valid Last Name");
      }
      break;
    case "username":
      let validUsername = usernameRule.test(nameEle.value);
      if (validUsername) {
        isValid = true;
      } else {
        isValid = false;
        showInputError(errorEles[2], "Enter a valid user name");
      }
      break;
    case "email":
      let validEmail = emailRule.test(nameEle.value);
      if (validEmail) {
        isValid = true;
      } else {
        isValid = false;
        showInputError(errorEles[3], "Enter a valid Email");
      }
      break;
    case "password":
      let validPassword = passwordRule.test(nameEle.value);
      if (validPassword) {
        isValid = true;
      } else {
        isValid = false;
        showInputError(
          errorEles[4],
          "Password must  be least 6 characters with at least 1 uppercase letter, special chareter and number"
        );
      }
      break;
  }
}

function validateForm() {
  mainInputs = formInputs
    .filter((input) => input.type !== "submit")
    .filter((input) => input.id !== "password-confirm");
  mainInputs.forEach((input) => {
    validateName(input);
  });
}

formInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    hideError(errorEles[index]);
  });
});

//Clear Inputs
function clearInputs() {
  formInputs.forEach((input, index) => {
    input.value = "";
  });
  confirmpassword.value = "";
}

let confirmPasswodError = document.getElementById("password-confirm-error");
let courseError = document.getElementById("course-error");
let indicator = document.querySelector(".indicator");

course.addEventListener("change", () => {
  courseError.innerHTML = "";
});
confirmpassword.addEventListener("input", () => {
  confirmPasswodError.innerHTML = "";
});

 form.addEventListener("submit", (e) => {
  e.preventDefault();
  indicator.innerHTML = ""
  if (isValid) {
    if (password.value !== confirmpassword.value) {
      confirmPasswodError.innerHTML = "Password Does not Match";
    } else {
      if (!course.value) {
        courseError.innerHTML = "Select Course";
      } else {
        indicator.innerHTML = ""
        submitBtn.value = "Submitting...";
        let data = {};
        mainInputs.forEach((input) => {
          data[input.name] = input.value;
        });
        // Add a new document in collection "cities"
        // Add a new document in collection "cities"
        // Add a new document with a generated id.
        let user = {
          ...data, passport,
          course: course.value
          // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
          // Post Data Using Fetch Api
              fetch('http://localhost:3600/', {
              method: 'post',
              headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
            }).then(res => res.json())
              .then(res => {
                if(res.success){
                  indicator.innerHTML = res.msg
                  submitBtn.value = "Apply";
                   clearInputs()
                   window.location.href = `/profile.html?firstname=${user.firstname}`;
                //   submitBtn.innerHTML = "Apply";
                //  submitBtn.disabled = false
                //  submitBtn.classList.remove("disabled")
                }else{
                  indicator.innerHTML = res.msg
                  submitBtn.value = "Apply";
                }
              });

              
        /* db.collection("students")
          .add(user)
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            if (docRef.id) {
              indicator.innerHTML = "Your Data has been submitted";
              window.location.href = "./success.html" +"?email="+user.email;
              clearInputs();
            }
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          }); */
      }
    }
    // window.location.href = "./contact.html"
  } else {
    console.log("Invalid");
  }
}); 

  // Post Data Using Fetch Api ActivePresenter
// Send Data to MyDB





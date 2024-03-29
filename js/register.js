
let userContainer = document.querySelector(".user");
let formContainer = document.querySelector(".form-container");
let afterContainer = document.querySelector(".after-registration-container");
let passportInput = document.querySelector(".passport");
// Passport Logics
let passport = "";
let cost;
passportInput.addEventListener("change", (e) => {
  let file = e.target.files[0];
  let size = (file.size / 1024 / 1024).toFixed(2)
  if (size > 0.05) {
    alert("Image too Big to be uploaded..")
  } else {
    let fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = (e) => {
      let result = e.target.result;
      passport = result
      document.querySelector(".passport-label").style.backgroundImage = "url(" + result + ")"

    };
  }
});


// Select Logics

let courseDetailsContainer = document.querySelector(".course-details-container");
let courseDetails = document.querySelector(".course-details");
let popOverlay = document.querySelector(".pop-overlay");
const courseOptions = document.querySelector("#courses")
const detailsBtn = document.querySelector(".show-details")
const topics = document.querySelector(".topics")
const closeBtn = document.querySelector(".close-btn")


courseOptions.addEventListener("change", (e) => {
  submitBtn.classList.add("hide")
  let value = e.target.value
  let { title, requirements, topics, participants, price } = courseArray.filter(c => c.title == value)[0]
  cost = price

  switch (value) {
    case value:
      populateDetails(title, participants, requirements, topics, price)
      break;
    default:
      break;
  }
})

const populateDetails = (course, participants, listArray, topics, cost) => {
  detailsBtn.style.display = "block"
  courseDetails.innerHTML = displayCourseDetails(course, participants, listArray, topics, cost)
}
const displayCourseDetails = (course, participants, listArray, topics, cost) => {
  let list = listArray.map(li => {
    return `<li>${li}</li>`
  }).join("")

  let topic = topics.map(li => {
    return `<li>${li}</li>`
  }).join("")

  let participant = participants.map(li => {
    return `<li>${li}</li>`
  }).join("")

  return `
        <div class="main">
            <div class="requirements">
            <h2> ${course}</h2>

              <div>
              <br>
              <h3> Target Audience. </h3>
              <ul>
             ${participant}
              </ul>
               </div>
            <br>
                <h3>Basic Requirments.</h3>

                <ul class="list">
                ${list}
            </ul>
          </div>
          <div class="topics">
                <h3>What you will learn</h3>
                <ul>
                ${topic}
                </ul class="list">
                <h2 class="cost">Costs: &#8358;${cost}</h2>
                <button class="btn btn-success" onclick="hidePopUp()">Continue</button>

          </div>
      </div>
  `
}
detailsBtn.addEventListener("click", () => {
  submitBtn.classList.add("hide")
  popOverlay.style.display = "block"
  courseDetailsContainer.classList.add("top")
})
closeBtn.addEventListener("click", () => {
  popOverlay.style.display = "none"
  courseDetailsContainer.classList.remove("top")
})
const hidePopUp = () => {
  popOverlay.style.display = "none"
  courseDetailsContainer.classList.remove("top")
  submitBtn.classList.remove("hide")

}

const formInputs = Array.from(document.querySelectorAll("form .input"));
let errorEles = Array.from(document.querySelectorAll(".error"));
const form = document.querySelector(".form");
const course = document.querySelector("#courses");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#password-confirm");
const submitBtn = document.querySelector("#submitbtn");
const submitBtnText = document.querySelector(".submit-form-btn");
const loader = document.querySelector(".loader");


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

// Form Event
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
        submitBtnText.innerHTML = "Proccessing..";
        loader.classList.remove("hide")
        submitBtn.disabled = true
        let data = {};
        mainInputs.forEach((input) => {
          data[input.name] = input.value;
        });

        let user = {
          ...data, password2: confirmpassword.value, course: course.value, cost, passport

        }
        console.log(user)
        // Post Data Using Fetch Api
        const url = 'https://ocawebtech.herokuapp.com/'
        const localUrl = "http://localhost:3600/"
        fetch(url, {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        }).then(res => res.json())
          .then(res => {
            if (res.success) {
              localStorage.setItem("userEmail", user.email)
              indicator.innerHTML = res.msg
              submitBtn.disabled = false
              submitBtnText.innerHTML = "Apply";
              loader.classList.add("hide")
              clearInputs()
              userContainer.innerHTML = user.firstname
              formContainer.style.display = "none"
              afterContainer.style.display = "block"



            } else {
              indicator.innerHTML = res.msg
              submitBtn.disabled = false
              loader.classList.add("hide")
              submitBtnText.innerHTML = "Apply";
            }
          })
          .catch(err => {
            indicator.innerHTML = "Unable to proccess your request,  Pls Try Again"
            submitBtn.disabled = false
            submitBtnText.innerHTML = "Apply";
            loader.classList.add("hide")
            console.log(err)
          })
      }
    }
  } else {
    console.log("Invalid");
  }
});



// Color the Title

function toHex(value) {
  var hex = "0123465789ABCDEF";
  var result = hex.charAt(Math.floor(value / 16));
  result += hex.charAt(value % 16);
  return result;
}
var colorBegin = "#DC143C";
var colorEnd = "#3CB371";
var text = "Oca WebTech";
var r = parseInt(colorBegin.substring(1, 3), 16);
var g = parseInt(colorBegin.substring(3, 5), 16);
var b = parseInt(colorBegin.substring(5, 7), 16);
var rr = parseInt(colorEnd.substring(1, 3), 16);
var gg = parseInt(colorEnd.substring(3, 5), 16);
var bb = parseInt(colorEnd.substring(5, 7), 16);
var r_step = (rr - r) / text.length;
var g_step = (gg - g) / text.length;
var b_step = (bb - b) / text.length;
var html = "";
for (var x = 0; x <= text.length; x++) {
  html =
    html +
    '<span style="color:#' +
    toHex(r) +
    toHex(g) +
    toHex(b) +
    '";">' +
    text.charAt(x) +
    "</span>";
  r += r_step;
  g += g_step;
  b += b_step;
}
document.getElementById("title").innerHTML = html;





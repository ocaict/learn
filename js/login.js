const form = document.querySelector("form")
const formInputs = Array.from(document.querySelectorAll("form .input"));
let indicator = document.querySelector(".indicator")
let submitBtn = document.querySelector(".submitbtn")

form.onsubmit = (e) => {
  e.preventDefault()
  indicator.innerHTML = ""

  let user = {}
  formInputs.forEach(input => {
    if (input.value == "") {
      indicator.innerHTML = "Email or Password cannont be Blank"
    } else {
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
      if (res.success) {
        window.location.href = `/profile.html`;
        localStorage.setItem("login", true)
        localStorage.setItem("userEmail", res.user[0].email)
        // indicator.innerHTML = res.msg
      } else {
        indicator.innerHTML = res.msg
        submitBtn.value = "Login"
        submitBtn.disabled = false
      }
    })
    .catch(err => {
      indicator.innerHTML = "Unable to Connect to the Server"
      submitBtn.value = "Login"
      submitBtn.disabled = false
      console.log(err)
    })

}


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
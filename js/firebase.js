
const userContainer = document.querySelector(".user-container")
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9PIIdbqPAE3Vyay5L9BJpcdsj-OZLSYE",
  authDomain: "oca-media-app.firebaseapp.com",
  projectId: "oca-media-app",
  storageBucket: "oca-media-app.appspot.com",
  messagingSenderId: "494641529596",
  appId: "1:494641529596:web:c1addb417879f996144d79",
  measurementId: "G-EQWXZEJHDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Confirm the link is a sign-in with email link.
const auth = getAuth();
if (isSignInWithEmailLink(auth, window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = window.localStorage.getItem('userEmail') || "";
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');

  }
  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // Clear email from storage.
      //   window.localStorage.removeItem('ocaSignUpEmail');

      if (result.user) {
        let verifiedEmail = result.user.reloadUserInfo.email
        let verified = result.user.reloadUserInfo.emailVerified
        fetch("https://ocawebtech.herokuapp.com/students")
          .then(data => data.json())
          .then(users => {
            let verifiedUser = users.filter(user => user.email == verifiedEmail)
            console.log(verifiedUser)
            if (verifiedUser.length > 0) {
              fetch("https://ocawebtech.herokuapp.com/verify", {
                method: "put",
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: verifiedUser[0].id })
              })
                .then(data => data.json())
                .then(res => {
                  if (res.success) {
                    displayUserDetails(verifiedUser[0])
                    window.localStorage.removeItem('userEmail');
                  } else {
                    userContainer.innerHTML = `<p class="error">Unable to Verify your email, Pls Try verify link again </p>`
                  }
                })
                .catch(error => console.log(error))
            }
          })
          .catch(err => console.log(err))
      }

      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch((error) => {
      console.log(error)
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}


const displayUserDetails = (user) => {
  let html = `<div class="card">
<img src="${user.passport}" alt="">
<p> Hi ${user.firstname}, your email <span class="email">${user.email}</span> have been verified successffully.</p>
<p>You can head to Oca  Computer Training Academy to pay and complete your registration process.</p>

</div>
`
  userContainer.innerHTML = html
}
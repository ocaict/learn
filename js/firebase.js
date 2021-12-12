
        // Import the functions you need from the SDKs you need
        // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
        // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
        // // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyA9PIIdbqPAE3Vyay5L9BJpcdsj-OZLSYE",
            authDomain: "oca-media-app.firebaseapp.com",
            projectId: "oca-media-app",
            storageBucket: "oca-media-app.appspot.com",
            messagingSenderId: "494641529596",
            appId: "1:4946415+-29596:web:c1addb417879f996144d79",
            measurementId: "G-EQWXZEJHDS"
          };
        
          // Initialize Firebase
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          // firebase.analytics();
          const db = firebase.firestore();


const urlParams = new URLSearchParams(window.location.search);
 const email = urlParams.get('email');
const image = document.querySelector("img")
const user = document.querySelector(".user")



db.collection("students").where("email", "==", email)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            image.src = doc.data().passport
            user.innerHTML = `<h2>${doc.data().username}</h2>`
            user.innerHTML += `<p> you have choosen to study ${doc.data().course} </p>`

        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });






         
  // Add a new document in collection "cities"
  
/*   function addUser(){
    if(todoInput.value){
        db.collection("todo-items").add({
            text: todoInput.value,
            status: "active"
        })
        todoInput.value = '' 
    }else{
        console.log("Enter todo and Try Again")
    }
   
  }
    
addBtn.addEventListener("click", addTodo)
  
   function getItems(){
      db.collection("todo-items").onSnapshot((snapshot) => {
          let items = []
         snapshot.docs.forEach((doc) => {
            items.push({id: doc.id, ...doc.data()})
          })
          generateItems(items)
      })
  }


  function generateItems(items){
      let html = ''
      items.forEach((item) => {
         html += `
         <div class="todo-item">
                <div class="check">
                    <div data-id="${item.id}" class="checkmark ${item.status == "completed" ? "checked" : ""}">
                        <img src="./images/check.svg" alt="">
                    </div>
                </div>
                <div class="todo-text ${item.status == "completed" ? "checked" : ""}">
                   ${item.text}
                </div>
            </div>
         `
      })
      todoList.innerHTML = html
      createEventListener()
  }

  function createEventListener(){
      let todoCheckMarks = document.querySelectorAll(".todo-item .checkmark")
      todoCheckMarks.forEach((checkmark) =>{
          checkmark.addEventListener("click", () => {
            markCompleted(checkmark.dataset.id)
          })
      })
  }

  function markCompleted(id){
    //   from database
      let item = db.collection("todo-items").doc(id);
      item.get().then((doc) => {
          if(doc.exists){
              let status = doc.data().status;
              if(status == "active" ){
                  item.update({
                      status: "completed"
                  })
              }else if(status == "completed"){
                  item.update({
                      status: "active"
                  })
              }
          }
      })
  }
 */
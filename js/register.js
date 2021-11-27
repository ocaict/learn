const formInputs = Array.from(document.querySelectorAll("form input"))
let errorEles = Array.from(document.querySelectorAll(".error"))
const form = document.querySelector(".form");
let isValid = false




function showInputError(elem, msg){
        elem.innerHTML = msg
       
        // switch(elem.id){
        //     case "firstname-error":
        //         elem.innerHTML = msg
        //     break;
        //     case "lastname-error":
        //         elem.innerHTML = msg
        //     break;
        //     case "username-error":
        //         elem.innerHTML = msg
        //     break;
        //     case "email-error":
        //         elem.innerHTML = msg
        //     break;
        //     case "password-error":
        //         elem.innerHTML = msg
        //     break;
        // }
    
}
function hideError(elem){
        elem.innerHTML = ""
     
}




let nameRule = /^[a-z\d]{3,10}$/i
let usernameRule = /^[a-z]{3,8}$/
let emailRule = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
let phoneRule = /^\d{6,20}$/
// let validName = nameRule.test(uname.value)


function validateName(nameEle){
   let validName;
    

    switch(nameEle.id){
        case "firstname":
            validName = nameRule.test(nameEle.value)
            if(validName){
              isValid = true
            }else{
                isValid = false
               showInputError(errorEles[0], "Enter a valid firstname")
              
            }
        break;
        case "lastname":
            validName = nameRule.test(nameEle.value)
            if(validName){
                isValid = true
            }else{
                isValid = false
                showInputError(errorEles[1], "Enter a valid Last Name")
                
            }
       break;
        case "username":
            let validUsername = usernameRule.test(nameEle.value)
            if(validUsername){
                isValid = true
            }else{
                isValid = false
                 showInputError(errorEles[2], "Enter a valid user name")
               
            }
       break;
        case "email":
            let validEmail = emailRule.test(nameEle.value)
            if(validEmail){
                isValid = true
            }else{
                isValid = false
                showInputError(errorEles[3], "Enter a valid Email")
            }
       break;
        case "password":
            let validPassword = phoneRule.test(nameEle.value)
            if(validPassword){
                isValid = true
            }else{
                isValid = false
                showInputError(errorEles[4], "Enter a valid user Password")
            }
       break;
    }
   
/* 
     if (validName && validUsername && validEmail && validPassword){

         return true
     }
     else{
         switch(nameEle.id){
             case "firstname":
                 alert("First Name should be between 3 and 10 chars long")
            break;
            case "lastname":
                alert("Last Name should be between 3 and 10 chars long")
            break;
            case "username":
                alert("Username ..")
            break;
            case "email":
                alert("Enter Valid Email")
            break;
            case "password":
                alert("Enter valid password" + nameEle.id)
            break;
            default:
                alert("All required field must be filled")
         }
          

        //  alert("Name should be letters between 3 and 10 charcs")
         return false
         
        
     }  */
 }

function validateUsername(nameEle){
    
    let validUsername = usernameRule.test(nameEle.value)

     if (validUsername){
         return true
     }
     else{
         switch(nameEle.id){
             case "username":
                 alert("Enter a user name between 5 and 8 characters")
            break;
         }

        //  alert("Name should be letters between 3 and 10 charcs")
         return false
         
        
     } 
 }



function validateForm(){
    let mainInputs = formInputs.filter(input => input.type !== "submit").filter(input => input.id !== "password-confirm")
    mainInputs.forEach(input => {
           
           validateName(input)

        //    if(input.id == "firstname"){
        //       validateName(input)
        //    }
        //    if(input.id == "lastname"){
        //     validateName(input)
        //    }
        //    if(input.id == "username"){
        //     validateUsername(input)
        //    }
    })

    
}

formInputs.forEach((input, index ) => {
   input.addEventListener("change", () => {
       hideError(errorEles[index])
   })
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(isValid)
   
})




//signin version 3
//Server-side validation

"use strict";

var signInButton=document.querySelector('#signInButton')
signInButton.addEventListener('click',signInValidator)

//--function line--
function signInValidator(evt){
  evt.preventDefault()
  var enteredUser=(document.querySelector('#username')).value
  var enteredPassword=(document.querySelector('#enteredPassword')).value

  var url="https://localhost:5001/api/user"
  var request=new Request(url,{
    method:'put',
    body: JSON.stringify({Username:enteredUser,Password:enteredPassword,accessKey:true}),
    headers:{
      'content-type':'application/json'
    }
  })
  fetch(request).then((response)=>{
    if (response.json()==true){
      window.location=sessionStorage.getItem('currentPage');
    }
    else{
      revokeAccess()
    }
  })

}

function revokeAccess()
{
  //alert('Incorrect Credentials!'); //No annoying alerts!!
  var alertMessage=document.querySelector('#alertDiv');
  alertMessage.classList.add("linkText")
  alertMessage.classList.add("text-center")
  alertMessage.innerHTML='Incorrect Credentials!'
  setTimeout(function(){
    alertMessage.innerHTML="Try again or sign up";
  },3000)
}


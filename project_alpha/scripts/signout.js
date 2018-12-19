//signout.js
/*
garygarthsimmons@gmail.com
Description:
Allows user to sign via clearing session storage and redirecting them to index.js
*/
"use strict"

setTimeout(function(){
var signout = document.getElementById('signOutLink')
signout.addEventListener('click',logoffprocess);},3000)

function logoffprocess(evt){
  evt.stopPropagation()
  var url="https://localhost:5001/api/user/checker";
  var request=new Request(url,{
    method:'put',
    body:JSON.stringify(""),
    headers:{
      'content-type':'application/json'
    }
  });
  fetch(request).then((response)=>{
    if(response.ok){
      response.json().then(signOff)
    }
    else{
      console.log(response.json())
    }
  })

}

function signOff()
{
  window.location="index.html"
}


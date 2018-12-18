//signout.js
/*
garygarthsimmons@gmail.com
Description:
Allows user to sign via clearing session storage and redirecting them to index.js
*/
"use strict"
var signout = document.getElementById('signOutLink')
debugger;
signout.addEventListener('click',logoffprocess);

function logoffprocess(evt){
  //debugger
  evt.stopPropagation()
  var url="https://localhost:5001/api/user/checker";
  var request=new Request(url,{
    method:'put',
    body:'meh',
    headers:{
      'content-type':'application/json'
    }
  });
  fetch(request)
  window.location="index.html"
}
//debugger


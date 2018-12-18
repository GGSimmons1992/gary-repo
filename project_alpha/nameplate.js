//nameplate.js
/*
garygarthsimmons@gmail.com
Description: If person is logged in, find the nameplate div and write user's name in it.
*/
"use strict";

var getUrl="https://localhost:5001/api/user/checker";
var getRequest=new Request(getUrl,{method:'get'});
fetch(getRequest).then((response)=>{
  if (response.ok){
   response.json().then(retrieve)
  }
  else
  {
    var nameplate=document.querySelector('#nameplate');
    var message=`Error!`;
    var message=message+"<span id='signOutLink'>(sign out)</span>"
    nameplate.innerHTML=message;
  }
})

//--function line--
function retrieve(data)
{
  if (data.username!=""){
    var nameplate=document.getElementById('nameplate');
    var message=`Welcome ${data.username} `;
    var message=message+"<span id='signOutLink'>(sign out)</span>"
    nameplate.innerHTML=message;
  }

}

//lock.js
/*
garygarthsimmons@gmail.com
Description: No key? no access.
Version 2 notes: loops through users to find if any has a true accessKey
*/
"use strict";

var url="https://localhost:5001/api/user/checker"
var request=new Request(url,{method:'get'});

fetch(request).then((response)=>{
  if (response.ok){
    response.json().then(checker)
  }
  else(
    window.location="login"
  )
})

//--function line--
function checker(data)
{
  if (data.accessKey==false){
    window.location="login";
  }
}



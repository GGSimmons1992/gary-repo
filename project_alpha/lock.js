//lock.js
/*
garygarthsimmons@gmail.com
Description: No key? no access.
Version 2 notes: loops through users to find if any has a true accessKey
*/
"use strict";
window.location="login.html";
var url="https://localhost:5001/api/user"
var request=new Request(url,{method:'get'});


//lock.js
/*
garygarthsimmons@gmail.com
Description: No key? no access.
*/
//debugger
if (sessionStorage.getItem('catanKey')){
  //console.log("I'm here at least")
  var nameplate=document.getElementById('nameplate');
  var message=`Welcome ${window.sessionStorage.getItem('currentUser')} `;
  var message=message+"<span id='signOutLink'>(sign out)</span>"
  nameplate.innerHTML=message;
}else{
  //console.log(sessionStorage.getItem('catanKey'))
  //debugger
  window.location='login.html';
}

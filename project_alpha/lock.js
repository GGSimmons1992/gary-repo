//lock.js
/*
garygarthsimmons@gmail.com
Description: No key? no access.
*/
//debugger
if (sessionStorage.getItem('catanKey')){
  //console.log("I'm here at least")
  var nameplate=document.getElementById('nameplate');
  nameplate.innerHTML=`Welcome ${window.sessionStorage.getItem('currentUser')}`;
}else{
  //console.log(sessionStorage.getItem('catanKey'))
  //debugger
  window.location='login.html';
}

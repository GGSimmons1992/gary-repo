//signout.js
/*
garygarthsimmons@gmail.com
Description:
Allows user to sign via clearing session storage and redirecting them to index.js
*/

var signout = document.getElementById('signOutLink')

function logoffprocess(evt){
  //debugger
  evt.stopPropagation()
  window.sessionStorage.removeItem('currentUser');
  window.sessionStorage.removeItem('catanKey');
  window.sessionStorage.removeItem('cipherDemo');
  window.location='index.html'
  ;
}
//debugger
signout.addEventListener('click',logoffprocess)

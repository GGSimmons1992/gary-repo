//signin 2.0
//garygarthsimmons@gmail.com
/*Description: Use UserAPI to validate user's passwords
*/

var signInButton=document.getElementById('signInButton')
signInButton.addEventListener('click',signInValidator)

//--function line--
function signInValidator(evt){
  evt.preventDefault()

  ajax();

  // //debugger
  // userLength=userlist.length
  // var enteredPasswordCiphered=encryption.codeUp(enteredPassword)
  // sessionStorage.setItem('cipherDemo',enteredPasswordCiphered)
  // var userValidation=false
  // for (var userIndex=0;userIndex<userLength;userIndex+=1){
  //   //debugger
  //   if (userlist[userIndex]==username.value)
  //   {
  //     if (enteredPasswordCiphered==passlist[userIndex]){
  //       //console.log('green light');
  //       sessionStorage.setItem('catanKey','true')
  //       sessionStorage.setItem('currentUser',username.value);
  //       window.location=sessionStorage.getItem('currentPage');
  //       //window.location='members.html'
  //       var userValidation=true;

  //       return;
  //     }else {
  //       revokeAccess();
  //       return;
  //     }
  //   }
  // }
  // if (userValidation==false){
  //   revokeAccess()
  //   return;
  // }
}

function ajax()
{
  fetch('https://localhost:5001/api/User').then((response)=>
  {
    response.json().then(validate)
  },(error)=>
  {
    console.log(error)
  })
}

function validate(data)
{
  var username=(document.querySelector('#username')).value
  var enteredPassword=(document.querySelector('#enteredPassword')).value
  
}

function revokeAccess(){
  alert('Incorrect Credentials!');
  if (sessionStorage.getItem('catanKey')){
    sessionStorage.removeItem('catanKey')
    sessionStorage.removeItem('currentUser')
  }
}

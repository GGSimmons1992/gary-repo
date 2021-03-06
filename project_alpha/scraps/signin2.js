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
  //debugger;
  fetch('https://localhost:5001/api/User').then((response)=>
  {
    //debugger;
    response.json().then(validate)
  },(error)=>
  {
    //debugger;
    console.log(error)
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
  if (sessionStorage.getItem('catanKey')){
    sessionStorage.removeItem('catanKey')
    sessionStorage.removeItem('currentUser')
  }
}

function validate(data)
{
  //debugger;
  var username=(document.querySelector('#username')).value
  var enteredPassword=(document.querySelector('#enteredPassword')).value
  //debugger;
  var user=data.find((element)=>
  {
    return element.username==username;
  })
  //debugger
  if(user==undefined){
    revokeAccess();
  }
  if (user.password==enteredPassword){
    //debugger;
    sessionStorage.setItem('catanKey','true')
    sessionStorage.setItem('currentUser',user.username);
    window.location=sessionStorage.getItem('currentPage');
  }else{
    revokeAccess();
  }

}

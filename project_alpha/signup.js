//signup.js
/*
Description: Allows users to create a username and password
*/
var button=document.querySelector("button");
button.addEventListener("click",validate);


//--function line--

function validate(){
  var enteredUser=document.querySelector('#username');
  var enteredPass1=document.querySelector('#password1');
  var enteredPass2=document.querySelector('#password2');

  if (enteredPass1===enteredPass2){
    //Begin to post
    var url="https://localhost:5001/api/user";
    var request=new Request(url,{
      method:post,
      body:{username:username,password:password},
      headers:{
        'content-type':'application/json'
      }
    });
  }else{
    //div passwords do not match
  }
}

//signup.js
/*
Description: Allows users to create a username and password
*/
var button=document.querySelector("button");
button.addEventListener("click",validate);


//--function line--

function validate(evt){
  evt.preventDefault();
  var enteredUser=(document.querySelector('#username')).value;
  var enteredPass1=(document.querySelector('#password1')).value;
  var enteredPass2=(document.querySelector('#password2')).value;

  if (enteredPass1===enteredPass2){
    //Begin to post
    var url="https://localhost:5001/api/user";
    var request=new Request(url,{
      method:'post',
      body:JSON.stringify({username:enteredUser,password:enteredPass1,activeKey:false}),
      headers:{
        'content-type':'application/json'
      }
    });
    fetch(request).then((response)=>{
      if (response.ok){
        request.json();
        reroute(enteredUser)
      }else{
        throw new Error(response.status);
      }
    }).catch((error)=>{
      console.log(error)
    })
  }else{
    var alertDiv=document.querySelector('#alertDiv')
    alertDiv.innerHTML="Passwords do not match!"
    setTimeout(function(){alertDiv.innerHTML="Please try again"},3000)
  }
}

function reroute(username){
  var alertDiv=document.querySelector('#alertDiv');
  alertDiv.innerHTML=`Welcome ${username}! <br> Redirecting you back to login.html`;
  setTimeout(function(){window.location="login.html"},3000);

}

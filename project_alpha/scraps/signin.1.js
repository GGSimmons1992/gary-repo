//signin.js
//Description: Logic behind login.html

//login logic


//cipher and store passwords
var encryption=(function (){
  var users=['redEye','blueMoon','blackieChan']
  var plainPasswords=['password123','silence94','firetruck691']
  var cipheredPasswords=[]

  //Begin cipher code
  var lowerAlphabet=[]
  var upperAlphabet=[]
  var numbers=[]
  var symbols=[' ','!','@','#','$','%','^','&','*','(',')','-','+','_']

  var A='A'
  var Z='Z'
  var a='a'
  var z='z'

  for (var lowerIndex=a.charCodeAt();lowerIndex<=z.charCodeAt();lowerIndex+=1){
    lowerAlphabet.push(String.fromCharCode(lowerIndex))
  }
  for (var upperIndex=A.charCodeAt();upperIndex<=Z.charCodeAt();upperIndex+=1){
    upperAlphabet.push(String.fromCharCode(upperIndex))
  }
  for (var numberIndex=0;numberIndex<10;numberIndex+=1){
    numbers.push(`${numberIndex}`)
  }
  var uncryptedArray=upperAlphabet.concat(lowerAlphabet).concat(numbers).concat(symbols)
  //debugger
  var encryptedArray=[]
  var uncryptedArrayLength=uncryptedArray.length
  for(var plainIndex=0; plainIndex<uncryptedArrayLength; plainIndex++){
    var codedIndex=(plainIndex+5)%uncryptedArrayLength
    encryptedArray.unshift(uncryptedArray[codedIndex])
    //debugger
  }
  //debugger
  //console.log(uncryptedArray)

  function encrypter(character){
    for (var uncryptedValue=0;uncryptedValue<uncryptedArray.length;uncryptedValue++){
      if (character==uncryptedArray[uncryptedValue]){
        return encryptedArray[uncryptedValue]
      }
    }
  }

  function cipher(plainPassword){
    for (var place=0;place<plainPassword.length;place++){
      if (place==0){
        var newPassword=encrypter(plainPassword.charAt(place))
      }else{
        newPassword=newPassword+encrypter(plainPassword.charAt(place))
      }
    }
    return newPassword
  }

  //End cipher code

  for (var passwordNumber=0;passwordNumber<plainPasswords.length;passwordNumber++){
     var ciphered=cipher(plainPasswords[passwordNumber])
     cipheredPasswords.push(ciphered)
     debugger
     }
  // }
   sessionStorage.setItem("users", users)
   sessionStorage.setItem("passwords", cipheredPasswords)

   return {
     codeUp:cipher
   }

})()

//console.log(encryption.codeUp('abcde'))

var signInButton=document.querySelector('#signInButton')
var username=document.querySelector('#username')
var enteredPassword=document.querySelector('#enteredPassword')

function validator(user,userpassword){
  /*
    var userlist=sessionStorage.getItem('users')
    var passlist=sessionStorage.getItem('passwords')
    userLength=users.length
    var userValidation=false
    for (var userIndex=0;userIndex<userLength;user+=1){
      if users[]
    }
  */
}

signInButton.addEventListener('click',validator(username,enteredPassword))





//signin.js
//Description: Logic behind login.html

//cipher and store passwords
(function (){
  var users=['redEye','blueMoon','blackieChan']
  var plainPasswords=['password123','silence94','firetruck691']
  var cipheredPasswords=[]

  //Begin cipher code
  var lowerAlphabet=[]
  var upperAlphabet=[]
  var numbers=[]
  var symbols=['!','@','#','$','%','^','&','*','(',')']

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

  //console.log(uncryptedArray)

  //End cipher code

   function cipher(uncrypted){
    for (var pIndex=0;pIndex<uncrypted.length;pIndex+=1){
      for (var cIndex=0;cIndex<uncryptedArray.length;cIndex+=1){
        if (uncrypted.charAt(pIndex)==uncryptedArray[cIndex]){
          
        }
      }
    }
    return encripted
   }

  for (var passwordNumber=0;passwordNumber<passwords.length;passwordNumber=+1){
     var ciphered=cipher()

     }
  // }

   localStorage.setItem("users", users)
   localStorage.setItem("passwords", passwords)
})()






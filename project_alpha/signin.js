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
  var encryptedArray=[]
  for(var plainIndex=0;plainIndex<uncryptedArray.length;plainIndex=+1){
    var codedIndex=plainIndex
    encryptedArray.push(uncryptedArray[codedIndex])
  }

  //console.log(uncryptedArray)

  //End cipher code

  for (var passwordNumber=0;passwordNumber<plainPasswords.length;passwordNumber=+1){
     var ciphered=cipher(plainPasswords[passwordNumber])
     cipheredPasswords.push(ciphered)
     }
  // }
   console.log(ciphered)
   localStorage.setItem("users", users)
   localStorage.setItem("passwords", cipheredPasswords)
})()






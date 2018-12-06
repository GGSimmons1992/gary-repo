//chalenge 2: Given the longest sentence, find the longest word

/*break sentence up via spaces.
Place words in array.
Have function check each word against each other
Longer word moves on and challenges next word in array
Winning string is sent to innerHTML*/

//create white list

var allowables=[" ","'","-"]

function listAppender(first,last){
  for(index=first.charCodeAt();index<=last.charCodeAt();index+=1){
    allowables.push(String.fromCharCode(index))
  }
}

listAppender("a","z");
listAppender("A","Z");

function bouncer(guest){
  var listLength=allowables.length;
  var onList=false
  for (var line=0;line<listLength;line+=1){
    if (guest==allowables[line]){
      var onList=true
      return onList
    }
  }
  return onList
}

//end white list code

//set up dom
var button=document.querySelector('button')
var sentenceElement=document.querySelector('#sentence')
var div=document.createElement('div')
document.body.appendChild(div)


function longestWord(evt){
  var givenSentence=sentenceElement.value
  debugger
  var unpunctuated=''
  var numOfChars=givenSentence.length

  for (var questionable=0;questionable<numOfChars;questionable+=1){
    var testValue=givenSentence.charAt(questionable)
    if(bouncer(testValue)){
      var unpunctuated=unpunctuated+testValue;
    }
  }

  var words=unpunctuated.split(" ")
  var wordLengths=[]
  for (var wordIndex=0;wordIndex<words.length;wordIndex+=1){
    wordLengths.push((words[wordIndex]).length);
  }

  var winningNumber=wordLengths[0]
  for (var numberIndex=1;numberIndex<wordLengths.length;numberIndex+=1){
    if (wordLengths[numberIndex]>winningNumber){
       var winningNumber=wordLengths[numberIndex]
     }
  }

  var winningWords=[]
  for (var wordIndex=0;wordIndex<words.length;wordIndex+=1){
    if (winningNumber==(words[wordIndex]).length){
      winningWords.push(words[wordIndex]);
    }
  }

  // var winner=words[0]
  //  for (var word=1;word<words.length;word+=1){
  //   var winner=wordComparison(winner,words[word])
  //}

  event.preventDefault()

  if (winningWords.length==1){
    div.innerText=`Your longest word is ${winningWords[0]}`
  }else{
    div.innerText='These words tie for longest word: '+winningWords
  }
  debugger
}


function wordComparison(a,b){
   /*Compares 2 words against each other
   and returns the */
   if (a.length>b.length){
     //debugger
     return a
   }else {
     //debugger
     return b
   }
 }

button.addEventListener('click',longestWord)

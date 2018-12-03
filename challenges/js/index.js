//chalenge 2: Given the longest sentence, find the longest word

var sentence=prompt('Please type in a sentence')

/*break sentence up via spaces.
Place words in array.
Have function check each word against each other
Longer word moves on and challenges next word in array
Winning string is sent to innerHTML*/

function punctuationDeleter(givenSentence,punctuation){
  for(var char=0;char<givenSentence.length;char+=1){
    char.replace(punctuation,'');
  }
  return givenSentence
}

sentence=punctuationDeleter(sentence,'.')
//debugger
sentence=punctuationDeleter(sentence,'!')
sentence=punctuationDeleter(sentence,'?')



var words=sentence.split(" ")

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
var winner=words[0]
for (var word=1;word<words.length;word+=1){
  var winner=wordComparison(winner,words[word])
}
console.log(winner)

var div=document.createElement('div')
div.innerHTML=`The longest word in your sentences is ${winner}`

document.body.appendChild(div)

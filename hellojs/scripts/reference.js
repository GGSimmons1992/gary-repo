exports function salutation(){
  var hh=(new Date()).getHours()
  return (hh<12 ? 'morning' : hh<18 ? 'afternoon' : 'evening')
}

//reference.js


//event.js

//  var input=document.querySelector('#clientName');
//  var div=document.querySelector('#salutation');
//  var button=document.querySelector('button');
//  var clearButton=document.querySelector('button[type="reset"]');
//  var form=document.querySelector('form')
//  var time=(new Date()).getHours();


//  function message(m){
//    //`String interpolation` with ternary operator
//    return time<12 ? (`good morning, ${m}`) : time<18 ? `good afternoon, ${m}` : `good evening, ${m}`;
//  }

//  function pushEvent(evt){
//    evt.stopPropagation();
//    evt.preventDefault();
//    div.innerHTML=message(input.value);
//  }

//  function clearer(evt){
//    evt.stopPropagation();
//    evt.preventDefault();
//    div.removeChild();
//  }

//  button.addEventListener('click',pushEvent)
//  clearButton.addEventListener('click',clearer)


// //event bubbling
// var spans=document.querySelectorAll('span');
// var sections=document.querySelectorAll('section');

// sections.forEach((value)=> {
//   value.addEventListener('click', () => {
//     value.style.color='blue';
//   });
// });

// spans.forEach((value)=> {
//   value.addEventListener('click', () => {
//     value.style.color='red';
//   });
// });

// var main=document.querySelector('main')
// main.addEventListener('click',(evt)=>{
//   var element=evt.target; //<-- target gives you the element.
//   //debugger
//   if (element.tagName.toLowerCase()=='span'){
//     element.style.color='green';
//   }
// })

//form event
var form=document.querySelector('form');

form.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  console.log('submitted');
});

// for (s in spans){
//   spans[s].addEventListener('click', () => {
//     s.style.color='red';
//   debugger;
//   }
//   )
// }

// function clearer(){
//   form.reset()
// }


//clearButton.addEventListener('click',clearer)
//div.innerText=message(hh,name)

//two choices? if-else: three choices ? ternary : switch-case.

// switch (hh){
//   case hh<12:
//     var saluation='Good Morning';
//     break;
//   case hh<18:
// }

//div.innerText=

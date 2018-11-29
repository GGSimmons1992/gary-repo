//dom.js
console.log(document);

//header stuff
// var header=document.createElement("header");
// header.innerHTML='<h1>hello dom!</h1>'
// //header.innerText='<h1>hello dom!</h1>'

// // document.body.innerHTML=header.innerHTML; //Only content not parent/container
// document.body.appendChild(header);//Gives both parent/container and child
// document.body.appendChild(header);//Oh cool, a sibling header....not. This is a Fred Lie.

// var main=document.createElement("main");

// document.body.appendChild(main)

// var p=document.createElement("p");
// p.innerText="Lorem Ipsum";

// for (i=0;i<3;i++){
//   (function(q){main.appendChild(q);})(p);
// }

// paragraph1='p1'
// paragraph2='p2'
// paragraph3='p3'

// paragraphArray=[paragraph1,paragraph2,paragraph3]

// //This works
//  for (i=0;i<3;i++){
//    let p=document.createElement("p");
//    p.innerText=paragraphArray[i];
//    main.appendChild(p);
//  }

 //Six Divs
 //hour min sec am/pm year month day

var time=new Date()
var hh=time.getHours()%12
if (hh==0){hh==12;}
if (time.getHours()<12){
  var ap='am';
}else {var ap='pm'}

var mm=time.getMinutes()
var ss=time.getSeconds()
var yyyy=time.getFullYear()
var mm=time.getMonth()+1
var dd=time.getDate()

var timeValue=[hh,mm,ss,ap,yyyy,mm,dd]
var timeCategory=['hour','min','sec','am/pm','year','month','day']
var timeClass=['time','time','time','time','date','date','date']


// Unnecessary
//  for (var hole=0;hole<7;hole+=1){
//   switch(hole){
//     case 0:
//       expression=(time.getHours()%12);
//       if (expression==0){
//         expression=12;
//       }
//       break;
//     case 1:
//       expression=time.getMinutes();
//       break;
//     case 2:
//       expression=time.getSeconds();
//       break;
//     case 3:
//       expression=time.getHours();
//       if (expression<12){
//         expression='am';
//       }else{expression='pm';}
//       break;
//     case 4:
//       expression=time.getFullYear();
//       break;
//     case 5:
//       expression=time.getMonth()+1;
//       break;
//     case 6:
//       expression=time.getDate();
//       break;
//     default:
//       break;
//   }
//   timeValue.push(expression)
//  }

var style=document.createElement("style")


 function divMaker(timeKey,timeValue,className){
  var display=(timeKey+': '+timeValue)
  var div=document.createElement("div")
  div.setAttribute('class',className)
  div.innerText=display
  return div
 }

//  console.log(timeValue)
 for (var d=0;d<7;d+=1){
  var newDiv=divMaker(timeCategory[d],timeValue[d],timeClass[d])

  //v1 switch color every other
   if (d%2==0){
     newDiv.style.backgroundColor="red";
   }else{newDiv.style.backgroundColor="blue";};

  document.body.appendChild(newDiv)
 }



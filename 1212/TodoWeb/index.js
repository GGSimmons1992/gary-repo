// (()=> {
//   var button = document.querySelector('#printer');
//   button.addEventListener("click",printList)

//   'use strict';
  // function ajax(id){
  //   //debugger;
  //   var url = id ? `https://localhost:5001/api/todo/${id}`: 'https://localhost:5001/api/todo'
  //   fetch(url).then((response)=>{
  //     response.json().then(display);
  //   },
  //   (error)=>{
  //     console.log(error);
//   //   });
//   // }

// })();
// (()=> {
  //   var button = document.querySelector('#printer');
  //   button.addEventListener("click",printList)

  //   'use strict
import { appGet , appPost} from "./scripts/ajax.js";

'use strict';

// appGet('https://localhost:5001/api/todo/', (data)=>{
//     document.querySelector('#todolist').innerHTML=data[4].text;
//   });

appPost('https://localhost:5001/api/todo',{text:`the ${Date.now()} todo`},(data)=>{
  document.querySelector('#todolist').innerHTML=data[data.length-1].text;
});

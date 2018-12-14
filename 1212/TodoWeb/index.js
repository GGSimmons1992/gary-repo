(()=> {
  var button = document.querySelector('#printer');
  button.addEventListener("click",printList)

  'use strict';
  function ajax(id){
    //debugger;
    var url = id ? `https://localhost:5001/api/todo/${id}`: 'https://localhost:5001/api/todo'
    fetch(url).then((response)=>{
      response.json().then(display);
    },
    (error)=>{
      console.log(error);
    });
  }

  function display(data){
    var ul = document.querySelector('#todolist');
    //var list = ""
    debugger;
    data.forEach((element)=>{
      //list =list + " " + element.text;
      let newBullet=document.createElement(li);
      ul.appendChild(newBullet);
      newBullet.innerHTML=element.text;
      debugger;
    }
    )
    //debugger;
    //console.log(response.json());
    //console.log(data.text);
    //debugger;
    //div.innerHTML=list;
    //debugger;
  }

  function printList(evt)
  {
    //debugger;
    evt.preventDefault();
    ajax();
  }


})()

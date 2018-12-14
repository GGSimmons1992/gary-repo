//clippy.js
var newNote=document.querySelector("#noteinput");
var writebutton=document.querySelector("#writer");
var readbutton=document.querySelector("#reader");
var records=document.querySelector('#records');

readbutton.addEventListener("click",readNotes);
writebutton.addEventListener("click",writeNotes);

//--function line--
function writeNotes(evt)
{

}

function readNotes(evt)
{
  evt.preventDefault();
  //debugger;
  ajaxRead();
}

let ajaxRead = () =>
{
  //debugger
  xhr=new XMLHttpRequest();
  xhr.open("get","https://localhost:5001/api/values/");
  xhr.onreadystatechange = () =>{
    if (xhr.readyState==4 && xhr.status==200)
    {
      //debugger;
      var notes="";
      var dataNotes=JSON.parse(xhr.response)
      console.log(dataNotes)
      dataNotes.forEach((i)=>
      {
        notes=notes+i+"<br><br>";
      })
      /*console.log(JSON.parse(xhr.response).length)
      //debugger
      for (var i=0;i<JSON.parse(xhr.response).length;i+=1)
      {
        notes=notes+'<br>'+JSON.parse(xhr.response)[i];
        console.log(notes);
      }*/
      records.innerHTML=notes;
      //debugger;
    }
  }
  xhr.send();
}

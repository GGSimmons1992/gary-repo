let ajax = (pokeNum) => {
  //at 0
  var xhr=new XMLHttpRequest(); //XML http request object
  //console.log(pokeNum)
  //at 1
  //for (var pokeNum=1;pokeNum<=10;pokeNum+=1){
  xhr.open('get',`https://pokeapi.co/api/v2/pokemon/${pokeNum}/`);

  // at 3 and/or 4
  //console.log(`${xhr.readyState} & ${xhr.status}`)
  xhr.onreadystatechange = () => {
  if (xhr.readyState==4 && xhr.status==200){
    console.log(JSON.parse(xhr.response).forms[0].name);
  }
  }
  // at 2
  xhr.send();
  //}
}

// for (var pokeNum=1;pokeNum<=10;pokeNum+=1){
//   ajax(pokeNum);
// }

let pass = (res) =>{
  res.json().then((r) => {
    //console.log(r.name)
    for (var typeNumber=0;typeNumber<r.types.length;typeNumber+=1)
    if (r.types[typeNumber].type.name=='water') {
      console.log(r.name);
      waterTypes+=1;
      break;
    }
  })
}

let fail = (err) => {
  console.error(err);
}

let ajax2= (pokeNumber) => {
  window.fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}/`).then(pass,fail);
}

ajax2(1)
 var waterTypes=0;
 var pokeNumber=1;
 do{
   ajax2(pokeNumber)
  pokeNumber+=1;
 }while(waterTypes<=10)


console.log('end of file')

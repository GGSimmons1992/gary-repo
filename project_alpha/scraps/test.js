//test.js
/*
garygarthsimmons@gmail.com
Description: Testing retrieval purposes of api
*/
( ()=>{

  function ajax(id)
  {
    var url = `https://localhost:5001/api/User`
    if (id)
    {
      url=url+`/${id}`;
    }

    fetch(url).then((response)=>
    {
      response.json().then(retrieve)
    },(error)=>
    {
      console.log(error);
    })
  }

  function retrieve(data)
  {
    console.log(data);
    var usercheck='blueMoon'
    var user=data.find((element)=>
    {
      return element.username==usercheck;
    }
    )
    console.log(user.password)

    data.forEach(element => {
      console.log(typeof(element.username))
      console.log(typeof(element.password))
      debugger;
    });
  }

  debugger;
  ajax();
})()




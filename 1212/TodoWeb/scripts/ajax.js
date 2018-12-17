'use strict';

export function appGet(url,func){
  let init={
    method:'get'
  };
  let errorURL='https://localhost:5001/api/todo';

  let request= new Request(url,init);

  fetch(request).then((response)=>{
    if (response.ok){
      response.json().then(func);
    } else {
      throw new Error(response);
    }
  }).catch((error)=>{
    let errorRequest = new Request(errorURL,{
      method:'post',
      body: JSON.stringify(error),
      headers:{
        'content-type':'application/json'
      }
    })

    fetch(errorRequest);
  });
}

export function appPost(url,content,func){
  let request= new Request(url,{
    method:'post',
    body:JSON.stringify(content),
    headers:{
      'content-type':'application/json'
    }
  });

  fetch(request).then((response)=>{
    if(!response.ok){
      throw new Error(response.status);
    }

    return response.json();
  }).then((response)=>{
    func(response)
  }).catch((error)=>{
    console.log(error);
  });
}

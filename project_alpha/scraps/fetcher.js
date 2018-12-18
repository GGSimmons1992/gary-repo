//fetcher
/*
garygarthsimmons@gmail.com
Description: DRY method for fetching
*/
'use strict';
export function fetcher(request,func,handler)
{
  fetch(request).then((response)=>{
    if (response.ok){
      response.json().then(func)
    }
    else{
      handler(response);
    }
  }).catch((error)=>{
    console.log(error)
  })
}

export function defaultHandler(response){
  throw new Error(response.status);
}

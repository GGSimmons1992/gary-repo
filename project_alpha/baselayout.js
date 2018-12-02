//baselayout
//Description: Eventually, we will use this js to create the base header, footer, and background
//for the site.

//css links
var bootstrap=document.createElement('link')
bootstrap.rel="stylesheet"
bootstrap.href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
bootstrap.integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
bootstrap.crossorigin="anonymous"


var simmonsCSS=document.createElement('link')
simmonsCSS.rel="stylesheet"
simmonsCSS.href="style.css"

var head=document.querySelector('head')
head.appendChild(simmonsCSS)
head.appendChild(bootstrap)

//header default


//footer default

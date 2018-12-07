//users.js
/*
garygarthsimmons@gmail.com
Temporarily used to generate user content for now.
*/

var user=window.sessionStorage.getItem('currentUser')
console.log(user);

function UserSettings(){
  this.blog='';
  this.image='';
  this.color='';
}



var redEyeSettings = new UserSettings()
var blueMoonSettings = new UserSettings()
var blackieChanSettings = new UserSettings()

redEyeSettings.color='red'
redEyeSettings.image='https://i.pinimg.com/originals/30/51/e6/3051e663ddd82cafc33612485ae59cc9.jpg'
redEyeSettings.blog='My cities breed good soldliers. Do not mess with my army. If I am going down, I will pay another tribe to take you down.'

blueMoonSettings.color='blue'
blueMoonSettings.image='https://thumbs.dreamstime.com/t/woman-binoculars-silhouette-looking-big-full-moon-background-42807024.jpg'
blueMoonSettings.blog='We explore and expand to bring more resources to build our settlements'

blackieChanSettings.color = 'black'
blackieChanSettings.image ='https://www.swordsofmight.com/wp-content/uploads/2014/07/p-55893-9016DBx__50687-600x600.jpg'
blackieChanSettings.blog = 'Just build more roads. Anything our roads touch is ours. Our roads lead to our Metropolis hidden in the leaves.'

var blogMain=document.querySelector('#userBackground')
var blogImage=document.createElement('img')
var blog=document.querySelector('p')

blogImage.className='blogImage'
blogMain.className='userBackground'
switch (user){
  case 'redEye':
    var settings=redEyeSettings;
    break;
  case 'blueMoon':
    var settings=blueMoonSettings;
    break;
  case 'blackieChan':
    var settings=blueMoonSettings;
    break;
}

blog.innerHTML=settings.blog;
img.href=settings.image;
blogMain.style.backgroundColor=settings.color;

blogMain.appendChild(img)
blogMain.appendChild(blog)


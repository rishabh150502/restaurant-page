import {home} from './Home';
import {menu} from './Menu';
import {about} from './About';


// home.load();
// menu.load();

// const button=document.querySelector('.button');
// console.log(button);
// for(i of button)
// {
//     // i.addEventListener
// }
let options1=home.buttonArray;
let options2=menu.buttonArray;
let options3=about.buttonArray;
window.onload= (event) => {
    home.load();
};

options1[1].addEventListener('click',function(){
  home.unload();
  menu.load();
});

options1[2].addEventListener('click',function(){
  home.unload();
  about.load();
});

options2[0].addEventListener('click',function(){
  menu.unload();
  home.load();
});

options2[2].addEventListener('click',function(){
  menu.unload();
  about.load();
});

options3[0].addEventListener('click',function(){
  about.unload();
  home.load();
});

options3[1].addEventListener('click',function(){
  about.unload();
  menu.load();
});


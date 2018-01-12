import '../css/styles.css';
import PlatziImg from  '../images/platzi.png';
import message from './message.js';
import VideoPlatzi from '../videos/que-es-core.mp4'
import data from './topos.json';
import renderToDOM from './render-to-dom.js';

console.log(data.topos);

document.write("Hola Mundo!, " + message.firstMessage);

const img = document.createElement('img');
img.setAttribute('src',PlatziImg);
img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img);

const video = document.createElement('video');
video.setAttribute('src', VideoPlatzi);
/*video.setAttribute('autoplay', false);*/
video.setAttribute('width',500);
video.setAttribute('controls',true);
document.body.append(video);

data.topos.forEach((topos)=>{
   const element = document.createElement('li');
   element.textContent = topos.name + ": " + topos.mote;
   renderToDOM(element);
})

message.delayedMessage();

//console.log('Hi World!');
import "./styles.css";
import building from './building.jpeg'
console.log("hello world!");

let app = document.getElementById('app');
// let greet = document.getElementById('greet')
app.innerHTML = 'Hello';
let Img = document.createElement('img')
Img.src = building
Img.setAttribute('class', 'Img')

app.appendChild(Img);

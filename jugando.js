const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');
 
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
  });

  h1.innerHtml = 'Manipulando h1 <br> Salto de linea con br';
  h1.innerText = 'Manipulando h1 <br> Salto de linea con br';
  //Modifica atributos
//   console.log(h1.getAttribute('class'));
//   h1.setAttribute('class','rojo');
 
h1.classList.add('rojo');
h1.classList.remove('negro');

input.value ="333"

const img = document.createElement('img');
img.setAttribute('src','https://turbosmurfs.gg/storage/splash/Sivir_6.jpg');
console.log(img);

pid.appendChild(img)
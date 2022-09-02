// h1 {color: red}
//con querySelector seleccionamos cada uno de los elementos nombrados en HTML
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
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


//con inner realizamos la edición de uno de los componentes
h1.innerHTML = 'Hola <br> Adiós';
//convierte el texto en un string
h1.innerText = 'Hola';
//console.log(h1.getAttribute('pantalla'));
//cambiar la clase de lg a sony
//h1.setAttribute('pantalla','sony');

//Agrefación y Eliminación del atributo de la clase
h1.classList.add('lg');
h1.classList.remove('sony');
//validarlo más adelante
//h1.classList.toggle('lg');
//h1.classList.contains('lg');

input.value = '456';

//hasta acá solo mdificamos lo ya exustente

//acá creamos elementos
//console.log(document.createElement('img'));

//declaramos la creación de una imagen y la creamos como la variable img
const img = document.createElement('img');
//a este campo de imagen le llamamos la fuente
img.setAttribute('src','https://i.imgur.com/6DRmdxJ.png');
// llamamos la imágen
//console.log(img);
//ubicamos la imagen en alguna parte, está dentro del contenedor pid
//pid.append(img);

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const pResult2 = document.querySelector('#result2');

btn.addEventListener('click', btnOnClick);

function btnOnClick (){
    const sumaInputs = input1.value + input2.value;
    //para convertir en valor a número es posible usar number() o parseInt()
//   const sumaInputs2 = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = 'El resultado es:' + sumaInputs;
//    pResult2.innerText = 'El resultado es:' + sumaInputs2;
}
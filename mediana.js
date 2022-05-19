
function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(  // recibe una funcion va sumando cada elemento
        function(valorAcumulado = 0, nuevoElemento) { //para que la primera iteracion le digo que es cero
            return valorAcumulado + nuevoElemento;
    
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
    
};

    const lista1 = [9, 25, 2, 1, 1, 1, 3, 90, 5, 56, 34];

    const datosAgregados = [];

    function agregarDato() {
        let contador = datosAgregados.length + 1;    
        
            const dato = document.getElementById("input-add");
            const datoValue = dato.value;
            const datoValueNumber = parseInt(datoValue);
    
            for(let i = 0; i < 1; i++) {
                datosAgregados.push(datoValueNumber);
            };        
    
            let datoAgregado = datosAgregados.find( elemento => elemento === datoValueNumber);
    
            datosAgregadosUser.innerText += `El dato ${contador} que es igual a ${datoAgregado} ha sido agregado \n`; 
    };


const ordenarNumeros = (num1,num2) => num1 - num2; 
const ordenarArray = function (array) {
    array.sort(ordenarNumeros);
};




function calcularMediana () { //ingresar el array al que le quiero sacar la mediana
    
    ordenarArray(datosAgregados); // se ordena primero el datosAgregados para evitar conflictos de resultado
    console.log(datosAgregados);    
        const mitadArray = parseInt(datosAgregados.length / 2);

    function esPar(numerito) {
        if(numerito % 2 === 0) { // si el modulo dividido y residuo es 0 es par
            return true;  
        } else {
            return false;
        };
    };  

    let mediana;

    if(esPar(datosAgregados.length)) {
        const elemento1 = datosAgregados[mitadArray - 1]; // PERO como estoy es dando los datos de un ARRAY no quiere de cir que funciones como .length entonces la distribuccion de posicion cambia y no se le suma, sino que se le resta.
        const elemento2 = datosAgregados[mitadArray]; // mitad array meda la division pero de la cantidad por eso al sumarle uno el digo que sub aun aposicion mas --!
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]); //se le envia en un array el elemento1 y el elemento2

        const mediana = promedioElemento1y2;
        const medianaLimit = mediana.toFixed(2);
        resultadoCalculoMediana.innerText = `La mediana de tus datos es ${medianaLimit}`;

    } else {
        const mediana = datosAgregados[mitadArray];
        const medianaLimit = mediana.toFixed(2);
        resultadoCalculoMediana.innerText = `La mediana de tus datos es ${medianaLimit}`;
    };

};


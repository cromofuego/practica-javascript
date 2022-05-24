
    const datosAgregadosMediana = [];

function calcularMediaAritmeticaEnMediana(lista) {
    
    const sumaLista = lista.reduce (  // recibe una funcion va sumando cada elemento
        function(valorAcumulado = 0, nuevoElemento) { //para que la primera iteracion le digo que es cero
            return valorAcumulado + nuevoElemento;    
        }
    )
    
    const promedioLista = sumaLista / datosAgregadosMediana.length;
    
    return promedioLista;
    
};





function agregarDatoMediana() {
    let contador = datosAgregadosMediana.length + 1;    
    
        const dato = document.getElementById("input-add_mediana");
        const datoValue = dato.value;
        const datoValueNumber = parseInt(datoValue);

        for(let i = 0; i < 1; i++) {
            if(datoValueNumber) {
                datosAgregadosMediana.push(datoValueNumber);
            }
        };    
        
        const valorError = "Valor no agregado";

        let datoAgregado = datosAgregadosMediana.find( elemento => elemento === datoValueNumber);
        if (!datoValueNumber) {
            datosAgregadosUserMediana.innerText += `El dato ${contador} es: ${valorError} \n`;
        } else {
            datosAgregadosUserMediana.innerText += `El dato ${contador} es: ${datoAgregado} \n`;
        }   

};


const ordenarNumeros = (num1,num2) => num1 - num2; 
const ordenarArray = function (array) {
    array.sort(ordenarNumeros);
};




function calcularMediana () { //ingresar el array al que le quiero sacar la mediana
    
    ordenarArray(datosAgregadosMediana); // se ordena primero el datosAgregadosMediana para evitar conflictos de resultado
    console.log(datosAgregadosMediana);    
        const mitadArray = parseInt(datosAgregadosMediana.length / 2);
        console.log(mitadArray);

    function esPar(numerito) {
        if(numerito % 2 === 0) { // si el modulo dividido y residuo es 0 es par
            return true;  
        } else {
            return false;
        };
    };  

    let mediana; //ingresaremos la mediana

    if(datosAgregadosMediana.length === 0) {
        datosAgregadosUserMediana.innerText = `No se ingreso números \n`;
    }
    else if(datosAgregadosMediana.length > 1) {

        if(esPar(datosAgregadosMediana.length)) {
            const elemento1 = datosAgregadosMediana[mitadArray - 1]; // PERO como estoy es dando los datos de un ARRAY no quiere de cir que funciones como .length entonces la distribuccion de posicion cambia y no se le suma, sino que se le resta.
            console.log(elemento1);
            const elemento2 = datosAgregadosMediana[mitadArray]; // mitad array meda la division pero de la cantidad por eso al sumarle uno el digo que sub aun aposicion mas --!
            const promedioElemento1y2 = calcularMediaAritmeticaEnMediana([
                elemento1,
                elemento2,
            ]); //se le envia en un array el elemento1 y el elemento2
            console.log(promedioElemento1y2)
    
            mediana = promedioElemento1y2;
            console.log(mediana);
            const medianaLimit = mediana.toFixed(2);
            resultadoCalculoMediana.innerText = `La mediana de tus datos es ${medianaLimit}`;
    
            } else {
                const mediana = datosAgregadosMediana[mitadArray];
                const medianaLimit = mediana.toFixed(2);
                resultadoCalculoMediana.innerText = `La mediana de tus datos es ${medianaLimit}`;
            };
    }
};


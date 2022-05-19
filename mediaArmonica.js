
const velocidades = [4 , 9 , 6 , 5 , 2 , 8];
const velocidades2 = [4 , 9 , 6 , 5 , 2 , 8, 9];
const velocidades3 = [4 , 9 , 6 , 5 , 2 , 8, 10];


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

//aplicando la formula, primero dividimos y sumamos todo

function calcularMediaArmonica() {
    const y = 1;
    const division = datosAgregados.map( elemento => y/elemento);
    const suma = division.reduce((elelemtoA = 0,elementoB) => elelemtoA + elementoB); //.reduce, recibe el parametro acomulado y el actual 
    const z = 6;
    const division2 = z/suma;
    const mediaArmonica = division2.toFixed(2);
    resultadoCalculoMediaArmonica.innerText = `La media armónica de tus datos es ${mediaArmonica}`

};





const velocidades = [4 , 9 , 6 , 5 , 2 , 8];
const velocidades2 = [4 , 9 , 6 , 5 , 2 , 8, 9];
const velocidades3 = [4 , 9 , 6 , 5 , 2 , 8, 10];


const datosAgregadosArmonica = [];

function agregarDatoArmonica() {
    let contador = datosAgregadosArmonica.length + 1;    
    
        const dato = document.getElementById("input-add_armonica");
        const datoValue = dato.value;
        const datoValueNumber = parseInt(datoValue);

        for(let i = 0; i < 1; i++) {
            if(datoValueNumber)  {
                datosAgregadosArmonica.push(datoValueNumber);
            }

        };      
        
        const valorError = "Valor no agregado";

        let datoAgregado = datosAgregadosArmonica.find( elemento => elemento === datoValueNumber);

        if (!datoValueNumber) {
            datosAgregadosUserArmonica.innerText += `El dato ${contador} es: ${valorError} \n`;
        } else {
            datosAgregadosUserArmonica.innerText += `El dato ${contador} es: ${datoAgregado} \n`;
        } 
};

//aplicando la formula, primero dividimos y sumamos todo

function calcularMediaArmonica() {
    if(datosAgregadosArmonica.length === 0){
        datosAgregadosUserArmonica.innerText = `No se ingreso números \n`;
    } else {
        const y = 1;
        const division = datosAgregadosArmonica.map( elemento => y/elemento);
        const suma = division.reduce((elelemtoA = 0,elementoB) => elelemtoA + elementoB); //.reduce, recibe el parametro acomulado y el actual 
        const z = 6;
        const division2 = z/suma;
        const mediaArmonicaRedcue = division2.toFixed(1);
        resultadoCalculoMediaArmonica.innerText = `La media armónica de tus datos es ${mediaArmonicaRedcue}`
    }
};




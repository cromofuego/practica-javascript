
const lista1 = [
    100,
    200,
    300,
    500,
];


const datosAgregados = [];


function agregarDatoPromedio() {
    let contador = datosAgregados.length + 1;    
    
        const dato = document.getElementById("input-add_promedio");
        const datoValue = dato.value;
        const datoValueNumber = parseInt(datoValue);

        for(let i = 0; i < 1; i++) {
            if(datoValueNumber) {
                datosAgregados.push(datoValueNumber);
            }
        };   
        
        const valorError = "Valor no agregado";

        let datoAgregado = datosAgregados.find( elemento => elemento === datoValueNumber);
        if (!datoValueNumber) {
            datosAgregadosUserPromedio.innerText += `El dato ${contador} es: ${valorError} \n`;
        } else {            
            datosAgregadosUserPromedio.innerText += `El dato ${contador} es: ${datoAgregado} \n`; 
        }
};

function calcularMediaAritmetica() {
    //     let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++ ) {  //.legth me da la cantidad del array
    //     sumaLista = sumaLista + lista[i];
    // };

    if(datosAgregados.length === 0) {
        datosAgregadosUserPromedio.innerText = `No se ingreso números \n`;
    } else {
            const sumaDatosArray = datosAgregados.reduce (  // recibe una funcion va sumando cada elemento
            function(valorAcumulado = 0, nuevoElemento) { //para que la primera iteracion le digo que es cero
                return valorAcumulado + nuevoElemento;
            }
        )  
      const promedioDatosArray = sumaDatosArray / datosAgregados.length;
      resultadoCalculoPromedio.innerText = `El promedio (media Aritmética) de tus datos es ${promedioDatosArray}`      
    }
};


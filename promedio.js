
const lista1 = [
    100,
    200,
    300,
    500,
];


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

function calcularMediaAritmetica() {
    //     let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++ ) {  //.legth me da la cantidad del array
    //     sumaLista = sumaLista + lista[i];
    // };
    
    const sumaDatosArray = datosAgregados.reduce(  // recibe una funcion va sumando cada elemento
        function(valorAcumulado = 0, nuevoElemento) { //para que la primera iteracion le digo que es cero
            return valorAcumulado + nuevoElemento;

        }
    );

    const promedioDatosArray = sumaDatosArray / datosAgregados.length;
    const promedioDatosArrayLimit = promedioDatosArray.toFixed(3);

    resultadoCalculoPromedio.innerText = `El promedio (media Aritmética) de tus datos es ${promedioDatosArrayLimit}`
};


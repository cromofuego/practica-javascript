

const lista2 = [120, 300, 125, 50, 40, 35, 300, 15, 15, 120, 1250, 125, 2, 5, 7, 300, 2 , 5, 5, 5, 40, 40, 40,];


const datosAgregadosModa = [];

function agregarDatoModa() {
    let contador = datosAgregadosModa.length + 1;    
    
        const dato = document.getElementById("input-add_moda");
        const datoValue = dato.value;
        const datoValueNumber = parseInt(datoValue);

        for(let i = 0; i < 1; i++) {
            if(datoValueNumber) {
                datosAgregadosModa.push(datoValueNumber);
            }
        };     
        
        const valorError = "Valor no agregado";

        let datoAgregado = datosAgregadosModa.find( elemento => elemento === datoValueNumber);
        if (!datoValueNumber) {
            datosAgregadosUserModa.innerText += `El dato ${contador} es: ${valorError} \n`;
        } else {
            datosAgregadosUserModa.innerText += `El dato ${contador} es: ${datoAgregado} \n`; 
        }

        
};

function calcularModa() {

            const objectCount = {};

            datosAgregadosModa.map(
            function (elemento) { //recibo en elemento, el elemento de cada una de las iteraciones
                if(objectCount[elemento]){// le digo si este elemento que estoy recibiendo por cada iteracion ya existe, {entonces a esa misma posicion objectCount[elemento], le sumare 1 mas}
                    objectCount[elemento] += 1; 
                } else { // pero cuando no existe el elemento aun, se creara el elemento y por defaul aparecera com igula a 1, entonces i proximamente aparece, se cumple la primera condicion dandome la suma de la cantidad de las veces que aparecio        
                objectCount[elemento] = 1; //le digo que se cree un elemento con el nombre de ese elemento del array, y que sera igual a 1, osea la cantidad de veces que aparecio
                }
            }
        );

        const arrayCountOrdered = Object.entries(objectCount).sort( // aplico .sort pero, como es un array dentro de  un array, abajole estoy especificando que el elemento[1] osea el 2 del array dentro del array, para que asi me ordene pero segun la cantidad de veces que se repitio un elemento en este caso de menos a mayor
            function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
            }
        );

        const multiModa = []; 
        for (let i = 0; i < arrayCountOrdered.length; i++) { // i no puede ser <= porque es cantidad con .legth y el array comienza en 0, asi que es solo <.    
            if(!(arrayCountOrdered[arrayCountOrdered.length - 1][1] != arrayCountOrdered[i][1])) { // lo nieog una vez para asi tene runa sola condicion
                multiModa.push(arrayCountOrdered[i]);
            }; 
        };
        const numerosModa = multiModa.map( x =>  x[0]) // le digo que me cree un array pero solo con la posicion de cada array de multiModa con la posicion 0 osea la primera que es la que estoy buscando.

        
        if(datosAgregadosModa.length === 0){
            datosAgregadosUserModa.innerText = `No se ingreso números \n`;
        } else {
            for(let i = 0; i <= numerosModa.length - 1; i++) {
                let moda =  numerosModa[i];
                console.log(moda);
                resultModa.innerText = `La moda de todos tus datos ingresados es : ${moda} \n `; 
            }

        }; 
};


// const moda = lista1Array[lista1Array.length - 1]; // pero como es un array y comienza en la posicion 0, pues le resto el 1 para que a la cantidad de .legth me de la ultima posicion del array
// if(lista1Array)

// console.log(lista1Array);
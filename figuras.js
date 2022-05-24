
// Codigo del cuadrado
console.group('Cuadrado');
// const ladoCuadrado = 5;
// console.log(`los lados del cuadrado miden ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {       
    return lado * 4; 
}; 
// console.log(`El perímetro del cuadrado ${perimetroCuadrado}cm`);

function areaCuadrado(lado) {
    return  lado * lado;
};
// console.log(`El area del cuadrado es ${areaCuadrada}cm^2`);
console.groupEnd();


// Codigo del triangulo
console.group('Triangulo');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     'los lados del Triangulo miden ' 
//     + ladoTriangulo1 
//     + 'cm, '
//     + ladoTriangulo2 
//     + 'cm, '
//     + baseTriangulo
//     + 'cm '
// );

// const alturaTriangulo = 5.5;

// console.log(`la altura del triangulo es ${alturaTriangulo}cm`);

function perimetroTriangulo(lado1, lado2, base){
   return lado1 + lado2 + base;
};

// console.log(`El perímetro del triangulo es ${perimetroTriangulo}cm`);

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}; 

// console.log(`El area del triangulo es ${areaTriangulo}cm^2`);

console.groupEnd();

// ==========Codigo del circulo
console.group('Circulos');

// Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es ${radioCirculo}cm`);

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
};

//PI
const PI = Math.PI;
// console.log(`El valor de PI es ${PI}`);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};
// console.log(`El perímetro del circulo es ${perimetroCirculo}cm`);


//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
};
 
// console.log(`El area del circulo es ${areaCirculo}cm^2`);

console.groupEnd();


//================== Codigo Triangulo Isosceles

console.group('TrianguloIsosceles');
// const ladoTriangulo1 = 9; 
// const ladoTriangulo2 = 15;
// const baseTriangulo = 4;

const AlturaTrianguloIsosceles = (ladoTriangulo1,ladoTriangulo2,base) => {

    const divisionBase = base/2;
    if(base === ladoTriangulo1 && base === ladoTriangulo2){
        resultTrianguloIsosceles.innerText = `Lo siento pero este triángulo no parece ser Isósceles, mas bien un Equilátero`; 
    }
    else if (  ( (!base) && (!ladoTriangulo1) && (!ladoTriangulo2) ) // casos en los que los espacios estan vacios
    || ( (!base) && (!ladoTriangulo1) )
    || ( (!base) && (!ladoTriangulo2) ) 
    || (!base) 
    || (!ladoTriangulo1) 
    || (!ladoTriangulo2) ) {
        resultTrianguloIsosceles.innerText = `Por favor ingresar todos los números requeridos`;
    } else {
        if( (ladoTriangulo1 > divisionBase && ladoTriangulo1 === ladoTriangulo2) || (base === ladoTriangulo1 + ladoTriangulo2) ) {
            const resultadoFormula = (ladoTriangulo1 ** 2) - (divisionBase ** 2);
            const raizCuadrada = Math.sqrt(resultadoFormula);
            const raizCuadradaReduce = raizCuadrada.toFixed(2);

            resultTrianguloIsosceles.innerText = `La altura es: ${raizCuadradaReduce} `;
        }
        else if(ladoTriangulo1 < divisionBase && ladoTriangulo1 === ladoTriangulo2){
            const resultadoFormula = (ladoTriangulo1 ** 2) - (divisionBase ** 2);
            console.log(resultadoFormula);

            const raizCuadrada = Math.sqrt(resultadoFormula);
            console.log(raizCuadrada);
            resultTrianguloIsosceles.innerText = `la base del triángulo no puede ser más grande que la suma de sus lados 
            asi que posiblemente tengas un error`;
        }
        else  {
            resultTrianguloIsosceles.innerText = `Lo siento pero este triángulo no parece ser Isósceles, ya que sus lados no son iguales`;      
        };
    };
}; 

// const resta = ladoTriangulo1 - ladoTriangulo2;
// const raizCuadrada = Math.sqrt(adicion);
// console.log(raizCuadrada);



// const verificacion = () => {
//     if(ladoTriangulo1 === ladoTriangulo2){
//         return true
//     }
//     else {
//         return false
//     } 
// }; 

// console.log(verificacion());

// const verificacion2 = () => { 
//     if(verificacion() !== true) {
//         console.log("Lo siento pero ese triangulo no parece ser Isosceles")
//     };
// }; 
// verificacion2();

console.groupEnd();



// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //asi obtengo el valor del usuario desde javaScript
    const valueNumber = parseInt(value);
    
    const perimetro = perimetroCuadrado(valueNumber);
    if (!valueNumber) {
        resultso_square.innerText = `Por favor ingresar un número`;
    } else {
        resultso_square.innerText = `El perímetro es: \n ${perimetro}`;     
        console.log(perimetro)
    }

}

function calcularAreaCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //asi obtengo el valor del usuario desde javaScript
    const valueNumber = parseInt(value);
    
    const area = areaCuadrado(valueNumber);
    if (!valueNumber) {
        resultso_square.innerText = `Por favor ingresar un número`;
    } else {
        resultso_square.innerText = `El área es: ${area}. \n  Recuerda que al ser área, la unidad de medida, esta elevado al cubo(^2)`; 
    }

};

 function calcularPerimetroTriangulo () {
     const inputLado1 = document.getElementById("label-InpuTriangulo_lado1");
     const valueLado1 = inputLado1.value;
     const valueLado1Number = parseInt(valueLado1);
     const inputLado2 = document.getElementById("label-InpuTriangulo_lado2");
     const valueLado2 = inputLado2.value;
     const valueLado2Number = parseInt(valueLado2);
     const inputBase = document.getElementById("label-InpuTriangulo_base");
     const valueBase = inputBase.value;
     const valueBaseNumber = parseInt(valueBase);

     const perimetro = perimetroTriangulo(valueLado1Number,valueLado2Number,valueBaseNumber);
     if (  ( (!valueBaseNumber) && (!valueLado1Number) && (!valueLado2Number) )// casos en los que los espacios estan vacios
    || ( (!valueBaseNumber) && (!valueLado1Number) )
    || ( (!valueBaseNumber) && (!valueLado2Number) ) 
    || (!valueBaseNumber) 
    || (!valueLado1Number) 
    || (!valueLado2Number) ) {
        resultPerimetro_triangle.innerText = `Por favor ingresar todos los números requeridos`;
    } else {
        resultPerimetro_triangle.innerText = `El perímetro es: ${perimetro}` 
    }    
 };

 function calcularAreaTriangulo () {
     const inputAltura = document.getElementById("InpuTriangulo-altura");
     const valueAltura = inputAltura.value;
     const valueAlturaNumber = parseInt(valueAltura);
     const inputBase = document.getElementById("InpuTriangulo-base2");
     const valueBase = inputBase.value;
     const valueBaseNumber = parseInt(valueBase);

     const area = areaTriangulo(valueBaseNumber, valueAlturaNumber);

     if ( (!valueAlturaNumber) && (!valueBaseNumber) || (!valueAlturaNumber) || (!valueBaseNumber) ) {  //casos en los que los espacios estan vacios
        resultArea_triangle.innerText = `Por favor ingresar todos los números requeridos`;
    } else {
        resultArea_triangle.innerText = `El área es: ${area}. Recuerda que al ser áre, la unidad de medida, esta elevado al cubo(^2)`
    }


 };

 function calcularDiametroCirculo() {
     const inputRadio = document.getElementById("InputCirculo-radio");
     const valueRadio = inputRadio.value;
     const valueRadioNumber = parseInt(valueRadio);

     const diametro = diametroCirculo(valueRadioNumber);
     if (!valueRadioNumber) {
        resultsCicle.innerText = `Por favor ingresar un número`;
    } else {
        resultsCicle.innerText = `El diámetro es ${diametro}`; 
    }
 };

 function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputCirculo-radio");
    const valueRadio = inputRadio.value;
    const valueRadioNumber = parseInt(valueRadio);

    const diametro = diametroCirculo(valueRadioNumber);
    const perimetro = diametro * PI;
    const perimetroReduce = perimetro.toFixed(2);
    if (!valueRadioNumber) {
        resultsCicle.innerText = `Por favor ingresar un número`;
    } else {
        resultsCicle.innerText = `El perímetro es ${perimetroReduce}`;
    }
 };

 function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputCirculo-radio");
    const valueRadio = inputRadio.value;
    const valueRadioNumber = parseInt(valueRadio);
    const area = areaCirculo(valueRadioNumber);

    const areaReduce = area.toFixed(2);
    if (!valueRadioNumber) {
        resultsCicle.innerText = `Por favor ingresar un número`;
    } else {
        resultsCicle.innerText = `El área es ${areaReduce}. Recuerda que al ser áre, la unidad de medida, esta elevado al cubo(^2)`;
    }
 };


 function calcularAlturaTrianguloIsosceles() {
    const inputLado1 = document.getElementById("InputTrianguloIsosceles-lado1");
    const valueLado1 = inputLado1.value;
    const valueLado1Number = parseInt(valueLado1);
    const inputLado2 = document.getElementById("InputTrianguloIsosceles-lado2");
    const valueLado2 = inputLado2.value;
    const valueLado2Number = parseInt(valueLado2);
    const inputBase = document.getElementById("InputTrianguloIsosceles-base");
    const valueBase = inputBase.value;
    const valueBaseNumber = parseInt(valueBase);

     AlturaTrianguloIsosceles(valueLado1Number,valueLado2Number,valueBaseNumber);
 };



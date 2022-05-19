
// Codigo del cuadrado
console.group('Cuadrado');
// const ladoCuadrado = 5;
// console.log(`los lados del cuadrado miden ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
    return lado * 4;
}; 
// console.log(`El perimetro del cuadrado ${perimetroCuadrado}cm`);

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

// console.log(`El perimetro del triangulo es ${perimetroTriangulo}cm`);

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
// console.log(`El perimetro del circulo es ${perimetroCirculo}cm`);


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
        resultTrianguloIsosceles.innerText = `Lo siento pero este triangulo no parece ser Isosceles, mas bien un equilatero`; 
    } else {
        if(ladoTriangulo1 > divisionBase && ladoTriangulo1 === ladoTriangulo2) {
            const resultadoFormula = (ladoTriangulo1 ** 2) - (divisionBase ** 2);
            const raizCuadrada = Math.sqrt(resultadoFormula);
            resultTrianguloIsosceles.innerText = `respuesta es ${raizCuadrada} cm`;
        }
        else if(ladoTriangulo1 < divisionBase && ladoTriangulo1 === ladoTriangulo2){
            const resultadoFormula = (ladoTriangulo1 ** 2) - (divisionBase ** 2);
            const raizCuadrada = Math.sqrt(resultadoFormula);
            resultTrianguloIsosceles.innerText = `la base del triangulo no puede ser mas grande que la de sus lados 
            asi que posiblemente tengas un error`;
        }
        else  {
            resultTrianguloIsosceles.innerText = `Lo siento pero este triangulo no parece ser Isosceles, ya que sus lados no son iguales`;      
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
    resultso_square.innerText = `El perímetroes es: \n ${perimetro}`;     
    console.log(perimetro)
}

function calcularAreaCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //asi obtengo el valor del usuario desde javaScript
    const valueNumber = parseInt(value);
    
    const area = areaCuadrado(valueNumber);
    resultso_square.innerText = `El áre es: \n ${area}`; 
    console.log(area);

};

 function calcularPerimetroTriangulo () {
     const inputLado1 = document.getElementById("InpuTriangulo-lado1");
     const valueLado1 = inputLado1.value;
     const valueLado1Number = parseInt(valueLado1);
     const inputLado2 = document.getElementById("InpuTriangulo-lado2");
     const valueLado2 = inputLado2.value;
     const valueLado2Number = parseInt(valueLado2);
     const inputBase = document.getElementById("InpuTriangulo-base");
     const valueBase = inputBase.value;
     const valueBaseNumber = parseInt(valueBase);

     const perimetro = perimetroTriangulo(valueLado1Number,valueLado2Number,valueBaseNumber);
     resultPerimetro_triangle.innerText = `El perimetro es ${perimetro}`
 };

 function calcularAreaTriangulo () {
     const inputAltura = document.getElementById("InpuTriangulo-altura");
     const valueAltura = inputAltura.value;
     const valueAlturaNumber = parseInt(valueAltura);
     const inputBase = document.getElementById("InpuTriangulo-base2");
     const valueBase = inputBase.value;
     const valueBaseNumber = parseInt(valueBase);

     const area = areaTriangulo(valueBaseNumber, valueAlturaNumber);
     resultArea_triangle.innerText = `El area es: ${area}`
 };

 function calcularDiametroCirculo() {
     const inputRadio = document.getElementById("InputCirculo-radio");
     const valueRadio = inputRadio.value;
     const valueRadioNumber = parseInt(valueRadio);

     const diametro = diametroCirculo(valueRadioNumber);
     resultsCicle.innerText = `El diametro es ${diametro} cm`;
 };

 function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputCirculo-radio");
    const valueRadio = inputRadio.value;
    const valueRadioNumber = parseInt(valueRadio);

    const diametro = diametroCirculo(valueRadioNumber);
    const perimetro = diametro * PI;
    resultsCicle.innerText = `El perimetro es ${perimetro} cm`;

 };

 function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputCirculo-radio");
    const valueRadio = inputRadio.value;
    const valueRadioNumber = parseInt(valueRadio);

    const area = areaCirculo(valueRadioNumber);
    resultsCicle.innerText = `El area es ${area} cm^2`;

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



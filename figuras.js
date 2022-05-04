
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
}
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

// Codigo del circulo
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



// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //asi obtengo el valor del usuario desde javaScript
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //asi obtengo el valor del usuario desde javaScript
    
    const area = areaCuadrado(value);
    alert(area);
};



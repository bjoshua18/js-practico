// Cuadrado
console.group('Cuadrado');

const ladoCuadrado = 5;

const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado * lado;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);
console.log(`El perímetro del cuadrado mide: ${perimetroCuadrado(ladoCuadrado)}cm`);
console.log(`El área del cuadrado mide: ${areaCuadrado(ladoCuadrado)}cm²`);

console.groupEnd();

// Triángulo
console.group('Triángulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);
console.log(`El perímetro del triángulo es: ${perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)}cm`);
console.log(`El área del triángulo es: ${areaTriangulo(baseTriangulo, alturaTriangulo)}cm²`)

console.groupEnd();

// Círculo
console.group('Círculo');

const radioCirculo = 4;

const diametroCirculo = radio => radio * 2;
const perimetroCirculo = radio => diametroCirculo(radio) * Math.PI;
const areaCirculo = radio => radio * radio * Math.PI;

console.log(`El radio del círculo es: ${radioCirculo}cm`);
console.log(`El diámetro del círculo es: ${diametroCirculo(radioCirculo)}cm`);
console.log(`El perímetro del círculo es: ${perimetroCirculo(radioCirculo)}cm`);
console.log(`El área del círculo es: ${areaCirculo(radioCirculo)}cm²`);

console.groupEnd();

// Cuadrado
const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado * lado;

// Triángulo
const alturaTriangulo = (area, base) => (area * 2) / base;
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (lado1, lado2, base) => {
  const s = (lado1 + lado2 + base) / 2;
  return Math.sqrt(s * (s - lado1) * (s - lado2) * (s - base));
}
const alturaTrianguloIsoscele = (lado1, lado2, base) => {
  if (lado1 !== lado2) return false;
  return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4));
}

// Círculo
const diametroCirculo = radio => radio * 2;
const perimetroCirculo = radio => diametroCirculo(radio) * Math.PI;
const areaCirculo = radio => radio * radio * Math.PI;

// Funciones onclick
const calcularPerimetroCuadrado = () => printMessageResult(
        'perimetroCuadrado',
        `El perímetro es ${perimetroCuadrado(getLadoCuadrado())}`
);

const calcularAreaCuadrado = () => printMessageResult(
        'areaCuadrado',
        `El área es ${areaCuadrado(getLadoCuadrado())}`
);

const calcularAlturaTriangulo = () => {
  const lados = getLadosTriangulo();
  printMessageResult(
          'alturaTriangulo',
          `La altura es ${alturaTriangulo(areaTriangulo(...lados), lados[2])}`
  )
}

const calcularPerimetroTriangulo = () => printMessageResult(
        'perimetroTriangulo',
        `El perímetro es ${perimetroTriangulo(...getLadosTriangulo())}`
);

const calcularAreaTriangulo = () => printMessageResult(
          'areaTriangulo',
          `El área es ${areaTriangulo(...getLadosTriangulo())}`
);

const calcularPerimetroCirculo = () => printMessageResult(
        'perimetroCirculo',
        `El perímetro es ${perimetroCirculo(getRadio())}`
);

const calcularAreaCirculo = () => printMessageResult(
        'areaCirculo',
        `El área es ${areaCirculo(getRadio())}`
);

// Funciones auxiliares

function getLadoCuadrado() {
  return +(document.getElementById('InputCuadrado').value);
}

function getLadosTriangulo() {
  const lados = document.getElementById('InputTriangulo').value.split(',');
  return [+lados[0], +lados[1], +lados[2]];
}

function getRadio() {
  return +(document.getElementById('InputCirculo').value);
}

function printMessageResult(id, message) {
  document.getElementById(id).innerText = message;
}

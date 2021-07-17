// Funciones
const isEven = list => list.length % 2 === 0
const getArithmeticMean = list => list.reduce((acc = 0, value) => acc + value) / list.length
const getArithmeticMedian = list => {
  list = list.sort((a, b) => a - b)
  const medianPosition = Math.floor((list.length - 1) / 2)
  return isEven(list)
          ? getArithmeticMean([list[medianPosition], list[medianPosition + 1]])
          : list[medianPosition]
}
const getTopRate = (list, rate) => {
  const start = Math.floor(list.length * (100 - rate) / 100)
  const count = list.length - start
  const top = list.splice(start, count)
  return getArithmeticMedian(top)
}
const salarios = colombia.map(persona => persona.salary).sort((a, b) => a - b)

console.log(getArithmeticMedian(salarios))
console.log(getTopRate(salarios, 10))

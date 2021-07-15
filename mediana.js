const isEven = list => list.length % 2 === 0
const getArithmeticMean = list => list.reduce((acc = 0, value) => acc + value) / list.length
const getArithmeticMedian = list => {
  list = list.sort((a, b) => a - b)
  const medianPosition = Math.floor((list.length - 1) / 2)
  return isEven(list)
          ? getArithmeticMean([list[medianPosition], list[medianPosition + 1]])
          : list[medianPosition]
}

const list = [
  400000000,
  100,
  500,
  200,
]

console.log(getArithmeticMedian(list))

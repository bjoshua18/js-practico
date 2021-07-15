const getArithmeticMode = list => list.sort(
  (a, b) => list.filter(i => i === a).length - list.filter(i => i === b).length
).pop()

const list = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1]

console.log(getArithmeticMode(list));

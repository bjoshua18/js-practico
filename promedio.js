const getArithmeticMean = list => list.reduce((acc = 0, value) => acc + value) / list.length

const list = [100, 200, 300, 500]

const avgList = getArithmeticMean(list)

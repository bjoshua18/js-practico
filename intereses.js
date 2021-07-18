function onClickHandler() {
  const {initialAmount, annualInterest, years, interestType} = getInputs()
  renderTable()
  renderData(initialAmount, annualInterest, years, interestType)
}

function resetHandler() {
  document.getElementById('table-container').innerHTML = ''
}

// Helpers
function calculateInterestPerMonth(amount, monthRate) {
  return amount * monthRate / 100
}

function renderTable() {
  if (document.getElementById('table')) return
  const div = document.createElement('div')
  div.id = 'table-container'
  div.innerHTML = `
    <table id="table">
      <thead>
        <tr>
          <th>Month Nº</th>
          <th>Amount</th>
          <th>Interest</th>
          <th>Total</th>
        </tr>
        <tbody id="data"></tbody>
      </thead>
    </table>
  `
  document.querySelector('.container').appendChild(div)
}

function renderData(initialAmount, annualInterest, years, interestType) {
  const dataContainer = document.getElementById('data')
  let rows = ''
  let lastAmount = initialAmount
  const monthRate = annualInterest / 12
  const months = years * 12
  let interest;
  for (let i = 0; i < months; i++) {
    interest = interestType === 'simple'
            ? interest || calculateInterestPerMonth(initialAmount, monthRate)
            : calculateInterestPerMonth(lastAmount, monthRate)
    const total = lastAmount + interest
    rows += renderRow(i + 1, lastAmount, interest, total)
    lastAmount = total
  }
  dataContainer.innerHTML = rows
}

function renderRow(month, lastAmount, interest, total) {
  return `
    <tr>
      <td>${month}</td>
      <td>${roundNumber(lastAmount, 2)}</td>
      <td>${roundNumber(interest, 2)}</td>
      <td>${roundNumber(total, 2)}</td>
    </tr>
  `
}

function getInputs() {
  return {
    initialAmount: +document.getElementById('initial-amount').value,
    annualInterest: +document.getElementById('annual-interest').value,
    years: +document.getElementById('years').value,
    interestType: document.getElementById('interest-type').value
  }
}

function roundNumber(num, digits) {
  const fraction = 10 * digits
  return Math.round((num + Number.EPSILON) * fraction) / fraction
}

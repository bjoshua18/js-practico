const coupons = {
  youtube: 10,
  facebook: 5,
  instagram: 15
}

const calculatePriceWithDiscount = (price, discountRate) => price * (1 - discountRate/100)
const calculatePriceWithCoupon = (price, coupon) => {
  return !coupons[coupon]
    ? 'El cupón no es válido'
    : calculatePriceWithDiscount(price, coupons[coupon])
}
const printMessageResult = msg => document.getElementById('result').innerText = msg

const onClickHandler = () => {
  const price = document.getElementById('InputPrice').value
  const discountValue = document.getElementById('InputDiscount').value
  const priceWithDiscount =
    isNaN(+discountValue)
      ? calculatePriceWithCoupon(price, discountValue)
      : calculatePriceWithDiscount(price, +discountValue)
  printMessageResult(`Resultado: ${priceWithDiscount}`)
}

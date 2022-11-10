const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency'
})

const currencyFormat = (amount: number) => {
  return CURRENCY_FORMATTER.format(amount)
}

export default currencyFormat

const convert = (state = { value: 0 }, action) => {
    console.log(action);
    switch (action.type) {
        case "BUY":
            return {
                ...state,
                value: action.value * action.currency.buy,
                currency: 'Rp'

            }
        case "SELL":
            return {
                ...state,
                value: action.value / action.currency.sell,
                currency: action.currency.currency
            }
        default:
            return state
    }
}

export default convert
const buy = (payload) => {
    return {
        type: "BUY",
        value: payload.money,
        currency: payload.currency,
    }
}

const sell = (payload) => {
    return {
        type: "SELL",
        value: payload.money,
        currency: payload.currency,
    }
}


export default {
    buy,
    sell
}
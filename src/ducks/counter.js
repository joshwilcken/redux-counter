// change this to true to see test results on the black diamond section.
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECRMENT'

const initialState = {
    currentValue: 0
}
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { currentValue: state.currentValue + action.amount}
        case DECREMENT: 
            return { currentValue: state.currentValue - action.amount}
        default:
            return state
    }
}
export function increment(amount){
    return {
        amount,
        type: INCREMENT
    }
}
export function decrement(amount){
    return {
        amount,
        type: DECREMENT
    }
}



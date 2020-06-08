const initialState = {
    counter1: 10
}

const reducer = (state1 = initialState, action) => {

    switch(action.type) {
        case 'INCREMENT': return {counter1: state1.counter1 + 1};
        case 'DECREMENT': return {counter1: state1.counter1 - 1};
        default: return state1;
    }

}

export default reducer;
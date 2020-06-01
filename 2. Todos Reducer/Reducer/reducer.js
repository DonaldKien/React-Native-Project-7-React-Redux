const initialState = {
    todos: []
}
let number = 0;

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = { id: number++, name: action.text2, completed:false };
            const allItem = [...state.todos, newItem];
            return {todos: allItem};
    
        case 'DELETE_ITEM':
            const deleteItem = [...state.todos.slice(0, action.index1), ...state.todos.slice(action.index1 + 1)];
            return {todos: deleteItem}

        case 'DONE_ITEM':
            // Compulsory use val
            const doneItem = [...state.todos.map( arrObj => {
                if (arrObj.id == action.doneId) {
                    if (arrObj.completed == false) {
                        return {...arrObj, completed:true}
                    } else {
                        return {...arrObj, completed:false}
                    }
                } else {
                    return arrObj
                }
            })]
            return {todos: doneItem};
        default:
            return state;
    }
}

export default reducer;
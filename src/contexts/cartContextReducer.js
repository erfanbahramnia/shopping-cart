// for calculate the quantity of products
const quantityCounter = (state) => {
    const allProducts = state.selectedItems.reduce((acc, cur) => acc + cur.quantity ,0)
    return allProducts;
};
// for calculate the total price
const totalPriceCounter = (state) => {
    const totalPrice = state.selectedItems.reduce((acc, cur) => acc + (cur.quantity * cur.price) ,0)
    return totalPrice;
};

// reducer for useReducer
const reducer = (state, action) => {
    switch(action.type) {
        case "add":
            if (!state.selectedItems.find(product => product.id === action.data.id)) {
                action.data.quantity = 1;
                state.selectedItems.push(action.data);
                return {
                    ...state,
                    itemCounter: quantityCounter(state),
                    total: totalPriceCounter(state),
                };
            } else {
                return {
                    ...state,
                    itemCounter: quantityCounter(state),
                    total: totalPriceCounter(state),
                };
            };
        case "remove":
            const newState = state.selectedItems.filter(product => product.id !== action.data.id);
            state.selectedItems = [...newState];
            return {
                ...state,
                itemCounter: quantityCounter(state),
                total: totalPriceCounter(state),
            };
        case "increase":
            const indexOfProduct = state.selectedItems.findIndex(product => product.id === action.data.id);
            state.selectedItems[indexOfProduct].quantity++;
            return {
                ...state,
                itemCounter: quantityCounter(state),
                total: totalPriceCounter(state),
            };
        case "decrease":
            const indexOfitem = state.selectedItems.findIndex(product => product.id === action.data.id);
            state.selectedItems[indexOfitem].quantity--;
            return {
                ...state,
                itemCounter: quantityCounter(state),
                total: totalPriceCounter(state),
            };
        case "clear":
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: false,
            };
        case "checkout":
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: true,
            }
        default:
            return state;
    };
};

export { reducer };
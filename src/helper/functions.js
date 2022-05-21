const nameShorter = fullname => {
    const splitedName = fullname.split(" ");
    const shortenName = `${splitedName[0]} ${splitedName[1]}`;
    return shortenName;
};

const isInCart = (state, id) => {
    if (state.selectedItems.find(product => product.id === id)) {
        return true;
    } else {
        return false;
    };
};

const amountOfProduct = (state, id) => {
    const item = state.selectedItems.find(product => product.id === id);
    return item.quantity;
};

export {nameShorter, isInCart, amountOfProduct};
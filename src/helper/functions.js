const nameShorter = fullname => {
    const splitedName = fullname.split(" ");
    const shortenName = `${splitedName[0]} ${splitedName[1]}`;
    return shortenName;
}

export {nameShorter}
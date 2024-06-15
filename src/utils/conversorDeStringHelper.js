module.exports = (objetoParams) => {
    for (let propriedade in objetoParams) {
        if (/Id|id/.test(propriedade)) {
            objetoParams[propriedade] = parseInt(objetoParams[propriedade]);
        }
    }
    return objetoParams;
}
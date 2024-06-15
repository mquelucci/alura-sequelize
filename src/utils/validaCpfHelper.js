module.exports = (cpf) => {
    // Remova caracteres especiais
    cpf = cpf.replace(/[^\d]/g, '');

    // Verifique se o CPF tem o tamanho correto
    if (cpf.length !== 11) {
        return false;
    }
    

    // Calcule o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }

    let resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) {
        resto = 0;
    }

    if (resto != parseInt(cpf[9])) {
        return false;
    }

    // Calcule o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) {
        resto = 0;
    }

    if (resto != parseInt(cpf[10])) {
        return false;
    }

    return true;
}
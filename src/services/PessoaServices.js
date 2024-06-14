const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa');
    }

    async pegaMatriculasPorEstudante(estudanteId) {
        const estudante = await super.pegaUmRegistroPorId(estudanteId);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }

    async pegaPessoasEscopoTodos() {
        const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
        return listaPessoas;
    }
}

module.exports = PessoaServices;
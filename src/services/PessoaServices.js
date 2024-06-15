const dataSource = require('../database/models');
const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa');
        this.matriculaServices = new Services('Matricula');
    }

    async pegaMatriculasAtivasPorEstudante(estudanteId) {
        const estudante = await super.pegaUmRegistroPorId(estudanteId);
        const listaMatriculas = await estudante.getAulasMatriculadas();
        return listaMatriculas;
    }

    async pegaTodasAsMatriculasPorEstudante(estudanteId) {
        const estudante = await super.pegaUmRegistroPorId(estudanteId);
        const listaMatriculas = await estudante.getTodasAsMatriculas();
        return listaMatriculas;
    }

    async pegaPessoasEscopoTodos() {
        const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
        return listaPessoas;
    }

    async cancelaPessoaEMatriculas (estudanteId) {
        return dataSource.sequelize.transaction(async (transacao) => {
            await super.atualizaRegistro({ ativo: false }, { id: estudanteId }, transacao);
            await this.matriculaServices.atualizaRegistro({ status: 'cancelado' }, { estudante_id: estudanteId }, transacao);
        });
    }
}

module.exports = PessoaServices;
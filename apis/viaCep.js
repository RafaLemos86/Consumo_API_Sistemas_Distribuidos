// Importação da biblioteca Axios para fazer requisições HTTP
const axios = require('axios');

// Função assíncrona que obtém informações a partir de um CEP
async function getCEP(cep) {
    try {
        // URL base da API ViaCEP
        const viaCEPBaseUrl = 'https://viacep.com.br/ws';

        // Constrói a URL completa com o CEP fornecido para a API ViaCEP
        const viaCEPUrl = `${viaCEPBaseUrl}/${cep}/json`;

        // faz uma solicitação GET para a API ViaCEP
        const viaCEPResponse = await axios.get(viaCEPUrl);

        // verifica se a resposta da ViaCEP foi bem-sucedida
        if (viaCEPResponse.status !== 200) {
            throw new Error('Erro ao buscar o CEP');
        } else {
            // Retorna um objeto com um status de sucesso e os dados do CEP
            return { status: true, data: viaCEPResponse.data }
        }
    } catch (error) {
        // Em caso de erro, imprime o erro no console e retorna um objeto indicando um status de falha
        console.log(error)
        return { status: false }
    }

}

// Exporta a função getCEP para uso em outros módulos
module.exports = getCEP;

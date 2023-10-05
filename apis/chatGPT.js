// Importação da biblioteca Axios para fazer requisições HTTP
const axios = require('axios');

// Definição da função assíncrona que gera texto aleatório com base em um JSON de entrada
async function gerarTextoAleatorio(json) {
    try {

        // Converte o JSON de entrada em uma string
        const jsonParaPrompt = JSON.stringify(json);

        // Constrói um prompt que descreve o que deve ser gerado com base nos dados do JSON
        const prompt = `faça um ou dois parágrafos informando sobre o tempo com esses dados: ${jsonParaPrompt}`;

        // Faz uma chamada à API do OpenAI usando Axios
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'user', content: prompt }
            ]
        }, {
            headers: {
                Authorization: 'Bearer SUA-CHAVE-API-OPENAI',
                'Content-Type': 'application/json'
            }
        });

        // Extrai o conteúdo da resposta da API (texto gerado pelo modelo)
        const content = response.data.choices[0].message.content;

        // Remove as aspas no início e no fim, se existirem
        return content.trim().replace(/^"|"$/g, '');
    } catch (error) {
        // Em caso de erro, imprime uma mensagem de erro e lança a exceção novamente
        console.error('Erro ao gerar texto aleatório:', error);
        throw error;
    }
}

// Exporta a função 'gerarTextoAleatorio' para uso em outros módulos
module.exports = gerarTextoAleatorio

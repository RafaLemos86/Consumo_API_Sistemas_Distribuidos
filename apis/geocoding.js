// Importação das bibliotecas e funções necessárias
const axios = require('axios');
const getClima = require("./getClima")

// Chave da API do Google Maps Geocoding
const api_key = "SUA CHAVE API MAPS GEOCODING";

// Função assíncrona que obtém as coordenadas (latitude e longitude) com base em um CEP
async function getLatLon(cep) {
    try {

        // URL da API Geocoding do Google com a chave de API
        const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${api_key}`;

        // Preparação dos dados para a requisição (CEP)
        const endereco = {
            address: cep
        };

        // Faz uma requisição GET para a API Geocoding do Google com os parâmetros de endereço
        const geocodingResponse = await axios.get(url, { params: endereco })

        // Verifica se a resposta da API foi bem-sucedida (status 200)
        if (geocodingResponse.status !== 200) {
            throw new Error('Erro ao buscar as coordenadas');

        } else {
            // Extrai as coordenadas (longitude e latitude) da resposta
            const long = parseInt(geocodingResponse.data.results[0].geometry.viewport.northeast.lng.toFixed(2))
            const lat = parseInt(geocodingResponse.data.results[0].geometry.viewport.northeast.lat.toFixed(2))

            // Chama a função getClima para obter dados de clima com base nas coordenadas
            const climaData = await getClima(lat, long)

            // Retorna os dados de clima
            return climaData

        }


    } catch (error) {
        // Em caso de erro, imprime o erro no console e retorna um objeto indicando um status de falha
        console.log(error)
        return { status: false }
    }

}

// Exporta a função getLatLon para uso em outros módulos
module.exports = getLatLon

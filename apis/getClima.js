// Importação da biblioteca Axios para fazer requisições HTTP
const axios = require("axios")

// Chave da API OpenWeatherMap
const API_KEY = "SUA CHAVE DA API OpenWeatherMap"

// Função assíncrona que obtém dados de clima com base na latitude e longitude
async function getClima(lat, lon) {

    try {
        // Faz uma requisição GET para a API OpenWeatherMap com as coordenadas fornecidas
        var clima = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}.08&lon=${lon}.15&exclude=hourly,daily&appid=${API_KEY}`)

        // Verifica se a resposta da API inclui alertas climáticos
        if (clima.data.alerts) {
            // Retorna um objeto com os dados atuais de clima e os alertas
            return { data: clima.data.current, alert: clima.data.alerts }
        } else {
            // Retorna um objeto com apenas os dados atuais de clima e sem alertas
            return { data: clima.data.current, alert: false }
        }
    } catch (error) {
        // Em caso de erro, imprime o erro no console
        console.log(error)
        // Retorna um objeto indicando um status de falha
        return { status: false };
    }
}

// Exporta a função getClima para uso em outros módulos
module.exports = getClima

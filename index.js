// Importação das bibliotecas
const express = require('express');
const getCEP = require("./apis/viaCep")
const getLatLon = require("./apis/geocoding")
const gerarTextoAleatorio = require("./apis/chatGPT")
const app = express();

// Importação do body-parser para lidar com dados do formulário
const bodyParser = require('body-parser');

// Porta em que o servidor irá ouvir
const port = 3000;

// Configurar o mecanismo de visualização EJS
app.set('view engine', 'ejs');


// Configurar o body-parser para análise de formulários
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


// Rota para servir o arquivo HTML na raiz
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para lidar com a solicitação do usuário para buscar o CEP
app.post('/result', async (req, res) => {
    try {
        // Obtenha o CEP da consulta do usuário
        var cep = req.body.cep;
        cep = cep.replace(/-/g, ''); // Remove todos os hífens da string

        // Obtém informações do CEP usando a função getCEP
        cepData = await getCEP(cep)

        if (cepData.status) {
            // Obtém dados de clima usando a função getLatLon com base nas coordenadas do CEP
            const clima = await getLatLon(cepData.data.cep)

            // Combina os dados de clima e CEP em um único objeto e gera um texto aleatório
            var superData = { ...clima, ...cepData.data };
            texto = await gerarTextoAleatorio(superData);

            // Renderiza a página de resultados com os dados
            res.render('result', {
                cep: cepData.data, clima: clima, texto: texto
            })
        }

    } catch (error) {
        // Em caso de erro, retorna uma resposta com status 500 (erro interno do servidor)
        res.status(500).send('Erro ao buscar dados');
    }
});




// Inicia o servidor e o faz ouvir na porta especificada
app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});

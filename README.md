# Trabalho de Sistemas Distribuídos

Este repositório contém o código e a documentação de um trabalho da disciplina de Sistemas Distribuídos. O objetivo deste projeto era consumir e tratar os dados de várias APIs diferentes para criar uma aplicação útil.

## APIs Utilizadas

As APIs escolhidas para este projeto foram:

1. **ViaCep**: Utilizada para obter informações detalhadas com base em um CEP fornecido pelo usuário.

2. **OpenWeatherMap**: Utilizada para obter informações sobre o clima de uma determinada região com base em coordenadas geográficas.

3. **Geocoding**: Utilizada para converter um endereço em coordenadas geográficas (latitude e longitude).

4. **OpenAI**: Utilizada para gerar texto com detalhes adicionais com base nos dados obtidos das outras APIs.

## Funcionalidade da Aplicação

A aplicação construída neste projeto permite ao usuário inserir um CEP de sua escolha. Com base no CEP fornecido, a aplicação faz o seguinte:

1. Consulta a API ViaCep para obter informações detalhadas sobre o endereço associado ao CEP.

2. Utiliza a API Geocoding para converter o endereço em coordenadas geográficas (latitude e longitude).

3. Consulta a API OpenWeatherMap para obter informações sobre o clima da região com base nas coordenadas obtidas.

4. Utiliza a API OpenAI para gerar um texto com mais detalhes sobre a região e as condições climáticas.

O resultado final é a apresentação do tempo atual na região correspondente ao CEP fornecido, juntamente com um texto informativo gerado pela OpenAI.

## Como Usar

Para utilizar a aplicação, siga estas etapas:

1. Clone este repositório para o seu ambiente local.

2. Abra o projeto em seu ambiente de desenvolvimento.

3. Certifique-se de que todas as dependências necessárias estejam instaladas. Você pode instalá-las executando o seguinte comando:

   ```shell
   npm install
   ```
4. As chaves das APIs foram removidas por motivos de segurança. Você precisará adicionar suas próprias chaves de API para as APIs ViaCep, OpenWeatherMap, Geocoding e OpenAI. Certifique-se de seguir as instruções de cada serviço para obter suas chaves de API.
   
5. Após configurar as chaves de API, você pode executar a aplicação digitando o seguinte comando:
     ```shell
   node index.js
   ```
6. A aplicação estará disponível localmente na porta padrão 3000 (http://localhost:3000/). Você pode acessar a aplicação em seu navegador da web.

7. Em breve, esta aplicação será disponibilizada na Web, proporcionando uma experiência ainda mais acessível a todos.

## Exemplo de uso

**Tela 1**

![image](https://github.com/RafaLemos86/Consumo_API_Sistemas_Distribuidos/assets/107224769/0096dd02-5ae2-4bfc-b3d3-e32b7b815200)

**Tela 2**

![image](https://github.com/RafaLemos86/Consumo_API_Sistemas_Distribuidos/assets/107224769/bcc64ee0-b903-49d8-9467-dedcbddefd99)




## Autor
Rafael Lemos


   

# Payment - API

### Geral

Esta api foi criada para o teste prático da WillBank. Ele possui 4 rotas que serão explicadas abaixo. 

## Como rodar a API? 

Para rodar a api será necessário as seguintes tecnologias instaladas na sua máquina: 
* Node.Js 
* Docker 
* Postman

#### POSTGRES COM O DOCKER
Para rodar o banco de dados, você precisará ter uma imagem Postgres no Docker. Para isso rode o seguinte comando: 

* _docker run -p 5432:5432 -e POSTGRES_PASSWORD=1234 postgres_

#### INSTALANDO DEPENDENCIAS 
Para intalar as dependências do projeto, acesse a pasta do projeto e rode um dos comandos: 

* _yarn_ 
* _npm install_

#### RODANDO A APLICAÇÃO
##### ENV
Crie um arquivo na raiz do projeto chamado .env e defina as seguintes variáveis: 

PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=UbOF1yyMrBd7UEAO7zZ6Qu8rTGgInQhM
DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=lucid
PG_PASSWORD=1234
PG_DB_NAME=lucid
URL=https://run.mocky.io/v3/ba9815d4-bb7e-440e-b2b2-b1bd832d4581


Para roadr a aplicação, acesse a pasta do projeto via terminal e rode o comando:

* _node ace serve --watch_

## Rotas 
A aplicação tem 4 rotas. Você precisa em primeiro lugar criar um novo cliente utilizando um metodo POST. Na mesma rota, porém com o GET e o ID do cliente criado, você poderá visualizar os dados.
Agora, com o id do cliente, você poderá realizar um pagamento. Na última rota, será possivel ver todos pagamentos realizados por um client




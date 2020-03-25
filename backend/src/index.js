const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors({
	//origin: "http://www.sabrinaveras.com"
}));
app.use(express.json());
app.use(routes);

const port = 3333;

app.listen(port);


/*
* nodemon - npm install nodemon -D : devDependencies
*
* package.json - start: nodemon index.js command: npm start
*
* */


/*
*   Rota / Recurso
*
* */


/*
*
* Método HTTP
*
* GET: Buscar/Listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*
* */


/*
*
* Tipos de parâmetros
*
* QUERY PARAMS: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
*   EX: /users?name=Sabrina&idade=24
* ROUTE PARAMS: Parâmetros utilizados para identificar recursos
*   EX: /users/1
* REQUEST BODY: Corpo da requisição, utilizados para criar ou alterar recursos
* */


/*
* SQLite
*
* Driver: SELECT * FROM users
* Query Builder: table("users").select("*).where()
*
* npm: install um pacote
* npx: exercutar um pacote
*
* npm install knex
* npm install sqlite3
* npx knex init
*
*
* executar banco de dados: npx knex migrate:latest
* */


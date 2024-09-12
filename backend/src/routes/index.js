import express from 'express'
import livros from './livrosRoutes.js'
import ocorrencia from './ocorrenciaRoutes.js';
import hobbies from '../models/Hobbies.js';

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Biblioteca de Hobbies"));
    app.use(express.json(), livros, ocorrencia, hobbies);
}

export default routes;
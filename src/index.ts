import express, { Request, Response, NextFunction, json } from 'express';

const app = express(); // A aplicação está instanciada

/*Configuração da aplicação(app). Se na aplicação chegar um get/status ele vai me retornar
status(200) e um json. */
app.get('/status', (req, res, next) => {
    res.status(200).send({ foo: 'Nice bro'});
});

//Todo o HTTP que chegar na porta 3000 vai ser resolvida pela nossa aplicação.
app.listen(3000, () => {
    console.log('Aplicação rodando 100%');
});
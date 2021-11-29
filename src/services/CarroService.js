const db = require('../db');
module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitato) => {
            db.query('SELECT * FROM carros', (error, results) => {
                if(error) {rejeitato(error); return;}
                aceito(results);
            });
        })
    }
}
const Sequelize = require('sequelize');


const sequelize = new Sequelize('club', 'root', 'Vegeta1000', {
    host: 'localhost',
    dialect: 'mariadb'
        /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' , aqui va el dialecto que interpreta nuestro orm, 
                              para el caso creo que todos tienen instalado maria db o my sql */
});

//se creo una base llamada club y con el siguiente script, se geenro una tabla llamada datos con sus respectivos campos.
class Club extends Sequelize.Model {}
Club.init({
    nombre: Sequelize.STRING,
    ciudad: Sequelize.STRING,
    socios: Sequelize.INTEGER,
    titulos: Sequelize.INTEGER
}, { sequelize, modelName: 'datos' });

sequelize.sync()
    .then(() => Club.create({
        nombre: 'Ac Milan',
        ciudad: 'Milan',
        socios: '100000',
        titulos: '65',
    }))

.then(() => Club.create({

    nombre: 'Arsenal',
    ciudad: 'Londres',
    socios: '500000',
    titulos: '15',

}))

.then(() => Club.create({

    nombre: 'FC Porto',
    ciudad: 'Oporto',
    socios: '300000',
    titulos: '25'
}))

.then(() => Club.create({

    nombre: 'Juventus',
    ciudad: 'Turin',
    socios: '50000',
    titulos: '10'
}))

.then(() => Club.create({

    nombre: 'Atletico',
    ciudad: 'Madrid',
    socios: '30000',
    titulos: '5'

}))

.then(jane => {
    console.log(jane.toJSON());
});